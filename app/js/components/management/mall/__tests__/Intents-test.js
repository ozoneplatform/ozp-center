'use strict';

var expect = require('chai').expect;
var sinon = require('sinon');
var React = require('react');
var TestUtils = React.addons.TestUtils;

var $ = require('jquery');

/* global describe, it, beforeEach */
describe('Intents', function() {
    var Intents,
        ImageInput,
        Crud,
        ImageApi,
        imageSaveDeferred,
        onCreateSpy,
        onEditSpy;

    beforeEach(function() {
        var IntentsLoader = require(
            'inject?../../createEdit/form/ImageInput.jsx&../../shared/Crud.jsx&../../../webapi/Image' +
            '!../Intents.jsx');

        onCreateSpy = sinon.spy();
        onEditSpy = sinon.spy();

        ImageInput = React.createClass({
            render: sinon.spy(() => null)
        });
        Crud = React.createClass({
            render: sinon.spy(() => null),
            _onCreate: onCreateSpy,
            _onEdit: onEditSpy
        });

        imageSaveDeferred = $.Deferred();

        ImageApi = {
            ImageApi: {
                save: sinon.spy(function() {
                    return imageSaveDeferred.promise();
                })
            }
        };

        Intents = IntentsLoader({
            '../../createEdit/form/ImageInput.jsx': ImageInput,
            '../../shared/Crud.jsx': Crud,
            '../../../webapi/Image': ImageApi
        });
    });

    it('has a form descriptor that contains label, action, type, and iconInput', function() {

        var intentsCmp = TestUtils.renderIntoDocument(
            <Intents />
        );

        var form = intentsCmp.getForm();

        expect(form.fields.label).to.be.ok();
        expect(form.fields.action).to.be.ok();
        expect(form.fields.mediaType).to.be.ok();
        expect(form.fields.iconInput).to.be.ok();

        var iconInputClass = form.fields.iconInput.input(null, {});
        var iconInput = TestUtils.renderIntoDocument(React.createElement(iconInputClass));

        var imageInput = TestUtils.findRenderedComponentWithType(iconInput, ImageInput);

        expect(imageInput.props.imageUri).to.not.be.ok();
        expect(imageInput.props.value).to.not.be.ok();
        expect(imageInput.props.serverError).to.not.be.ok();
    });

    it('passes the imageUri from its state or the selected record', function() {
        var intentsCmp = TestUtils.renderIntoDocument(
            <Intents />
        );

        var uri = 'https://localhost/asdf';

        intentsCmp.setState({imageUri: uri});

        var form = intentsCmp.getForm();

        var iconInputClass = form.fields.iconInput.input(null, {});
        var iconInput = TestUtils.renderIntoDocument(React.createElement(iconInputClass));
        var imageInput = TestUtils.findRenderedComponentWithType(iconInput, ImageInput);

        expect(imageInput.props.imageUri).to.equal(uri);

        intentsCmp = TestUtils.renderIntoDocument(
            <Intents />
        );

        form = intentsCmp.getForm({icon: uri});

        iconInputClass = form.fields.iconInput.input(null, {});
        iconInput = TestUtils.renderIntoDocument(React.createElement(iconInputClass));
        imageInput = TestUtils.findRenderedComponentWithType(iconInput, ImageInput);

        expect(imageInput.props.imageUri).to.equal(uri);
    });

    it('passes the image id value from the selected record', function() {
        var intentsCmp = TestUtils.renderIntoDocument(
            <Intents />
        );

        var id = '1234-5678';

        var form = intentsCmp.getForm({iconId: id});

        var iconInputClass = form.fields.iconInput.input(null, {});
        var iconInput = TestUtils.renderIntoDocument(React.createElement(iconInputClass));
        var imageInput = TestUtils.findRenderedComponentWithType(iconInput, ImageInput);

        expect(imageInput.props.value).to.equal(id);
    });

    it('passes the imageError from its state', function() {
        var intentsCmp = TestUtils.renderIntoDocument(
            <Intents />
        );

        var error = 'Error uploading image';

        intentsCmp.setState({imageError: error});

        var form = intentsCmp.getForm();

        var iconInputClass = form.fields.iconInput.input(null, {});
        var iconInput = TestUtils.renderIntoDocument(React.createElement(iconInputClass));
        var imageInput = TestUtils.findRenderedComponentWithType(iconInput, ImageInput);

        expect(imageInput.props.serverError).to.equal(error);
    });

    it('calls opts.onChange when the icon input\'s onChange method is called', function() {
        var intentsCmp = TestUtils.renderIntoDocument(
            <Intents />
        );

        var onChange = sinon.spy();
        var newValue = 'test value';

        var form = intentsCmp.getForm();
        var iconInputClass = form.fields.iconInput.input(null, {onChange: onChange});
        var iconInput = TestUtils.renderIntoDocument(React.createElement(iconInputClass));

        iconInput.onChange(newValue);

        expect(onChange.calledOnce).to.be.true();
        expect(iconInput.state.value).to.equal(newValue);
    });

    //TODO:Jquery 3 breaks deferred for the way we use it. Figure out another way to use it.
    it('saves images and then calls _onCreate when an intent is created', function() {
        var intentsCmp = TestUtils.renderIntoDocument(
            <Intents />
        );

        var crud = TestUtils.findRenderedComponentWithType(intentsCmp, Crud);

        var iconData = [1,2,3,4]; //Phantomjs doesn't support the standard way to create blobs,
                                  //so just use some fake data
        var iconId = 1;
        var intentData = {
            action: 'view',
            mediaType: 'text/plain',
            iconInput: iconData,
            label: 'test'
        };

        crud.props.onCreate(intentData);

        expect(ImageApi.ImageApi.save.calledOnce).to.be.true();
        expect(ImageApi.ImageApi.save.calledWith(iconData)).to.be.true();

        // imageSaveDeferred.resolve({id: iconId});
        //
        // expect(onCreateSpy.calledOnce).to.be.true();
        // expect(onCreateSpy.calledWithMatch({
        //     action: intentData.action,
        //     mediaType: intentData.mediaType,
        //     iconInput: undefined,
        //     iconId: iconId,
        //     label: intentData.label
        // })).to.be.true();
    });

    //TODO:Jquery 3 breaks deferred for the way we use it. Figure out another way to use it.
    it('saves images and then calls _onEdit when an intent is edited', function() {
        var intentsCmp = TestUtils.renderIntoDocument(
            <Intents />
        );

        var crud = TestUtils.findRenderedComponentWithType(intentsCmp, Crud);

        var iconData = [1,2,3,4]; //Phantomjs doesn't support the standard way to create blobs,
                                  //so just use some fake data
        var iconId = 1;
        var intentData = {
            action: 'view',
            dataType: 'text/plain',
            iconInput: iconData
        };

        crud.props.onEdit(intentData);

        expect(ImageApi.ImageApi.save.calledOnce).to.be.true();
        expect(ImageApi.ImageApi.save.calledWith(iconData)).to.be.true();

        // imageSaveDeferred.resolve({id: iconId});
        //
        // expect(onEditSpy.calledOnce).to.be.true();
        // expect(onEditSpy.calledWithMatch({
        //     action: intentData.action,
        //     dataType: intentData.dataType,
        //     iconInput: undefined,
        //     iconId: iconId
        // })).to.be.true();
    });

    //TODO: intents in broken and needs a refactor for these tests to pass
    it.skip('uses the iconInput value as the id if it is a number', function() {
        var intentsCmp = TestUtils.renderIntoDocument(
            <Intents />
        );

        var crud = TestUtils.findRenderedComponentWithType(intentsCmp, Crud);

        var iconData = 12345;

        var intentData = {
            action: 'view',
            dataType: 'text/plain',
            iconInput: iconData
        };

        crud.props.onEdit(intentData);

        expect(ImageApi.ImageApi.save.called).to.be.false();

        expect(onEditSpy.calledOnce).to.be.true();
        expect(onEditSpy.calledWithMatch({
            action: intentData.action,
            dataType: intentData.dataType,
            iconInput: undefined,
            iconId: iconData
        })).to.be.true();
    });

    //TODO: intents in broken and needs a refactor for these tests to pass
    it.skip('uses the iconInput value as the id if it is null', function() {
        var intentsCmp = TestUtils.renderIntoDocument(
            <Intents />
        );

        var crud = TestUtils.findRenderedComponentWithType(intentsCmp, Crud);

        var iconData = null;

        var intentData = {
            action: 'view',
            dataType: 'text/plain',
            iconInput: iconData
        };

        crud.props.onEdit(intentData);

        expect(ImageApi.ImageApi.save.called).to.be.false();

        expect(onEditSpy.calledOnce).to.be.true();
        expect(onEditSpy.calledWithMatch({
            action: intentData.action,
            dataType: intentData.dataType,
            iconInput: undefined,
            iconId: iconData
        })).to.be.true();
    });

    it('resets its state for crud\'s onResetState', function() {
        var intentsCmp = TestUtils.renderIntoDocument(
            <Intents />
        );

        var crud = TestUtils.findRenderedComponentWithType(intentsCmp, Crud);

        intentsCmp.state.imageUri = 'https://localhost/asdf';

        crud.props.onResetState();

        expect(intentsCmp.state.imageUri).to.not.be.ok();
    });
});
