'use strict';

var _ = require('../../../utils/_');
var t = require('tcomb-form');
var { maybe, subtype, struct, list, union, Num } = t;
var {
      StringMax,
      NonBlankString,
      Url,
      Phone,
      Email,
      BlankString
  } = require('./common');

var User = struct({
    username: NonBlankString(100)
});

var Screenshot = struct({
    smallImageId: Num,
    smallImageMarking: NonBlankString(200),
    largeImageId: Num,
    largeImageMarking: NonBlankString(200),
    description: maybe(StringMax(160))
});

var Resource = struct({
    name: NonBlankString(255),
    url: Url
});

var oneValidPhone = c => [c.securePhone, c.unsecurePhone].some(Phone.is);

var Contact = subtype(struct({
    name: NonBlankString(100),
    securePhone: maybe(union([BlankString, Phone])),
    unsecurePhone: maybe(union([BlankString, Phone])),
    email: Email,
    organization: maybe(StringMax(100)),
    type: NonBlankString(50)
}), oneValidPhone);

var securityMarking = NonBlankString(200),
    title = NonBlankString(60),
    type = NonBlankString(50),
    whatIsNew = maybe(StringMax(255)),
    categories = list(NonBlankString(50)),
    tags = list(StringMax(30)),
    intents = list(NonBlankString(127)),
    screenshots = list(Screenshot),
    contacts = list(Contact),
    docUrls = list(Resource),
    owners = list(User),
    atLeastOne = l => l.length > 0,
    atLeastOneLessThree = l =>l.length > 0 && l.length <= 3;

function getRequiredContactTypes (contactTypes) {
    return contactTypes.filter(t => t.required).map(t => t.name);
}

function hasRequiredContactTypes (requiredContactTypes, contacts) {
    if(!contacts)
        return false;
    return requiredContactTypes.every(type => contacts.some(contact => contact.type === type));
}

function ListingFull (requiredContactTypes) {
    return struct({
        securityMarking: securityMarking,
        title: title,
        type: type,
        categories: subtype(categories, atLeastOneLessThree),
        tags: subtype(tags, atLeastOne),
        description: NonBlankString(4000),
        descriptionShort: NonBlankString(100),
        versionName: NonBlankString(255),
        launchUrl: Url,
        usage_requirements: NonBlankString(1000),
        system_requirements: NonBlankString(1000),
        whatIsNew: whatIsNew,
        intents: intents,
        docUrls: docUrls,
        smallIconId: Num,
        smallIconMarking: securityMarking,
        largeIconId: Num,
        largeIconMarking: securityMarking,
        bannerIconId: Num,
        bannerIconMarking: securityMarking,
        featuredBannerIconId: Num,
        featuredBannerIconMarking: securityMarking,
        screenshots: subtype(screenshots, atLeastOne),
        contacts: subtype(contacts, hasRequiredContactTypes.bind(null, requiredContactTypes)),
        owners: subtype(owners, atLeastOne),
        agency: NonBlankString(255),
        height: maybe(Num),
        width: maybe(Num)
    });
}

var ListingDraft = struct({
    securityMarking: securityMarking,
    title: title,
    type: type,
    categories: subtype(categories, atLeastOneLessThree),
    tags: tags,
    description: maybe(StringMax(4000)),
    descriptionShort: maybe(StringMax(100)),
    versionName: maybe(StringMax(255)),
    launchUrl: maybe(union([Url, BlankString])),
    usage_requirements: maybe(StringMax(1000)),
    system_requirements: maybe(StringMax(1000)),
    whatIsNew: whatIsNew,
    intents: intents,
    docUrls: docUrls,
    contacts: contacts,
    owners: subtype(owners, atLeastOne),
    agency: maybe(StringMax(255)),
    height: maybe(Num),
    width: maybe(Num),
    screenshots: screenshots
});

/**
 * Images are a special case - the field to validate (the id) isn't actually the field in
 * the form, but rather is derived from it (the field in the form contains the file itself,
 * which can't really be validated).  Therefore what we need to do is let tcomb validate the
 * id, and then copy the validation errors from the id fields to the file fields so that
 * they display in the form.
 * @param validation The validation object.  This object will be modified so that it's image
 * file fields are brought into sync with it's image id fields
 */
function copyImageValidations(validation) {
    //attach validation errors from image ids to image fields
    var screenshotKeys = Object.keys(validation.errors).filter(
            k => k.indexOf('screenshots.') === 0
        ),
        screenshotErrors = _.zipObject(screenshotKeys.map(
            k => [k.replace(/Id$/,''), validation.errors[k]]
        ));

    Object.assign(validation.errors, {
        smallIcon: validation.errors.smallIconId,
        largeIcon: validation.errors.largeIconId,
        bannerIcon: validation.errors.bannerIconId,
        featuredBannerIcon: validation.errors.featuredBannerIconId
    }, screenshotErrors);
}

//the following is not neccesarry to correctly validate the listing,
//but for ensuring certain errors are reflected at the correct path
function validateContacts(validation, instance) {
    if(!instance.contacts){
        validation.errors['contacts'] = true;
        return;
    }
    instance.contacts.forEach(function (contact, index) {
        ['secure', 'unsecure'].forEach(function(suffix) {
            var path = `contacts.${index}.${suffix}Phone`;
            validation.errors[path] = validation.errors[path] || !oneValidPhone(contact);
        });
    });
}

// Link validation of image and marking so when entering a draft, if
// you enter either an image or a marking, you have to enter the other
function checkMarkings(validation, instance) {

    var icons = ['smallIcon', 'largeIcon', 'bannerIcon', 'featuredBannerIcon'];

    icons.map((i) => {

        var icon = i;
        var iconId = i + 'Id';
        var iconMarking = i + 'Marking';

        if (instance[icon] || instance[iconMarking]) {
            if (!((instance[icon] || instance[iconId]) && instance[iconMarking])) {
                validation.errors[icon] = true;
                validation.errors[iconId] = true;
                validation.errors[iconMarking] = true;
                validation.isValid = false;
            }
        }
    });
}

function validate (instance, options, type) {
    var validation = t.validate(instance, type),
        errors = {};

    if (validation.errors) {
        validation.errors.forEach(function (e) {
            if(e.path[0] === 'tags'){
                errors[e.path[0]] = true;
            }
            else{
                errors[e.path.join('.')] = true;
            }
        });
    }

    var firstError = validation.firstError() ? validation.firstError().path.join('.') : '';

    return {isValid: validation.isValid(), errors: errors, firstError: firstError};
}

function validateCustomFields (validation, instance) {
    for(var i = 0; i < instance.customFields.length; i++) {
        if(instance.customFields[i].required && (!instance.customFields[i].value || instance.customFields[i].value.trim() === "")) {
            var path = `customFields.${instance.customFields[i].customField}`;
            validation.errors[path] = true;
            validation.isValid = false;
        }
    }
}

function validateDraft (instance, options) {
    var validation = validate(instance, options, ListingDraft);

    validateContacts(validation, instance);

    copyImageValidations(validation);

    checkMarkings(validation, instance);

    validateCustomFields(validation, instance);

    return validation;
}

function validateFull (instance, options) {
    var requiredContactTypes = getRequiredContactTypes((options || {}).contactTypes || []);
    var validation = validate(instance, options, ListingFull(requiredContactTypes));

    validateContacts(validation, instance);
    validation.errors.contacts = !hasRequiredContactTypes(requiredContactTypes, instance.contacts);

    validateCustomFields(validation, instance);

    copyImageValidations(validation);

    return validation;
}

module.exports = {
    validateFull: validateFull,
    validateDraft: validateDraft
};
