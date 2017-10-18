
### 1.1.93 (None) 

#### Fixes  
* Fixing the style so the private icon does not overlap ([ad3a116c](https://github.com/aml-development/ozp-center/commit/ad3a116c240bfdaa6f0047a661ce0f7e721b8db3))   
* **feedback**
  *  allow Center Home link to actually refresh to home ([72a65114](https://github.com/aml-development/ozp-center/commit/72a65114a0e3c85ea507d3fca2d57895f0c9c0be))
  *  fix styling of buttons ([bfdac736](https://github.com/aml-development/ozp-center/commit/bfdac7366452bef259245ad4b2a5c42eb9156a73))
  *  remove updating of carousel after feedback. fix buttons to toggle correctly. ([382eb938](https://github.com/aml-development/ozp-center/commit/382eb9380273c5a0ef66305453d5596697de3c17))     

#### Refactor  
* **feedback**:  remove magic numbers ([90c460a4](https://github.com/aml-development/ozp-center/commit/90c460a43064e617abead39c0815e9c05c43432b))    

#### Merge Pull Requests  
* Merge pull request #878 from aml-development/private_icon_overlap ([1a3d4a0e](https://github.com/aml-development/ozp-center/commit/1a3d4a0e764609a34defe5a50d4d7e3d15145b7a))
* Merge pull request #867 from aml-development/feedback ([df060b16](https://github.com/aml-development/ozp-center/commit/df060b1653c520a6ae684605e8858bc0d17aa1fd))
* Merge branch 'master' of github.com:aml-development/ozp-center into feedback ([eb556c60](https://github.com/aml-development/ozp-center/commit/eb556c607a84442bf2a8798a7730f2a650ad2981))         

#### Changes  
* Disabled listing fix (#876) ([70eafa1e](https://github.com/aml-development/ozp-center/commit/70eafa1e9ff609a78d83ccd7fc68c4895cae5ade))     

### 1.1.92 (2017-10-11)

#### Feature  
* **notifications**:  create new contact the POCs from a listing (#870) ([e8748b93](https://github.com/aml-development/ozp-center/commit/e8748b935250a07c27dc016d0e37d6e9bb7acb92))   
* **feedback**
  *  allow icons to show toggled on if given feedback. Added some styles to when icons get onhover. ([a285f5e2](https://github.com/aml-development/ozp-center/commit/a285f5e25953ed1cbe5a289816de79d177d6a73f))
  *  remove feedback buttons if already given a feedback ([3b7584fc](https://github.com/aml-development/ozp-center/commit/3b7584fca4c40eb8c8d8b2bb06b6bad1700406ca))
  *  allow buttons to be toggled if listing has been given a feedback already ([35d72547](https://github.com/aml-development/ozp-center/commit/35d72547a478b89db1571f1d1cb34c41406d667e))     

#### Fixes  
* Fixing displaying the listing review total count in tiles ([01d702ce](https://github.com/aml-development/ozp-center/commit/01d702ce65ec7187682e4f3512760c1eeecb801b))     

#### Merge Pull Requests  
* Merge pull request #871 from aml-development/fix_listing_review_count ([e50fe38b](https://github.com/aml-development/ozp-center/commit/e50fe38b28357698ffc39243c4a5ec1f187dd2ac))         

#### Changes  
* Revert "Disabled listing fix (#872)" ([6109ffa6](https://github.com/aml-development/ozp-center/commit/6109ffa6d76a222abf8da8525e2632814c84caf4))
* Disabled listing fix (#872) ([6c5b73a6](https://github.com/aml-development/ozp-center/commit/6c5b73a6f50c58faf6e65628c62e65077f371f61))
* Removing the console.log statement ([8a159dc5](https://github.com/aml-development/ozp-center/commit/8a159dc5b74060765b0b45c028e59e642f82b6a5))    
* **reviews**:  prevent all users from deleting reviews (#873) ([89576001](https://github.com/aml-development/ozp-center/commit/8957600191967abae03fc715b0074575d7421638))     

### 1.1.91 (2017-09-28)

#### Feature 
* **feedback**
  *  add piwik tracking ([fa6c0b63](https://github.com/aml-development/ozp-center/commit/fa6c0b63db45185407e5798a78386fcc1462d5c2))
  *  allow thumbs up ([77193424](https://github.com/aml-development/ozp-center/commit/77193424ae38a48224f371c6b4db2da322b48ea2))     

#### Fixes  
* **listing**:  fix create ([87a1476c](https://github.com/aml-development/ozp-center/commit/87a1476c6260e94656f6b691001e747641c973cd))   
* **preferences**
  *  change wording of leaving notice ([4872e08b](https://github.com/aml-development/ozp-center/commit/4872e08bc903042b1144d6af02a0092abd82d64e))
  *  change timeout back to 30 secs ([6e639ee7](https://github.com/aml-development/ozp-center/commit/6e639ee7f6de3d55f9247fd497c8a1a9658be344))
  *  allow instant launch if warning turned off ([ae994190](https://github.com/aml-development/ozp-center/commit/ae99419099f7bcfa57a8b9df26038a9be6e533ee))
  *  changing wording of launch notice ([d2aa31fb](https://github.com/aml-development/ozp-center/commit/d2aa31fb68ec1c6cedc5f1fea0eb76ef97f48602))
  *  switch false to true logic ([b2444396](https://github.com/aml-development/ozp-center/commit/b2444396f00171347a7a103e1e876c753905d334))      

#### Merge Pull Requests  
* Merge pull request #846 from aml-development/leave_ozp ([a04d0b4b](https://github.com/aml-development/ozp-center/commit/a04d0b4b8073c2d13aec41a1d734e91a58db2528))
* Merge pull request #833 from aml-development/508 ([e1aa7ed7](https://github.com/aml-development/ozp-center/commit/e1aa7ed77c7fa25d41d588d82a7163c8cb462c9e))     

#### Style  
* style: Fix Style Issues in Center ([eb2be04f](https://github.com/aml-development/ozp-center/commit/eb2be04f7b8e2197f657919ea56309612971a0f5))         

### 1.1.90 (2017-09-20)

#### Feature 
* **preferences**
  *  alert user if application launch is popup ([b098544e](https://github.com/aml-development/ozp-center/commit/b098544e5173d0340df681fcf371562ba3461d68))
  *  allow ability to opt out of warning modal ([f5cd91e5](https://github.com/aml-development/ozp-center/commit/f5cd91e5cf64d74e8411bf1a6bb993da2395a7ec))    
* **requirements**
  *  show usage and system requirements in leaving notification ([6a8f5973](https://github.com/aml-development/ozp-center/commit/6a8f5973ff724b00fdd519674f37789c7fc4e4e1))
  *  show usage and system requirements in Details tab ([63f75b15](https://github.com/aml-development/ozp-center/commit/63f75b15685faafbdb4679adc3e964c6f427a5c7))
  *  split requirements into usage and system requirements ([86fb5758](https://github.com/aml-development/ozp-center/commit/86fb575857ea471fb272a8b1f75ec0583baee1d4))     
* **enhancement**:  notify user when they're leaving OZP ([fc49fe14](https://github.com/aml-development/ozp-center/commit/fc49fe14c47c0f709a1b52e9dc44770099cf4bfe))    

#### Fixes 
* **preferences**
  *  increase warning modal time to 30 secs from 10 secs ([a2683ac7](https://github.com/aml-development/ozp-center/commit/a2683ac7d83ec976bbe4591d94551e2e035c7731))
  *  align styling of checkbox ([417a3bec](https://github.com/aml-development/ozp-center/commit/417a3becba7c8901e2810bee1d6fc62f3a3cb042))     
* **prefereneces**:  uncomment out timeout ([7677240c](https://github.com/aml-development/ozp-center/commit/7677240c2d5a6cdbedb13968f7cb7c4ff6f3dbb0))     

#### Merge Pull Requests  
* Merge branch 'requirements' of github.com:aml-development/ozp-center into leave_ozp ([da0e4be0](https://github.com/aml-development/ozp-center/commit/da0e4be034a0a05d72c3f3e8bc12ca56bf92e51c))
* Merge pull request #859 from aml-development/org_steward_modal_title ([576bf125](https://github.com/aml-development/ozp-center/commit/576bf125fdc3a1f014542b5430ae3822eff88926))
* Merge pull request #849 from aml-development/review_respond ([395a337e](https://github.com/aml-development/ozp-center/commit/395a337e2a772b761c04ca87ed4b04232b9a099e))           

### 1.1.89 (2017-09-13)           

### 1.1.88 (2017-09-13)           

### 1.1.87 (2017-09-13)

#### Feature  
* **review**:  Allow responding to reviews ([0130b062](https://github.com/aml-development/ozp-center/commit/0130b062f6925e0feda58cafa4a933f2a57efb40))     

#### Refactor  
* refactored code to improve readability ([6e5baa40](https://github.com/aml-development/ozp-center/commit/6e5baa406359a1164d42353236e2f6db5dd28cd7))    

#### Merge Pull Requests  
* Merge pull request #850 from aml-development/loading_indicator ([6e682084](https://github.com/aml-development/ozp-center/commit/6e682084f531c496b8aef333cf0d66ae2653211e))
* Merge pull request #852 from aml-development/demote_to_removeUser ([4b8f4a1e](https://github.com/aml-development/ozp-center/commit/4b8f4a1ef801cbc15951f5d726f6cd61afc68487))         

#### Changes  
* Add error message if storefront calls fail ([d2dd4e6d](https://github.com/aml-development/ozp-center/commit/d2dd4e6dbbf1205b3efdf7efcea072059631b46d))
* Have loading indicator for storefront ([ed4371dc](https://github.com/aml-development/ozp-center/commit/ed4371dc7e698597cdb7b9c3114cd25025752c1c))     

### 1.1.86 (2017-09-06)   

#### Merge Pull Requests  
* Merge pull request #842 from aml-development/stewards_variation ([2c3bd180](https://github.com/aml-development/ozp-center/commit/2c3bd1808e3e5238fc31a358110b0e6117bcd2f4))
* Merge branch 'master' into stewards_variation ([a473ec46](https://github.com/aml-development/ozp-center/commit/a473ec46a115c1c35d6f705e7510046b9b310c0d))         

#### Changes  
* Notification refactor (#845) ([4613703f](https://github.com/aml-development/ozp-center/commit/4613703f5c0b5413638422a6335f94e89953d161))     

### 1.1.85 (2017-08-28) 

#### Fixes  
* Fix bug where apps not reflecting the correct rating in similar listings ([f83b3c43](https://github.com/aml-development/ozp-center/commit/f83b3c43497eb02c95cd1317d90b868fed789519))     

#### Merge Pull Requests  
* Merge pull request #844 from aml-development/similar_listing_bug ([13e13a7d](https://github.com/aml-development/ozp-center/commit/13e13a7d36cb11e27cbe743d5a81892bb22d32b5))
* Merge pull request #839 from aml-development/fix_similar_listing_load ([b11ff76e](https://github.com/aml-development/ozp-center/commit/b11ff76e9d6200213af3feaba29915afb0f8083a))
* Merge pull request #838 from aml-development/spacing ([6e7d8d65](https://github.com/aml-development/ozp-center/commit/6e7d8d65b29a4c6ad18687ae3b92a146b2b74890))
* Merge pull request #837 from aml-development/delete_notifications ([8756b681](https://github.com/aml-development/ozp-center/commit/8756b6815f3904e113321c38a913fc747fe274af))         

#### Changes  
* Remove X button ([f1e83bc9](https://github.com/aml-development/ozp-center/commit/f1e83bc92ec12e0ed743599b2ee5a2fb8b99bc84))     

### 1.1.84 (2017-08-16) 

#### Fixes  
* Fix state after closing confirmation modal ([1633f6f9](https://github.com/aml-development/ozp-center/commit/1633f6f9703be11640bc85c8684c942971652e69))
* Fix spacing issues in Modal->Details ([5ebc2f02](https://github.com/aml-development/ozp-center/commit/5ebc2f0227257efc64f0d680cfb9923b7844d1bb))
* Fix the sorting when returning back to storefront ([b5992b6e](https://github.com/aml-development/ozp-center/commit/b5992b6ea8c732e81747ef48f4451e586c1989ff))     

#### Merge Pull Requests  
* Merge pull request #841 from aml-development/tags_style ([c2bfa87c](https://github.com/aml-development/ozp-center/commit/c2bfa87cdd722dc19c141d0d0cfe33df262e315e))
* Merge pull request #840 from aml-development/sort_by ([88113cd2](https://github.com/aml-development/ozp-center/commit/88113cd252b16fade0b9e23d78ff1eee4dce9a76))
* Merge pull request #836 from aml-development/disclaimer ([cbcb8603](https://github.com/aml-development/ozp-center/commit/cbcb8603935d787891a9ef4792dbd848984664d3))         

#### Changes  
* Remove secondary popup ([f1b78023](https://github.com/aml-development/ozp-center/commit/f1b780235c0192b969be8a05801589985cf0d333))
* Add a confirmation modal when deleting ([91c9ff18](https://github.com/aml-development/ozp-center/commit/91c9ff18fc698d8f5686fa3fe897d6028cf197fe))
* Change styling of FOUO bar in Tags ([599805a4](https://github.com/aml-development/ozp-center/commit/599805a44bf1b239ece4702341dab1d418dcc351))
* Allow ability to delete Notification in Center Settings ([2c2f814a](https://github.com/aml-development/ozp-center/commit/2c2f814a1165033ec9abdfba70ee9da28c689677))     

### 1.1.83 (2017-08-09)         

#### Changes  
* Change disclaimer for Categories in Create Listings Page ([86ba117c](https://github.com/aml-development/ozp-center/commit/86ba117cda30016f0e92a87f887a7a6f97e01e2a))
* updated stores to fetchById on every app open (#835) ([3c8c9a45](https://github.com/aml-development/ozp-center/commit/3c8c9a45b323a868b711ca532324a3a4066ccaa6))
* Separating the frontend storefront calls to use the new endpoints (#834) ([f0923a51](https://github.com/aml-development/ozp-center/commit/f0923a51d5451f7205d24c5b140a8622b9b1b7ff))
* Adding back the Org Steward modal title ([a9388487](https://github.com/aml-development/ozp-center/commit/a9388487c01f19497736e2320675272c125185b2))
* Allow description for listing and organization dropdown in center ([f1447c1b](https://github.com/aml-development/ozp-center/commit/f1447c1b284f5c3289a02804a35056a35dd655fc))
* Putting a URL load delay in place to try to fix the similar listing loading issue. ([e9283f83](https://github.com/aml-development/ozp-center/commit/e9283f833252e3a1a4902850b63d0703a3507ef5))     

### 1.1.82 (2017-07-26) 

#### Fixes  
* Fix sort bug ([75404b7b](https://github.com/aml-development/ozp-center/commit/75404b7b997fe2056a20876e4f9b5fe8ef982b82))
* Fix Lo to Hi issue with total ratings ([2bf38d82](https://github.com/aml-development/ozp-center/commit/2bf38d829735142f1fba153523803ffe986cebea))     

#### Merge Pull Requests  
* Merge pull request #831 from aml-development/notification_resend ([b88f220e](https://github.com/aml-development/ozp-center/commit/b88f220ea2503a6812e8353b21700bd3974cbaa2))
* Merge pull request #832 from aml-development/sort_by ([d04f99f4](https://github.com/aml-development/ozp-center/commit/d04f99f401e66ada6d90e69962f2a7d85491ca19))
* Merge pull request #830 from aml-development/error_msg ([20b1162b](https://github.com/aml-development/ozp-center/commit/20b1162b2e8cdf32a02e6f9c4ae6a37ae267cfce))
* Merge branch 'master' of github.com:aml-development/ozp-center into error_msg ([7080094e](https://github.com/aml-development/ozp-center/commit/7080094e1c29e8f575efd1dddd4c07c3170ef092))         

#### Changes  
* Needed to makes some fixes for the automated tests ([c85c1747](https://github.com/aml-development/ozp-center/commit/c85c17478bf1df7066fc957da0ce01c711162fd9))
* Remove delete confirmation message if error occurs ([b53d32bb](https://github.com/aml-development/ozp-center/commit/b53d32bb1f0ab37dc97182ae49e909c6b2a8cd73))
* Adding the ability to re-populate the notification box to resend a past notification. ([d16d5239](https://github.com/aml-development/ozp-center/commit/d16d5239d0d407b3736425d1dd04f93cf60c4367))     

### 1.1.81 (2017-07-21) 

#### Fixes  
* Fix sort by after new category/orginzation/type changes ([1eaa3474](https://github.com/aml-development/ozp-center/commit/1eaa3474709635f63355276240ec92a9a6eac87e))     

#### Merge Pull Requests  
* Merge pull request #829 from aml-development/sort_by ([4bc88c14](https://github.com/aml-development/ozp-center/commit/4bc88c14537b51f55b5b77dba600f1e5e421b0cc))
* Merge pull request #828 from aml-development/category_confirmation ([61996189](https://github.com/aml-development/ozp-center/commit/61996189678ca24a2f5c3684be2a23b1bdb3c9f7))
* Merge pull request #827 from aml-development/toggles ([1a73a230](https://github.com/aml-development/ozp-center/commit/1a73a2308cc734bd3bece49f2d3e908edbac40ea))
* Merge pull request #826 from aml-development/similar_listing_url ([11087ed6](https://github.com/aml-development/ozp-center/commit/11087ed6f766cfa625f6315c7682c4297761a5d7))
* Merge pull request #825 from aml-development/sort_by ([ea415245](https://github.com/aml-development/ozp-center/commit/ea415245d12e9c6cf2d19f71f63351e3389dc24c))         

#### Changes  
* Sort alphabetically prior to sorting ratings to keep dataset the same each time prior to sort ([0545c331](https://github.com/aml-development/ozp-center/commit/0545c331655043af800a1930ddad70e7eeff71b3))
* Switch toggles throughout site. Made toggles smallers in certain areas ([56cd148e](https://github.com/aml-development/ozp-center/commit/56cd148ea05883639122e2909917d80f1a7731ca))
* Stop and show warning if a category has existing listings and is about to be deleted ([343896af](https://github.com/aml-development/ozp-center/commit/343896afb398386bd41e94eaa045e2784bc683ab))
* Update toggles in Quickview->Administration visually ([170cfff4](https://github.com/aml-development/ozp-center/commit/170cfff4dcbe3056f7a346b26faa84f8d2405897))
* Removing test code ([5ec3678a](https://github.com/aml-development/ozp-center/commit/5ec3678a628e50718b2deb7d3a1327d691fd8815))
* Updating the URL when a similar listing is chosen. ([948f3616](https://github.com/aml-development/ozp-center/commit/948f3616eea19c61191c466c22da40d79d8f426a))     

### 1.1.80 (2017-07-19) 

#### Fixes  
* Fix duplicate listing sort in search results ([754d44f3](https://github.com/aml-development/ozp-center/commit/754d44f3cb0cfc92c34e7f1e2c0757fddb320f2b))    

#### Refactor  
* Refactor based on PR ([dd5f6921](https://github.com/aml-development/ozp-center/commit/dd5f69211f33ebe7f8ad180ba54f899826d93a49))    

#### Merge Pull Requests  
* Merge pull request #824 from aml-development/sort_by ([d03ab5a8](https://github.com/aml-development/ozp-center/commit/d03ab5a8f8e9b841d69d219b9bae0eaefa46fe00))
* Merge branch 'sort_by' of github.com:aml-development/ozp-center into sort_by ([5683dd01](https://github.com/aml-development/ozp-center/commit/5683dd01359127191b62ffa1cd89301dee282824))         

#### Changes  
* Increase sortBy width to 190px ([5cf20ea2](https://github.com/aml-development/ozp-center/commit/5cf20ea27884d2469d121947cea450c30bd9fc89))
* Allow sort by label to change based on criteria ([926adc9b](https://github.com/aml-development/ozp-center/commit/926adc9bd76c8a79ad6053d747c6281ec5916d77))
* Moving the Sort dropdown html to a different spot ([3d50a725](https://github.com/aml-development/ozp-center/commit/3d50a7250d0d93927e9d93b69f18734be1775db6))
* Remove useless selectbox ([aa2450e1](https://github.com/aml-development/ozp-center/commit/aa2450e1a15c20a4c54964c2cd7f417e975d86b8))
* Adding initial styling for the Sort By dropdown ([9c433c05](https://github.com/aml-development/ozp-center/commit/9c433c053c8b29fc78d283f1b4f7e240a76a90f7))
* Case insensitive sorting for title ([b08e9a3c](https://github.com/aml-development/ozp-center/commit/b08e9a3cedad761782e1e45733fc85393164bbda))
* Add sorting for Most Popular ([5336eb2e](https://github.com/aml-development/ozp-center/commit/5336eb2e91929e94b4f2a8943301636cfd6495d7))
* Multiple sort functionality works ([32d2dd07](https://github.com/aml-development/ozp-center/commit/32d2dd07a438d19158eaa458734fd4c1379a1196))     

### 1.1.79 (2017-07-12) 

#### Fixes  
* Fix bug where regular users cannot unsubscribe ([f76927cc](https://github.com/aml-development/ozp-center/commit/f76927ccea71d7cdfaa8b05e47f387a5cebfe8b8))
* fix: Changed caption and hint fields from 'demote' to 'remove.' ([db8fbf6e](https://github.com/aml-development/ozp-center/commit/db8fbf6e5e3ea7bfa4a6c22bd677129e0eab1a42))
* Fix for Edit Listing from My Listing ([fe53fe55](https://github.com/aml-development/ozp-center/commit/fe53fe55cf4486a033e23427647e26041676dc7d))
* Fix for Edit Listing from My Listing ([0ba40cd9](https://github.com/aml-development/ozp-center/commit/0ba40cd9b3ce23ae6d06b907e0b76c4d8908c08c))     

#### Merge Pull Requests  
* Merge pull request #822 from aml-development/categories_subscribe_reflux ([c351239d](https://github.com/aml-development/ozp-center/commit/c351239d8b506281e7a67471dfd53385041a3345))
* Merge pull request #823 from aml-development/enhance_subscription_ui ([ef825b94](https://github.com/aml-development/ozp-center/commit/ef825b949ce92a1c8eb9db6649cad3123872f969))
* Merge pull request #820 from aml-development/sub_long_cat_names ([63d871fd](https://github.com/aml-development/ozp-center/commit/63d871fd5b306c9465110be3fc00ff4b7f6fc14f))
* Merge pull request #818 from aml-development/AnotherListingStoreFix ([eda26721](https://github.com/aml-development/ozp-center/commit/eda26721c5d599632a6941a7ede91a5a4dd5635b))
* Merge pull request #819 from aml-development/center_settings ([d28325da](https://github.com/aml-development/ozp-center/commit/d28325da07d5784a9f91a4f7d7b290ff2a3c75ca))         

#### Changes  
* Change orange color ([1dc4ffeb](https://github.com/aml-development/ozp-center/commit/1dc4ffeb8ad0c0a7bfff576177b3d5427084858e))
* Update color and add padding ([8326b52a](https://github.com/aml-development/ozp-center/commit/8326b52a4b862efaa70e3829c573ff7b2c5158d9))
* initial sort by ([79f24461](https://github.com/aml-development/ozp-center/commit/79f24461eafb114338d72d6f930a39c2be3b1a2f))
* Initial commit to add subscription link within tag box ([de7488b8](https://github.com/aml-development/ozp-center/commit/de7488b8b1df496306509cb6b7e074cf5243f08f))
* Small style fix ([a8211d7c](https://github.com/aml-development/ozp-center/commit/a8211d7c54ec436c8d322d62f213e8f5fb4c4fad))
* Adding styling for categories with long names that interfere with the subscribe link ([734a8268](https://github.com/aml-development/ozp-center/commit/734a8268e86073fbb8c2b676543eb96998376ea7))
* A slightly different way to handle removing org stewards. ([4df04487](https://github.com/aml-development/ozp-center/commit/4df044875bd06d6e3d7b8b5edb34f66c700181d3))
* Remove commented out code ([cee00b8f](https://github.com/aml-development/ozp-center/commit/cee00b8f584c643f33716211380795ca8fe2f99b))     

### 1.1.78 (2017-07-04)   

#### Merge Pull Requests  
* Merge pull request #817 from aml-development/ratings ([4dbb4c86](https://github.com/aml-development/ozp-center/commit/4dbb4c862bfbb1f8856a6e41fdcf0b02496d92ab))
* Merge pull request #815 from aml-development/center_settings ([a5bd09f5](https://github.com/aml-development/ozp-center/commit/a5bd09f570e2b242027d8dc9717968d22cc93e1e))         

#### Changes  
* Initial commit to show total rating count ([1d1ad3df](https://github.com/aml-development/ozp-center/commit/1d1ad3df0578589c56128fd84360df005279059b))
* Removed a line. ([aa4f5a62](https://github.com/aml-development/ozp-center/commit/aa4f5a621335b3e1f79208c79d5eb69556ec9687))
* Added changes that make the Demote button behave like the other buttons. ([1e772c01](https://github.com/aml-development/ozp-center/commit/1e772c013d443243b2c4aa984458371060f9e5ae))     

### 1.1.77 (2017-06-28) 

#### Fixes  
* Fix issue with two components sharing one subscription store ([82fe294a](https://github.com/aml-development/ozp-center/commit/82fe294aea9a8c2b3ad7564a47b9c99aa18a8efa))     

#### Merge Pull Requests  
* Merge pull request #814 from aml-development/categories_subscribe_reflux ([f15325ea](https://github.com/aml-development/ozp-center/commit/f15325eaaeba619af024bc07cf43ff741f428808))         

#### Changes  
* Added error handleing for one or fewer org_stewards. ([b83b53cb](https://github.com/aml-development/ozp-center/commit/b83b53cba210c0e57ffa2d162ba65fcdd33141ca))
* Frontend parameters changed to properly work with backend.  Grid now refreshes when a user is demoted (unless last user which I am still working on). ([fdd99694](https://github.com/aml-development/ozp-center/commit/fdd99694604d29ddcad570578d2e479f402a6eab))
* Grid now has a working button that properly demotes an org_steward to a regular user.  Properly communicates with backend. ([f70b9d0c](https://github.com/aml-development/ozp-center/commit/f70b9d0ceb2a194b71773e8cadb664b439b82c16))
* Hide tag subscribe link when searching via Category ([705ce2f6](https://github.com/aml-development/ozp-center/commit/705ce2f6a846f5d66cc3420311f6e35cabd74aa4))     

### 1.1.76 (2017-06-21) 

#### Fixes  
* Fix symbol iterator bug ([fed2bbe6](https://github.com/aml-development/ozp-center/commit/fed2bbe6ea6dbdb72649ac513a22358b5bdb01f6))     

#### Merge Pull Requests  
* Merge pull request #813 from aml-development/active_notification_bug ([c9787e84](https://github.com/aml-development/ozp-center/commit/c9787e84f7f9b770d294edca706ca8354b395244))
* Merge pull request #812 from aml-development/tag_subscription ([72f7727e](https://github.com/aml-development/ozp-center/commit/72f7727e77664f7a9bc005df43a5fd915bf73210))         

#### Changes  
* Show the creation date when displaying notifications ([5d778201](https://github.com/aml-development/ozp-center/commit/5d778201c77766a8edb20f886c2330e8cb82797b))     

### 1.1.75 (2017-06-15) 

#### Fixes  
* fix merge conflicts ([069ed029](https://github.com/aml-development/ozp-center/commit/069ed02927b18f4a44c0fd5461c617204dd6e9f0))
* Fix Symbol iterator bug ([d6019204](https://github.com/aml-development/ozp-center/commit/d6019204426bd22fd72c52a563d2bfd06e565c49))     

#### Merge Pull Requests  
* Merge pull request #811 from aml-development/categories_subscribe_reflux ([fff7df68](https://github.com/aml-development/ozp-center/commit/fff7df6852b907976938389c44c841ee57a7463f))
* Merge pull request #803 from aml-development/undefined_changelog_bug ([2df3f578](https://github.com/aml-development/ozp-center/commit/2df3f57864d272e483c5bd53c75ba9b99ec5a94d))           

### 1.1.74 (2017-06-13) 

#### Fixes  
* fixed issue where store is empty ([c9d279f9](https://github.com/aml-development/ozp-center/commit/c9d279f9681c879ef27e63684afc1ac96c0d609c))
* Fix styling ([11e5ac6b](https://github.com/aml-development/ozp-center/commit/11e5ac6b5aa10bfad5e0ee784bcf13977d2b6862))
* fix merge conflicts ([b96305a0](https://github.com/aml-development/ozp-center/commit/b96305a0da3da4d27e0ff950baa9a0bc127c51c0))
* Fix bug for create listing ([92dfe028](https://github.com/aml-development/ozp-center/commit/92dfe02865ae7621f58ba192817dd30fac0f6b85))
* Fix bug where adding new category messes up with subscription links ([1af8fef4](https://github.com/aml-development/ozp-center/commit/1af8fef4f1d263755fa7ac6bc7606af8a65939be))
* fix: Selecting the save button in Center Settings now properly saves information. ([99c64014](https://github.com/aml-development/ozp-center/commit/99c64014b6019d578d0cf335c5b0f61ecdf47e5e))     

#### Merge Pull Requests  
* Merge pull request #807 from aml-development/tag_subscription ([4d6154be](https://github.com/aml-development/ozp-center/commit/4d6154bef0b64115068c2139200042cd8a10adcc))
* Merge pull request #810 from aml-development/categories_subscribe_reflux ([7476dbf3](https://github.com/aml-development/ozp-center/commit/7476dbf3531cbed96935d9042aff999d393fbd5c))         

#### Changes  
* remove console.log ([b439d0f6](https://github.com/aml-development/ozp-center/commit/b439d0f627f594a1e1f7e651ee8f12c1ba5f004c))
* added fix for subscribe text to not show ([e9625c5b](https://github.com/aml-development/ozp-center/commit/e9625c5b433b6ebc10d33992ade8a9004b026754))
* Removed uneeded change. ([447233d4](https://github.com/aml-development/ozp-center/commit/447233d403e51e786b021015652eeeeebe3155ba))
* Created proper pop-up window.  Added username to pop-up message. ([a8e09c4b](https://github.com/aml-development/ozp-center/commit/a8e09c4b500087a15d438485447b477b1d3d9eab))
* Remove subscribe/unsubscribe link if no id present in url ([f9642b03](https://github.com/aml-development/ozp-center/commit/f9642b034c2d6a29d3923f993dfb5f53d19c2ad4))     

### 1.1.73 (2017-06-07) 

#### Fixes  
* Fixes copy/paste & refresh quickview links.  Also fixed the initial filter by category broken load. AMLNG-510 & AMLNG-516 ([748e810b](https://github.com/aml-development/ozp-center/commit/748e810b652bfad33b5cb0251087e450c80be7bb))
* fix: Selecting the center icon now takes the user to the Center Homepage. ([3ef6f4b3](https://github.com/aml-development/ozp-center/commit/3ef6f4b322684c4de7517f58216c817457b50e73))     

#### Merge Pull Requests  
* Merge pull request #809 from aml-development/syntaxy_2 ([bb3a1776](https://github.com/aml-development/ozp-center/commit/bb3a17768746f7b24b8ebd0aa58381d53a915fd2))
* Merge pull request #808 from aml-development/fix_quickview ([ced18ecd](https://github.com/aml-development/ozp-center/commit/ced18ecd6e5f6a2557b7880dbc058644906678a3))
* Merge pull request #805 from aml-development/syntaxy ([51070e77](https://github.com/aml-development/ozp-center/commit/51070e7718e2a13c8952fd396cbd57ac964f3e2f))
* Merge pull request #806 from aml-development/navigation ([9491f558](https://github.com/aml-development/ozp-center/commit/9491f5580f741985839cbd815deeb1c1172b9a5f))         

#### Changes  
* Another location that needed updating for new notification styling. ([2d473526](https://github.com/aml-development/ozp-center/commit/2d4735266665a48f44c95a104b8d4c5eefdccc1a))
* Initial commit for tag subscription ([ccea9e8d](https://github.com/aml-development/ozp-center/commit/ccea9e8d90c72eec50d764b6cc724626ca99a37c))
* Updating the notification display page to use the HTML formatted messages in the database. ([47f474b7](https://github.com/aml-development/ozp-center/commit/47f474b7fbb2c2c3d7553308adff0b62b85e3c98))     

### 1.1.72 (2017-05-31)   

#### Merge Pull Requests  
* Merge pull request #804 from aml-development/categories_subscribe_reflux ([b32aad7a](https://github.com/aml-development/ozp-center/commit/b32aad7ad83148d4f64ccc576ba8993c0a9dada9))         

#### Changes  
* JIRA-469: Initial commit for categories subscription. Added styling to subscribe link ([c5782081](https://github.com/aml-development/ozp-center/commit/c5782081695d45c9e4e62cf81c05cab1999de274))     

### 1.1.71 (2017-05-24) 

#### Fixes  
* Fix hanging issue when submitting new listing ([200bc0a2](https://github.com/aml-development/ozp-center/commit/200bc0a257588bc94cd98bb36cb5d16c5496a05c))     

#### Merge Pull Requests  
* Merge pull request #802 from aml-development/submit_listing_bug_fix ([1d9dd2b8](https://github.com/aml-development/ozp-center/commit/1d9dd2b82134b0496337b54f6b972d027ac6269e))
* Merge pull request #801 from aml-development/error_msg ([b1c9850a](https://github.com/aml-development/ozp-center/commit/b1c9850a19460807982cd8743f31760b20cfe5e5))         

#### Changes  
* Small style update. ([7a48a9e1](https://github.com/aml-development/ozp-center/commit/7a48a9e11d3f3c6a61b743ce19c0f7f17801fae5))
* Removing unneeded commented out test data ([a17f0c4f](https://github.com/aml-development/ozp-center/commit/a17f0c4ffb7a46f0d03352b5f9e0209d487e1330))
* Correcting how the total tab count is used in TabMixin since this.props.tabs did not include org steward tabs ([422b1140](https://github.com/aml-development/ozp-center/commit/422b114088a7b8e4781c0b73651c8aa364ffc53b))
* Adding the ability to condense the number of tabs displayed on the screen if they are larger than a pre-configured amount (6). A left and right arrow is added that will let the user scroll through pages of tabs. ([2037b837](https://github.com/aml-development/ozp-center/commit/2037b83773ab7cfbb69e63a4bf42495adccb368f))
* Putting checks in place for changeLog to not be undefined ([41331f9a](https://github.com/aml-development/ozp-center/commit/41331f9a51bcadaa9b3bca447d5f0dad844b9db6))
* Temp hardcode error message for ES ([0af50f20](https://github.com/aml-development/ozp-center/commit/0af50f20097d3a07a99bcef98b824eeb2d697c02))     

### 1.1.70 (2017-05-17) 

#### Fixes  
* **search**:  fixed critical defect where apps were not opening after search (JIRA 482  ([bd24c716](https://github.com/aml-development/ozp-center/commit/bd24c7168dcabb98e217c9339aa1cd295ee168e5))    
* Fix tour modal focus and text-to-speech ([1979a0dc](https://github.com/aml-development/ozp-center/commit/1979a0dcd85268e05f420dfbcb69e959ad5eaf1a))     

#### Merge Pull Requests  
* Merge pull request #799 from aml-development/508 ([9c91c51e](https://github.com/aml-development/ozp-center/commit/9c91c51e1f6ffe21904fa2708e151b10c62f211b))
* Merge branch 'master' of github.com:aml-development/ozp-center into 508 ([06b96af5](https://github.com/aml-development/ozp-center/commit/06b96af578586f3cbd08583bf00023b152e4c277))
* Merge pull request #798 from aml-development/too_many_tabs ([c186591b](https://github.com/aml-development/ozp-center/commit/c186591b7ac83a2ce4cf37d85377d7149e45cef8))
* Merge branch 'master' of github.com:aml-development/ozp-center into 508 ([96ab9b2a](https://github.com/aml-development/ozp-center/commit/96ab9b2afd60962ab99f46b7eb0e103f59f7e855))         

#### Changes  
* Small style update. ([9a544b12](https://github.com/aml-development/ozp-center/commit/9a544b12d08d0156d325ff1a81f57a36afa31722))
* Removing unneeded commented out test data ([0d101eae](https://github.com/aml-development/ozp-center/commit/0d101eaeaa81f06138d68008d90740f76e78a014))
* Correcting how the total tab count is used in TabMixin since this.props.tabs did not include org steward tabs ([91f7193a](https://github.com/aml-development/ozp-center/commit/91f7193a4616bfd473942481a031547ac239906e))
* Allow screenshot description for firefox ([42a4b030](https://github.com/aml-development/ozp-center/commit/42a4b030e104d12684969a1ce181f07e56fe58bc))
* Adding the ability to condense the number of tabs displayed on the screen if they are larger than a pre-configured amount (6). A left and right arrow is added that will let the user scroll through pages of tabs. ([8d05ab7d](https://github.com/aml-development/ozp-center/commit/8d05ab7d601b37ab51dc46b6271d7d38343173f4))     

### 1.1.69 (2017-05-10)   

#### Merge Pull Requests  
* Merge pull request #796 from aml-development/screenshot_description ([6a48d563](https://github.com/aml-development/ozp-center/commit/6a48d563b678a9ac995128e300c98b7e59408ef1))
* Merge branch 'master' of github.com:aml-development/ozp-center into 508 ([fedc7de3](https://github.com/aml-development/ozp-center/commit/fedc7de33f0d52e4be670f350baa1aa12bb16a08))         

#### Changes  
* initial commit for screenshot re-arrangement ([ab06adf3](https://github.com/aml-development/ozp-center/commit/ab06adf3eccb97adb52e801abc2887084a77d7bb))     

### 1.1.68 (2017-05-03) 

#### Fixes  
* **notification**:  notification modal no longer says "0No Notifications" (#795) ([ef1b0c82](https://github.com/aml-development/ozp-center/commit/ef1b0c82dfe3b7679883aa763d1996ce89255e4a))     

#### Merge Pull Requests  
* Merge pull request #793 from aml-development/recommender_analytics ([14b17758](https://github.com/aml-development/ozp-center/commit/14b1775815a31df90c0472826be7ddbe2923a0ea))         

#### Changes  
* JIRA 428 - Similar style fix (#794) ([905cb60f](https://github.com/aml-development/ozp-center/commit/905cb60fd9e77db49d4b8c4a64fe88d3c2848e4b))
* Adding tracking to the Recommended and Similar Listing tiles. ([d57d0b91](https://github.com/aml-development/ozp-center/commit/d57d0b915d2e3c6538f2c3bfc32ec4795e58719c))     

### 1.1.67 (2017-04-26)         

#### Changes  
* Hide recommendations (#792) ([8910d0c0](https://github.com/aml-development/ozp-center/commit/8910d0c01a04cd1a085a061ebbccc55a0a21754f))     

### 1.1.66 (2017-04-19) 

#### Fixes  
* Fixing a typo ([5647a5f9](https://github.com/aml-development/ozp-center/commit/5647a5f95809ec500c36fdab772604bf138ad03a))
* fixed typo that mlee identified ([b605242f](https://github.com/aml-development/ozp-center/commit/b605242fb29585cd8e857ed31e2885d93c8f6b6e))
* Fix bug where s was supposed to be promises in CurrenListingStore ([83323a6f](https://github.com/aml-development/ozp-center/commit/83323a6ff8cbe68dbbc64cae5fc68353dd09bcea))
* Fix merge conflicts ([b3840616](https://github.com/aml-development/ozp-center/commit/b3840616e813c9a483be44d7bc40cf75b4bf878b))    
* **screenshot**:  Added validation for screenshot description ([3209d31f](https://github.com/aml-development/ozp-center/commit/3209d31fb6566ca9d659644784628b5433fae730))     

#### Merge Pull Requests  
* Merge pull request #789 from aml-development/changelogs_limit ([89ea5da8](https://github.com/aml-development/ozp-center/commit/89ea5da87bc5fc9d6d43bb3b43bfd7fe48875671))
* Merge pull request #790 from aml-development/fouo_tag ([8ebdfa8c](https://github.com/aml-development/ozp-center/commit/8ebdfa8c1b9c3ad4875063e008d40c903a2e29c9))
* Merge pull request #791 from aml-development/typo_fix ([d406cf0b](https://github.com/aml-development/ozp-center/commit/d406cf0b4082b5e7b17e5801cfcc3e6bb4f300e0))
* Merge pull request #785 from aml-development/caps ([6f7f714a](https://github.com/aml-development/ozp-center/commit/6f7f714a168b246e69d616de337fafcb8012dcff))
* Merge pull request #788 from aml-development/recommendations ([ab7dca9f](https://github.com/aml-development/ozp-center/commit/ab7dca9fb4add1e39affe92c0d30490160a9d585))
* Merge pull request #783 from aml-development/screenshot_description ([fb1c9674](https://github.com/aml-development/ozp-center/commit/fb1c967467660155a21b8f5b63bfe6921a352e90))
* Merge pull request #786 from aml-development/currentListingStoreTypo ([90d6f273](https://github.com/aml-development/ozp-center/commit/90d6f273dc2e4089fd290a15604f575e4bc5680d))         

#### Changes  
* Add FOUO warning to tags form ([156496a8](https://github.com/aml-development/ozp-center/commit/156496a83db16afe3015933b12e9a038b4d72c77))
* Removing unused code.  Making sure the Listing Changes update when opening different Applications. ([f9011775](https://github.com/aml-development/ozp-center/commit/f901177547d660b6d95b980aa9185dbdf947995f))
* updated style to fix issue with carousel expanding beyond modal ([76f7055b](https://github.com/aml-development/ozp-center/commit/76f7055b52ec8bfb4b2cca07358130156a8fed54))
* Adding the ability to load more Listing Changes from the Application quick view box. ([1b4a49e6](https://github.com/aml-development/ozp-center/commit/1b4a49e6c9b0b57bb13864c4e52b1bae78fe501d))
* Re-add deleted style from merge conflict ([1466bd41](https://github.com/aml-development/ozp-center/commit/1466bd41815ff6ef13c239c251aa21d5ab0a1f54))     

### 1.1.65 (2017-04-12) 

#### Fixes  
* Fixing text capitalization consistency ([dcae2aa6](https://github.com/aml-development/ozp-center/commit/dcae2aa6fcb8c6f215130ee1de7f547caa8226c7))
* fixed gulp file so server does not break when sass file is changed ([735fe365](https://github.com/aml-development/ozp-center/commit/735fe3659897d38325fcd66467ddcbe2b6f9ec16))     

#### Merge Pull Requests  
* Merge pull request #784 from aml-development/recommendations ([c9310678](https://github.com/aml-development/ozp-center/commit/c93106787a2f18efb1fcd35a6350ed7bae3b7583))         

#### Changes  
* Screenshot description will not show if null ([854a3699](https://github.com/aml-development/ozp-center/commit/854a36999253919ac780ecd9fbc4906b7f17bf5e))
* Pulling the variable redelaration up out of the if/else ([298237b3](https://github.com/aml-development/ozp-center/commit/298237b378a746edc31eb97257ec5b612b55aa44))
* removed style that was causing modal to expand ([6a2e588f](https://github.com/aml-development/ozp-center/commit/6a2e588f4ba0ec8a66c0d7e8dc8c9ae4293389b9))
* removed console.log s ([d4e60330](https://github.com/aml-development/ozp-center/commit/d4e60330f510b791196df2775a68859877f38e0a))
* readded prommises ([27bd1152](https://github.com/aml-development/ozp-center/commit/27bd11521e87f9e5245c161905a760d4f0a9e0ac))
* removed unused code ([0127b243](https://github.com/aml-development/ozp-center/commit/0127b243d28e250e5a639a7ae0649bb865b2e825))
* Revert deletions that came out of nowhere. ([6e6f7199](https://github.com/aml-development/ozp-center/commit/6e6f719974e1351f078cc102972df4cb44c36b83))
* initial commit for screenshot descriptions ([8c08faef](https://github.com/aml-development/ozp-center/commit/8c08faef7e4fc39a369b8b64b2da9e918e9f7d52))
* added onClick action ([b1cb9af1](https://github.com/aml-development/ozp-center/commit/b1cb9af1ec275ea930821a8ebed8599052732663))
* Allow tabs to stay within center tour popover ([4e4bb5a7](https://github.com/aml-development/ozp-center/commit/4e4bb5a79c3a6b09b2667d32acebc7edaebd2cb6))
* added recommendation scroll bar. still need to migrate styles and add click functionality ([2fda5bfd](https://github.com/aml-development/ozp-center/commit/2fda5bfdfebfa548417284ae72ef9f1643227763))     

### 1.1.64 (2017-04-05) 

#### Fixes  
* Fixed aria-label not showing variable # ([bef67abd](https://github.com/aml-development/ozp-center/commit/bef67abdb5e62755f58a1196162d974b9b2f7ddf))
* Fixed based on PR ([63e8dbd6](https://github.com/aml-development/ozp-center/commit/63e8dbd66b88e53d506d6b86dbff6e4e1f1fba41))     

#### Merge Pull Requests  
* Merge pull request #781 from aml-development/recommendations ([05535a7d](https://github.com/aml-development/ozp-center/commit/05535a7dc7d3127058895a88d983ffdebb8bfeee))
* Merge pull request #780 from aml-development/508 ([29f93485](https://github.com/aml-development/ozp-center/commit/29f93485991dcd3bdd9807c5c8d65cb2770d3b02))
* Merge pull request #779 from aml-development/508 ([f8c6c6dc](https://github.com/aml-development/ozp-center/commit/f8c6c6dc365e734825fe8524507bbf409f84fe0d))         

#### Changes  
* Gave Center tour focus to make it 508 compliance ([12eedb8f](https://github.com/aml-development/ozp-center/commit/12eedb8f86176c0a99ef7349c544201ce9d766c3))
* changed recommendation text to "Recommended for You" ([2d6ec4fd](https://github.com/aml-development/ozp-center/commit/2d6ec4fd54905de9aba4e057d48ba90cf5eb6199))
* Removed the word center from side bar description ([c52cbd8f](https://github.com/aml-development/ozp-center/commit/c52cbd8fadb21f03427d8348703f089ab43b5b4e))
* Made 'Categories Section' to be more descriptive for 508 users ([cfdf0750](https://github.com/aml-development/ozp-center/commit/cfdf075093939e1af7e4bb00e991ff7caea1bc60))
* Remove unused label variable ([4537a468](https://github.com/aml-development/ozp-center/commit/4537a468188c4cb117d92dbecadf9c331d92fd01))
* Allow support for live voice updates for results returned if updated ([bf08b758](https://github.com/aml-development/ozp-center/commit/bf08b758b2450d62f4d5da63b99b7c0a2b81d6f3))     

### 1.1.63 (2017-03-29)

#### Feature  
* **notification**:  Fixed Link in drop down ([c6abaadc](https://github.com/aml-development/ozp-center/commit/c6abaadcc196c65c03013fd7c062df00cbcba76a))      

#### Merge Pull Requests  
* Merge pull request #778 from aml-development/notification_link ([98355b61](https://github.com/aml-development/ozp-center/commit/98355b61ef91d77e3c39dff9144dd229251896fb))
* Merge pull request #777 from aml-development/error_msg ([6ed1550d](https://github.com/aml-development/ozp-center/commit/6ed1550d7ce88b400e7893e9595b8822cd5762f6))
* Merge pull request #776 from aml-development/recommendations ([5d292866](https://github.com/aml-development/ozp-center/commit/5d292866e14fcff31c39410f25f7287bf0e9caf0))         

#### Changes  
* Added voice text for listing results ([4c6bf2e6](https://github.com/aml-development/ozp-center/commit/4c6bf2e61a2ced023d3876933911493b8bcc98c4))
* Added notification to show search results number on screen ([ded79ac4](https://github.com/aml-development/ozp-center/commit/ded79ac4a669cafd6e868e298daa33118274e57c))
* JIRA-247: Display errors on front-end for ElasticSearch ([2cd1a1d8](https://github.com/aml-development/ozp-center/commit/2cd1a1d89ffc4fdca0f3b5da061523b13c3afd88))
* commented out recommendations part of listing popup ([02896515](https://github.com/aml-development/ozp-center/commit/028965154a55e56a55c071f13de117d4aac089a1))
* updated quickview carousel recommendation style ([767c9a04](https://github.com/aml-development/ozp-center/commit/767c9a04fdcc181abee2cb9dee32fabe3d544fb6))     

### 1.1.62 (2017-03-22)   

#### Merge Pull Requests  
* Merge pull request #774 from aml-development/JIRA-337 ([2d2e00b9](https://github.com/aml-development/ozp-center/commit/2d2e00b91bbaf028f0e6be2ab355c76516c25bda))         

#### Changes  
* JIRA-337: Bug fix for drop down letters being cut off ([83d58ba8](https://github.com/aml-development/ozp-center/commit/83d58ba8613748f280bc024cc16520e1e161c20d))
* hooking together ui with recommendations on listing detail view ([fedf26b3](https://github.com/aml-development/ozp-center/commit/fedf26b3334a7093efefa9cbfd0fbdbf1d6e3f24))     

### 1.1.61 (2017-03-15) 

#### Fixes  
* fixed pending deletion alignment ([d1613e21](https://github.com/aml-development/ozp-center/commit/d1613e211350d92eea8c8ed47ca8a1c4158767cf))     

#### Merge Pull Requests  
* Merge pull request #767 from aml-development/288_TextAlign ([0b8c9c1d](https://github.com/aml-development/ozp-center/commit/0b8c9c1dcfa5ae74249f6e2b71d0a3a50e5b241b))         

#### Changes  
* added scaffolding for recommendations in quickview modal ([90777bb8](https://github.com/aml-development/ozp-center/commit/90777bb822a22c197d6f461406510aba699532d4))     

### 1.1.60 (2017-03-08) 

#### Fixes  
* (fix):listing action filterby was not needed ([058867b3](https://github.com/aml-development/ozp-center/commit/058867b390ef25f2fd4fed5296660c916389732d))
* (fix):fixed tag link to filter by tag when clicked ([1d884cb7](https://github.com/aml-development/ozp-center/commit/1d884cb7bdec794685ac1261791271ef3d5320aa))
* (fix):grammer error in create edit page ([a081a0f3](https://github.com/aml-development/ozp-center/commit/a081a0f37d853c7535db3ce083db54fe77391753))     

#### Merge Pull Requests  
* Merge pull request #766 from aml-development/taglink_fix ([dbca65ed](https://github.com/aml-development/ozp-center/commit/dbca65ed4d9547d95c39855b074b002ffdda5553))
* Merge pull request #765 from aml-development/grammer_check ([211673eb](https://github.com/aml-development/ozp-center/commit/211673eb7bf2d70af18122efe0e5a08743d8f269))         

#### Changes  
* clicking logo will take you to the main page ([6fcf838f](https://github.com/aml-development/ozp-center/commit/6fcf838f6fa67926e3904e75e6b89f1a82bee7af))
* clicking centerhome will now clear out tag search ([f75e24c7](https://github.com/aml-development/ozp-center/commit/f75e24c7f037a0685fdfa505debdae96a4d5bb1c))
* removed consolelog and c ommented out code ([fa48d3cc](https://github.com/aml-development/ozp-center/commit/fa48d3cc0b03333d72cd13306ebb415d8d0d56aa))
* changed link in tag url ([9eef7cd5](https://github.com/aml-development/ozp-center/commit/9eef7cd5d26e0b0197dec3ee1c6eb9c80d48ba0c))
* added recommendations ([9359494f](https://github.com/aml-development/ozp-center/commit/9359494fa6964c3ada1328478e7b36ff45579966))
* changed link in tag url ([1c9316c4](https://github.com/aml-development/ozp-center/commit/1c9316c49c20e0fe2a3567810e866cb6fa79695c))     

### 1.1.59 (2017-02-22)   

#### Merge Pull Requests  
* Merge pull request #763 from aml-development/pie_zulu ([a373224f](https://github.com/aml-development/ozp-center/commit/a373224f60dd4869b643967356b86d51786a1c4f))         

#### Changes  
* Updating for site-wide consistency. ([83fa08aa](https://github.com/aml-development/ozp-center/commit/83fa08aadc6908576b492f3fc11a56c77b9b5571))     

### 1.1.58 (2017-02-15)   

#### Merge Pull Requests  
* Merge pull request #762 from aml-development/pie_zulu ([cd1d0de1](https://github.com/aml-development/ozp-center/commit/cd1d0de1b6d860a9639367c4c14e0fd80fdc441f))         

#### Changes  
* Added indication of zulu time per AMLNG-314 ([7058c04a](https://github.com/aml-development/ozp-center/commit/7058c04a3e1be2e88100a289c9fb59d68bceca7b))     

### 1.1.57 (2017-02-03) 

#### Fixes  
* fix: undelete listner was changed to undelete instead of save listing ([791c3fe5](https://github.com/aml-development/ozp-center/commit/791c3fe536f579ae976e96e9a2e7cbeb5056842f))
* fix: undelete listner was changed to undelete instead of save listing ([a4a38449](https://github.com/aml-development/ozp-center/commit/a4a38449d591793637d35b385eeacf763b898698))
* (fix):undelete listens to save not undelete completed ([1f9958dd](https://github.com/aml-development/ozp-center/commit/1f9958ddd59412e9609b4b7d4c3f9b73096e4746))
* (fix):listings will update changelogs on delete and pending delete action is performed ([729c6e76](https://github.com/aml-development/ozp-center/commit/729c6e7699f7491e17ac15fd58b62e75a2931143))
* fix: globallistingstore was not needed in changelogs ([5c9a04bf](https://github.com/aml-development/ozp-center/commit/5c9a04bf019b22dd0958e7d69b44a2107e37bdc0))
* (fix): orgstewards are now ablt to approve deletions properly and the store will update the quickview logs ([5df17b24](https://github.com/aml-development/ozp-center/commit/5df17b246fae764ec349b7b2cdf3482dc3bedae7))
* fixed issue where grid listings where not loading after swtiching to My Listings ([3c122fc3](https://github.com/aml-development/ozp-center/commit/3c122fc35327439f0eba19bfeaba3918c872760d))
* fix for search clear icon showing on blank search ([b4ace747](https://github.com/aml-development/ozp-center/commit/b4ace74732aa1e217f2c5c020d226c987533cc7a))
* fixed issue with search bar clearing unexpectantly after cached search ([fa5c559b](https://github.com/aml-development/ozp-center/commit/fa5c559b2db4a09d465258ca09b74d1bc29eac88))
* (fix): if statement should now properly detect empty spaces as well ([a800b977](https://github.com/aml-development/ozp-center/commit/a800b977a03367737ca47db54e8bc1fb81e83070))
* (fix): altered if conditional per laura reccomendations ([c2350789](https://github.com/aml-development/ozp-center/commit/c23507892465df42cfabf544b251060569f36040))
* (fix):when undeleting the listing the is enables status is set to true instead of keeping it deleted ([9f105438](https://github.com/aml-development/ozp-center/commit/9f1054387492ab8f952c183b1fcd691f3363fb52))     

#### Merge Pull Requests  
* Merge pull request #761 from aml-development/grid_refresh ([1391f4c8](https://github.com/aml-development/ozp-center/commit/1391f4c8d0ebcbeb0a3e5d256720b696d01c9d61))
* Merge pull request #760 from aml-development/orgstweard_delete ([742238f6](https://github.com/aml-development/ozp-center/commit/742238f60dcef2baaca52df90134098791012480))
* Merge pull request #757 from aml-development/grid_search ([122926a1](https://github.com/aml-development/ozp-center/commit/122926a1b8ea73e5070342b5a1514c1ea67fb3ce))
* Merge branch 'master' into orgstweard_delete ([71187033](https://github.com/aml-development/ozp-center/commit/711870337e017693b7cb46799a0bc9c3bf2f126a))
* Merge pull request #758 from aml-development/enable_undelete ([d436583d](https://github.com/aml-development/ozp-center/commit/d436583d79a2d583a0428371bd51298ba70f9089))         

#### Changes  
* listingchangecompleted will now receive listing data when pending for deletion and undeleting ([1e2f27bb](https://github.com/aml-development/ozp-center/commit/1e2f27bb4e48d255ca9d14c69458d8bedc4b22b7))
* removed console log ([40b3e754](https://github.com/aml-development/ozp-center/commit/40b3e754093c62e704bde6d364227c8615f04306))
* corrected issue when searching for blank string ([6f6e0547](https://github.com/aml-development/ozp-center/commit/6f6e054723562bd69437d37fc731949110030787))
* added a check to verify the text in the search box was actually the desired search term ([8db9bf61](https://github.com/aml-development/ozp-center/commit/8db9bf615b115064a73a169705c8077876206046))     

### 1.1.56 (2017-01-19) 

#### Fixes  
* **all listings grid view**:  Applications are not loaded all at once #135 (#755) ([b63a67d8](https://github.com/aml-development/ozp-center/commit/b63a67d87e0462d2741b516e6f5a63fb317f44ca))    
* fixed path when transitioning from within agencies listing management ([e0b30c1e](https://github.com/aml-development/ozp-center/commit/e0b30c1e91742938503bdcc89464c6ab09216cec))
* fixed button size in create edit and text for pending deletion and undelete. ([776b802f](https://github.com/aml-development/ozp-center/commit/776b802f3aa2b3d147dffefe847b2db58604259b))
* fixed the listings to only do one call in listing management ([317cfa5e](https://github.com/aml-development/ozp-center/commit/317cfa5ecdadc07a2d45abc858fdf1e3c0b4fab7))     

#### Merge Pull Requests  
* Merge pull request #756 from aml-development/bugfix ([d9c469db](https://github.com/aml-development/ozp-center/commit/d9c469db2a9d3ec3019596f010766f1e5f641198))         

#### Changes  
* changed where edit listing was clipping the html ([ed4514f9](https://github.com/aml-development/ozp-center/commit/ed4514f942ad3af35de6bea357364e9455d8f9a0))
* removed uneeded variable decleration ([6cb5e64b](https://github.com/aml-development/ozp-center/commit/6cb5e64b51c481e2252bdbc45ab0a11ee6dd45c0))
* the delete and undelete routing issue has been fixed when clicking cancel it will remain on the current page ([8388bcdb](https://github.com/aml-development/ozp-center/commit/8388bcdb0cc12e315e0cfa8f4289a06e4e5954e6))
* if agency is not found redirect to mylistings ([5f439b02](https://github.com/aml-development/ozp-center/commit/5f439b02358d947b6fe901e50671eff6219a8ada))
* the org should be displayed in quickview admin tab also fixed text in undeleteconfirmation ([8b7bc7c6](https://github.com/aml-development/ozp-center/commit/8b7bc7c6cbc697870f62bf33704eee9715ca3a32))
* moved delete and pend delete to confrimation models that provide feedback when completed. ([1c62aed3](https://github.com/aml-development/ozp-center/commit/1c62aed3b387d321f9c7c92a6eab2f0824dcdbc9))
* added undelete conformation box to mylistings ([0fc01208](https://github.com/aml-development/ozp-center/commit/0fc0120839424f83207ac845aba28b1ed771b611))
* my listings will now refresh when actions are done to the listings. ([0abad92a](https://github.com/aml-development/ozp-center/commit/0abad92a7d8615be96a606a646c2df9732f7834a))     

### 1.1.55 (2017-01-11)   

#### Merge Pull Requests  
* Merge pull request #754 from aml-development/pending_delete ([eff9fc27](https://github.com/aml-development/ozp-center/commit/eff9fc27123e79ecfa4121ebae0a71edbfa990d1))         

#### Changes  
* removed console log ([36e5bdb2](https://github.com/aml-development/ozp-center/commit/36e5bdb2974ae3296826493729ab68ce2b472011))
* added logicfor admins to delete from the dropdown menu ([a27c7fe2](https://github.com/aml-development/ozp-center/commit/a27c7fe21d893c2c0cbae030f507e37048d96df9))
* center admins will now be able to see the delete button ([b91600ae](https://github.com/aml-development/ozp-center/commit/b91600ae089dc4a07d4b31908f9efeba8a34abb4))
* added spacing to approve and reject ([2503f22b](https://github.com/aml-development/ozp-center/commit/2503f22bb385513134b67e72cb8a5f8cd44a150f))
* changed button color to green and orange for success and reject ([a56ecee3](https://github.com/aml-development/ozp-center/commit/a56ecee3be34ac41bb7543b94f1a456a0d720bad))
* changed dropdown order for deleted listings ([4700aed5](https://github.com/aml-development/ozp-center/commit/4700aed50d18a6d4dc9b0c9b00883c049f853196))     

### 1.1.54 (2017-01-10) 

#### Fixes  
* Fixed JS warning about unique keys on DetailsTab ([02419284](https://github.com/aml-development/ozp-center/commit/0241928404e66911da8d5415461ae6ca8cdc5e8e))
* Fixed JS warning about unique keys on DetailsTab ([6c57a3c3](https://github.com/aml-development/ozp-center/commit/6c57a3c374bd9de8188301f2dbf1cc889854eaaa))     

#### Merge Pull Requests  
* Merge pull request #750 from aml-development/uniqueKeyDetailsTab ([cee2f3a5](https://github.com/aml-development/ozp-center/commit/cee2f3a59d651c94df1441a87272bf0c75604710))
* Merge pull request #751 from aml-development/124marginTop ([1a38a034](https://github.com/aml-development/ozp-center/commit/1a38a034aee34dec1464ab98d4a625da48fcd1a3))
* Merge pull request #752 from aml-development/196_BrowseButtonStyle ([7138ecaf](https://github.com/aml-development/ozp-center/commit/7138ecafe022cb8941b9cc06b5ebff7b20e55298))
* Merge pull request #753 from aml-development/125_SameKey ([a288354b](https://github.com/aml-development/ozp-center/commit/a288354b1853c67140a16c777c0086069656bcc5))         

#### Changes  
* made it possiable for draft listings to be able to be deleted. Also changed how the delete listing action functions ([fd3ea29c](https://github.com/aml-development/ozp-center/commit/fd3ea29c94ff1dab59519ba3b8d95e7d8ee36d19))
*  changed icons for pending deletion in listing management and quickview ([078189f9](https://github.com/aml-development/ozp-center/commit/078189f94faa4820eed89713c3766b4f84b7bd88))
* Re-init-ing Notifications after a new fetch. ([98dff520](https://github.com/aml-development/ozp-center/commit/98dff52039b8fb5fa239049be98eecfbc01c0b6a))
*  added pending delete model ([ac0e6da4](https://github.com/aml-development/ozp-center/commit/ac0e6da4fc8817a6e47b8a4923bbc03715272025))
*  added pending deletion options in my listings ([c0f7d97f](https://github.com/aml-development/ozp-center/commit/c0f7d97fdc9b755bdb68e96933e6ac05787c4b7a))
* Adding a style specifically for FF Browse button on Listing Management page ([6f71cd59](https://github.com/aml-development/ozp-center/commit/6f71cd5944a9fd3e68c70a5b2ff171fbbcc46c9a))
* Removing changes from other commit ([de120f3f](https://github.com/aml-development/ozp-center/commit/de120f3f0e65a1e299d1236fb92d250fb837a7ea))
* Changed margin-top to marginTop ([9405cbeb](https://github.com/aml-development/ozp-center/commit/9405cbebab775d6db9b86210d2cf37dcd66abe45))
* removed console logs and fixed mylistings link in reacent activity ([e517b27f](https://github.com/aml-development/ozp-center/commit/e517b27f07a988fe059b7269680eefd5ad22f620))
* added pending delete states to listings view ([ed45baa4](https://github.com/aml-development/ozp-center/commit/ed45baa48dac2c9ae0e98c67148af649e22f5c78))     

### 1.1.53 (2016-12-14) 

#### Fixes  
* **typeahead**:  fixed issue with typeahead not correctly inputting AML-185 (#749) ([cba17834](https://github.com/aml-development/ozp-center/commit/cba17834bbd3e4f58b838efbcc0be4ad217efbe5))           

#### Changes  
* **style**:  updated styles for hovering typeahead suggestions aml-159 (#748) ([51083525](https://github.com/aml-development/ozp-center/commit/51083525ac5c29dcb5e96c390d4c8c560c184eab))     

### 1.1.52 (2016-12-09) 

#### Fixes  
* **search**:  Agency name is now displayed AMLNG-188 (#747) ([7bb822d4](https://github.com/aml-development/ozp-center/commit/7bb822d4c789ff6c786c25920ad54a59ee7fd51b))    
* **typeahead**:  parameters are now correctly passed in to typeahead e ([ac3003ea](https://github.com/aml-development/ozp-center/commit/ac3003ea14f5cc962cfba9bb073a727ad5e796b2))           

#### Changes  
* **typeahead**:  Application details now popup when application name is selected in typeahead AMLNG-114 (#746) ([7cf518af](https://github.com/aml-development/ozp-center/commit/7cf518af127883419979f3520f843db81fad8b26))    
* working on it ([c6ca6573](https://github.com/aml-development/ozp-center/commit/c6ca6573142ea797eca8266c50017697b5347d9d))     

### 1.1.51 (2016-11-30)   

#### Merge Pull Requests  
* Merge pull request #744 from aml-development/noedit ([718c3f1e](https://github.com/aml-development/ozp-center/commit/718c3f1e1182c10fc4d510962dd46d2b6a166732))           

### 1.1.50 (2016-11-30)

#### Feature  
* **details**:  when clicking url to listing it will open in a new tab ([33847c2d](https://github.com/aml-development/ozp-center/commit/33847c2d54b409e87d48fc7803f1fc1a89beff9b))    

#### Fixes  
* **details**: tags have been updates to work on all browser versions ([e1550346](https://github.com/aml-development/ozp-center/commit/e1550346e95c6bc1f468f8ec06c6c5cf9c8b8c78))     

#### Merge Pull Requests  
* Merge pull request #742 from aml-development/newtab ([d5a85968](https://github.com/aml-development/ozp-center/commit/d5a859682d0d092bd7bb09e44e4af307cac57c90))
* Merge pull request #741 from aml-development/tag_fix ([943a302f](https://github.com/aml-development/ozp-center/commit/943a302fea3947501e5c1002d7ea81b8efba5e4a))         

#### Changes  
* **search**:  Adding elastic search functionality SearchOptimization epic AMLNG-45 (#743) ([cd52095b](https://github.com/aml-development/ozp-center/commit/cd52095b17ced6dc60c4a14fde2f877044826075))   
* **createedit**
  * added a alert to notify users when matainence is going on in appsmall ([4c5ecd19](https://github.com/aml-development/ozp-center/commit/4c5ecd19a04d07eac158154f7328960f0e3ff694))
  * added a alert to notify users when matainence is going on in appsmall ([7256973c](https://github.com/aml-development/ozp-center/commit/7256973cb870ae75b2ccc5fb47b36a0b529cdc4e))      

### 1.1.49 (2016-11-16)

#### Feature 
* **createedit**
  * added color to the text of the username list ([bd25e933](https://github.com/aml-development/ozp-center/commit/bd25e933d67c6d66348ff72da9a7eb0210b7caf2))
  * added color to the text of the username list ([2c1cb0f0](https://github.com/aml-development/ozp-center/commit/2c1cb0f08906769aa0a7df310f18f41fca2db0dc))
  *  added a check for the server certificate validity ([7ec91ea6](https://github.com/aml-development/ozp-center/commit/7ec91ea633356c368bb05a465169da6b300cbf18))     

#### Fixes  
* **index**: changed verbage from orginization to agencies ([0c9830cf](https://github.com/aml-development/ozp-center/commit/0c9830cf274d7bdfbbb9ebd1b68ddf95a4e24b7d))     

#### Merge Pull Requests  
* Merge pull request #740 from aml-development/konsoa_fix3 ([38363af6](https://github.com/aml-development/ozp-center/commit/38363af6f6aa8280fd572f1066c50d171b0c803e))
* Merge pull request #737 from aml-development/722_verbage ([f2d029cc](https://github.com/aml-development/ozp-center/commit/f2d029cc4ba902578c92bc604f0c31caa3abca1b))         

#### Changes  
* removed console log ([71887c9d](https://github.com/aml-development/ozp-center/commit/71887c9db77199c4a1346332556a41bdb0151eaf))    
* **createditpage**:  changed check functionality to scroll to owners field when opening up the listing ([3a8a8630](https://github.com/aml-development/ozp-center/commit/3a8a86307b8860cb58a598a07950302544145c56))     

### 1.1.48 (2016-11-07) 

#### Fixes  
* **index**: changed verbage to say agency ([456e9d1b](https://github.com/aml-development/ozp-center/commit/456e9d1bd4d17bd8a62dbe8fc3f8364c036e60ee))    
* **featuredlistings**:  Removed featured listings from the featured lists #631 ([4e4c8639](https://github.com/aml-development/ozp-center/commit/4e4c8639a2778a0d02b6a61b632a8a8cfc5e9256))    
* **listings**:  updated the way owned listings was being stored so that deleted listings are updated #631 ([3c0a0bbf](https://github.com/aml-development/ozp-center/commit/3c0a0bbf89539277a000e0d58b41f29d547ab904))     

#### Merge Pull Requests  
* Merge pull request #736 from aml-development/722_verbage ([47db18c3](https://github.com/aml-development/ozp-center/commit/47db18c3a53b70b40b66fe0c1284dadc88a0b7b8))
* Merge pull request #735 from aml-development/631_DeletedApsReturnInFeatured ([12fd8303](https://github.com/aml-development/ozp-center/commit/12fd830313b8e0ba45a6bfd9b5c6585a3b887127))           

### 1.1.47 (2016-10-26) 

#### Fixes 
* **carousel**
  *  correcting previous style change which prevented carousel animation ([de43acaf](https://github.com/aml-development/ozp-center/commit/de43acafa01e7f76200e37758934a6d9c14d6f47))
  *  Added newline because github was complaining #726 ([17fff233](https://github.com/aml-development/ozp-center/commit/17fff2335a8c1aae010ac81bbe503d04420a7dba))
  *  Forgot new style sheet #726 ([9c54020d](https://github.com/aml-development/ozp-center/commit/9c54020d312834bdb6a0f61232f3431e1ea9803b))
  *  Fixed styling for new listings so they don't appear out of the list #726 ([edab8279](https://github.com/aml-development/ozp-center/commit/edab8279ccf7bf3e84774090edbcf1f285225f06))      

#### Merge Pull Requests  
* Merge pull request #729 from aml-development/726_CarouselScrollFix ([7537ce7d](https://github.com/aml-development/ozp-center/commit/7537ce7d629e6d4b45c569ec3e4ce4e58882abc9))           

### 1.1.46 (2016-10-20) 

#### Fixes  
* **notificationsettings**:  Fix notification overflow ([9d166575](https://github.com/aml-development/ozp-center/commit/9d1665754090e9c2824520b50b68c209b6023000))    
* **carousel**:  Moved carousel buttons below carousel div to correct clickthrough #723 ([c641ae03](https://github.com/aml-development/ozp-center/commit/c641ae038b987dbea9316367d49e179de1d4a1ff))   
* **securitybanner**
  *  Removing console.log #709 ([598d03f2](https://github.com/aml-development/ozp-center/commit/598d03f2adcd887a5944c447e3fb7c394a6c108d))
  *  Check if current user is a secondPartyUser and sets classification accordingly #709 ([f5b56837](https://github.com/aml-development/ozp-center/commit/f5b56837806de324061b3faa567179d991a20d61))      

#### Merge Pull Requests  
* Merge pull request #728 from aml-development/691_LongNotifications ([558651ba](https://github.com/aml-development/ozp-center/commit/558651babcaf709f1bad4832158b718bb92b688c))
* Merge pull request #725 from aml-development/723_CarouselScrollFix ([33cf0ca1](https://github.com/aml-development/ozp-center/commit/33cf0ca1df09eb87df40ed99a5414233bbbc503f))
* Merge pull request #724 from aml-development/709_SecurityBanner ([201b1c43](https://github.com/aml-development/ozp-center/commit/201b1c43fa8181873308dac324c1a98c738468cd))         

#### Changes  
* Deleted listings are removed from featured but a lot of backend calls are made ([abb9b48f](https://github.com/aml-development/ozp-center/commit/abb9b48f4162e3053e9570546cdbe07e2494a94e))     

### 1.1.45 (2016-10-05) 

#### Fixes  
* **carousel**:  Fixed arrows disappearing when tabbing into carousel #524 ([cedc7910](https://github.com/aml-development/ozp-center/commit/cedc79100c1941c77d81e063c6197c59540a029b))    
* **reviews**:  Changed variable name and text to reflect that reviews are not to be above FOUO #686 ([88e0dc90](https://github.com/aml-development/ozp-center/commit/88e0dc90918dc7c3207451056c595a519b349175))     

#### Merge Pull Requests  
* Merge pull request #720 from aml-development/719_IncreaseTagLength ([18f92d2d](https://github.com/aml-development/ozp-center/commit/18f92d2d31a4df4ae8cdc0d58560c7b0a3149a43))
* Merge pull request #721 from aml-development/524_CarouselFix ([ebe0b225](https://github.com/aml-development/ozp-center/commit/ebe0b22501fff855c8f7686eb4c82e14f97633c3))
* Merge pull request #718 from aml-development/686_fixReviewWarningMessage ([d6b6f936](https://github.com/aml-development/ozp-center/commit/d6b6f9362a482f6cf27c4d6ec590bf7c0d3d14d7))         

#### Changes  
* **tags**:  Increase tag length to 30 #719 ([b14319cd](https://github.com/aml-development/ozp-center/commit/b14319cd9e32317335ea2ae693bd3626ef95fdad))     

### 1.1.44 (2016-09-21) 

#### Fixes  
* **index**: added a check to see if we should display webtop ([e14c4e5a](https://github.com/aml-development/ozp-center/commit/e14c4e5ad69a7a20750d46bcf29c07c3ec26fd2a))     

#### Merge Pull Requests  
* Merge pull request #717 from aml-development/hide_webtop ([5c3c7380](https://github.com/aml-development/ozp-center/commit/5c3c7380d3c767bb1b52fe9f10dd1b618f7ae24b))           

### 1.1.43 (2016-09-09) 

#### Fixes  
* Fix: reset global_ran when restarting tour ([7f3d4f86](https://github.com/aml-development/ozp-center/commit/7f3d4f86ce3786fc32218fa1b76d9f03a0d279eb))
* fix: centerTour.js ([e7e7da77](https://github.com/aml-development/ozp-center/commit/e7e7da77f91936050eeb5080f5e5a136d0062a5d))
* fix: new code to redirect at end of center tour ([e69f8853](https://github.com/aml-development/ozp-center/commit/e69f88539aa2cd6d12d83fdc6d5d33a0965642c6))     

#### Merge Pull Requests  
* Merge pull request #712 from aml-development/705_tour ([a4b6768c](https://github.com/aml-development/ozp-center/commit/a4b6768cf71ca5c503da4d035add7648e31f8d3f))         

#### Changes  
* Update centerTour.js ([6aa82a9c](https://github.com/aml-development/ozp-center/commit/6aa82a9c83ce0a8be373f912af1b161c31f1a82a))
* Update centerTour.js ([a512cf24](https://github.com/aml-development/ozp-center/commit/a512cf24372ef4de6ff6c09c1553547aae80cd12))
* modified centerTour.js and tour.js to support changes to tour in Hud ([f1216cf0](https://github.com/aml-development/ozp-center/commit/f1216cf04b35cf63ee08c18581daa7c9a73cbf70))     

### 1.1.42 (2016-09-01)

#### Feature  
* **private listings**:  Added private listings back in ([2496cc8e](https://github.com/aml-development/ozp-center/commit/2496cc8e8146101bfc3c95e6993a343bdd089dd7))    

#### Fixes  
* **index**: added a check to see if the backend is throwing additional error codes that are not checked for in the validation. ([56123cc6](https://github.com/aml-development/ozp-center/commit/56123cc645271069ed603775323685f53bd0fd28))     

#### Merge Pull Requests  
* Merge pull request #707 from aml-development/706_error ([8b54d653](https://github.com/aml-development/ozp-center/commit/8b54d65325eca053874abf9dc6a355328a95ae1e))
* Merge pull request #703 from aml-development/private-listings ([20c80616](https://github.com/aml-development/ozp-center/commit/20c806164b9b6619ec6f5185b3a3f4b06064a462))           

### 1.1.41 (2016-08-26) 

#### Fixes  
* **editreview**: disabled review editing except for own reviews ([f0a364b7](https://github.com/aml-development/ozp-center/commit/f0a364b7933851cd39511afb2693ccd86f947827))    
* **index**: removed console log ([b22cf3e8](https://github.com/aml-development/ozp-center/commit/b22cf3e8040bf317ca19d2e49f85f090f95b7983))     

#### Merge Pull Requests  
* Merge pull request #702 from aml-development/review_text ([ea82621d](https://github.com/aml-development/ozp-center/commit/ea82621d343bc59e307a31a75ffe43418cd70857))
* Merge pull request #698 from aml-development/secure_menu ([cbca6284](https://github.com/aml-development/ozp-center/commit/cbca6284edd5e8e6dd27c5a33ee55338bfa68b9e))
* Merge pull request #701 from aml-development/revert-696-packagejson ([3e9c53a9](https://github.com/aml-development/ozp-center/commit/3e9c53a906d0edf6daa417630f3de01ac2e726c6))         

#### Changes  
* Revert "fix(package):fs package is now part of the npm core" ([61635d4f](https://github.com/aml-development/ozp-center/commit/61635d4f8579fa39fc7f5bb145b270a42f2929c1))     

### 1.1.40 (2016-08-24)

#### Feature  
* **index**: changed logic that checks for 2nd party users ([ef64f391](https://github.com/aml-development/ozp-center/commit/ef64f391f563c41b4d62625e52d59415cbd76d04))    

#### Fixes  
* **package**: fs package is now part of the npm core ([2f4013b5](https://github.com/aml-development/ozp-center/commit/2f4013b5a98d2944d236f25b3a34a5f681692de4))   
* **editreview**
  *  reviews will now look for user id instead of username ([55f71428](https://github.com/aml-development/ozp-center/commit/55f7142899e4705b4e7112ebc6378e3fc3f049ae))
  * changed check to see if user could edit review. only the user that submitted review should be able to edit the review ([91f1f387](https://github.com/aml-development/ozp-center/commit/91f1f387a4ca05b3d14de7745d9306e03bb79443))     
* **reviews**: removed edit icon for masked users ([8919e9bf](https://github.com/aml-development/ozp-center/commit/8919e9bf0cf08ada580e0b85cf65c733f8034d58))     

#### Merge Pull Requests  
* Merge pull request #695 from aml-development/reviewtab ([33990c7f](https://github.com/aml-development/ozp-center/commit/33990c7ffbd7ba7216819c25767e9c1d66471b8d))
* Merge pull request #696 from aml-development/packagejson ([c570c976](https://github.com/aml-development/ozp-center/commit/c570c97690bcfdfe97c9188bab0cb5ee1ad3279f))         

#### Changes  
* Update EditReview.jsx ([b4737754](https://github.com/aml-development/ozp-center/commit/b4737754d0dc3ddb79d283aa5dced9431e95d141))
* Update EditReview.jsx ([70b337d2](https://github.com/aml-development/ozp-center/commit/70b337d2bf7ce4c5fd3c2bd82d85e37f1d9b9825))
* Update EditReview.jsx ([effc0b4d](https://github.com/aml-development/ozp-center/commit/effc0b4d1fb16bfbd03ff1fc512c0e6927f7d26c))     

### 1.1.39 (2016-08-19)

#### Feature 
* **index**
  * removed admin check added variable for username ([5959a24a](https://github.com/aml-development/ozp-center/commit/5959a24abcc85a73587864e931010a5071f8b58c))
  * added security checks to make sure user has access to certin features ([09a86721](https://github.com/aml-development/ozp-center/commit/09a8672198200df8b5a994f3148c05c326224a60))       

#### Merge Pull Requests  
* Merge pull request #690 from aml-development/687_security ([7957c03d](https://github.com/aml-development/ozp-center/commit/7957c03d716745645f83824c159f85a550026817))           

### 1.1.38 (2016-08-10)

#### Feature  
* **index**: added support for masked usernames ([c1a25bca](https://github.com/aml-development/ozp-center/commit/c1a25bcaf61b7977fe120e00317d5ce03767efa1))      

#### Merge Pull Requests  
* Merge pull request #684 from aml-development/admintab ([56898951](https://github.com/aml-development/ozp-center/commit/56898951bcfa22c71a038970ecd31feb835796fa))           

### 1.1.37 (2016-08-03)

#### Feature  
* **shared folder**:  added tweaks to notifications modal ([6aee0fff](https://github.com/aml-development/ozp-center/commit/6aee0fff22c443babb01dd329f828be67a6db406))    
* **shared folders**:  Shared folders additions ([ee95bac2](https://github.com/aml-development/ozp-center/commit/ee95bac2e9beca6e78b3b4fd57a689b46548c357))    

#### Fixes  
* **index**: admin tab will not display for non admin users and will also not display a hyperlink for owners in details tab ([4f9b6a9d](https://github.com/aml-development/ozp-center/commit/4f9b6a9de9cb3825d1f09ecb04110de34bcbff22))     

#### Merge Pull Requests  
* Merge pull request #680 from aml-development/shared-folders ([df8f547a](https://github.com/aml-development/ozp-center/commit/df8f547a93f6034209ebf4b56642ecf3d5810deb))
* Merge pull request #677 from ozone-development/wski-patch-1 ([dadcc2de](https://github.com/aml-development/ozp-center/commit/dadcc2de6186d00acaf928197e4e6953878cc530))         

#### Changes  
* Update notificationsmodal.jsx ([691dcadc](https://github.com/aml-development/ozp-center/commit/691dcadcf5a558588f33edc732c9b188bfe09ca1))
* Update notificationsmodal.jsx ([7e6ad4ef](https://github.com/aml-development/ozp-center/commit/7e6ad4ef5923a12714610f29752a797bf861edcc))
* Update .eslintignore ([4b18825d](https://github.com/aml-development/ozp-center/commit/4b18825df783c975dade415b00ed8389d6ad1e2f))     

### 1.1.36 (2016-07-28)

#### Feature  
* **typeahead**:  Added typeahead to center ([13897ee8](https://github.com/aml-development/ozp-center/commit/13897ee82bccb03c685d657c6fd11c98f1b61cfc))   
* **detailstab**
  *  took out the comma ([09c25de9](https://github.com/aml-development/ozp-center/commit/09c25de959c4f0d4d321cf1694194cba845d33fb))
  * click will now properly redirect to tag search ([1be2aab0](https://github.com/aml-development/ozp-center/commit/1be2aab0c23678e977ab858c04082579bbdf6497))       

#### Merge Pull Requests  
* Merge pull request #675 from ozone-development/typeahead ([b24be3cf](https://github.com/aml-development/ozp-center/commit/b24be3cf504626535e3513fe263d918c2e8a8f73))
* Merge pull request #674 from ozone-development/669_tags ([17737bea](https://github.com/aml-development/ozp-center/commit/17737bea508ca763088a9c257ae2ce2c2484758e))           

### 1.1.35 (2016-07-14)

#### Feature  
* **details**: mafde tags a hyperlink for quick searches ([0c7fc0b8](https://github.com/aml-development/ozp-center/commit/0c7fc0b8d7b8461f84da2963a6f43cade36968b5))    

#### Fixes  
* **notifications**: changed wording for active notifications from expired to expires ([b997d8a5](https://github.com/aml-development/ozp-center/commit/b997d8a554d0f341b46f398c9ad1531c16e87212))     

#### Merge Pull Requests  
* Merge pull request #668 from ozone-development/659_expired ([cd9127fe](https://github.com/aml-development/ozp-center/commit/cd9127fe62fa2176948c78a21723c0d13d699398))           

### 1.1.34 (2016-07-06) 

#### Fixes  
* **notifications modal**:  Show listing name, don't show authors. ([682cfc04](https://github.com/aml-development/ozp-center/commit/682cfc0479cdd49d63475f44c99c8ded5cbff37e))   
* **bookmark**
  *  #656: change ([511e4182](https://github.com/aml-development/ozp-center/commit/511e41823381cd9bc641a98baa3ac33e4b150550))
  *  #656: fixed code in BookmarkButton.jsx ([f95089f7](https://github.com/aml-development/ozp-center/commit/f95089f726edc88efa7c010b29f48c179c3d226b))      

#### Merge Pull Requests  
* Merge pull request #665 from ozone-development/wski-patch-2 ([c49c0d9c](https://github.com/aml-development/ozp-center/commit/c49c0d9cb5f45ef09e2771eef6b670e63cd3f8fd))
* Merge pull request #661 from ozone-development/656_bookmark ([882a5063](https://github.com/aml-development/ozp-center/commit/882a5063cb15fe84fc26ed6850c1d7f8cbaa6ec8))
* Merge pull request #663 from ozone-development/wski-patch-1 ([4c9c56a2](https://github.com/aml-development/ozp-center/commit/4c9c56a260f7e63577ba60f327be35dbf76fe82a))         

#### Changes  
* update ([7beea68f](https://github.com/aml-development/ozp-center/commit/7beea68f088922d7c91971909ce769a57c3be364))
* Update timeAgo.js ([06be2e6a](https://github.com/aml-development/ozp-center/commit/06be2e6ab410b65ee6fa86d3c5faf72c6cc79e82))
* Update timeAgo.js ([b7042d28](https://github.com/aml-development/ozp-center/commit/b7042d289999f5347aafce254ebb5676cac1ceff))
* Update timeAgo.js ([585aa766](https://github.com/aml-development/ozp-center/commit/585aa76625abd0557febd9edbdd51b6a7d134eb7))     

### 1.1.33 (2016-06-30)

#### Feature  
* **timedate**:  If timestamp is more than 24 hours old show date ([13d0628d](https://github.com/aml-development/ozp-center/commit/13d0628deb76366257377f65cb2528473271bed7))    

#### Fixes 
* **bookmark**
  *  #656: removed console.log() ([9c6d9be9](https://github.com/aml-development/ozp-center/commit/9c6d9be98fa166b93482299c0836146a0e57e76b))
  *  #656: removed componentWillMount() ([49618e72](https://github.com/aml-development/ozp-center/commit/49618e72d78930ed0a9cff202c5d73adc9d27552))
  *  cleaned up toggleInLibrary() and componentDidUpdate() ([9912a21f](https://github.com/aml-development/ozp-center/commit/9912a21f8a25f40b5c4b5e729bec960e9e94aa0e))
  *  #656: changed to componentDidUpdate, added if() and removed unused function call ([7a4bf4ce](https://github.com/aml-development/ozp-center/commit/7a4bf4cece94a2eaf0d7cdde17be208383c8e8b8))    
* **shrimkwrap**
  * removed resolved from tour in srinkwrap ([9f6d1848](https://github.com/aml-development/ozp-center/commit/9f6d18486f6c2219ef597b8a7a5c01420918882a))
  * removed resolved from tour in srinkwrap ([c4b44926](https://github.com/aml-development/ozp-center/commit/c4b44926b6ee74fcc790bfbe217696a1dd3b8582))    
* **centertour**
  * fixed bug that was causing step errors on last step of tour ([50dab377](https://github.com/aml-development/ozp-center/commit/50dab377cc996ced5c12a9d7d5f7f3cb7f33cb1b))
  * removed debug ([2e7f2fd5](https://github.com/aml-development/ozp-center/commit/2e7f2fd532740b7b27354899dc3a3fb28fcb967d))
  * fixed tour bug ([da6beeb5](https://github.com/aml-development/ozp-center/commit/da6beeb5662b875f1117e07271644272e1e357fa))     
* **listinginput**: listings have been limited to 10 inputs ([3f9a37c5](https://github.com/aml-development/ozp-center/commit/3f9a37c5090ba09dfa1242216f557e8d307b67cf))     

#### Merge Pull Requests  
* Merge pull request #662 from ozone-development/614_ffbug ([f53e924c](https://github.com/aml-development/ozp-center/commit/f53e924c3138ce83da81be9d5a4bd11140937445))
* Merge pull request #655 from ozone-development/wski-metrics-fix ([0ea2b3c4](https://github.com/aml-development/ozp-center/commit/0ea2b3c482a3015bde574833b3904cdaee880164))
* Merge pull request #652 from ozone-development/194_createedit ([f474fb9d](https://github.com/aml-development/ozp-center/commit/f474fb9d26562653c77820e3590024a3a1146090))         

#### Changes  
* Update ListInput.jsx ([582b460a](https://github.com/aml-development/ozp-center/commit/582b460a30626925f529173750fca3e181a7bbef))
* mvd this.state.library2 => var library3 ([a393863f](https://github.com/aml-development/ozp-center/commit/a393863faa4f72d6c386e35d2cb149ec610588f5))
* Update Listing.js ([029d23f4](https://github.com/aml-development/ozp-center/commit/029d23f4bed00a70a64bc6f3e2ae1814bc96ae83))     

### 1.1.32 (2016-06-22)

#### Feature  
* **app notifications**:  added ability to send notifications to app users ([8c912232](https://github.com/aml-development/ozp-center/commit/8c9122324b310cbe6c0ddbd0f3bbebde5660f5d2))    

#### Fixes 
* **bookmark**
  *  #649: I like Matt's better too ([411667f1](https://github.com/aml-development/ozp-center/commit/411667f1ff689e307c63cf734c81c3dfb7fdd9ca))
  *  #649: Added jS code to polyfill str.includes ([14fe40fb](https://github.com/aml-development/ozp-center/commit/14fe40fbf946eb40f1eb7938fd95eb72bc323a83))     
* **alllistings.jsx**: this is never used in the project ([a9966c6d](https://github.com/aml-development/ozp-center/commit/a9966c6df94a42635df1b28935c0808b224dcd12))    
* **index.jsx**: changed search to clear when switching filters ([b2d5dcb9](https://github.com/aml-development/ozp-center/commit/b2d5dcb9fec894431605cd02944c7074f2899961))     

#### Merge Pull Requests  
* Merge pull request #651 from ozone-development/app-notifications ([6a0c20df](https://github.com/aml-development/ozp-center/commit/6a0c20df4146149724271cbe34c098a96a8d3a9c))
* Merge pull request #648 from ozone-development/646_alllistings ([a0cc4c78](https://github.com/aml-development/ozp-center/commit/a0cc4c78488618330c106208efd2dddc7b21df5b))
* Merge pull request #647 from ozone-development/styling-hudtour ([bd052185](https://github.com/aml-development/ozp-center/commit/bd052185ffbe45ccd3f05eb4ac57683a083e3209))
* Merge pull request #650 from ozone-development/649_strIncludesMethod ([85543dae](https://github.com/aml-development/ozp-center/commit/85543daee2b35ca0f4fb53eeb7eb8a2bc71649bc))           

### 1.1.31 (2016-06-15) 

#### Fixes 
* **listing**
  *  #596: updated Listing.js ([0f29c285](https://github.com/aml-development/ozp-center/commit/0f29c285ed7cde1b366f2d27150ffc9fa918c7de))
  *  #596: fixed issue with if statement in inLibrary function ([09a00d7b](https://github.com/aml-development/ozp-center/commit/09a00d7bcf5caf1d9ff2e6fce8090822a0aa9a77))
  *  #596: Found and fix issue with new code ([30b9a133](https://github.com/aml-development/ozp-center/commit/30b9a133c3f8b179c3de5c77a4311d132fd8c4c5))
  *  Administration Tab: Bookmark icon no change unless page refresh #596 ([1d9f692d](https://github.com/aml-development/ozp-center/commit/1d9f692de5d91d18a06ed67b0cccd873d28fa1e8))     
* **styling**:  Move tour css to ozp-react-commons ([36e1cb4e](https://github.com/aml-development/ozp-center/commit/36e1cb4edb7f77d99fe2d3906944b380a0b3dbca))    
* **search**: add the enter button tab for screen reader ([3d70f168](https://github.com/aml-development/ozp-center/commit/3d70f168f03c03ab32dbea5bc7cc6c0465ba771a))     

#### Merge Pull Requests  
* Merge pull request #623 from ozone-development/596_bookmarkIcon_noChange ([ad262244](https://github.com/aml-development/ozp-center/commit/ad2622444f45496eeec13931e72c4c15a94addf0))
* Merge pull request #645 from ozone-development/Search508 ([56594c5d](https://github.com/aml-development/ozp-center/commit/56594c5d64bb5ea93ddb05321cd2f0960fe05bff))         

#### Changes  
* Update BookmarkButton.jsx ([fa465b4d](https://github.com/aml-development/ozp-center/commit/fa465b4da3edcfc3002e87b340338b4140fca089))     

### 1.1.30 (2016-06-08) 

#### Fixes  
* **search**: Made search result tab to main content ([12bdd83b](https://github.com/aml-development/ozp-center/commit/12bdd83bfdb3a594f74d5738ac74a4167daa7b0e))     

#### Merge Pull Requests  
* Merge pull request #640 from ozone-development/546_listingreview ([fd6448ff](https://github.com/aml-development/ozp-center/commit/fd6448ffe6e7732704a88088aaf2e2be72b5eed0))           

### 1.1.29 (2016-06-01) 

#### Fixes  
* **createedit**:  made changes to message according to beth #188 ([303b2657](https://github.com/aml-development/ozp-center/commit/303b26570b483014ef7c2851a772b7a9434513a6))    
* **categories**: extra slash is causing errors on backend ([74ae3493](https://github.com/aml-development/ozp-center/commit/74ae349306b7a96dcce53cb815e549e767ab212d))    
* **index**:  componenet will mount and will receive props were both running when the app loads the quickview ([2fb102b5](https://github.com/aml-development/ozp-center/commit/2fb102b549b7e2fc0d55334ba69f0cd0229ace07))    
* **tests**: changed test to submit a jpg so it will not3 fail tests ([1c6792c1](https://github.com/aml-development/ozp-center/commit/1c6792c1a24618eddeb285473f996053d37d73ac))    
* **imageinput**:  Image input was not checking what file was being uploaded. now if a user tries to upload an invalid image the webpage will give an error ([30dcc8e1](https://github.com/aml-development/ozp-center/commit/30dcc8e163c28ba10f619ffa923c61684fd1751d))     

#### Merge Pull Requests  
* Merge pull request #643 from ozone-development/188_createEdit ([4dd11b76](https://github.com/aml-development/ozp-center/commit/4dd11b76fd64971a176de6f516a05c7df9301dad))
* Merge pull request #642 from ozone-development/641_Categories ([5a2f141b](https://github.com/aml-development/ozp-center/commit/5a2f141bad9ce1cbfe0ec16ac14f19d0a2f0e884))
* Merge pull request #638 from ozone-development/188_createEdit ([d28075e9](https://github.com/aml-development/ozp-center/commit/d28075e998117cca4d7bc13bab3691e2a153a2a2))
* Merge pull request #637 from ozone-development/636_bootstrap_classify ([b2733a1d](https://github.com/aml-development/ozp-center/commit/b2733a1d1a496fed5272937b440e839270fd7afb))        

#### Chore  
* **bootstrap-classify**:  update config with countries for test ([36299c34](https://github.com/aml-development/ozp-center/commit/36299c34561b9238b30e9e1272783d9611732330))    
* **release**:  Updated npm-shrinkwrap.json ([5aff3d46](https://github.com/aml-development/ozp-center/commit/5aff3d4685d42a740a6159d521c1b552c8b6cf80))      

### 1.1.28 (2016-05-25)

#### Feature  
* **notifications**:  increase notification length to 600 characters ([aad1540b](https://github.com/aml-development/ozp-center/commit/aad1540bdc7d921b9876f5257d0cee3e8bc78143))      

#### Merge Pull Requests  
* Merge pull request #632 from ozone-development/wski-patch-1 ([1ae448a5](https://github.com/aml-development/ozp-center/commit/1ae448a5139572e5e9cfcab3b51c64d15dad257c))           

### 1.1.27 (2016-05-19)

#### Feature  
* **components**:  changed icons to represent delete and match mockup #620 also icons are no longer clickable in listing management ([86e50070](https://github.com/aml-development/ozp-center/commit/86e50070edcdabcdef91e362fac410bc957b8fd0))    
* **managemtnt**:  added in functionality for deleated also fixed the issue where reacent activity was not linking to all listings ([dab63681](https://github.com/aml-development/ozp-center/commit/dab6368130c7e53f244a48d2bbef910aad425c03))    

#### Fixes  
* **recentactivity**:  will allow the api to make the correct call to teh back end for activity to the listings the user owns ([f6bf200e](https://github.com/aml-development/ozp-center/commit/f6bf200e5fe788783645b2fff3c56754e2e448d4))    
* **notification**:  Display Correct Date #625 ([64eba888](https://github.com/aml-development/ozp-center/commit/64eba88872592ea3ef661e2ed07a5f8ba912b785))    
* **styles**:  to include a trashcan under the deleted tile. also added matts suggested changes to code. ([f84764f9](https://github.com/aml-development/ozp-center/commit/f84764f91ed1aed053b2727be16b132524e6ee71))    
* **listingtile**:   ([e839a4b3](https://github.com/aml-development/ozp-center/commit/e839a4b30579f626dc1ef9de6e86945bdf03adb2))     

#### Merge Pull Requests  
* Merge pull request #629 from ozone-development/620_components ([faf89317](https://github.com/aml-development/ozp-center/commit/faf893171421a459ac81cd3c3e6588ab8ccb1aa0))
* Merge pull request #628 from ozone-development/wski-patch-1 ([7a171b7c](https://github.com/aml-development/ozp-center/commit/7a171b7c0408c8ca3408ba79134798d66ea95a70))
* Merge pull request #627 from ozone-development/577_management ([e027200c](https://github.com/aml-development/ozp-center/commit/e027200cc6a47bed6fd93c25853a8133ec2ba702))
* Merge pull request #626 from dylankolson/625_notification ([7470b5ca](https://github.com/aml-development/ozp-center/commit/7470b5caddc859040758c3ad8baae4a222dc1714))
* Merge pull request #622 from ozone-development/620_listing ([f32f09d6](https://github.com/aml-development/ozp-center/commit/f32f09d60024e616eed0963220fe0f819f551d90))
* Merge pull request #621 from ozone-development/578_management ([6d9832c6](https://github.com/aml-development/ozp-center/commit/6d9832c6b232e0a2c44a8170ff103a5bd255fb00))
* Merge pull request #618 from dylankolson/617-notification ([a6b92955](https://github.com/aml-development/ozp-center/commit/a6b929552221f7cef5a5e8769f7e516bec9d430a))        

#### Chore  
* **cleanup**:  Unnecessary parens ([26d2d6ab](https://github.com/aml-development/ozp-center/commit/26d2d6abd5759501475d613427b7510bfeb3e0d3))    

#### Changes  
*  removed console.log from code ([085dc8ae](https://github.com/aml-development/ozp-center/commit/085dc8ae51ee1513472905d5d06fe585ec27c9e7))
*  listings will not be clickable ([ecaecad9](https://github.com/aml-development/ozp-center/commit/ecaecad92f2b171ee1769979fb12cfd90192dd11))
*  listings will show a slash through when deleated ([b021fcc8](https://github.com/aml-development/ozp-center/commit/b021fcc89530f17f33020526c7888c21ab85aeb6))
*  listings will show a slash through when deleated ([16f6c96b](https://github.com/aml-development/ozp-center/commit/16f6c96b057b285169a275073f6c0864adbbe951))     

### 1.1.26 (2016-05-12)

#### Feature  
* **compontnts**:  listings when deleted will only show up in recent activity and all listings. if a listing is deleted in all listings they will not be able to edit it ([96f2411f](https://github.com/aml-development/ozp-center/commit/96f2411f1381c9e1ab8538293c400a762df95d47))    

#### Fixes  
* (fix) 617 display wrong notification ([674bd526](https://github.com/aml-development/ozp-center/commit/674bd52679cdcf0fa5ab74bc98031413f9b56011))    
* **components**:  listings that are disables will not be clickable in all listings anymore ([8dd7698d](https://github.com/aml-development/ozp-center/commit/8dd7698df12ad7fdfbe824b699c0dc83ded67606))    
* **npmshrinkwrap**: ; build npmshrinkwrap t support reactcommons update ([1ca6628e](https://github.com/aml-development/ozp-center/commit/1ca6628e298b3b34d036347eb2124ab2d97b659f))   
* **center_508_tour**
  *  Make bootstrap Tour modal 508 compliance #597 ([385e020f](https://github.com/aml-development/ozp-center/commit/385e020feb020eb75576f9f08b68768f8a08ee05))
  * Make bootstrap Tour modal 508 compliance#597 ([c1fd30e0](https://github.com/aml-development/ozp-center/commit/c1fd30e07eac289c47dbf69ceab1a3d2b6cf2e6e))    
* **centertour**
  *  took out debug and added hack to redirection steps ([53fc7449](https://github.com/aml-development/ozp-center/commit/53fc744946757fb621502757ccff761ab646470c))
  *  tour will now work on all browsers any version ([e99e46d6](https://github.com/aml-development/ozp-center/commit/e99e46d61077c5886c69aa5baf11ae5cc20fdc1f))
  *  tour was not navagating properly still working on testing this fix ([5a7befd0](https://github.com/aml-development/ozp-center/commit/5a7befd056f33f8a023c09d973a12e9e5ade867d))
  *  tour was not navagating properly still working on testing this fix ([88a475c8](https://github.com/aml-development/ozp-center/commit/88a475c88623759028c7b6abe3c396c9263dedea))
  * menu will unfocus when clicking on next button instead of staying open ([576d9050](https://github.com/aml-development/ozp-center/commit/576d90505e5b4f7ce8ff092ef4e588a43e05ed39))
  *  fixed center tour to properly run through before it was skipping step 8. Also added an end notification and fixed the redirrection bug that was causing the tour to stop ([bbe57c8a](https://github.com/aml-development/ozp-center/commit/bbe57c8ae7b1d0138a98904dd3b6e9bc4528d415))    
* **administrationtab**
  *  removed changes to admin tab they are no longer required ([75a60d66](https://github.com/aml-development/ozp-center/commit/75a60d66bfff5458b74f9c01f4de5e3c946598b2))
  *  removed changes to admin tab they are no longer required ([63e3e536](https://github.com/aml-development/ozp-center/commit/63e3e53669af3c9e046a60167efddbc4bf06259a))    
* **header**
  *  no longer need to check if it is deleted ([874db2b5](https://github.com/aml-development/ozp-center/commit/874db2b54e192a29dfbfa17d1420b6527ec17bb2))
  *  no longer need to check if it is deleted ([d40269b8](https://github.com/aml-development/ozp-center/commit/d40269b81ee2ca425d6a79d4aa07dc71b627d007))
  *  no longer need to check if it is deleted ([abf59608](https://github.com/aml-development/ozp-center/commit/abf596086d36f634285546d97e1f7846c8176003))     
* **administrationtab index**:  removed changes to admin tab they are no longer required ([431c4059](https://github.com/aml-development/ozp-center/commit/431c4059dd1099037c4fa1d6664916243a7f5061))    
* **index**: previous security marking changes would require backend changes to save new listings changed text in security listing to make it save again ([c614be3f](https://github.com/aml-development/ozp-center/commit/c614be3f5ddc93e0cf25ad18c3d1bab7e606599f))     

#### Merge Pull Requests  
* Merge pull request #616 from ozone-development/615_shrinkwrap ([e3780a01](https://github.com/aml-development/ozp-center/commit/e3780a01bce23082c85f10cf4e24625d21c0591f))
* Merge pull request #613 from ozone-development/602_components ([6aa63483](https://github.com/aml-development/ozp-center/commit/6aa63483369a9e2639cfdf33535f1881dd7c0e74))
* Merge branch '529_tour' ([51e5de1d](https://github.com/aml-development/ozp-center/commit/51e5de1d50c658fd6f6d96ef47416159f523d54e))
* Merge branch 'master' into 529_tour ([e8925563](https://github.com/aml-development/ozp-center/commit/e892556313d81d7445f0b149488fc5dd6b0ff564))
* Merge pull request #609 from ozone-development/608_index ([5365a275](https://github.com/aml-development/ozp-center/commit/5365a275ec48214e4c6b2bb51b7813ba4b40d43d))
* Merge pull request #610 from ozone-development/508_Tour ([8a022701](https://github.com/aml-development/ozp-center/commit/8a0227017c599d94c32f5b6d08dbf6d9e2cfe653))        

#### Chore  
* **shrinkwrap**:  Explicit commits of internal projects removed ([4d412b35](https://github.com/aml-development/ozp-center/commit/4d412b35ff460f50b668c787fce40a8f143d66aa))    

#### Changes  
* Update package.json ([58437541](https://github.com/aml-development/ozp-center/commit/584375413c9ae03a97506f4b4059f6a4ce7c15ab))     

### 1.1.25 (2016-05-04)

#### Feature 
* **shrinkwrap**
  *  Brought back shrinkwrap to prevent futher issues with dependancy updates ([94c4a695](https://github.com/aml-development/ozp-center/commit/94c4a695e479634c626e04eb22889f6c6c62c97d))
  *  Brought back shrinkwrap to prevent futher issues with dependancy updates ([1202a3f3](https://github.com/aml-development/ozp-center/commit/1202a3f308f1426bf0d581584c067851ab2f1f6d))     

#### Fixes 
* **index**
  *  when saving the listner now is removed if successful ([0d71845d](https://github.com/aml-development/ozp-center/commit/0d71845d123b11c8fbebad55a24e201ba058dbe2))
  * window listener was added to the form to prevent accidental navagation away from the page. ([e4aea240](https://github.com/aml-development/ozp-center/commit/e4aea24020179db07b45d88c0396af2659bee33d))
  *  made aria labels more dynamic it will pull info from the react-commons instead of hard coding each time a change is made ([2abb10de](https://github.com/aml-development/ozp-center/commit/2abb10de00a6b67d6b98fd796d7fb6442c566df4))
  *  security marking was made more clear to the user ([306778e3](https://github.com/aml-development/ozp-center/commit/306778e38b9709f910b2e6dbefe9a33cb4a24f52))     
* **_quickview**:  got rid of the height and width and added a no wrap for dashes and spaces ([50ebd9c8](https://github.com/aml-development/ozp-center/commit/50ebd9c847aa493bc7ce1dc9d6ef057222432fba))   
* **mylistings**
  *  this should not have been included in this branch commit ([ab01b397](https://github.com/aml-development/ozp-center/commit/ab01b3974c82ec54e1dbba23322d1266864687ef))
  *  changed the fetch listing to filter change. previous modification caused infinite loop. ([a0fb23cc](https://github.com/aml-development/ozp-center/commit/a0fb23cca0174f1a399d8f722197e963b119aa2f))
  *  users no longer have to refresh page to see latest reject comments ([f7486283](https://github.com/aml-development/ozp-center/commit/f74862839adaccf9439337c3b262d8120469e72d))     
* **_quickviewscss**:  changed height and width and padding to make it fit the 8 character name ([027da438](https://github.com/aml-development/ozp-center/commit/027da43848157bb0ac4f053cd94e142171c8e87e))     

#### Merge Pull Requests  
* Merge pull request #603 from ozone-development/275_index ([460926e4](https://github.com/aml-development/ozp-center/commit/460926e4507106b0c121f25cffc546d52eec4b80))
* Merge pull request #606 from ozone-development/bringing-back-shrinkwrap ([376a7477](https://github.com/aml-development/ozp-center/commit/376a74779570e140fd21d038d29ea463bcb62997))
* Merge pull request #598 from ozone-development/561_myListings ([26b29562](https://github.com/aml-development/ozp-center/commit/26b29562eaf5704be9745b21e34cfd6c1f8fdf77))
* Merge pull request #605 from ozone-development/604_babel ([d2a4ac65](https://github.com/aml-development/ozp-center/commit/d2a4ac65db5a8384fddd8f9d04f224361c8e3ed7))
* Merge pull request #600 from ozone-development/530_index ([e89a2425](https://github.com/aml-development/ozp-center/commit/e89a242543af37e3fdcb1103ccabe4e2650be88c))
* Merge pull request #599 from ozone-development/583_quickviewcss ([edaadaa3](https://github.com/aml-development/ozp-center/commit/edaadaa316294ac4cee2300d199dd2b6b660b101))        

#### Chore  
* **versioning**:  Use the latest version of babel ([81357ae1](https://github.com/aml-development/ozp-center/commit/81357ae1149bfaf99960eb6b10a2ea96d7e6108d))    

#### Changes  
* changes to components to include new delete functionality ([7795e313](https://github.com/aml-development/ozp-center/commit/7795e313343f4c69bf25e80144076bb83deedd27))     

### 1.1.24 (2016-04-27)

#### Feature  
* **notifications modal**:  Added notification modal and tweaks to dropdown ([9896601e](https://github.com/aml-development/ozp-center/commit/9896601e5230e25910c9dc8ca2a78105fa5bab7f))    

#### Fixes  
* **search**:  Record searches in metrics. ([9242b302](https://github.com/aml-development/ozp-center/commit/9242b302a18e925c81d4d10e5e10a58a340220c5))    
* Fix for #363 - Create/Edit page - Unnecessary "Could not save!" message ([079aa68f](https://github.com/aml-development/ozp-center/commit/079aa68fd5d39d3e707ba6792914e210249321d5))     

#### Merge Pull Requests  
* Merge pull request #593 from ozone-development/572 ([6c161bc8](https://github.com/aml-development/ozp-center/commit/6c161bc8da9a8de508e35e8be2c2060148f907f1))
* Merge pull request #595 from ozone-development/587 ([f342b394](https://github.com/aml-development/ozp-center/commit/f342b394f4fce266ff0322de1b706510bb1b7db7))
* Merge pull request #592 from ozone-development/588 ([c8cbebd6](https://github.com/aml-development/ozp-center/commit/c8cbebd6b3a61d383f11e53077047adb91a43e46))
* Merge pull request #594 from ozone-development/notification-tweaks ([b3acd3bb](https://github.com/aml-development/ozp-center/commit/b3acd3bb5b99c73dec95017316e880b448a7b360))
* Merge pull request #584 from ozone-development/363 ([0a398932](https://github.com/aml-development/ozp-center/commit/0a39893265b378f9479f3c89bd02aa80d61dc39b))
* Merge pull request #586 from ozone-development/search_metrics ([a48da333](https://github.com/aml-development/ozp-center/commit/a48da3337d4d2037c59e517fb9d8fc89143e7fcb))
* Merge pull request #590 from ozone-development/node-sass-version ([8f2360d4](https://github.com/aml-development/ozp-center/commit/8f2360d4f37b2a6bd7529868a3789f6ebff3fe25))
* Merge pull request #580 from ozone-development/567 ([4c527104](https://github.com/aml-development/ozp-center/commit/4c527104f0bb760fbe58c8259ee5f5d98b2307b8))        

#### Chore  
* **version**:   Force the use of node-sass ([8895ee2c](https://github.com/aml-development/ozp-center/commit/8895ee2c1f7838955df43992b95cc270b3574b4e))    

#### Changes  
* Single tabindex w/out !important ([59e9a051](https://github.com/aml-development/ozp-center/commit/59e9a051a21e51b0fa17c3de2c5a2fa63425aa14))
* Removed var ttt ([bbdeafcd](https://github.com/aml-development/ozp-center/commit/bbdeafcd3a81fc8b7f5fcbc545126e85cd3e03ea))
* Changes to main.css per feedback ([ebe8b04a](https://github.com/aml-development/ozp-center/commit/ebe8b04a4110701681d3af27a4213a1e88fab126))
* Listing Management - Recent Activity should show icons #587 ([53eee3d1](https://github.com/aml-development/ozp-center/commit/53eee3d1e9f164eef0be4bb7b3ed7ebfa8783309))
* FIREFOX and CHrome ONLY- Thin black box displays around screenshots and rating descriptions #572 ([be53909a](https://github.com/aml-development/ozp-center/commit/be53909af7983e7307a5fdea56a4f0d806b568dc))
* Create/Edit Page - Invalid portion markings are allowed #588 ([c05e79f5](https://github.com/aml-development/ozp-center/commit/c05e79f55858e9e88ca675d2fdd1dd63361bd4fe))
* Resolved by adding css/input attributes. ([f48ddfef](https://github.com/aml-development/ozp-center/commit/f48ddfef95c39ca13090699e2c59c874a94989ca))
* Cleaned up code. ([a26e2538](https://github.com/aml-development/ozp-center/commit/a26e25384f9b4109eeb041619b97bd674ea43539))
* emoji's and more ([8409d408](https://github.com/aml-development/ozp-center/commit/8409d408a51bc240cb154cd25b009e1cdb05d3f9))
* notification tweaks ([ab3f9828](https://github.com/aml-development/ozp-center/commit/ab3f9828a87ad71544afee2fe36ba5aaac3fee45))
* removed web apps from webtop ([6424f355](https://github.com/aml-development/ozp-center/commit/6424f355f06ca036b70daf0b31bdb6ca2470aad4))
* Change will work with Manny's update to backend to pull short_name ([ffd7ff88](https://github.com/aml-development/ozp-center/commit/ffd7ff88fc413b82c70117696f759332f5b9893f))     

### 1.1.23 (2016-04-13)   

#### Merge Pull Requests  
* Merge pull request #581 from ozone-development/akonsowski-419 ([8ddb5893](https://github.com/aml-development/ozp-center/commit/8ddb58937e8ac23330248489fdd9d20995e89c34))
* Merge pull request #579 from ozone-development/491 ([9de40c07](https://github.com/aml-development/ozp-center/commit/9de40c079b8af4d0ed46a3dcbf95ffd0630a60ea))         

#### Changes  
* Update - simplified code to only pull Listing.agencyShort instead of all of Listing ([4f0d362d](https://github.com/aml-development/ozp-center/commit/4f0d362db3d6abfaeebd36d8e16b11e5f3161bc4))
* changed whatisnew to 255 instead of 250 ([90257885](https://github.com/aml-development/ozp-center/commit/90257885f832de1cec9a34b34c7baf2de924e353))
* 567 - fixed by adding agency for ([62a46b62](https://github.com/aml-development/ozp-center/commit/62a46b6251e1a7f55f55c34a8dcf70a77eb42ddf))
* 491: fixed IconRating issue ([3edcfec6](https://github.com/aml-development/ozp-center/commit/3edcfec677c299c545ea289318aee9cd301f93f9))     

### 1.1.22 (2016-04-05) 

#### Fixes  
* **tour**:  Close tour at end of tour ([9d07684c](https://github.com/aml-development/ozp-center/commit/9d07684c3c5a85f2f51f5fcd9bebcb60973c4106))     

#### Merge Pull Requests  
* Merge pull request #574 from ozone-development/tour-fixes-1 ([02481db7](https://github.com/aml-development/ozp-center/commit/02481db72c73956ca89935eba3585a1a423e37ec))         

#### Changes  
* remove unused file ([8a82a0c3](https://github.com/aml-development/ozp-center/commit/8a82a0c397a91414dae6ec5d1f7cf8ed49981c72))     

### 1.1.21 (2016-03-30) 

#### Fixes  
* **all listings**:  Fix APPS_MALL_STEWARD view of all listings.  ([e95be550](https://github.com/aml-development/ozp-center/commit/e95be55048d8017662a7889ba99ba7f2baab5451))     

#### Merge Pull Requests  
* Merge pull request #573 from ozone-development/wski-patch-1 ([94cdaab8](https://github.com/aml-development/ozp-center/commit/94cdaab8a027cbf25049b67b3cb69702b3b3c1b8))         

#### Changes  
* updated text for tour welcome ([4746b7d6](https://github.com/aml-development/ozp-center/commit/4746b7d6b185ec59464205048c1064f6fe2cc90c))     

### 1.1.20 (2016-03-23) 

#### Fixes  
* fixed window.open ([cd54c948](https://github.com/aml-development/ozp-center/commit/cd54c9488feee111439eb0c66aaab77f0c1f73e9))     

#### Merge Pull Requests  
* Merge pull request #565 from ozone-development/tony-patch ([d4c089cb](https://github.com/aml-development/ozp-center/commit/d4c089cb8bd764431f9ee97d9fd114a60d212c13))         

#### Changes  
* redirect to open in new window ([32db7262](https://github.com/aml-development/ozp-center/commit/32db726269f30e69904cef03d2111dace894a1b2))
* updated redirect message ([4ebfffaf](https://github.com/aml-development/ozp-center/commit/4ebfffaf53c2db61c3029bd91089088e5f2441f1))     

### 1.1.9 (2016-03-22) 

#### Fixes  
* **center settings**:  Scrolling to bottom of page breaks infinite scroll #559 ([1f0437a9](https://github.com/aml-development/ozp-center/commit/1f0437a94ce566db0e46a0d2361e838d53a06c3c))    
* **quickview modal**:  Admin tab should show errors if change not possible #557 ([e291b493](https://github.com/aml-development/ozp-center/commit/e291b493891514b04aef8f8e6e8dac2283627851))     

#### Merge Pull Requests  
* Merge pull request #560 from ozone-development/wski-patch-3 ([ed72ce43](https://github.com/aml-development/ozp-center/commit/ed72ce43ba72a09b1c01dca708fa740ad0ce29db))
* Merge pull request #558 from ozone-development/wski-patch-2 ([d158d2d7](https://github.com/aml-development/ozp-center/commit/d158d2d733f5d3f91cd5320ae8a13e02db93f3f7))         

#### Changes  
* Update README.md ([952842d1](https://github.com/aml-development/ozp-center/commit/952842d19806fd35a9da073cef9ff0fe1e8b77f0))
* Update Listing.js ([c1231770](https://github.com/aml-development/ozp-center/commit/c12317706c3684c937f65b752351b288eed1b56f))
* Update Listing.js ([4031f8d8](https://github.com/aml-development/ozp-center/commit/4031f8d8e7bffbe6dd02ec5bd01c6ddab6d2936a))     

### 1.1.8 (2016-03-21) 

#### Fixes  
* **package.json**:  Use a version of gulp-bless that uses bless 3.x.x ([a7ca272b](https://github.com/aml-development/ozp-center/commit/a7ca272b3cffca04f538c20a6715a67713dc7ec9))     

#### Merge Pull Requests  
* Merge pull request #555 from ozone-development/wski-patch-2 ([369871c2](https://github.com/aml-development/ozp-center/commit/369871c21df53bc4d6f6f11f9422dcf7133d015e))
* Merge pull request #554 from ozone-development/gulp-bless ([cf8189eb](https://github.com/aml-development/ozp-center/commit/cf8189eb148a5919dffe4133d6b3beb5951e73a8))         

#### Changes  
* Update centerTour.js ([9bf5a557](https://github.com/aml-development/ozp-center/commit/9bf5a557461d3b03147d726aa3e5d689cb08c180))
* Update centerTour.js ([223712d7](https://github.com/aml-development/ozp-center/commit/223712d750edd0fa5bb5b39798b4a5269df4542a))
* release 1.1.7 ([79790d3d](https://github.com/aml-development/ozp-center/commit/79790d3d1fd80c062cd5b3934ea52db358f6f992))     

### 1.1.6 (2016-03-20)

#### Feature  
* **infinite scroll**:  loading more is now more obvious ([d8264c6c](https://github.com/aml-development/ozp-center/commit/d8264c6c7addc2ff3ba51525cffca3d9a8ea444b))    

#### Fixes  
* **create edit**:  Fix display of associated agency ([dbf45f4d](https://github.com/aml-development/ozp-center/commit/dbf45f4d57918c16f7aa279d5ab42e42ae222024))     

#### Merge Pull Requests  
* Merge pull request #552 from ozone-development/redirect_settings ([790cd5a8](https://github.com/aml-development/ozp-center/commit/790cd5a81c42e42b996c1c3fcca5eb96eb5b326b))
* Merge pull request #553 from ozone-development/createedit_agency ([90a1d88a](https://github.com/aml-development/ozp-center/commit/90a1d88ad86571e14c4ffa737cff8100e311fe4d))
* Merge pull request #550 from ozone-development/infinite-scroll-tweaks ([5386a276](https://github.com/aml-development/ozp-center/commit/5386a276aafc8bb1cadfda10fe98d00d9218bd28))        

#### Chore  
* **redirects**:  Conform to django standard of mandatory trailing slash ([0e76a235](https://github.com/aml-development/ozp-center/commit/0e76a235279482245b7e29eeae036a5c3eb33826))      

### 1.1.5 (2016-03-16) 

#### Fixes  
* **helpdesk link**:  Helpdesk link now opens in a new tab. ([485b182d](https://github.com/aml-development/ozp-center/commit/485b182d7fd46474764ef3bbe15bdfa871ff44c3))    
* **create edit**:  Missing labels for owners and contacts ([9ca4b75d](https://github.com/aml-development/ozp-center/commit/9ca4b75d3af8a622bff83287ec7b6add1578e747))   
* **searchbar**
  *  Clicking 'x' on the searchbar now only clears searchbar ([62064b37](https://github.com/aml-development/ozp-center/commit/62064b37a1a07cd39456830305e3e4e2e5004933))
  *  Clicking 'x' on a blank search now does nothing. #490 ([5acd51f2](https://github.com/aml-development/ozp-center/commit/5acd51f224c0a11c4b4f6dc2593f40534ab20d04))     
* **image api**:  Uploaded images pass original file type. ([717f1d13](https://github.com/aml-development/ozp-center/commit/717f1d13f5da754f2c1370409ec44fc0d71539ff))    
* **url redirect**:   Avoids browser redirects by adding trailing slash ([1056e8f4](https://github.com/aml-development/ozp-center/commit/1056e8f43f0d9239b2453e7962c2e1981ff44466))     

#### Merge Pull Requests  
* Merge pull request #544 from ozone-development/wski-patch-3 ([78403e1d](https://github.com/aml-development/ozp-center/commit/78403e1df355fdbbcaaeb7759f56a03aaf83e5bf))
* Merge pull request #545 from ozone-development/screenshot-carousel ([a0014836](https://github.com/aml-development/ozp-center/commit/a001483618b3a802f27da3c160f2f6c138933465))
* Merge pull request #542 from ozone-development/wski-patch-1 ([db21b34a](https://github.com/aml-development/ozp-center/commit/db21b34abfc9ee59accf0eb5a0174a3935bda180))
* Merge pull request #543 from ozone-development/wski-patch-2 ([fa851f3f](https://github.com/aml-development/ozp-center/commit/fa851f3f01cf1570d28048ecdefef35049399922))
* Merge pull request #540 from ozone-development/redirect ([441dc437](https://github.com/aml-development/ozp-center/commit/441dc4370cff0c7d63c00f698ccdc0ade843813a))
* Merge pull request #538 from ozone-development/wski-searchbar-tweak-2 ([29e3e66c](https://github.com/aml-development/ozp-center/commit/29e3e66c59b8ee0ae4e8d89a7a81155e04aabc3a))
* Merge pull request #527 from ozone-development/wski-patch-1 ([269c3892](https://github.com/aml-development/ozp-center/commit/269c389294f0bf034d15b04f18aa5fa4ec7ca540))
* Merge pull request #536 from ozone-development/image-api-fix ([8d87328c](https://github.com/aml-development/ozp-center/commit/8d87328c7bb24a714cf89682759b3d503c355dd1))        

#### Chore  
* **private listings**:  Hide the option to create a private listing ([4302049f](https://github.com/aml-development/ozp-center/commit/4302049f196ff6542cb82be4f8abbc02be0fa5d6))    

#### Changes  
* Update index.jsx ([9a311296](https://github.com/aml-development/ozp-center/commit/9a311296c5550e8bfa810cde1d33b38485e432ec))
* Update _carousel.scss ([5a165c3e](https://github.com/aml-development/ozp-center/commit/5a165c3e71dc3447995f30462ba88d8c280f08f1))     

### 1.1.4 (2016-03-03)

#### Feature  
* **lt ie 10**:  Redirect users below IE10 away ([51a47f12](https://github.com/aml-development/ozp-center/commit/51a47f12563a75cab7b2da2047e17587146a4a04))    

#### Fixes  
* **typo**:  Added missing single quote ([1de14bc0](https://github.com/aml-development/ozp-center/commit/1de14bc0cb4c8e258f30cc01649edb7a4afd54cc))    
* **help**:  Fixed invalid role for appsmall stewards" ([ccf64070](https://github.com/aml-development/ozp-center/commit/ccf64070af2814072c4efe4027cb3c22cdc0a3b7))    
* **navbar**: added back the hidden span class ([27b4a341](https://github.com/aml-development/ozp-center/commit/27b4a341edefc9f279dbfc554e086bf4e1f563c2))     

#### Merge Pull Requests  
* Merge pull request #522 from ozone-development/no-lt-ie10 ([70c8b0de](https://github.com/aml-development/ozp-center/commit/70c8b0de47885b5f66d68a3ec1da559e9bda5f5f))
* Merge pull request #520 from ozone-development/test_fix ([1c20ed06](https://github.com/aml-development/ozp-center/commit/1c20ed06a58225879e516e8e19417b144ed25528))
* Merge pull request #517 from ozone-development/NavBarFix ([dc35f83a](https://github.com/aml-development/ozp-center/commit/dc35f83a8b4f55d72a12e555d3c6172706e4a757))
* Merge pull request #519 from ozone-development/wski-help-rolefix ([c403a066](https://github.com/aml-development/ozp-center/commit/c403a06624be2ab9a5c7d866c2238b29e17a5de6))       

#### Test  
* **savingimage**:  Skipping image save test ([3211f31b](https://github.com/aml-development/ozp-center/commit/3211f31b1c2b991dcde62f55d8b590a85f98ee1e))    

#### Chore  
* **es5-shim**:  Do not use version 4.5.5 as it breaks all tests ([b4bd571f](https://github.com/aml-development/ozp-center/commit/b4bd571f2b9b91051e53717eccee621a48e0f455))    

#### Changes  
* Update main.js ([c942fb1f](https://github.com/aml-development/ozp-center/commit/c942fb1fdfcef403f19c1d0ddc2c9f7660049fb1))
* Update main.js ([22f8e86d](https://github.com/aml-development/ozp-center/commit/22f8e86d33ae631dfc0e28fcae3996ed8bfde083))
* Update main.js ([727b462f](https://github.com/aml-development/ozp-center/commit/727b462fb6691419f47cecbcfe6f7951c06eecc0))
* es5-shim has been fixed ([be3ae55f](https://github.com/aml-development/ozp-center/commit/be3ae55fb90d98e5bb31948cbfa4f6ef363fdc6a))
* English ([5f013fa2](https://github.com/aml-development/ozp-center/commit/5f013fa2d5025fb50b1ee9ffcdbbdba189a26d9f))     

### 1.1.3 (2016-02-17)

#### Feature  
* **infinite scroll**:  Search infinite scroll and most popular #510 ([412ec590](https://github.com/aml-development/ozp-center/commit/412ec59035a5e1a5090fa52853018f3084ccbefb))    

#### Fixes  
* **quickview**:  Previewing listing from create ([b0060e8b](https://github.com/aml-development/ozp-center/commit/b0060e8be74afbafa20f8fd01528857cfa85331c))    
* **createedit**:  Populate ContactType dropdown correctly ([557f58d6](https://github.com/aml-development/ozp-center/commit/557f58d679168a58e4ebc7dc7a56325e44c6782f))     

#### Merge Pull Requests  
* Merge pull request #515 from ozone-development/contact_names ([a2ebab35](https://github.com/aml-development/ozp-center/commit/a2ebab351b3454cf7b78babd9bfb2c4737639b8f))
* Merge pull request #514 from ozone-development/quickview-422 ([8f7c3045](https://github.com/aml-development/ozp-center/commit/8f7c304592865f96a17b1f44167f4f0ad96f5a37))
* Merge pull request #511 from ozone-development/infinite ([735fd97f](https://github.com/aml-development/ozp-center/commit/735fd97f69fed24a0c775fb9c64f126d0d02b5ca))         

#### Changes  
* Update README.md ([ffbe5032](https://github.com/aml-development/ozp-center/commit/ffbe5032a13a7739f35b6b83cdf3e83db50ad111))     

### 1.1.2 (2016-02-10) 

#### Fixes  
* **tour modal**:  Fix regex that determines tour modal ([95ef3313](https://github.com/aml-development/ozp-center/commit/95ef331366dbf321f756d0eb7463f7ee3070503e))     

#### Merge Pull Requests  
* Merge pull request #508 from ozone-development/help_center_regex ([e12da706](https://github.com/aml-development/ozp-center/commit/e12da7066b3e92f7841fe9ef5685b4de05051c50))
* Merge pull request #507 from ozone-development/chore-remove-settings-modal ([31344f92](https://github.com/aml-development/ozp-center/commit/31344f923d7e91c4f391a93b5bfa9e39457bd8b1))
* Merge pull request #506 from ozone-development/wski-patch-1 ([5bd552c4](https://github.com/aml-development/ozp-center/commit/5bd552c441c039c99043d60c1d19cfbda7c379fc))        

#### Chore  
* **travis ci**:  Use updated version of node, npm and gulp ([6e3eb63f](https://github.com/aml-development/ozp-center/commit/6e3eb63f901d43cd106835d635077440d3297208))    
* **settings modal**:  remove settings modal #438 ([3b6b3bea](https://github.com/aml-development/ozp-center/commit/3b6b3beafe8a2f7d4a91f49b3d9fa84a9cf0132f))    
* **browser-pubsub**:  Version bump, fixes bug inside module ([9b6feee8](https://github.com/aml-development/ozp-center/commit/9b6feee8ed9368fec5bc55000cb93dc75bb2682a))    

#### Changes  
* checkpoint ([7dddb442](https://github.com/aml-development/ozp-center/commit/7dddb442f9567f0a251d8bd283fb95f62860403a))
* (feat) added contributing file ([f82f0932](https://github.com/aml-development/ozp-center/commit/f82f09324d26fe5cce7fc32089dd6e75e9b42e09))     

### 1.1.1 (2016-02-03) 

#### Fixes  
* **tour**:  Fixed 'no thanks' not ending tour ([064c8784](https://github.com/aml-development/ozp-center/commit/064c8784df818dbf37b8184a1b7c6ff273e31c01))     

#### Merge Pull Requests  
* Merge pull request #502 from ozone-development/interative-tour ([0c03dd51](https://github.com/aml-development/ozp-center/commit/0c03dd5193c48977b447be322f136d5d6a7a3b3e))
* Merge pull request #499 from ozone-development/babel-ie10-master ([f0ab4f26](https://github.com/aml-development/ozp-center/commit/f0ab4f26f026e488f7daa7f19e3d313072530e75))
* Merge pull request #503 from ozone-development/heading ([e3e4330c](https://github.com/aml-development/ozp-center/commit/e3e4330c3b93cdf9679950fae5377e299102f285))
* Merge pull request #497 from ozone-development/dropdown ([b024e99f](https://github.com/aml-development/ozp-center/commit/b024e99f75319be8805a901854d880ed420b5e0a))
* Merge pull request #500 from ozone-development/notification2 ([70484113](https://github.com/aml-development/ozp-center/commit/70484113c1b86925421ad3ee0b5b84647166d0cd))        

#### Chore  
* **tour**:  Merged 508 compliance PR's fixing conflict ([b35987b7](https://github.com/aml-development/ozp-center/commit/b35987b7438a20b00342773801acca8fb2e246c0))    

#### Changes  
* **headings and focus**: to the sidebar and model #484 ([10e47d5f](https://github.com/aml-development/ozp-center/commit/10e47d5fb7ba64337d9991afb48b112caa080638))     

### 1.1.0 (2016-01-26)

#### Feature  
* **interactive tour**:  Added interactive tour for Global and Center ([5faaf46f](https://github.com/aml-development/ozp-center/commit/5faaf46f3ea00d4c3df9320342234bbd9a7ba5de))    

#### Fixes  
* **notification**: the top nav notification btn #392 ([6417826d](https://github.com/aml-development/ozp-center/commit/6417826df70860ff0dba9ca2078efb74a17cbd92))    
* **babel**:  Change parameter needed for IE10 support ([92c4f11a](https://github.com/aml-development/ozp-center/commit/92c4f11a9630ff98b21317f745f6c8585c6289d5))    
* **dropdown menu**: added aria-haspopup to SelectBox) ([6bd2dfd5](https://github.com/aml-development/ozp-center/commit/6bd2dfd5ca28dfaed71c63ffea999e5e81379963))    
* **helptour**:  Continue tour after modal display ([b0f61c8b](https://github.com/aml-development/ozp-center/commit/b0f61c8ba2e889e589b5bc23fa3c0d165c36dfad))     

#### Merge Pull Requests  
* Merge branch 'new-backend' ([e8575a75](https://github.com/aml-development/ozp-center/commit/e8575a750aee226cf62705498af808b4360c49b2))       

#### Test  
* testing ([690526b4](https://github.com/aml-development/ozp-center/commit/690526b447b8d08f738615d400500afcb090b7a3))    

#### Chore  
*  Additional updates to support the python backend ([2c458838](https://github.com/aml-development/ozp-center/commit/2c4588381244678a22d6e393e5db10d2d372d9ed))    

#### Changes  
* checkpoint ([e2ca490e](https://github.com/aml-development/ozp-center/commit/e2ca490ec997662275219905b081d3644f83e35d))
* checkpoint ([a338c5b2](https://github.com/aml-development/ozp-center/commit/a338c5b2f15e14115a4177c78901a6e17d6e8d9c))
* use latest react-commons ([fbd13798](https://github.com/aml-development/ozp-center/commit/fbd137985647c0ce2768f1947ea7338172954585))     

### 1.0.21 (2016-01-20)

#### Feature  
* **search**:  Ignore enter key press in search box #187 ([8a99bdab](https://github.com/aml-development/ozp-center/commit/8a99bdab7cc38ceb230ebe6628732d471538d22c))    
* **metrics**:  Make metrics for search case insensitive #470 ([4db19f4b](https://github.com/aml-development/ozp-center/commit/4db19f4b96c7ab2fa946da13fbcba2841222fc29))    

#### Fixes  
* **carousel button**: add aria-label to next and pervious button ([a1e743d6](https://github.com/aml-development/ozp-center/commit/a1e743d625a57499a07a13941dee18d10f2f1a46))    
* **create/edit**:  Look up agency title before submitting. ([7d17dccc](https://github.com/aml-development/ozp-center/commit/7d17dccc7cbf5f35d1b8a8458a86dfe22fc44e2c))    
* **listing mgmt**:  Fix merge problem. ([628c9641](https://github.com/aml-development/ozp-center/commit/628c964153e4bf9ca0f77c955cc51a324f8bccbd))   
* **bootstrap-classify**
  *  Fix small and large banner error messages. ([a9a0a057](https://github.com/aml-development/ozp-center/commit/a9a0a0578af3e7f1e45272897dbac4d194016f2f))
  *  Add onFocus event handling. Fix unit test. ([ad63f67e](https://github.com/aml-development/ozp-center/commit/ad63f67e087163eadc4a5149bc8af1cc0e4587cb))
  *  Add sweet alert for image PUT failures. ([24977525](https://github.com/aml-development/ozp-center/commit/24977525ae720b72a87fd81acdc3d7113d229cd9))
  *  Handle marking failures on image endpoint. ([c03226bb](https://github.com/aml-development/ozp-center/commit/c03226bba1e7118965fecf67bf3396581299d4c0))
  *  patch up unit test. ([3292abe3](https://github.com/aml-development/ozp-center/commit/3292abe369a631ebd4f5ea8054bb9956b1d2d9b8))
  *  Correct typo causing improper featured banner marking. ([a54aafc0](https://github.com/aml-development/ozp-center/commit/a54aafc02de54ff3d930a7d8a3cd4ce226e23df4))     
* **createedit**:  Remove double scrollbar ([0aaaa039](https://github.com/aml-development/ozp-center/commit/0aaaa03918af22017f86845780a28ad5c182c2fe))     

#### Merge Pull Requests  
* Merge pull request #489 from ozone-development/Carousel_btn ([d50a86be](https://github.com/aml-development/ozp-center/commit/d50a86beb54e3bedac9316bdd366169d85ccc6a9))
* Merge pull request #486 from ozone-development/feature-ignore-enter ([e24886f9](https://github.com/aml-development/ozp-center/commit/e24886f9f1e4d3e28b96281bb24a487069a48d98))
* Merge pull request #485 from ozone-development/feature-search-metrics-case ([34616b99](https://github.com/aml-development/ozp-center/commit/34616b9909a657c119bab27c212770030e889b50))
* Merge pull request #483 from ozone-development/support-npm-v3 ([f929af00](https://github.com/aml-development/ozp-center/commit/f929af00b04a55c9ccdd688b162c9066d52ca4d0))
* Merge branch 'master' into new-backend ([798eb632](https://github.com/aml-development/ozp-center/commit/798eb6324085ce9e8396a202218433791472a007))
* Merge pull request #472 from ozone-development/feature-security-marking ([70be534c](https://github.com/aml-development/ozp-center/commit/70be534cd1ab49fb41e6c5213b8e979eb9686033))
* Merge pull request #480 from ozone-development/double-scrollbar ([b3c6af9e](https://github.com/aml-development/ozp-center/commit/b3c6af9ea350c04bb3204af8deae64ae6024f2de))        

#### Chore  
* **package.json**:  Support npm v3. Closes #482 ([102fca54](https://github.com/aml-development/ozp-center/commit/102fca5469fa985f4a820485f0b7a9bead20c525))      

### 1.0.20 (2016-01-13) 

#### Fixes  
* **bower**:  Additional wording changes for bower ([e38bdf7d](https://github.com/aml-development/ozp-center/commit/e38bdf7db1e1f1f013fb40a03249410616dda4b7))   
* **bootstrap-classify**
  *  Draft validation for images and screenshots. ([84fc7bd1](https://github.com/aml-development/ozp-center/commit/84fc7bd1a41776cded15c40f6fca3157b6411eae))
  *  with script-loader don't need plugins. ([443cfe42](https://github.com/aml-development/ozp-center/commit/443cfe424a64105ca1ed682cf9eb9fdbcbad0ef2))
  *  use the webpack script-loader to load bootstrap-classify ([c2cda82d](https://github.com/aml-development/ozp-center/commit/c2cda82dacde3ebbc38ee61a6c2ba1e18dc3898b))     
* **caroufredsel**:  Update caroufredsel to all lowercase ([1b945ece](https://github.com/aml-development/ozp-center/commit/1b945ece96f41b8ede5e8ce746aaf86e72d4e03a))    
* **search**:  Allow consecutive searches ([b8ee4fd1](https://github.com/aml-development/ozp-center/commit/b8ee4fd14e5c8b98ce073bdc9eeb928e585ad42f))     

#### Merge Pull Requests  
* Merge pull request #478 from ozone-development/bower-fixes ([6b3a37aa](https://github.com/aml-development/ozp-center/commit/6b3a37aaf3942599f82c36ed41900947ffe0e315))
* Merge pull request #477 from ozone-development/babel-upgrade ([870dbcaa](https://github.com/aml-development/ozp-center/commit/870dbcaac19ee3341dda26bb0351f02950453b8c))
* Merge pull request #476 from ozone-development/node-upgrade ([fc92c18f](https://github.com/aml-development/ozp-center/commit/fc92c18f7977d714d36b0029ec06c24d84aca641))
* Merge pull request #475 from ozone-development/remove-bower ([6961bed6](https://github.com/aml-development/ozp-center/commit/6961bed6bcc070d9071b4576bfc185857e14eb71))
* Merge pull request #474 from ozone-development/repeated-search ([cfe1751e](https://github.com/aml-development/ozp-center/commit/cfe1751e636295294d7bf6da3a297b09da88bf01))        

#### Chore  
* **babel**:  Update babel to latest version ([55625b64](https://github.com/aml-development/ozp-center/commit/55625b6494c55d873f3e055eb7908512a7c537b3))    
* **upgrade node**:  Upgraded node to 5.3.0, jshint - ([b9395fd9](https://github.com/aml-development/ozp-center/commit/b9395fd95115667c40b4f8eff471d2c8b9a04d2b))    
* **package.json**:  ozone-development  ([950b9693](https://github.com/aml-development/ozp-center/commit/950b969312a83544e40a955925069a068e20b5a6))    
* **bower**:  Remove dependancy on bower ([e2c1b2f1](https://github.com/aml-development/ozp-center/commit/e2c1b2f1908edcde3ccf7aaae49c2a8991d6b61b))    

#### Changes  
* Update package.json ([096332ad](https://github.com/aml-development/ozp-center/commit/096332ad1cf78964713354d05c3de0d1be8d3d93))
* put bower change back ([97bfdfdc](https://github.com/aml-development/ozp-center/commit/97bfdfdcbd8011a78318c74a9f90fe26e0bdbe08))
* Revert bad changes to package.json ([a539f24d](https://github.com/aml-development/ozp-center/commit/a539f24deb56502edc3b6f15ec662b4840b0fd99))
* change ozp-commons branch to use new-backend. will need to change this back when this gets merged to master ([1a46383e](https://github.com/aml-development/ozp-center/commit/1a46383eada428a6b0f90b539bb7a65e44979f5c))
* prevent bower from promting user for sending stats ([5f7c0fba](https://github.com/aml-development/ozp-center/commit/5f7c0fba8b2941a5ab02247a1a59de1faab2579e))
* Reasonable alerting when security marking too high for user. ([1ecaae85](https://github.com/aml-development/ozp-center/commit/1ecaae858ede016fdd7c49868be5a814ffa65f71))
* checkpoint ([20ff63db](https://github.com/aml-development/ozp-center/commit/20ff63dbff04e1c3df071ee25db9562c77870061))
* checkpoint ([99fda363](https://github.com/aml-development/ozp-center/commit/99fda3634a1fac5f17f1c0c64246da071e8dfada))
* Install bootstrap-classify from npm vice bower. ([3b5d66e9](https://github.com/aml-development/ozp-center/commit/3b5d66e9cc6be3ac81b5aa5dd4000311962ea409))
* Add required markings to screenshots. ([e0791f90](https://github.com/aml-development/ozp-center/commit/e0791f90db9e53d5a38665434a376d0426ca5871))     

### 1.0.19 (2016-01-06)

#### Feature  
* **tour**:  Divide out tours ([95e3f94e](https://github.com/aml-development/ozp-center/commit/95e3f94e6fc28a9ce25331e792659ae95334b04a))    

#### Fixes  
* **help**:  Remove 5px of extra space ([3a54c3ce](https://github.com/aml-development/ozp-center/commit/3a54c3ce9d5b9f0f5c4f4f3999cf5a3e2210e04a))    
* **profile search**:  Update endpoint. ([7a12502b](https://github.com/aml-development/ozp-center/commit/7a12502baa039eee290ff52f6b1ac5940cc5e3f6))    
* **create/edit**:  Offer all valid Associated Organizations ([ac1375ec](https://github.com/aml-development/ozp-center/commit/ac1375ecb417f28dcfea6cfbd1501b6bcdee6fc8))    
* **activity and review**:  Use paginated endpoint ([f767a332](https://github.com/aml-development/ozp-center/commit/f767a3320d507c26c76f0b7f9e349b5d11fa1319))    
* (fix)the empty link in all the apps ([1e873055](https://github.com/aml-development/ozp-center/commit/1e873055dfba227577e3127838a171d7d50bf45b))     

#### Merge Pull Requests  
* Merge pull request #468 from ozone-development/help-hotfix ([a657538a](https://github.com/aml-development/ozp-center/commit/a657538a33c59cbd18e1d3dafcf6f743aeb2a130))
* Merge pull request #459 from ozone-development/empty_links ([3e0d1e53](https://github.com/aml-development/ozp-center/commit/3e0d1e532768cbe42d520d30ed5a3f97a0586d1b))         

#### Changes  
* Pull OZP-specifics out. ([a9a4f059](https://github.com/aml-development/ozp-center/commit/a9a4f05979650d9d4e6bf7d399a50d6ea75918c5))
* checkpoint ([3a2353db](https://github.com/aml-development/ozp-center/commit/3a2353dba492775712a8568db59d0da10302d4ae))
* checkpoint ([97032b58](https://github.com/aml-development/ozp-center/commit/97032b58c99cfcfb07b37e6ef0b52faac06a6014))
* checkpoint ([f4de7ab6](https://github.com/aml-development/ozp-center/commit/f4de7ab68e67f2eca547c12181707efbb4cfe6f1))
* checkpoint ([dc642a92](https://github.com/aml-development/ozp-center/commit/dc642a9270b439303a8dca360bdb68bba011fe48))
* Use input mixin instead of stand-alone, new component. ([852602cd](https://github.com/aml-development/ozp-center/commit/852602cda75c052b5315d8f686efb24d232c2eb4))
* Integrate bootstrap-classify modal; add styles. ([102590e6](https://github.com/aml-development/ozp-center/commit/102590e6217f86ffa0f62a6532f0601d11e38030))
* Checkpoint: Modal comes up on Security Marking label. ([c06d0e63](https://github.com/aml-development/ozp-center/commit/c06d0e6336820bde61fc10b27bbd534cfc41ca61))
* don't uglify for now ([142de5cf](https://github.com/aml-development/ozp-center/commit/142de5cf9543c897c66132676c10168e9b0df36f))    
* **no screenshots yet**: . ([f8606b60](https://github.com/aml-development/ozp-center/commit/f8606b60b706ab55c117f1c0d164df452cc3d2c8))     

### 1.0.18 (2015-12-18)

#### Feature 
* **tour**
  *  Complete ID swap ([2dee42d4](https://github.com/aml-development/ozp-center/commit/2dee42d488a47284ce27ab99e9c4d6377e215f4a))
  *  Update IDs to be consistent ([92388efc](https://github.com/aml-development/ozp-center/commit/92388efc96efd9d0390d4f5d371335b41a5af885))     
* **private listings**:  Add ability to make listings private #447 ([335b6e29](https://github.com/aml-development/ozp-center/commit/335b6e29204252a5d7d2e9d3ee81d6a9cea32d45))    

#### Fixes  
* **pagination**:  Replace hardcoded value with one from commons. ([e8c032a3](https://github.com/aml-development/ozp-center/commit/e8c032a303699c47dfd97b3186da8e381e65ec87))    
* (fix)The modal nav on each app ([8ab6c7bf](https://github.com/aml-development/ozp-center/commit/8ab6c7bf69f542cea629ddf74aab3670b7b0c82f))    
* **createedit**:  Show labels for Associated Organization ([8383dab6](https://github.com/aml-development/ozp-center/commit/8383dab6a6ff8d7f0f44b8cf22e71c99853171aa))     

#### Merge Pull Requests  
* Merge branch 'interative-tour' of http://github.com/ozone-development/ozp-center into interative-tour ([c8828b3b](https://github.com/aml-development/ozp-center/commit/c8828b3bffd1e909fa25dd819e5e4d5f1a38447e))
* Merge pull request #452 from ozone-development/feature-private-listings ([9cae00bd](https://github.com/aml-development/ozp-center/commit/9cae00bda6271e13e9050bb6de8a2a0ccadf94aa))
* Merge pull request #449 from ozone-development/modal_nav ([7defbe03](https://github.com/aml-development/ozp-center/commit/7defbe03ccd57e2f8ba94304a7543db229dd1ff4))
* Merge pull request #446 from ozone-development/feature-casper-tests-2 ([28d64ec0](https://github.com/aml-development/ozp-center/commit/28d64ec003060cc6741de7c2c6f22b0bd0fd4123))        

#### Chore 
* **merge**
  *  Updating everything ([aa11f27a](https://github.com/aml-development/ozp-center/commit/aa11f27a9f268084bc65e9ab13e63f42cce61edc))
  *  Merge master into interactive-tour ([5314b1b0](https://github.com/aml-development/ozp-center/commit/5314b1b0ca5a0a9b2de56ae28229d837ac6bb044))     

#### Changes  
* Preliminary modal input as placeholder for Bootstrap classify. ([fc204f80](https://github.com/aml-development/ozp-center/commit/fc204f80fde28d0b674346d2ec31d1628799b547))
* README edit from the peer review. ([9015e0d4](https://github.com/aml-development/ozp-center/commit/9015e0d4fd3ec8e2b714d55df5734cb6032fb5e2))
* Per peer review, adding optional description for nameing screen captures. ([afcd882b](https://github.com/aml-development/ozp-center/commit/afcd882b80cde06491e4a3b280f04087c4e9e747))
* Add CasperJS groundwork for automated regression testing. ([17da9e40](https://github.com/aml-development/ozp-center/commit/17da9e40ef84c6ef40e59181ff7efc04dd16f0a2))
* Update README.md ([eaa74d4e](https://github.com/aml-development/ozp-center/commit/eaa74d4ea81875a8496ec594a619f07b99f46831))     

### 1.0.17 (2015-11-25) 

#### Fixes  
* (fix)Bookmark Button if its has a bookmark or not ([66a5977e](https://github.com/aml-development/ozp-center/commit/66a5977e3494d60cee9a3624d959089d34a1cbf4))
* fix jshint warning ([923e5968](https://github.com/aml-development/ozp-center/commit/923e59680f5e9184b6f62c34ec305851afae69ce))
* (fix)Liting Type, Organizations dropdown and side Nav ([89251c4b](https://github.com/aml-development/ozp-center/commit/89251c4b3a685ac9db38b695cf43b4a549fe6666))   
* **styling**
  *  Change help modal iframe size ([7cd82642](https://github.com/aml-development/ozp-center/commit/7cd8264200274f6e9ae998cc6524c26d20c7b814))
  *  Help modal style ([9b9c2c9b](https://github.com/aml-development/ozp-center/commit/9b9c2c9b80977a29897a9808e208599a51aaac53))      

#### Merge Pull Requests  
* Merge pull request #442 from ozone-development/issue_396_Bookmark_Button ([344a8c9b](https://github.com/aml-development/ozp-center/commit/344a8c9b86f9c3c141cb98878564aca66e4f22af))
* Merge pull request #441 from ozone-development/issue_436_listing_type ([4a5eb5e0](https://github.com/aml-development/ozp-center/commit/4a5eb5e00a9f99f68e5c73ae958e721d081d800e))
* Merge pull request #440 from ozone-development/help-modal-styling ([531d2772](https://github.com/aml-development/ozp-center/commit/531d27725dfe43e7edbab0fba2c44b7806c39bda))
* Merge branch 'master' into new-backend ([029709f1](https://github.com/aml-development/ozp-center/commit/029709f121145a078c6ff89c7fd96ce29a7a6442))           

### 1.0.16 (2015-11-18)

#### Feature  
* **help articles**:  Role based article display ([6453b340](https://github.com/aml-development/ozp-center/commit/6453b3406ae5f453580e43902bd3bae1ccf0a1a5))      

#### Merge Pull Requests  
* Merge pull request #437 from ozone-development/help-articles-role ([945bf421](https://github.com/aml-development/ozp-center/commit/945bf42109fa8b57432fedbea2eaa04070fe6f0f))
* Merge pull request #435 from ozone-development/issue_371_Form ([08ab8ece](https://github.com/aml-development/ozp-center/commit/08ab8ece2fcfc49b44c4f660e5cc22dcc4857ea0))         

#### Changes  
* Update helpmodal.jsx ([f5bcf453](https://github.com/aml-development/ozp-center/commit/f5bcf4531bfa8e1e33283ff0c97b5ef69c4294a1))     

### 1.0.15 (2015-11-11)

#### Feature  
* **reviews**:  Require description when rating app #428 ([d6cd8373](https://github.com/aml-development/ozp-center/commit/d6cd8373acc37b37d7dbd40e8e7b16ffbe356ab0))    
* **help articles**:  integrate help articles into center #418 ([cc9a7568](https://github.com/aml-development/ozp-center/commit/cc9a75688a969b2928e44323174263548b8830bb))    

#### Fixes  
* (fix)Top Left Nav and Testing Form labels ([78746c0d](https://github.com/aml-development/ozp-center/commit/78746c0d299200f20b74434d462e163003c79465))
* Fix merge problem. #423 ([c68c42e0](https://github.com/aml-development/ozp-center/commit/c68c42e0436465b9e0897a15aa008f5232a7339c))
*  Eliminate many warnings. #423 ([be4fa6da](https://github.com/aml-development/ozp-center/commit/be4fa6da4b1a7a9e6dc2dc2b116906f4f24a2764))    
* **table view**:  Change "Excel" to "csv" #417 ([120c7875](https://github.com/aml-development/ozp-center/commit/120c7875cf06779ef3071fcabb0201c173ccc1be))    
* **create/edit**:  Fix required boolean for Contact Type not respected. ([7d49388c](https://github.com/aml-development/ozp-center/commit/7d49388c7bb12b1fbf732a3eb57b0d12ac6f95cd))    
* **orgsteward modal**:  Hit endpoint for all stewards; modify display ([78d7f72a](https://github.com/aml-development/ozp-center/commit/78d7f72a30864d9d70dee4fce5c43f7869ecbbec))    
* **quickview details**:  organization, phone numbers, Gov Sponsor ([843e34ff](https://github.com/aml-development/ozp-center/commit/843e34ff1211e5271d9a85071e405b5cc68ea919))     

#### Merge Pull Requests  
* Merge pull request #433 from ozone-development/feature-require-review-description ([dea49275](https://github.com/aml-development/ozp-center/commit/dea49275d4881a1bd16b30d70dd26ffab1a41fd4))
* Merge pull request #434 from ozone-development/fix-warnings3 ([2e88efa5](https://github.com/aml-development/ozp-center/commit/2e88efa50feef129d01691f6f472667f4d5630e4))
* Merge pull request #430 from ozone-development/fix-warnings3 ([89f3de70](https://github.com/aml-development/ozp-center/commit/89f3de702b53a607427bf3401a9e4ac5c3ac93f3))
* Merge pull request #431 from ozone-development/help-articles-integration ([24943928](https://github.com/aml-development/ozp-center/commit/249439283cd98434ace5133b0bef7f1dc80a9770))
* Merge pull request #429 from ozone-development/fix-change-to-export-to-csv ([3309bf74](https://github.com/aml-development/ozp-center/commit/3309bf74133f6268dd96bba46471d5dddc5a2e9e))         

#### Changes  
* Delete refactored out files. ([38b12637](https://github.com/aml-development/ozp-center/commit/38b126370fd318d4ac7af0fef67324d120b71e07))     

### 1.0.14 (2015-10-28)

#### Feature  
* **table view refactor**:  Refactored Listing Management section for better organization, refactored table view to use w2ui, added export to excel option in table view, created a seperate unpaginated listing store for tableview, added a call in ListingsService.js to retrieve tableview's listings. ([520c7b88](https://github.com/aml-development/ozp-center/commit/520c7b8893b41e2c31b0bce5456ab5ebb94a278a))    

#### Fixes  
* (fix) alt nav tags ([ce3bd896](https://github.com/aml-development/ozp-center/commit/ce3bd8966778fae6314d9d171b6b2fe83d65101e))   
* **create/edit**
  *  Add array index to unique key via props ([0fe0b739](https://github.com/aml-development/ozp-center/commit/0fe0b7391b410d1935abb551051318c02f79e420))
  *  Add unique keys to each contact field #267 ([41a2cbb1](https://github.com/aml-development/ozp-center/commit/41a2cbb1e5316db582b88bc6d23efba159c05021))      

#### Merge Pull Requests  
* Merge pull request #426 from ozone-development/table-view-refactor ([ca84ef71](https://github.com/aml-development/ozp-center/commit/ca84ef71cf30c6cedbe6d10cfe757903507df106))
* Merge pull request #412 from ozone-development/issue_392_nav ([5dfa6a22](https://github.com/aml-development/ozp-center/commit/5dfa6a22b2f693213a54636b4283dd16122b39a5))
* Merge pull request #427 from ozone-development/fix-contacts-shuffle ([0ad097dd](https://github.com/aml-development/ozp-center/commit/0ad097dd95424f473116ffe8067cb510d676f1d2))
* Merge pull request #421 from ozone-development/fix-contacts-shuffle ([1f8804d6](https://github.com/aml-development/ozp-center/commit/1f8804d6331c665627bcd9ccd36586a1c72cbff7))           

### 1.0.13 (2015-10-21)

#### Feature  
* **newbackend**:  Added support for the new backend on Center Cettings tabs. #27, #25, #28, #26 ([886d5511](https://github.com/aml-development/ozp-center/commit/886d5511f168088efd1896d9faf5b3d805115af8))    

#### Fixes  
* **feedback modal**:  Alan added current_rejection to listing; hook it up. ([3b8f656d](https://github.com/aml-development/ozp-center/commit/3b8f656d7c7c64bdc7e9aeaa7455192659c80b77))    
* **quickview**:  rejection details field name changed. ([2d6b99cc](https://github.com/aml-development/ozp-center/commit/2d6b99ccd7ed3d2f7b06ce715373ca7631df4a43))    
* **listing mgmt**:  Prevent inappropriate display of error modal. ([10da6b64](https://github.com/aml-development/ozp-center/commit/10da6b64fd4bc7f502d3189c4abc09bafedfd13c))    
* **style**:  Fix bug that caused large table rows when displaying only a few results ([7ef40cb5](https://github.com/aml-development/ozp-center/commit/7ef40cb5315ab1dd512be828c6eeb65013b51f18))    
* **webapi**:  constructor needs to create object with new ([aea7158d](https://github.com/aml-development/ozp-center/commit/aea7158d8b29691e4a993afc3ed50dd5c9c75f51))     

#### Merge Pull Requests  
* Merge pull request #411 from ozone-development/table-view-bug-fix ([9f92eaab](https://github.com/aml-development/ozp-center/commit/9f92eaab0526d74a72067e314defd02c226aa02c))
* Merge pull request #408 from ozone-development/metrics-report-agency ([fc2554d0](https://github.com/aml-development/ozp-center/commit/fc2554d07cc24f378c30c52436d329016f1fd603))
* Merge pull request #413 from ozone-development/center-settings-nb ([3eb7d31e](https://github.com/aml-development/ozp-center/commit/3eb7d31eecf256c9fc791b0f0e8a575e6bdbae77))
* Merge branch 'new-backend' of http://github.com/ozone-development/ozp-center into center-settings-nb ([671e0f21](https://github.com/aml-development/ozp-center/commit/671e0f213cce13631e6eb677002ea21528b1a629))
* Merge branch 'master' into new-backend ([586033a4](https://github.com/aml-development/ozp-center/commit/586033a4479b3479f180af3d79a777bd0ab562e7))        

#### Chore  
* **spelling/spacing**:  Fixed spelling and spacing issues ([c2968067](https://github.com/aml-development/ozp-center/commit/c29680672da022e67eeecde99fe353284e032025))    
* **tests**:  Fixed unit tests for intents ([f92e66fc](https://github.com/aml-development/ozp-center/commit/f92e66fcf1c8a9be3c4bf7bb32cf28cbe32e2a83))      

### 1.0.12 (2015-10-14)

#### Feature 
* **tour**
  *  Update template and styling ([952d93a6](https://github.com/aml-development/ozp-center/commit/952d93a62aeedc77da174a59f82b5d0af21c5921))
  *  Remove template ([dc849b51](https://github.com/aml-development/ozp-center/commit/dc849b5151cac03fd573226c878f6c29e408b03e))
  *  Update tour ([07778fd6](https://github.com/aml-development/ozp-center/commit/07778fd6071c1f514be7bca11506475d7becb5de))
  *  Change tour stop text and add listing detail tab stops ([2e158795](https://github.com/aml-development/ozp-center/commit/2e15879596772877b31221bc5f3f42afc8433ed1))
  *  Updated tour stop text ([468cd0bb](https://github.com/aml-development/ozp-center/commit/468cd0bb82dc5674074eb971415f11d2fe367b59))
  *  Update tour stops to open ([ea5c8e42](https://github.com/aml-development/ozp-center/commit/ea5c8e4239f8df8074598b02b2d606f2e2fc4eb7))
  *  Style tour popovers and add backdrops to highlight elements ([5cd72fbf](https://github.com/aml-development/ozp-center/commit/5cd72fbf0b9e80a86c96fd998fe72252e272d4de))     
* **settings**:  hook up Notifications to new backend. OZBE#29 ([e6f30f29](https://github.com/aml-development/ozp-center/commit/e6f30f295807936c0e35e64520cc325d9c693506))    
* **pagination**:  Add (back) ability to pass in Type converter. ([4d354e43](https://github.com/aml-development/ozp-center/commit/4d354e43d1ce53b3e27f014bd7264d536c9c167c))    

#### Fixes  
* **tableview**:  Enable tables which include drafts without owner or org to be sorted ([593c5e33](https://github.com/aml-development/ozp-center/commit/593c5e334d8f7d5ff554ef28542a228118c84235))   
* **listingmanagement**
  *  Quickly switching between Org tabs can cause data to be populated incorrectly ([1954aac1](https://github.com/aml-development/ozp-center/commit/1954aac1007995a9a927fe515372fc4dbbfe4772))
  *  Fix inaccurate results on first click of org steward tab ([aeb73416](https://github.com/aml-development/ozp-center/commit/aeb734168d9959d25900305dd42f8cb42a27cadd))
  *  Table view does not work if the owner displayname is blank ([ebafb203](https://github.com/aml-development/ozp-center/commit/ebafb203c12bbdbade47f7da9cc9b759955bac96))      

#### Merge Pull Requests  
* Merge pull request #410 from ozone-development/listingmgmt-tableview-col-sorting ([b6c4f4c0](https://github.com/aml-development/ozp-center/commit/b6c4f4c0a5ef33ca6fd74b4658625bc4c53a4a70))
* Merge pull request #407 from ozone-development/listingmgmt-tabs-race ([32a402eb](https://github.com/aml-development/ozp-center/commit/32a402eb6ccb90363ec4c2ab2c51b9a2030e4078))
* Merge pull request #404 from ozone-development/listingmgmt-tabs ([69601d3a](https://github.com/aml-development/ozp-center/commit/69601d3ac0cd1df86d6dcf83b3477cb78173d836))
* Merge pull request #405 from ozone-development/tableview-blank-owner ([be40b9d9](https://github.com/aml-development/ozp-center/commit/be40b9d9f3abcf4fa74be282c810172e09532cfd))
* Merge pull request #401 from ozone-development/feature-settings-notifications ([a8d370cd](https://github.com/aml-development/ozp-center/commit/a8d370cdcdb92a4c2c43c5fa283003ec01cc8b8d))        

#### Chore  
* **regex**:  Removed console output and fixed regex linting error ([205f0dd8](https://github.com/aml-development/ozp-center/commit/205f0dd8a35bf8ffd73fe6381df2e891f28de238))    

#### Changes  
* Add reporting of agency to application review metrics and app submission metrics ([0eeb0665](https://github.com/aml-development/ozp-center/commit/0eeb0665219ae92785f06d1c143576824790332b))     

### 1.0.11 (2015-10-06)

#### Feature  
* **table view**:  Created table views for AllListings and OrgListings pages. ([6dbb6ad4](https://github.com/aml-development/ozp-center/commit/6dbb6ad4083ee5f0323e534ad0b411a40bf8b71a))    
* **tour**:  Interactive homepage tour defined ([a89f4039](https://github.com/aml-development/ozp-center/commit/a89f403914b0d36c1aabb3ed33498e665b388659))    

#### Fixes 
* **508**
  * button alternatives for NavBar index.jsx ([834484d8](https://github.com/aml-development/ozp-center/commit/834484d8c4a2319222c96774b6b63beed15dcfd2))
  * button alternatives for nav ([555ecd9c](https://github.com/aml-development/ozp-center/commit/555ecd9cf32849df9f54c946a06a0d4fb5630eb8))     
* fix unit tests: blueDark -> white ([e05cb558](https://github.com/aml-development/ozp-center/commit/e05cb55824cdcab97b25ae84600612401ec53726))   
* **colors**
  *  Remove extra accidental file ([a8c6e829](https://github.com/aml-development/ozp-center/commit/a8c6e829055652f32c30ca35b4fa78d9ff5c374b))
  *  Change table view sort icon color to be visible ([7334b169](https://github.com/aml-development/ozp-center/commit/7334b1690f3dbcfacd882c5588f4f3baccf363a2))    
* **listing mgmt**
  *  For org and all listings show only selected count. ([6bea87c6](https://github.com/aml-development/ozp-center/commit/6bea87c6bcdeff37bf7d8cd31a5e6e3bf78730fb))
  *  Possible fix for IE9 image upload. ([e1de5784](https://github.com/aml-development/ozp-center/commit/e1de578460965d83844d36c3c6c5036dc4d8a991))
  *  Fix org tab filter. ([eefd5d88](https://github.com/aml-development/ozp-center/commit/eefd5d8830c859aeda6645363aa61070f8dd5c09))
  *  show edited_date ([2d492202](https://github.com/aml-development/ozp-center/commit/2d492202b5b2db068e26168e8c38ac0254a81964))
  *  Use title vice short_name to list by org ([98ba9893](https://github.com/aml-development/ozp-center/commit/98ba9893da513722055772e9d841e4b9d4a3bb51))     
* **merge**:  Tests are passing, merge failure fixed ([5c1db472](https://github.com/aml-development/ozp-center/commit/5c1db472440e040b0633e46dc662ab99ea23b18f))    
* **amdin tab**:  org stewards were not seeing admin tab ([6c323e5c](https://github.com/aml-development/ozp-center/commit/6c323e5cc75c8c024671d288962e4b10016b0c0a))    
* **image updload**:  Add dummy upload to make image upload work for IE11. ([f8cf745d](https://github.com/aml-development/ozp-center/commit/f8cf745d3ee50332f3aa2824d1dd1bd67b97e2d4))    
* **search**:  For new backend catgegory searches should have 'or' ([ac0421a4](https://github.com/aml-development/ozp-center/commit/ac0421a426ac0b40c6bd47b3df086f0b31ce949e))    

#### Refactor  
* refactor ([fde03ee8](https://github.com/aml-development/ozp-center/commit/fde03ee8cf9b29ca33266ea0540989138474efc8))    

#### Merge Pull Requests  
* Merge pull request #400 from ozone-development/issue_392_nav ([c7283de6](https://github.com/aml-development/ozp-center/commit/c7283de61c46176dad530d8fae46169bc9127adf))
* Merge pull request #395 from ozone-development/table-view-squashed ([75d2dfbb](https://github.com/aml-development/ozp-center/commit/75d2dfbb9571d44e8bf04b0a1538bb563261180e))
* Merge pull request #397 from ozone-development/fix-ie11-image-upload ([37c2c93a](https://github.com/aml-development/ozp-center/commit/37c2c93aefbfc616ac8e661235ea1b7d6ebee563))         

#### Changes  
* stability fixes ([51b7b18f](https://github.com/aml-development/ozp-center/commit/51b7b18fb1ccb9b77252cd784ba8236b95f1c929))     

### 1.0.10 (2015-09-29)

#### Feature  
* **administration**:  reject and accept ([3fe45554](https://github.com/aml-development/ozp-center/commit/3fe4555476d42a8fd1f4f0e3d6f92834a62fd670))    
* **categories / mall management**:  Fixed categories ozp-backend#24 ([3a34d089](https://github.com/aml-development/ozp-center/commit/3a34d089d4e5ba84aba6e064d192876da34d3033))    

#### Fixes  
* **508**:  Text alternatives for Intents jsx ([b9980d72](https://github.com/aml-development/ozp-center/commit/b9980d72beb8a691198f25c0bebbddb6de2145a5))   
* **listing mgmt**
  *  Fix OrgListing tab by using agencyShort vice org OZBE#30 ([24de145e](https://github.com/aml-development/ozp-center/commit/24de145ebec70657a1232523cc81904e46bd1858))
  *  Match PaginatedList to new backend counts OZBE#30 ([d94bbe5b](https://github.com/aml-development/ozp-center/commit/d94bbe5b32a5773c5eea12e099f62a099241c986))     

#### Refactor  
* **webapi**:  Response class no longer necessary. ([80b8020b](https://github.com/aml-development/ozp-center/commit/80b8020bcd10396d6fac1162a710bebdab1352ce))    

#### Merge Pull Requests  
* Merge pull request #386 from ozone-development/508_issue_ALT_Tag ([d310b773](https://github.com/aml-development/ozp-center/commit/d310b773f5cc4fafab60e21ac5a58217b9b76752))
* Merge branch 'master' into new-backend ([3d626268](https://github.com/aml-development/ozp-center/commit/3d62626837d78740470fdb559230da05a08416ac))
* Merge pull request #391 from ozone-development/feature-rejection ([60e617f9](https://github.com/aml-development/ozp-center/commit/60e617f97ec032b1a18a1e0abd5829320569af1f))
* Merge pull request #390 from ozone-development/fix-all-center-listings-counts ([59e028de](https://github.com/aml-development/ozp-center/commit/59e028dea6fee20bb72ba186da9edad97bcf0a68))
* Merge pull request #389 from ozone-development/fix-all-center-listings-counts ([f510ce07](https://github.com/aml-development/ozp-center/commit/f510ce07b9321e98bcf5a91e9943a22f02bd7d50))
* Merge pull request #388 from ozone-development/new-backend-categories ([7a31c4cf](https://github.com/aml-development/ozp-center/commit/7a31c4cf1fff9870b512e2bf856638d97aeca3fa))        

#### Chore  
* **package.json**:  Point commons to new-backend branch. ([3fe7f76d](https://github.com/aml-development/ozp-center/commit/3fe7f76dbb179518865938795c077df19cf9d7aa))    
* chore(ADMIN | APPS_MALL_STEWARD): changed references to ADMIN for auth to APPS_MALL_STEWARD ([364ec339](https://github.com/aml-development/ozp-center/commit/364ec33937f38c8fb2afbfed43e599529a17b3ab))      

### 1.0.9 (2015-09-23)

#### Feature  
* **contacts modal**:  Contacts modal added to global navbar ([9065e93d](https://github.com/aml-development/ozp-center/commit/9065e93d0b3b0e4c43cd468a60ec9c151aeacaa7))    
* **508**:  Text alternatives for non-text content ([ac60a578](https://github.com/aml-development/ozp-center/commit/ac60a578ca031e87af33ba3f36fa17e6c820fdd9))    
* **activities**:  Hook-up activity endpoints OZBE#31 ([92618aac](https://github.com/aml-development/ozp-center/commit/92618aacff56df459727d96bdcd7708e1d1980af))   
* **create/edit**
  *  Change org only if member of the org OZBE#56 ([2c0dc59a](https://github.com/aml-development/ozp-center/commit/2c0dc59aad07a0e656c2b501b1a5cba8801dd95d))
  *  hook up screenshots OZBE#54 ([1195e9f3](https://github.com/aml-development/ozp-center/commit/1195e9f3d048cfd1779d089d653bc836c4507bde))
  *  hook up images endpoint OZBE#54 ([755ac34b](https://github.com/aml-development/ozp-center/commit/755ac34bd1006335cd64e73018648580774bd101))
  *  connect profile search endpoint OZBE#55 ([aeee5544](https://github.com/aml-development/ozp-center/commit/aeee554406b32208de6247c10afec198897a72d9))     
* **discovery**:  hook up organization counts OZBE#49 ([fca57133](https://github.com/aml-development/ozp-center/commit/fca571332b20f14d5156d4f1bd4c1b7bc38f6935))    
* **createedit**:  Preliminary create ([4c75f4eb](https://github.com/aml-development/ozp-center/commit/4c75f4eb650a1166adf644b3f65267b89052ea6e))    

#### Fixes  
* **508**:  Text alternatives for non-text content ([ccfcde74](https://github.com/aml-development/ozp-center/commit/ccfcde744432462a2ed628eaef7e5abc204170cf))    
* **listing mgmt**:  Fix all center listings per new paging ([df94ed5b](https://github.com/aml-development/ozp-center/commit/df94ed5b09f0e2adb9134d82760554a992ea0945))    
* **search**:  Updates to get search to work with paging changes. ([65c8952d](https://github.com/aml-development/ozp-center/commit/65c8952dcae62be2de674c38395410430785aec7))    
* **display**:  Recent Activity positioning, QuickView ratings positioning ([23a28b8f](https://github.com/aml-development/ozp-center/commit/23a28b8f2a0d6535ca5620e2a9fb530a60907961))    
* fix IE specific CSS hiding Center search, carried over from old nonresponsive design ([a38748cb](https://github.com/aml-development/ozp-center/commit/a38748cb7dc21ad582e63fd661e79404da48a942))     

#### Merge Pull Requests  
* Merge pull request #387 from ozone-development/fix-all-center-listings ([50740fea](https://github.com/aml-development/ozp-center/commit/50740fea6537fc60ee79842e725f82a8a9e34369))
* Merge pull request #377 from ozone-development/contacts-modal ([cba272e1](https://github.com/aml-development/ozp-center/commit/cba272e121bce01599fcaf82851690ff80fa4cf0))
* Merge pull request #385 from ozone-development/fix-search-after-paging-update ([1184aec3](https://github.com/aml-development/ozp-center/commit/1184aec39cd58d802eac4f5ee5faaeab3bf23d25))
* Merge branch 'master' of http://github.com/ozone-development/ozp-center into contacts-modal ([f2570635](https://github.com/aml-development/ozp-center/commit/f2570635ec701cd65145741e58dacf3a40f26711))
* Merge pull request #378 from ozone-development/fix-display-bugs ([554c71d5](https://github.com/aml-development/ozp-center/commit/554c71d50356fe66efbb7bc8554ceb18876cbf13))
* Merge pull request #383 from ozone-development/feature-create-edit-activities ([d8419ca4](https://github.com/aml-development/ozp-center/commit/d8419ca4b2a4cfb37d59d715b471552f9f9b57d0))
* Merge pull request #382 from ozone-development/feature-change-org ([2aed4412](https://github.com/aml-development/ozp-center/commit/2aed4412da690e7e4526bb251b38f0af0a78705e))
* Merge pull request #381 from ozone-development/feature-listing-counts ([d060c40a](https://github.com/aml-development/ozp-center/commit/d060c40a1fe2a3f89648c5c9f7e8aa1445d6bc61))
* Merge pull request #380 from ozone-development/feature-images ([8a2aa4f5](https://github.com/aml-development/ozp-center/commit/8a2aa4f527ec9c0ef3dc16fea6825f0eda92a137))
* Merge pull request #379 from ozone-development/feature-images ([163b5cb3](https://github.com/aml-development/ozp-center/commit/163b5cb3a964b8b9bcce45ca586d5d97780ed5bf))
* Merge pull request #372 from ozone-development/fix-ie-search ([33d21dbb](https://github.com/aml-development/ozp-center/commit/33d21dbbc6f08d7b014004012c887e7aa8f4223d))
* Merge pull request #374 from ozone-development/feature-profile-search ([04ea8a05](https://github.com/aml-development/ozp-center/commit/04ea8a053cc5ec70579e3ac2a2d0af6d974b798c))
* Merge pull request #373 from ozone-development/node-0.12.7 ([a5574ae6](https://github.com/aml-development/ozp-center/commit/a5574ae6b77fbc845f94332b69a902fd8c49f34f))        

#### Chore  
* **create/edit**:  Accomodate late-breaking API change ([7de6df01](https://github.com/aml-development/ozp-center/commit/7de6df0173beb3d3c236f689e13dd8aca352e793))    
* **node support**:  Support for node v0.12.7 (latest) ([450f762d](https://github.com/aml-development/ozp-center/commit/450f762db1606c6c5e6fa7b461551763a566325c))    

#### Changes  
* **package.json**:  Updated deps, merged master ([1de14647](https://github.com/aml-development/ozp-center/commit/1de14647dc14a50ffafcc7d0bf1115235d2a8b90))    
* Corrected icon for contacts link in navbar ([86b3d3a4](https://github.com/aml-development/ozp-center/commit/86b3d3a4c438de3252c554623ddb6fe67d5f5bbf))
* Removed Feedback and Help links from Gloabl tool bar and replaced with a link to contacts modal. ([d4be3cef](https://github.com/aml-development/ozp-center/commit/d4be3cef739429c884bc75c912ee55e93d760041))
* remove IE10 specific styles as well ([7f6ec1f6](https://github.com/aml-development/ozp-center/commit/7f6ec1f6d330568db966f0ecbb1925454fcbf580))     

### 1.0.8 (2015-09-01)

#### Feature  
* **quickview**:  Quickview reviews tab OZBE#35 ([6060f001](https://github.com/aml-development/ozp-center/commit/6060f00125cd60c307d262bd5f0f86e0f28296d5))      

#### Merge Pull Requests  
* Merge pull request #367 from ozone-development/feature-more-quickview ([cd9fd060](https://github.com/aml-development/ozp-center/commit/cd9fd060c7a75c94a9027ac91f89801c67ac2c0d))        

#### Chore  
* **recentactivity**:  Eliminate excessive warnings during unit test ([fa3a39e6](https://github.com/aml-development/ozp-center/commit/fa3a39e69119ad047e5bda92297751ee25674d42))      

### 1.0.7 (2015-08-25)

#### Feature  
* **tooltips**:  added tooltips to quick  ([b8fa0d0c](https://github.com/aml-development/ozp-center/commit/b8fa0d0c33c3ffedf775043bdfe74b45862eb9c0))    

#### Fixes  
* **detailview**:  Usage Requirements now wraps long text with no spaces or breaks.#343 ([2e0e2f53](https://github.com/aml-development/ozp-center/commit/2e0e2f53d472e75f15c3991c81ec87f8f049a3a9))    
* **tests**:  fixed undefined error occuring in unit tests ([22e712cb](https://github.com/aml-development/ozp-center/commit/22e712cb404a8c3bc1b72183d3f271a88935a7e6))    
* **reviews metrics**:  Only report review view when component is mounted. ([a7694095](https://github.com/aml-development/ozp-center/commit/a76940950029e794353cdfee658b95ac0dd991df))    
* **detailedquery**:  Cleaned up some text, added some spaces ([decc768e](https://github.com/aml-development/ozp-center/commit/decc768e02caa611dcd5601abb04bf73b6020ad3))    
* **mozilla**:  Disabled css transitions for Firefox ([970e0f8f](https://github.com/aml-development/ozp-center/commit/970e0f8fbd71e525276fe6f117790fa59dd8912d))    
* **firefox**:  Disabled Bootstrap animations if the user is using FireFox ([77830c64](https://github.com/aml-development/ozp-center/commit/77830c647d31fcf9830c9232ca6c30c811727a2a))    
* **metrics**:  listing review view, and review fixed ([ffb653f3](https://github.com/aml-development/ozp-center/commit/ffb653f397ef1a64bd02ea8b915a904f878e9e21))    
* **search description**:  added and where nessecery between labels ([ef409bb2](https://github.com/aml-development/ozp-center/commit/ef409bb2de4e8a171f425293f4552e74d6b01c9f))     

#### Merge Pull Requests  
* Merge pull request #359 from ozone-development/responsive ([e6d31238](https://github.com/aml-development/ozp-center/commit/e6d31238307468b2d0d4d6a74c63db1f615474fc))
* Merge pull request #368 from ozone-development/details-more-wrap ([bae8024f](https://github.com/aml-development/ozp-center/commit/bae8024f9c9c27ee238a74648f7540638b978a70))
* Merge pull request #362 from ozone-development/search-tweaks ([2d0f7b4a](https://github.com/aml-development/ozp-center/commit/2d0f7b4a60587ae2c7bccc85022d64e9c27b1f8a))
* Merge pull request #364 from ozone-development/metrics-tweaks ([a5a1d172](https://github.com/aml-development/ozp-center/commit/a5a1d172b370f850bc46b0efa67c738e002a1387))
* Merge pull request #365 from ozone-development/firefox-performance ([7d0bbfaa](https://github.com/aml-development/ozp-center/commit/7d0bbfaaabd6cf8a618bbcad0c99a6fbb9d9f2d0))
* Merge pull request #361 from ozone-development/more-tooltips ([33ab9f39](https://github.com/aml-development/ozp-center/commit/33ab9f39b799e8d722382fb6cb33e7120c465a92))
* Merge branch 'master' into new-backend ([68a88c3d](https://github.com/aml-development/ozp-center/commit/68a88c3ded4bae7ca34d7b68382b1f3055c8571e))
* Merge pull request #360 from ozone-development/feature-quickview ([6966e500](https://github.com/aml-development/ozp-center/commit/6966e5001cc218f7efa3a34118375d33c2574d0d))
* Merge pull request #358 from ozone-development/responsive ([d87b3ac8](https://github.com/aml-development/ozp-center/commit/d87b3ac830b44ee3b10b588c3e6ea7ce5056b89a))        

#### Chore  
* **styles**:  removing temp files ([cd3b0e9d](https://github.com/aml-development/ozp-center/commit/cd3b0e9d78fe81070764741f4de3ddee3ceae2fb))    
* **detailed query**:  changed and to or for agency and type ([4e9774bb](https://github.com/aml-development/ozp-center/commit/4e9774bbab403bf8a761dddf230022afccd372f0))    

#### Changes  
* Change responsive colors to be 508 compliant (AA) ([dba099f9](https://github.com/aml-development/ozp-center/commit/dba099f9335439c291bd407f3dd220ba6c0071e5))
* Making center responsive to tablet size ([d6430a59](https://github.com/aml-development/ozp-center/commit/d6430a5909a205e113afd8d002c11beead65199e))    
* **quickview**:  Updates for Quickview less Reviews tab OZBE21 ([2fe68ce0](https://github.com/aml-development/ozp-center/commit/2fe68ce0f86dbb36379c069508f6a14c46763093))     

### 1.0.6 (2015-08-18)

#### Feature 
* **navbar**
  *  Update to point to new  ([37e345e4](https://github.com/aml-development/ozp-center/commit/37e345e4e7a73f04b76cbf626495cf8754729a91))
  *  Display enabled, approved count next to org #342 ([dcfa76ae](https://github.com/aml-development/ozp-center/commit/dcfa76ae7341c288fa82bf2015b17df02de44613))       

#### Merge Pull Requests  
* Merge pull request #353 from ozone-development/feature-org-counts ([ba289fba](https://github.com/aml-development/ozp-center/commit/ba289fbadfe4ab988d840f88662444b2dfc36a3c))           

### 1.0.5 (2015-08-11)

#### Feature  
* **listing management**:  Hook up my listings OZBE38 ([3dbfb77d](https://github.com/aml-development/ozp-center/commit/3dbfb77d116af62ab8fcc732b6c1af12b7e78a34))    
* **menu**:  Add Helpdesk link to dropdown menu #345 ([24a93f49](https://github.com/aml-development/ozp-center/commit/24a93f49096de3971f75eb747752c5b9f063f8f8))    
* **search**:  Update  ([0b96d391](https://github.com/aml-development/ozp-center/commit/0b96d391ead4699a136bbec6ad5814b0f30ca968))    

#### Fixes  
* **searchmetrics**:  Indicate to metrics where searches are combined with other terms ([be5d796e](https://github.com/aml-development/ozp-center/commit/be5d796e101ce0365eaa0056f88d700452757dd9))    
* **notifications**:  fix notifications background on dropdown ([7e1c71c7](https://github.com/aml-development/ozp-center/commit/7e1c71c7bb36810c412a21dc1eee1e951708b8eb))     

#### Merge Pull Requests  
* Merge pull request #352 from ozone-development/help-desk ([3d2007a0](https://github.com/aml-development/ozp-center/commit/3d2007a0b958fe5da362fcf4f72e744b8b10c5b9))
* Merge pull request #351 from ozone-development/branding ([6b6d916b](https://github.com/aml-development/ozp-center/commit/6b6d916b10f8f33d55ca1286cfd21a1779968a62))
* Merge pull request #349 from ozone-development/feature-listing-management ([dcec81fb](https://github.com/aml-development/ozp-center/commit/dcec81fb5dfea314ef3dd6471ceb9a835759fd03))
* Merge pull request #347 from ozone-development/search-metrics ([b2c9dc18](https://github.com/aml-development/ozp-center/commit/b2c9dc185ea51e5f6754712733102851c8762294))
* Merge pull request #346 from ozone-development/helpdesk ([b0f1b2f4](https://github.com/aml-development/ozp-center/commit/b0f1b2f4222d00821f1b1bab6218e04e40164678))
* Merge pull request #341 from ozone-development/notifications-patch ([6b788d44](https://github.com/aml-development/ozp-center/commit/6b788d44515dd8c3e6c1b5f65ab788873865a9e6))
* Merge branch 'master' into new-backend ([4f75b119](https://github.com/aml-development/ozp-center/commit/4f75b11964fd410c1d197b08730f07a96312f8eb))        

#### Chore  
* **branding**:  Icons and images will not be updated at this time ([3245b0cc](https://github.com/aml-development/ozp-center/commit/3245b0cc6c9276da623e6aa57663e5a84a87283b))    

#### Changes 
* **styling**
  *  Updated submit feedback hover ([8a8c8199](https://github.com/aml-development/ozp-center/commit/8a8c8199103ddb8b15fe67a19109b5b8afd0d921))
  *  Highlight feedback button, incorporate Help Desk ([c5fc29de](https://github.com/aml-development/ozp-center/commit/c5fc29de244fd6bb0ee00a8494669223012f283b))     
* release 1.0.4 ([009f9801](https://github.com/aml-development/ozp-center/commit/009f98015dfc2f9ff791889b8189876f067e47d9))
* Turn off jshint's complaining when variables aren't camel case. ([3800bced](https://github.com/aml-development/ozp-center/commit/3800bcedf23f0626e97baec997eac1732ce6bc8d))     

### 1.0.3 (2015-07-28)

#### Feature  
* **search**:  Changes to support search OZBE18 ([bdfb2c29](https://github.com/aml-development/ozp-center/commit/bdfb2c297f986679b9c11f94a45fcefa23af2d6a))    
* **organizations**:  Show short names in dropdown OZBE15 ([f7534ba3](https://github.com/aml-development/ozp-center/commit/f7534ba3bc0bb4ac5c3e7f7ad59e7feec51ca9f9))    
* **bookmarks**:  Bookmark toggling works in discovery OZBE8 ([9505b585](https://github.com/aml-development/ozp-center/commit/9505b585d7b51d4ea7c5cc20ad7d6981fa255882))    

#### Fixes  
* **createedit**:  Changed remaining characters text #293 ([14ecfd8c](https://github.com/aml-development/ozp-center/commit/14ecfd8ce60255bfa11b95df9cceed4da3523aca))     

#### Merge Pull Requests  
* Merge pull request #340 from ozone-development/feature-search ([eda81f60](https://github.com/aml-development/ozp-center/commit/eda81f60fbb2e4503d79a7e4432740fedd6c2c97))
* Merge pull request #339 from ozone-development/remaining-char ([7eac5394](https://github.com/aml-development/ozp-center/commit/7eac53947633d2b094a649c43260667c58f716b4))
* Merge pull request #338 from ozone-development/feature-bookmarks ([89de791b](https://github.com/aml-development/ozp-center/commit/89de791b37ef940f074d86672ece31fd5436e82a))           

### 1.0.2 (2015-07-22) 

#### Fixes  
* **quickview**:  Wrap long strings with CSS ([344cf57d](https://github.com/aml-development/ozp-center/commit/344cf57d44b457e68c595cc1477d9d788b0a5d67))     

#### Merge Pull Requests  
* Merge pull request #337 from ozone-development/quickview-wrap-fix ([ddf42f5e](https://github.com/aml-development/ozp-center/commit/ddf42f5e7733c8c89fd1e2066b9ba3bc03d4df6f))           

### 1.0.1 (2015-07-22) 

#### Fixes  
* **detailview**:  Force wrapping for long strings and links in detail view ([c042fcd7](https://github.com/aml-development/ozp-center/commit/c042fcd735f03a2d8540a3518c6fd5acd87a6111))     

#### Merge Pull Requests  
* Merge pull request #335 from ozone-development/search_link_org ([8608d28e](https://github.com/aml-development/ozp-center/commit/8608d28e0a7f0054b39cfc2e15199f742844f949))           

### 1.0.0 (2015-07-22)

#### Feature 
* **discovery**
  *  Preliminary integration of discovery page OZBE3 ([e0203f13](https://github.com/aml-development/ozp-center/commit/e0203f13e4545ee6c910613f804510e8df02ab69))
  *  Scroll to top on search results #289 ([27017c38](https://github.com/aml-development/ozp-center/commit/27017c38b5189ff9ed3b29a9f5c77e83c64e4373))     
* **createedit**:  Added character limit counter for short description #293 ([e6701f04](https://github.com/aml-development/ozp-center/commit/e6701f04bef65c88c8be50e3cea34c4c5eb392c2))    

#### Fixes  
* **discovery**:  Makes searches with only orgs return results ([319f97c7](https://github.com/aml-development/ozp-center/commit/319f97c75716bb2e8ca02ab2cb0b19592b4a6e7c))   
* **createedit**
  *  Deal with jshint warning from #266 ([7a9b664d](https://github.com/aml-development/ozp-center/commit/7a9b664d59d02ed24aec3a2bde8051d5c766bbac))
  *  Prevent routing issues caused by original fix for #266 ([9aa7b0af](https://github.com/aml-development/ozp-center/commit/9aa7b0afb869a200e6b8ca6b8050cbb6adbf5ed7))
  *  Maintain preview without undeleteable chars #324 ([73153c01](https://github.com/aml-development/ozp-center/commit/73153c01c7dea544a299752390af68075e7eed5a))
  *  Prevent routing issues caused by original fix for #266 ([d26f2c42](https://github.com/aml-development/ozp-center/commit/d26f2c42fd3cbf426df8567636e87964db0af02f))
  *  Prevent intermittently blank Listing Type ([98705105](https://github.com/aml-development/ozp-center/commit/98705105ce6b6149114640db7eecf94b07818ad7))     
* **detail view**:  Word wrap forced for what's new  ([172482c3](https://github.com/aml-development/ozp-center/commit/172482c3cb40ca27bd4b25f51788b64972e6d0d7))    
* **toolbar**:  disable notification button style when no notifications are present #282 ([e31a7687](https://github.com/aml-development/ozp-center/commit/e31a7687128ac2e956f34d402df4f7dfa097c784))     

#### Merge Pull Requests  
* Merge pull request #331 from ozone-development/feature-discovery ([c76c36e1](https://github.com/aml-development/ozp-center/commit/c76c36e1d3f4b664e909bd5655752cdc9fa10349))
* Merge pull request #333 from ozone-development/typo ([7d804ceb](https://github.com/aml-development/ozp-center/commit/7d804ceb38647da6c67a6f9972158fa9549e8390))
* Merge pull request #323 from ozone-development/report-application-agency ([1098e0ef](https://github.com/aml-development/ozp-center/commit/1098e0ef5b3f27505ff8cbb7bd6b7090125bc6bf))
* Merge pull request #322 from ozone-development/detailWrap ([67323115](https://github.com/aml-development/ozp-center/commit/67323115051a4d68759244f936209fd67f2d7f52))
* Merge pull request #326 from ozone-development/fix-empty-listing-type ([8fd3c450](https://github.com/aml-development/ozp-center/commit/8fd3c45082df0abd8bd7222fb49ea44344246392))
* Merge pull request #325 from ozone-development/fix-both-undeleatable-and-preview ([ae0a20fa](https://github.com/aml-development/ozp-center/commit/ae0a20faa054d13894685134657b638b69e4464f))
* Merge pull request #317 from ozone-development/short-description-charcount ([53a40103](https://github.com/aml-development/ozp-center/commit/53a4010368ced1615f2e6d70bc9bf20d25d0deee))
* Merge pull request #318 from ozone-development/search-scroll-top ([be5d4025](https://github.com/aml-development/ozp-center/commit/be5d40254db18aa4179b2381d6c5ebb05b970456))
* Merge pull request #320 from ozone-development/wski-282 ([1d7302a5](https://github.com/aml-development/ozp-center/commit/1d7302a5d19e1c1419737caf08b9e65154c6a857))
* Merge branch 'master' into fix-empty-listing-type ([583997c7](https://github.com/aml-development/ozp-center/commit/583997c71b0ade4e87f512cbd829444c9de86e6c))
* Merge pull request #319 from ozone-development/fix-empty-listing-type ([ca8b444d](https://github.com/aml-development/ozp-center/commit/ca8b444dd189052829a04df9ff44ad6f56f299af))
* Merge pull request #315 from ozone-development/fix-empty-listing-type ([c10cbd52](https://github.com/aml-development/ozp-center/commit/c10cbd5298213fb11dc0324f26bcc8588c610a85))        

#### Chore  
* **search**:  fix organization typo ([20aa95dd](https://github.com/aml-development/ozp-center/commit/20aa95dd1667631ada4fc6a493eb6a3adbb7fd05))    
* **package release**:  update artifact name ([44a56c53](https://github.com/aml-development/ozp-center/commit/44a56c53764b9ecf7e649190a6523de6730da56a))    

#### Changes  
* Added reporting of agency information when application launches are reported ([db333eec](https://github.com/aml-development/ozp-center/commit/db333eec43ef7416f7bb3dfe75add3174857f2da))     

### 0.7.16 (2015-07-14)

#### Feature  
* **discovery**:  Added detailed query to search #280 #161 ([1d7a1dc6](https://github.com/aml-development/ozp-center/commit/1d7a1dc6840c4e04d27243ce8c93f25305c8abc9))    

#### Fixes  
* **createedit**:  Prevent undeleteable characters in optional fields #256 #284 ([fe9861db](https://github.com/aml-development/ozp-center/commit/fe9861db75dc731e93b841c69dc691f34cafa8d8))    
* **discovery**:  clicking reset does not clear dropdowns #308 ([c4f1c6bd](https://github.com/aml-development/ozp-center/commit/c4f1c6bdbe48f39c7e54e85b64f9feaa68f68533))     

#### Merge Pull Requests  
* Merge pull request #313 from ozone-development/discovery-styling-patch-1 ([d20a660f](https://github.com/aml-development/ozp-center/commit/d20a660fd461fe0e707df07e9fb2affa82469c5e))
* Merge pull request #312 from ozone-development/metrics-sidebar-fix ([fac0a452](https://github.com/aml-development/ozp-center/commit/fac0a452dadd44ee5eb622063400060e85805474))
* Merge pull request #311 from ozone-development/search-tweaks ([50fbddb8](https://github.com/aml-development/ozp-center/commit/50fbddb83131f781267f07a7fc7d8275013b099c))
* Merge pull request #310 from ozone-development/fix-undeleteable-character ([71ed4505](https://github.com/aml-development/ozp-center/commit/71ed450551d7bfbf19ab81dd68604585abb3853f))
* Merge pull request #309 from ozone-development/reset-updates ([6d4e66c6](https://github.com/aml-development/ozp-center/commit/6d4e66c6c751c0e80c7a17e9a0ecf3f8f2869dc6))
* Merge pull request #307 from ozone-development/search-route ([271a2f35](https://github.com/aml-development/ozp-center/commit/271a2f350331951fe54ae30740256eeb94e31651))        

#### Chore  
* **discovery query**:  patched spacing issue with query #161 ([ad530582](https://github.com/aml-development/ozp-center/commit/ad5305824d1f8e4ed26862eec55d4ba5a993128d))    
* **metrics**:  SiteSearch not activated when categories are active #291 ([52c64115](https://github.com/aml-development/ozp-center/commit/52c64115e547b3462e93c5b901f8258723e8f589))    
* **detailed query**:  added seperations for the query string ([bc44e6cc](https://github.com/aml-development/ozp-center/commit/bc44e6cc2972b486511bcea8290ed248213151f4))      

### 0.7.15 (2015-07-07) 

#### Fixes  
* **createedit**:  Disable error modal on saving drafts #301 ([b0d3b186](https://github.com/aml-development/ozp-center/commit/b0d3b18696cd455eeddf0855e500f88f7d281ea1))     

#### Merge Pull Requests  
* Merge pull request #306 from ozone-development/fix-error-modal-on-save ([3b951f01](https://github.com/aml-development/ozp-center/commit/3b951f01783b4e758473039d8185865291a42cb0))
* Merge pull request #305 from emosher/master ([9b95889b](https://github.com/aml-development/ozp-center/commit/9b95889b87d7432c39537eb4c243280174f61309))
* Merge branch 'master' of https://github.com/ozone-development/ozp-center into search-route ([ac36b116](https://github.com/aml-development/ozp-center/commit/ac36b11690dbcc9b16367c549ae0b73a34e75386))        

#### Chore  
* **bower**:  remove moot  ([6c1b625e](https://github.com/aml-development/ozp-center/commit/6c1b625ebe86c60f032c91031b3531a946cf4551))    

#### Changes  
* checkpoint ([960a2538](https://github.com/aml-development/ozp-center/commit/960a253864b6103c83276b68958b4d8a21f12d6a))
* checkpoint ([08363781](https://github.com/aml-development/ozp-center/commit/08363781f1fedcd92190bda67aeff39e58b179bb))     

### 0.7.14 (2015-06-30) 

#### Fixes  
* **webpack**:  Updated webpack to 0.10.0 ([daa4595b](https://github.com/aml-development/ozp-center/commit/daa4595b115a58dc921c1889deb321a8af2b2349))    
* **help links & videos**:  Added help videos and doc links to modal #278 ([7c6053ff](https://github.com/aml-development/ozp-center/commit/7c6053ff02a0e0e7700147a9a06c5731b2dc8a6d))     

#### Merge Pull Requests  
* Merge pull request #303 from ozone-development/singleton-sidebar ([604e9598](https://github.com/aml-development/ozp-center/commit/604e9598060fafe0f2cfea6e6264ffd24e75a272))
* Merge pull request #304 from ozone-development/webpack-update ([01b3fe92](https://github.com/aml-development/ozp-center/commit/01b3fe92472cfa8c1b232eef0429f30e3bdcf2e7))
* Merge pull request #300 from ozone-development/feature-add-docs-videos-to-modal ([7d78d051](https://github.com/aml-development/ozp-center/commit/7d78d05179b006825c67c3e5cee9966ba1edfbdc))    

#### Documentation  
* Doc, video fix for center. ([392eca2f](https://github.com/aml-development/ozp-center/commit/392eca2fb17362347b2af2266e37db7ac068ef04))       

#### Chore  
* **create edit sidebar**:  Added singleton link #199 ([bb6ab5d7](https://github.com/aml-development/ozp-center/commit/bb6ab5d7a93517bfdb17ce7a6e09ee85f2bf03ad))    

#### Changes  
* checkpoint ([b153b481](https://github.com/aml-development/ozp-center/commit/b153b4812b8229ab1588050e7b1c12325037493f))     

### 0.7.13 (2015-06-25)   

#### Merge Pull Requests  
* Merge branch 'develop' ([f3247b35](https://github.com/aml-development/ozp-center/commit/f3247b35bf62e26ee364cf4962ef92330e587803))
* Merge branch 'master' back into develop after release ([b9b6a72e](https://github.com/aml-development/ozp-center/commit/b9b6a72eb5159582ab37fbfc370e525d934dfff3))        

#### Chore  
* **packagerelease**:  update release script ([30ba7311](https://github.com/aml-development/ozp-center/commit/30ba7311716b3d92198f3b7342993bfeb099beef))      

### 0.7.12 (2015-06-22)

#### Feature  
* **tooltips**:  Added tooltips to the global navbar #283 ([54e226e5](https://github.com/aml-development/ozp-center/commit/54e226e56713c7cd90085d24ef07613d7d3e657e))    

#### Fixes  
* **createedit**:  form resets when coming from editing another listing #151 ([77eb85ed](https://github.com/aml-development/ozp-center/commit/77eb85ed759933e8ffdcdc25fa138f23370fe464))     

#### Merge Pull Requests  
* Merge branch 'develop' for weekly release ([08e1a434](https://github.com/aml-development/ozp-center/commit/08e1a4346cc4fbd0525a99c5c1701ed649505af1))
* Merge pull request #297 from ozone-development/branding ([aa54e895](https://github.com/aml-development/ozp-center/commit/aa54e8955284eba0d4a8d13f9b5b880d29efb7c2))
* Merge pull request #290 from ozone-development/tooltips ([31670b1f](https://github.com/aml-development/ozp-center/commit/31670b1f03180586a0ab7512e23bad24a1b1daa2))
* Merge branch 'master' into develop after release ([b32c0f75](https://github.com/aml-development/ozp-center/commit/b32c0f7537a22afaf6daa256c56e7789e1d4e886))        

#### Chore  
* **branding**:  Update words and images to match those used in production #296 ([4f7b1534](https://github.com/aml-development/ozp-center/commit/4f7b15340a702f13cdab33b5c7831d9b9b607b57))    

#### Changes  
* **help**:  Container width set to 100 ([507b7abb](https://github.com/aml-development/ozp-center/commit/507b7abb30a00ac83eee9bbb6ec6cab9ba2681d6))     

### 0.7.11 (2015-06-09)

#### Feature 
* **help links & videos**
  *  Added help videos and doc links to modal #278 ([c571ace6](https://github.com/aml-development/ozp-center/commit/c571ace65987c62dd6df47c2a34063a3e45b417e))
  *  Added help videos and doc links to modal #278 ([f825392b](https://github.com/aml-development/ozp-center/commit/f825392b6951b96dac6bd59bcf02973e614e36cc))     
* **search**:  Show a message while searching, not 'No results found.' ([0c80da55](https://github.com/aml-development/ozp-center/commit/0c80da5590f70b936f79afc9e90025baef0668bf))      

#### Merge Pull Requests  
* Merge branch 'develop' for weekly release ([da8f6e98](https://github.com/aml-development/ozp-center/commit/da8f6e98109af3c57e181eab8335453c679c336b))
* Merge pull request #279 from ozone-development/helpdocs ([49c1266f](https://github.com/aml-development/ozp-center/commit/49c1266fba4a4a910e06ab5d37fefe980a3fa174))
* Merge pull request #277 from ozone-development/searching ([daa6044d](https://github.com/aml-development/ozp-center/commit/daa6044dcd12bebeebfab77c43355f92435cc4e4))
* Merge pull request #272 from ozone-development/singleton ([a706e2e9](https://github.com/aml-development/ozp-center/commit/a706e2e95a0f11323e3444638470ff40bff3d2f6))
* Merge branch 'master' into develop after release ([c0f133ec](https://github.com/aml-development/ozp-center/commit/c0f133ec2cb4be238e4cb7d72abae41aa1563d98))        

#### Chore  
* **creat edit**:  Add check on state for enabled text ([2ccff740](https://github.com/aml-development/ozp-center/commit/2ccff740acbb5b7463a87cc3ac8df66967ab5da1))    

#### Changes  
* updated dependency folder ([7b93bc22](https://github.com/aml-development/ozp-center/commit/7b93bc2295fdcd78d42e13a610ef90361927a869))
* Adding Notice.txt ([13f6e04f](https://github.com/aml-development/ozp-center/commit/13f6e04ffaa77a1c31d6d3304d8a9d4aee337e95))
* Adding licenses for dependencies. ([0153a841](https://github.com/aml-development/ozp-center/commit/0153a841deeff8b17505f7c71b2950c6bc27783d))     

### 0.7.10 (2015-06-02)

#### Feature 
* **create edit**
  *  Added singleton toggler #199 ([293c61d0](https://github.com/aml-development/ozp-center/commit/293c61d0a9095bf1aa768d1f44d7e253af6dd017))
  *  Added singleton toggler #199 ([2d55682a](https://github.com/aml-development/ozp-center/commit/2d55682a4a0fc2252acf827c9cbc9d51b51c5c1e))     

#### Fixes  
* **search**:  Add LoadMore button to search results #268 ([90dcf28f](https://github.com/aml-development/ozp-center/commit/90dcf28fcf339139a0baf7e32f3e0c40d6a440a9))    
* **createedit**:  Forced updated display of contacts using undocumented (and future) react feature contexts.  #267 ([9df08f5f](https://github.com/aml-development/ozp-center/commit/9df08f5fb571675d3e6a0845ad96bb91cd759b1b))     

#### Merge Pull Requests  
* Merge branch 'develop' for weekly release ([7680d148](https://github.com/aml-development/ozp-center/commit/7680d14868860dc14a73a3851da73fa9366b9047))
* Merge pull request #271 from ozone-development/singleton ([b778547e](https://github.com/aml-development/ozp-center/commit/b778547e7cf847d38af979b37e7078cfd8f3e9f2))
* Merge pull request #270 from ozone-development/loadmore_search ([2bbbce9c](https://github.com/aml-development/ozp-center/commit/2bbbce9c889ad4cc8cf694d47e395105b15cc47b))
* Merge branch 'develop' of https://github.com/ozone-development/ozp-center into singleton ([f6c4a2c8](https://github.com/aml-development/ozp-center/commit/f6c4a2c8d84d5155b7c9d23566ac184fb417d89e))
* Merge pull request #269 from ozone-development/contacts_jumble ([fc675472](https://github.com/aml-development/ozp-center/commit/fc675472ae5cec46b7a264bb2e11bc2b68e5ef67))
* Merge branch 'develop' of https://github.com/ozone-development/ozp-center into singleton ([f2a399de](https://github.com/aml-development/ozp-center/commit/f2a399de65ae552ac27b889ce9389cb231a9fdaf))
* Merge branch 'master' back into develop after release ([ba21a1c6](https://github.com/aml-development/ozp-center/commit/ba21a1c65fcac535751c89f384cc98f4824efda4))         

#### Changes  
* Load More Search Button ([c630af3a](https://github.com/aml-development/ozp-center/commit/c630af3a7bf9078a21524ea2b5f98da6d02d1a7f))
* checkpoint ([c4728446](https://github.com/aml-development/ozp-center/commit/c4728446106772d5f8a8c5fcdb2f6cc103dd338d))     

### 0.7.9 (2015-05-19)

#### Feature  
* **global**:  Sweet alert implimented ([d9fb77d0](https://github.com/aml-development/ozp-center/commit/d9fb77d0448017a59aabcefedc912b37ab0cc954))    

#### Fixes  
* **style**:  Updating SweetAlert styling ([122a37b9](https://github.com/aml-development/ozp-center/commit/122a37b94cd5349d4f74cc6b285576af8e8487c4))    
* **createedit**:  Original fix for this issue broke the error messages in the resources section of createEdit. This fixes the error messages for the tags and does not affect the new resources error message. #157 ([3dc2b84a](https://github.com/aml-development/ozp-center/commit/3dc2b84acee88c01b4ac8dcd7988138fcfb1db7a))    
* **styling**:  #251 Added pointer cursor ([1c3db8e0](https://github.com/aml-development/ozp-center/commit/1c3db8e07f23122510baf86f801993359c3e0107))    
* **quickview**:  Link display limited to 40 chars, url not affected. #221 ([deff45ec](https://github.com/aml-development/ozp-center/commit/deff45ecf94a2e15a91891fa0796f309dced14f4))    
* **resources tab**:  fixes issue with contact being undefined #243'; ([9da0c37b](https://github.com/aml-development/ozp-center/commit/9da0c37b1a39905084441e48c799af15fdc5bdda))     

#### Merge Pull Requests  
* Merge branch 'develop' for weekly release ([819b427e](https://github.com/aml-development/ozp-center/commit/819b427ea2e0cad29473ec204027371deb6bca22))
* Merge pull request #263 from ozone-development/launchUrl-fix ([8ddce234](https://github.com/aml-development/ozp-center/commit/8ddce23421ed6adc1376ebfd721f66be495ba6aa))
* Merge pull request #262 from ozone-development/sweetalert ([022ef1f3](https://github.com/aml-development/ozp-center/commit/022ef1f33155bfd6eaf788420b2f5d90846dfa1b))
* Merge pull request #261 from ozone-development/sweet-alert ([27e6edfa](https://github.com/aml-development/ozp-center/commit/27e6edfa600f959099038961a666a086ff4a72ea))
* Merge pull request #259 from ozone-development/contacts-formatting ([f23a7d6a](https://github.com/aml-development/ozp-center/commit/f23a7d6aa3cd05f59c5647d129b36516b2e5a171))
* Merge pull request #257 from ozone-development/edit-tag-issue ([8ce09d3f](https://github.com/aml-development/ozp-center/commit/8ce09d3f10ddf28d8c938d3b5d84ca300efc2447))
* Merge pull request #252 from ozone-development/detailedView-screenshots ([090a8ce9](https://github.com/aml-development/ozp-center/commit/090a8ce9b9f43bb713a511775bee4697c7b8f3b5))
* Merge pull request #245 from ozone-development/url-length ([10f2434f](https://github.com/aml-development/ozp-center/commit/10f2434f0691d5ae9d631fcb2538006e1c0347b2))
* Merge pull request #244 from ozone-development/poc-patch ([7dc2f3d3](https://github.com/aml-development/ozp-center/commit/7dc2f3d3f0ecc4dae1f50c1c1379100062a54ea5))
* Merge branch 'master' back into develop after release ([a37d03c8](https://github.com/aml-development/ozp-center/commit/a37d03c858cf6f252e220078cc67ded3dc438e44))        

#### Chore  
* **create edit**:  only replace spaces with encoded spaces if spaces exist #260 ([0cc78bd2](https://github.com/aml-development/ozp-center/commit/0cc78bd238f157a7eea403839a592d53068424ba))    
* **jshint**:  Ignore undefined sweetAlert, It's defined after webpack builds. ([8bdebf7d](https://github.com/aml-development/ozp-center/commit/8bdebf7d41a4ecba03231a38408cccfed3be13d8))    
* **global**:  Updating sweet alert location ([5fb15ec5](https://github.com/aml-development/ozp-center/commit/5fb15ec5c8a8d11f586c150e03e23633e3fd49ac))    
* **quickview**:  Standardize display of Contacts on the Resources tab #250 ([3e835210](https://github.com/aml-development/ozp-center/commit/3e83521046c6666879f0e40adcd282223f333aa4))    
* **resources tab**:  Remove developer debugging line ([6707e8c3](https://github.com/aml-development/ozp-center/commit/6707e8c36618ed0e8521fe2c107110b7c6c8b0fb))    

#### Changes  
* checkpoint ([734fb524](https://github.com/aml-development/ozp-center/commit/734fb524bf77fa1d518087983fd1a7d79b1fd5d3))     

### 0.7.8 (2015-05-12) 

#### Fixes  
* **changelog**:  Added fallback for legacy actions ([c68e5cff](https://github.com/aml-development/ozp-center/commit/c68e5cfff94eee19f740b66fa36e9bdd40cfaee4))     

#### Merge Pull Requests  
* Merge branch 'develop' for weekly release ([45a095ae](https://github.com/aml-development/ozp-center/commit/45a095ae44d44038afd3cc49fd753e71d282456d))
* Merge pull request #238 from ozone-development/add-license ([6219bbe8](https://github.com/aml-development/ozp-center/commit/6219bbe87183c0ae07a07328ecfec495edcf002a))
* Merge pull request #242 from ozone-development/legacy-changelog-patch ([06c34c88](https://github.com/aml-development/ozp-center/commit/06c34c884640372622e6ecccb3d1211a9c18fdba))
* Merge branch 'master' back into develop after release ([6345e7df](https://github.com/aml-development/ozp-center/commit/6345e7df0c233222299c718e35a9ac09efee6014))        

#### Chore  
* **license**:  Add License info ([6c7c4915](https://github.com/aml-development/ozp-center/commit/6c7c4915bca0405fcd97882ca499ed5ad5b7fa41))    

#### Changes 
* **create edit**
  *  Fixes undefined if no url is present ([b319aea1](https://github.com/aml-development/ozp-center/commit/b319aea17ae577f3f7ad8b4dc589f05d9732b524))
  *  Fixes undefined if no url is present ([26e817c7](https://github.com/aml-development/ozp-center/commit/26e817c7daa6eeabff49d3733e433b99b8763021))      

### 0.7.7 (2015-05-05) 

#### Fixes 
* **createedit**
  *  Added padding to bottom of listing to fix side menu #155 ([2a299f77](https://github.com/aml-development/ozp-center/commit/2a299f77c3a4a1219a2f8df2b98d6634e17bccc4))
  *  Fixed decoding url when editing listing #222 ([2eb7a9be](https://github.com/aml-development/ozp-center/commit/2eb7a9be065237d4c52bf2d7eb8b408a13b18e6f))     
* **feedback**:  Updated Feedback Link ([af3a8456](https://github.com/aml-development/ozp-center/commit/af3a8456b7482f9298743c7fd168bc159947f7fa))     

#### Merge Pull Requests  
* Merge branch 'develop' for weekly release ([850f4e2f](https://github.com/aml-development/ozp-center/commit/850f4e2f2161264a2710164a18cbfa968a30f136))
* Merge pull request #231 from ozone-development/CreateEdit-Navigation-Indicator ([4f5ed508](https://github.com/aml-development/ozp-center/commit/4f5ed5082ef386aad6ed018beb571fdbe47ffbe7))
* Merge pull request #232 from ozone-development/update-react-commons-branch ([ea5d1fdc](https://github.com/aml-development/ozp-center/commit/ea5d1fdc13ef713ffa2987a3958569f6e08c1403))
* Merge pull request #230 from ozone-development/decode-uri-fix ([b5dcb7dd](https://github.com/aml-development/ozp-center/commit/b5dcb7dddf4dc687b0959937b3fe0760d78ef7ff))
* Merge branch 'master' back into develop after weekly release ([0b2ff64d](https://github.com/aml-development/ozp-center/commit/0b2ff64dbb609c0b785134a3b605fb6e68d08432))        

#### Chore  
* **package.json**:  Use master branch of ozp-react-commons by default ([e9fa4486](https://github.com/aml-development/ozp-center/commit/e9fa4486f390e0ab151ca145aa7849e5fdf6482c))    

#### Changes 
* **createedit**
  *  Temporarly disabling create edit reset, unexpected results. ([2cb95d57](https://github.com/aml-development/ozp-center/commit/2cb95d5729978c0363e3b323a9cf3ee23d02213e))
  *  Some changes were lost in PR for #155 ([b87698eb](https://github.com/aml-development/ozp-center/commit/b87698ebc84306816cd6a3ac3dbda14053c498ff))      

### 0.7.6 (2015-04-28) 

#### Fixes  
* **feedback**:  Feedback Link ([44ecfe52](https://github.com/aml-development/ozp-center/commit/44ecfe529ced425204e3ce6178f5d6c9980ac0a0))   
* **styling**
  *  Recent Activity panel ([5641aa74](https://github.com/aml-development/ozp-center/commit/5641aa74047b5c3858214f09fa5176024cf007eb))
  *  Fixed Caboose styling ([88960499](https://github.com/aml-development/ozp-center/commit/88960499e777e494ee844f18d9b98d1368c40a6e))     
* **description**:  Fixed undefined in description for #213 ([a02c2c5d](https://github.com/aml-development/ozp-center/commit/a02c2c5dbd1b2cb34404009cf2e6bc6d32060a32))    
* **global toolbar**:  #212 Dev Resources now opens in new tab ([4dcb6ae6](https://github.com/aml-development/ozp-center/commit/4dcb6ae61c721040c9e951c7adba9a516dd1b4fd))    
* **quickview**:  #202 fixed the unit test by adjusting the code for the administration tab ([9d869b1a](https://github.com/aml-development/ozp-center/commit/9d869b1aa406508915e5b71d594eb1b8ed7158fe))    
* **createedit**:  #200 added the optional flag to intents ([6cbf48c3](https://github.com/aml-development/ozp-center/commit/6cbf48c3acc217a2fe33e6b05240ca14e79c8c18))    
* **screenshot**:  #205 update the validation of screenshots for only on submit ([394c6c06](https://github.com/aml-development/ozp-center/commit/394c6c0684a0645ac4c37f4c65dc05e7a323cc08))    
* **jshint**:  fixing jshint warnings ([50a047bd](https://github.com/aml-development/ozp-center/commit/50a047bde6f6688f6a61a84a7889b532f07bdd56))     

#### Merge Pull Requests  
* Merge branch 'develop' for weekly release ([6bbf2c1d](https://github.com/aml-development/ozp-center/commit/6bbf2c1d70da2de6cb22cb82a459902839b52b42))
* Merge branch 'master' into develop ([91020391](https://github.com/aml-development/ozp-center/commit/91020391f418993f6657868ae7a78a38fb4feaa8))
* Merge pull request #224 from ozone-development/update-repo-url ([628b74ac](https://github.com/aml-development/ozp-center/commit/628b74ac70496c70427a40487a5d273496169791))
* Merge pull request #214 from ozone-development/wski-description-patch ([2c4339d9](https://github.com/aml-development/ozp-center/commit/2c4339d9817fce87e8b5ed9b4fee9ed4b5932154))         

#### Changes  
* update repo url ([6eeec886](https://github.com/aml-development/ozp-center/commit/6eeec8860d502bb8867cc9b9953527062b23f066))
* Update CHANGELOG.md ([30321c1c](https://github.com/aml-development/ozp-center/commit/30321c1c4c426edac724d25228d0ea754136f897))     

### 0.7.5 (2015-04-21) 

#### Fixes 
* **styling**
  *  Recent Activity Sidebar  ([e8d84b80](https://github.com/aml-development/ozp-center/commit/e8d84b800a365f1d08cc547e83067bdb21493d9f))
  *  MP Management Tab Divider #204 ([0d008c34](https://github.com/aml-development/ozp-center/commit/0d008c34031fe6a2416c45245401f253b127fdc8))
  *  Fixed button coloring ([66a0df90](https://github.com/aml-development/ozp-center/commit/66a0df90cb9d4233001b63d74d7afbd43d1cd04c))
  *  #201 Admin tab styles reflect MP  ([a341b076](https://github.com/aml-development/ozp-center/commit/a341b076f4dd4eeca568b5aa580d577b77833d20))
  *  #152 Fixed My Listings filters ([90a6049b](https://github.com/aml-development/ozp-center/commit/90a6049b46aaf50391281294d6e4f6a834c933b4))
  *  Fixed search filter margin  ([f16f6461](https://github.com/aml-development/ozp-center/commit/f16f64613f8d3b7ac4caccfd28fa40b82c49240b))
  *  Org and Listing Type Filter Styles ([ba62900a](https://github.com/aml-development/ozp-center/commit/ba62900a4d2192dc053a02f2b5ebd850495cc0ac))
  *  Fixed Feedback Link styling ([c57782b5](https://github.com/aml-development/ozp-center/commit/c57782b5b344382e4ab13a7f340ab72ff042eb7a))
  *  Updating weight to avoid render issue ([0407f70d](https://github.com/aml-development/ozp-center/commit/0407f70d1499172df484dfe71c2ff2367b4a8900))
  *  Added "Categories" Header and clarified "Home" link ([6598392e](https://github.com/aml-development/ozp-center/commit/6598392eb0475f7df0f391fa08f4c8efb71bda57))    
* **createedit**
  *  #176 encode urls before submission ([4689e53b](https://github.com/aml-development/ozp-center/commit/4689e53bd7f08b8a94b3d817d26be6df915287d1))
  *  #191 fix the error messages for resources ([5ed92d49](https://github.com/aml-development/ozp-center/commit/5ed92d49774b104d6294515e981d8ee046227b30))     
* **feedback link**:  #158 Updating to configure only email address ([85f35b2c](https://github.com/aml-development/ozp-center/commit/85f35b2c68a7050cf3e49e9ae6552b5e2b505934))    
* **discovery**:  #147 added 'no search results found' message for search and discovery page ([e3ec39a1](https://github.com/aml-development/ozp-center/commit/e3ec39a1c73102221e95a94586575903249f6efd))     

#### Merge Pull Requests  
* Merge branch 'develop' for weekly release ([1c5b8311](https://github.com/aml-development/ozp-center/commit/1c5b8311eaae9f142f498b7988b7f0acb08e3fd0))
* Merge branch 'master' into develop ([37f59fc4](https://github.com/aml-development/ozp-center/commit/37f59fc401d17f55064a35ffc9489b72cbe900b5))
* Merge pull request #202 from ozone-development/description-patch ([de761305](https://github.com/aml-development/ozp-center/commit/de7613056f71bac66a10dfbcba94a64c098d03c9))
* Merge pull request #197 from ozone-development/CreateEdit-Navigation-Indicator ([e43c44f7](https://github.com/aml-development/ozp-center/commit/e43c44f7423c33984b760f9a2b0259a6f502202c))
* Merge pull request #195 from ozone-development/CreateEdit-Navigation-Indicator ([50aef91a](https://github.com/aml-development/ozp-center/commit/50aef91aefd1933838125c9229c41ad752f9a500))        

#### Chore  
* **createedit**:  Support for charrage returns #139 ([08e91198](https://github.com/aml-development/ozp-center/commit/08e9119855622b3b68193822dc24312e2c5e0397))    
* **cleaning**:  Removing old variable declarations. Matching help buttons ([fa830808](https://github.com/aml-development/ozp-center/commit/fa8308085208d85f74234b572e01e0b5574ae547))    

#### Changes  
* **createedit**:  #155 for basic information click not working ([60666e0b](https://github.com/aml-development/ozp-center/commit/60666e0beedab5d2a8bafaa9228648befe8cea29))    
* pulling latest stuff ([189f9542](https://github.com/aml-development/ozp-center/commit/189f9542f86a2440ea6d4a26fed75d7af92cbeff))
* checkpoint: i think it's fixed ([6db2a8ca](https://github.com/aml-development/ozp-center/commit/6db2a8ca962975e4036df934c7639f9e55181045))
* checkpoint: updating for clark to test ([6590fbc0](https://github.com/aml-development/ozp-center/commit/6590fbc01c6dba12d08d1f0fd2c7f3ab9d837719))
* pushing for clark to test ([5ca5091c](https://github.com/aml-development/ozp-center/commit/5ca5091c9df282b8d3658f25900b3a3dc92c6fcf))
* update to latest version of develop ([21750e2b](https://github.com/aml-development/ozp-center/commit/21750e2b40f611a0594dfab8264f4acb67e9fb9e))     

### 0.7.4 (2015-04-14) 

#### Fixes  
* **listingmanagement**:  When component is unmounted, the dom elements updated on componentDidMount need to get cleaned up in the componentWillUnmount method. Fixes issue with the side scrollbar. #167 ([783c3f91](https://github.com/aml-development/ozp-center/commit/783c3f910a501da5f1cb116ce4550b38b175b4b5))    
* **detailedview**:  When a user adds a resource label and URL, they show up on the resource tab of the detail view. API Documentation and User Guide were explicitely prevented before, but that has been removed. #149 ([90c43b84](https://github.com/aml-development/ozp-center/commit/90c43b84838c38145d1abac0ade6518ea6d466e4))     

#### Merge Pull Requests  
* Merge branch 'develop' ([30e9e5bc](https://github.com/aml-development/ozp-center/commit/30e9e5bc238ae407f39602673cbf6485c0a644c1))
* Merge branch 'master' into develop ([fb29caf6](https://github.com/aml-development/ozp-center/commit/fb29caf666fb207cf9e21387d88916657630c981))
* Merge pull request #184 from ozone-development/issue-167 ([f3728c33](https://github.com/aml-development/ozp-center/commit/f3728c33496c1a5cbb5f60d052aaa6df32a38041))        

#### Chore  
* **styling**:  Updated focus color ([d638f0a0](https://github.com/aml-development/ozp-center/commit/d638f0a06742347c644e297b78bcaa023071e525))      

### 0.7.3 (2015-04-07) 

#### Fixes  
* **detailedview**:  When a user adds a resource label and URL, they show up on the resource tab of the detail view. API Documentation and User Guide were explicitely prevented before, but that has been removed. #149 ([af16d61a](https://github.com/aml-development/ozp-center/commit/af16d61a9efab1b52246a0f3ab055ed3ffa25710))   
* **draftedlisting**
  *  #160 users can no longer bookmark drafts ([ca925435](https://github.com/aml-development/ozp-center/commit/ca92543582ef571b0e12bf12f7a54b0f2d5e5462))
  *  #160 users can no longer bookmark drafts ([7134d4b5](https://github.com/aml-development/ozp-center/commit/7134d4b5add57be4f615b7b8ea3b771837490873))     
* **createedit**:  Fixing issue with tags in the createEdit view. #123 ([a66154f9](https://github.com/aml-development/ozp-center/commit/a66154f9404a8eda89b19b30f4c2ebc517e76866))     

#### Merge Pull Requests  
* Merge branch 'develop' ([228cf419](https://github.com/aml-development/ozp-center/commit/228cf4193e44ebec5d6bcc6fb04ea8cff5223256))
* Merge pull request #177 from ozone-development/issue-149 ([7fe1788c](https://github.com/aml-development/ozp-center/commit/7fe1788c4b03a4c7280ac90c5a3858c56514e34d))
* Merge pull request #171 from ozone-development/wski-160-patch ([6d808110](https://github.com/aml-development/ozp-center/commit/6d80811051400c501e50410464f9f95911cbbe99))
* Merge pull request #166 from ozone-development/listing-tags ([c9377e29](https://github.com/aml-development/ozp-center/commit/c9377e291ddb0edb9ff604691c4cb62423870daf))        

#### Chore  
* **createedit**:  #126 recent activity overflow patch ([30f3ac4e](https://github.com/aml-development/ozp-center/commit/30f3ac4e1e605160ff431c8e0eae98eab565ec1d))    
* **package.json**:  removing unecessary dependency that snuck in ([94d3b04a](https://github.com/aml-development/ozp-center/commit/94d3b04a20ccfb3d8fe2c4198a8d9f73d8ff9c52))    
* **dedupe**:  Remove duplicates ([4b6b268d](https://github.com/aml-development/ozp-center/commit/4b6b268daf6f43368f9104f0eca6051a21c6855d))      

### 0.7.2 (2015-03-31) 

#### Fixes  
* **css**:  Bless implimented to fix IE limit issues ([b8a92138](https://github.com/aml-development/ozp-center/commit/b8a92138aabfa982a5254bf41b35f9c0fc0ae011))   
* **styling**
  *  H2s and form spacing ([23c507d1](https://github.com/aml-development/ozp-center/commit/23c507d1df846bf91635ded9a5921c05fda0b5a5))
  *  Header at 1240px ([337fa1c6](https://github.com/aml-development/ozp-center/commit/337fa1c68a45089ecd24d792484c8bd958543628))
  *  #136 Small image preview ([6b8995a3](https://github.com/aml-development/ozp-center/commit/6b8995a3a3a214c88c328a8c966183cc23404664))
  *  #136 Create  ([c99c6c67](https://github.com/aml-development/ozp-center/commit/c99c6c6714edb438170c5d224e80fc505878538c))
  *  remove "Home" specific styling ([eab31c02](https://github.com/aml-development/ozp-center/commit/eab31c02be121e7bd7066d5335771ffe274b08fb))
  *  Listing Management  ([68896ea3](https://github.com/aml-development/ozp-center/commit/68896ea3d501e00dd6681048e37b7d13e8b84c52))
  *  Create ([c7488878](https://github.com/aml-development/ozp-center/commit/c74888780bb12f5650eb7e603a5a4946a1605bf1))
  *  Create ([7f819045](https://github.com/aml-development/ozp-center/commit/7f8190459210ca10c1e14ada15495d9d0598b5b2))
  *  Create Edit tabs ([f632133a](https://github.com/aml-development/ozp-center/commit/f632133a7720be92169762799819f8cce2fa8463))
  *  Listing Management Filters ([70c9db5d](https://github.com/aml-development/ozp-center/commit/70c9db5d842b5057b70aa588d00c680633eb4b84))
  *  Close on dropdown and switch labels ([f98a9faf](https://github.com/aml-development/ozp-center/commit/f98a9fafe5a7d12aa50d7a2e2f87becb92fa9019))
  *  Quickview restyled to look like the mockups ([d164f218](https://github.com/aml-development/ozp-center/commit/d164f218aae2b8a668363edfdaa1236415fc8971))
  *  Listing action menu buttons ([f1097f72](https://github.com/aml-development/ozp-center/commit/f1097f72ef38b42fec970539b13a33466cee8c86))
  *  Made "hover" more obvious ([18308769](https://github.com/aml-development/ozp-center/commit/18308769b070ca5e0faae3e753d239f5345bede9))
  *  styling change ([0bed94a4](https://github.com/aml-development/ozp-center/commit/0bed94a478167c11cbdbb9ee0f1dc4826b433a79))
  *  Delete Confirmation Modal  ([098e4a4f](https://github.com/aml-development/ozp-center/commit/098e4a4ff5373fd6ae03c08bef89c4a4b067c097))
  *  Feedback modal icon  ([776a011e](https://github.com/aml-development/ozp-center/commit/776a011e160dec25cf0bb32d8cda35b3c3330514))
  *  Added the carets into type  ([42b12fac](https://github.com/aml-development/ozp-center/commit/42b12facf5ac8f2086e0cc695c0b85eb70d1c8b1))
  *  Selects and image previews ([2cff89da](https://github.com/aml-development/ozp-center/commit/2cff89dac00f5021b79770558b983458138071a1))
  *  Selects and image previews ([2429c6e2](https://github.com/aml-development/ozp-center/commit/2429c6e26fed7ea077515f8bebd6f2f48901531b))     
* **global toolbar**:  #164 Smaller Global Toolbar ([38ffa01e](https://github.com/aml-development/ozp-center/commit/38ffa01e21c82f569a1b4439008324fbfb76d642))   
* **createedit**
  *  Sidebar clicks working again ([0cbaaa53](https://github.com/aml-development/ozp-center/commit/0cbaaa53061498380decc0c7a59e869d68ac70f7))
  *  #125 scrolls to top on every keypress ([ed312074](https://github.com/aml-development/ozp-center/commit/ed312074c3ca10e31787d1884418aa078d9dce5d))
  *  #125 scrolls to top on every keypress ([5fa2bcbc](https://github.com/aml-development/ozp-center/commit/5fa2bcbc50346952584f62fb025624a85b17dcae))    
* **discovery**
  *  Rating updates when new review is submitted #145 ([cdca70d1](https://github.com/aml-development/ozp-center/commit/cdca70d19b07d48635d1c7225b6be81f2c8a5cae))
  *  Rating updates when new review is submitted #145 ([0510be71](https://github.com/aml-development/ozp-center/commit/0510be71fd082be864e4b688b25e6e39d498c212))
  *  #144 ([f72eac6b](https://github.com/aml-development/ozp-center/commit/f72eac6b39caf25ccccd5eb293a1117202758e3c))     
* **search ie**:  #153 Adding fix for Search Bar in IE ([f888915f](https://github.com/aml-development/ozp-center/commit/f888915f5f63768c3081d23ad49447ee6a6a4656))    
* **active**:  Added hover active styling ([1b17d50e](https://github.com/aml-development/ozp-center/commit/1b17d50eccf3ef919024e93456c67d99881c676c))   
* **style**
  *  Help modal close ([36fd261f](https://github.com/aml-development/ozp-center/commit/36fd261f1066774e47bb6bd9bd89816f9b10c286))
  *  Featured listings on Search  ([6ebc7fdf](https://github.com/aml-development/ozp-center/commit/6ebc7fdfe47f9624d998dad3077bb4796c1a13e5))    
* **icons**
  *  Fixed bookmark button icon ([50653a41](https://github.com/aml-development/ozp-center/commit/50653a41648572f173a90f679ea4ef1bd9d35e9f))
  *  Fixing icon styling post-merge ([331c88d1](https://github.com/aml-development/ozp-center/commit/331c88d1e6a7b3d925223ff506bffd0840a401d2))     
* **close**:  fixing close buttons ([69a36e35](https://github.com/aml-development/ozp-center/commit/69a36e35b521111d83cb82411e7756e966997180))    
* **ghpages**:  updated the information for new repository names ([455e6323](https://github.com/aml-development/ozp-center/commit/455e6323f7750b0d628d6d7921f65b3ede5deacf))    
*  remove typo ([ff6e6ee4](https://github.com/aml-development/ozp-center/commit/ff6e6ee4094d7444a7ce454d7e680ca23b906a6b))    
* **reset buttons**:  Added color change ([ff236e71](https://github.com/aml-development/ozp-center/commit/ff236e71e022a6cbeee674d6b3191f6c30e05d95))    
* **package**:  Fixing dependencies ([7f174260](https://github.com/aml-development/ozp-center/commit/7f174260d5688aafbd10b1300065db0edea988db))     

#### Merge Pull Requests  
* Merge branch 'develop' ([b37e2680](https://github.com/aml-development/ozp-center/commit/b37e26809523168b43153711e25faa149b7bca5c))
* Merge pull request #165 from ozone-development/bless-you ([9e481cb8](https://github.com/aml-development/ozp-center/commit/9e481cb800aad91d5b08c8c3a476be9299d8fd02))
* Merge branch 'categories' into develop ([55f886d8](https://github.com/aml-development/ozp-center/commit/55f886d874fb246e3d44736c8472e14bf0b07808))
* Merge branch 'develop' into categories ([c7301b54](https://github.com/aml-development/ozp-center/commit/c7301b5406cf2afe9a8cd261396977b65c3c8a0f))
* Merge branch 'develop' into categories ([0332b504](https://github.com/aml-development/ozp-center/commit/0332b50448f1472a3156af618b4410ef9eae568d))
* Merge branch 'release-trr-no-shrinkwrap' into develop ([a7922f06](https://github.com/aml-development/ozp-center/commit/a7922f065bf864ac96c49b4d24be19dfbd313db3))
* Merge branch 'develop' of https://github.com/ozone-development/center-ui into develop ([8f1293cc](https://github.com/aml-development/ozp-center/commit/8f1293cccf9737d761735baf259be94b9d62cd88))
* Merge branch 'create-edit-update' into develop ([63bb51fa](https://github.com/aml-development/ozp-center/commit/63bb51fae9548373dbcc8619d195cab458fdeea6))
* Merge branch 'create-edit-update' ([a4d19c87](https://github.com/aml-development/ozp-center/commit/a4d19c8707c57a17eda83c98602e1d8222a0b574))
* Merge branch 'develop' into create-edit-update ([8823f921](https://github.com/aml-development/ozp-center/commit/8823f9214bb29aa0b3f80eba7d0a483ee4295642))        

#### Chore 
* **createedit**
  *  Merging sdeighan's patch and fixing typo ([835ea32f](https://github.com/aml-development/ozp-center/commit/835ea32fcfc68edba8feb44e1dc54fd127ed5c37))
  *  a few changes to sidebar functionality ([4b9db433](https://github.com/aml-development/ozp-center/commit/4b9db4337951299a68f7053f033e0ca2f3af1457))
  *  Finally fixed the scrolling bug, probably ([ad9db03c](https://github.com/aml-development/ozp-center/commit/ad9db03c07a63defcb598a7d4c38e97c3d261fdc))
  *  Finally fixed the scrolling bug, probably ([0792af51](https://github.com/aml-development/ozp-center/commit/0792af51e6e0e37890807fd9aaecf655b7d42589))
  *  #141 save tags when input is blur'd ([591863b7](https://github.com/aml-development/ozp-center/commit/591863b757823b85d96ce8996587a5ded55d44ea))
  *  fixes boolean is not a function ([b7bbf3bc](https://github.com/aml-development/ozp-center/commit/b7bbf3bc716d781934888b44a44a5e7e878897f9))     
* **package.json**:  Add grunt-shell ([5a1b682e](https://github.com/aml-development/ozp-center/commit/5a1b682e9cb127117b985200699303e1a4e1372e))   
* **packaging**
  *  Add packaging commands and scripts ([f6d4867d](https://github.com/aml-development/ozp-center/commit/f6d4867d8758d1fbfa603ee3e425eb9c763d136e))
  *  Add packaging commands and scripts ([4c4c7e2f](https://github.com/aml-development/ozp-center/commit/4c4c7e2f1be9f2239c659fab383429ebd3dbdc26))    
* **discovery**
  *              border-left: -color 4px solid; ([4a82fbc4](https://github.com/aml-development/ozp-center/commit/4a82fbc4aa30cb82a702d325097a0d967f102685))
  *  Fixed searchbar ref undefined ([566a6a41](https://github.com/aml-development/ozp-center/commit/566a6a41746670c543fb17b767add037c839ed14))    
* **listingmanagment**
  *  #126 background now fits content ([4bba2dae](https://github.com/aml-development/ozp-center/commit/4bba2dae145c2a14f4d0ba4f90f42d40b7b358d2))
  *  #126 background now fits content ([1c35a68b](https://github.com/aml-development/ozp-center/commit/1c35a68b717b0a528941a5c7f00a2f8ed1b14298))    
* **travis**
  *  Update build status icons ([9db18595](https://github.com/aml-development/ozp-center/commit/9db1859572c620541a5a248df504520cfba0e342))
  *  Update build status icons ([952919e0](https://github.com/aml-development/ozp-center/commit/952919e001a1095553aa9a593db49d1e18c8391c))     
* **dev.js**:  Add jqueryUndupe to dev gulp task ([1d5f78ea](https://github.com/aml-development/ozp-center/commit/1d5f78ea9354ac60426f5e4ebcefcc6bef44b63f))    
* **dedupe**:  Remove duplicates ([b495042c](https://github.com/aml-development/ozp-center/commit/b495042c53eb4f2db5da3c115f884d4aebdfdfcc))    
* **rename**:  to OZP-React-commons develop ([298f0b50](https://github.com/aml-development/ozp-center/commit/298f0b507c8a48e109622589243b62e5e5a46848))    
* **styling**:  Cleaned up unnecessary code ([56990576](https://github.com/aml-development/ozp-center/commit/569905763507a5b192a919cbe61d2f2027716100))    
* **variable**:  Cleaning up hardcoded color ([cbe1199b](https://github.com/aml-development/ozp-center/commit/cbe1199b2aea9be625ae46ef00155287afe83fe4))    
* **mylistings**:  #126 background not displaying correctly ([3b3d57c4](https://github.com/aml-development/ozp-center/commit/3b3d57c4738871914a647afcb6e8fde87cb78c3a))    
* **resourecestab**:  #129 Merged Resources  ([a849c35f](https://github.com/aml-development/ozp-center/commit/a849c35f44e7d03d1d68bacca3f07adbac5ec071))    
* **listing manangment**:  Styling issues fixed ([96362ebf](https://github.com/aml-development/ozp-center/commit/96362ebf99888ec39fdcefebdd681914aa38eed7))   
* **gitflow**
  *  header fixes ([413ec573](https://github.com/aml-development/ozp-center/commit/413ec5733561207dc076492eff845c686ebf58f7))
  *  Fixing more merge errors ([2e7572d5](https://github.com/aml-development/ozp-center/commit/2e7572d537bf3f3c84c8ecbd0363798f20557872))
  *  Fixed svg failing issues with gulp-sass ([84dbc864](https://github.com/aml-development/ozp-center/commit/84dbc864821d70380be4c570ab30114156d3cfab))
  *  Merge temp-master into master and create develop ([4914ecd0](https://github.com/aml-development/ozp-center/commit/4914ecd0560663fb2ebe2553e0b02a5de8aa7525))     

#### Changes  
* **createeditsidebar**:  Got scrolling and all working, bug with Basic link ([959d8e47](https://github.com/aml-development/ozp-center/commit/959d8e479033d6992c89fc8cee0b4d897192a149))    
* Rebase conflicts ([9675584c](https://github.com/aml-development/ozp-center/commit/9675584cd7b0c336197531e4aab46181d5286036))
* Revert "Revert "chore(Discovery):             border-left: -color 4px solid;"" ([d82c137f](https://github.com/aml-development/ozp-center/commit/d82c137f662c782a7001e00b7f337ab903f29b8f))
* Revert "fix(styling): styling change" ([c23be88b](https://github.com/aml-development/ozp-center/commit/c23be88b920e669ce89027d8923ee46131dee45d))
* Revert "chore(Discovery):             border-left: -color 4px solid;" ([f2713a67](https://github.com/aml-development/ozp-center/commit/f2713a6727d20bb5d1c0f844e1f8e8ea1e46d6a7))
* update gulp-sass ([10e94320](https://github.com/aml-development/ozp-center/commit/10e943209ccb9153827e55e11118379459553489))
* also remove dup bootstrap lib ([e3bc454d](https://github.com/aml-development/ozp-center/commit/e3bc454da2dbe72441a0ed8eec86f1b215e8d555))
* remove shrinkwrap and add jQuery undupe build step ([60054033](https://github.com/aml-development/ozp-center/commit/60054033b5a58a3c2792b94abba6d6d09c6fbc4a))
* Merge remote-tracking branch 'origin/create-edit-update' into create-edit-update ([de99af34](https://github.com/aml-development/ozp-center/commit/de99af34e88c21a03bc19e54acd65d40381844fb))
* Merge remote-tracking branch 'origin' into develop ([84d97a9a](https://github.com/aml-development/ozp-center/commit/84d97a9a6f57e7cb473f9abf57c20cd5e0f08dbe))   
* **createedit**
  *  Changed error scrolling functionality again ([a4a62ee8](https://github.com/aml-development/ozp-center/commit/a4a62ee8d9489b07451b948d7ab1b43dcfca495e))
  *  Changed error scrolling functionality again ([1d366d23](https://github.com/aml-development/ozp-center/commit/1d366d23849bf41df63b3507415993c347e14ec8))
  *  Changed error scrolling functionality again ([cf0d0611](https://github.com/aml-development/ozp-center/commit/cf0d0611b1183a58d8e89559bf714120d3427502))
  *  Changed error scrolling functionality ([5622aa13](https://github.com/aml-development/ozp-center/commit/5622aa13c82b346b206ea4552cebfa0067ea3b5f))
  *  Syntax error causing build to fail ([f36c896b](https://github.com/aml-development/ozp-center/commit/f36c896b3f926162bcb94cfb09c6d4a3c50ee884))      

### 0.7.1 (2015-03-18)

#### Feature 
* **icons**
  *  #95 hover icons update icon set ([4817fa17](https://github.com/aml-development/ozp-center/commit/4817fa175e2565563b16f8e85e340e7e42b0f8e1))
  *  #95 hover states for icons in center ([f6d842d0](https://github.com/aml-development/ozp-center/commit/f6d842d019b2e1afb7f500e3bb002aca8ba39807))    
* **search**
  *  add open class to container when dropdown is opened ([130150e6](https://github.com/aml-development/ozp-center/commit/130150e65b7318cdfb24b47606203b4f26c9ed30))
  *  use title as the value for API calls ([40e5f5cb](https://github.com/aml-development/ozp-center/commit/40e5f5cb566320e8124f9566fcf2b0bc72e356be))
  *  display shortName for orgs, cleanup css ([e63c5826](https://github.com/aml-development/ozp-center/commit/e63c582644c3635228fae5313174cda26ac43a08))
  *  fix bug where search query gets reset ([c371f550](https://github.com/aml-development/ozp-center/commit/c371f550cdfd6ab3098891dd8eb976c4bff13e13))
  *  implement type and organizations as dropdown ([f0f55bf8](https://github.com/aml-development/ozp-center/commit/f0f55bf8d03190d638c0f5b8bf1d8aac0b8e1724))
  *  implement type and organizations as dropdown ([202fa98d](https://github.com/aml-development/ozp-center/commit/202fa98d0786c9e32232a3ad11598b266b7334ad))
  *  Refine search string creation ([3db31f6c](https://github.com/aml-development/ozp-center/commit/3db31f6c9e22cc0acfecedc56a63d483962b0a14))
  *  Added clear button to search box resolves #72 ([94e0d7c4](https://github.com/aml-development/ozp-center/commit/94e0d7c428931b05954bd0fadd3017ea30f77f18))    
* **launch**
  *  #60 Remove launch-in-webtop from Center ([1a76b701](https://github.com/aml-development/ozp-center/commit/1a76b701695c04acfcc37fb852e587a31e76ec1f))
  *  Ensure bookmark before launching to webtop ([c4e8c948](https://github.com/aml-development/ozp-center/commit/c4e8c94818e45cfac354dfd8c21ee0d51bae98ba))
  *  #60 ensure bookmark before webtop launch ([333cc949](https://github.com/aml-development/ozp-center/commit/333cc94941025ca012446291e62c3ba66177f5f7))    
* **rest efficiency**
  *  #45 Cut down number of calls at page load ([76959bdc](https://github.com/aml-development/ozp-center/commit/76959bdc479383689ce53df9233bdb231898e362))
  *  #45 Use new storefront call instead of 3 separate searches ([c9427de0](https://github.com/aml-development/ozp-center/commit/c9427de0c1b0e9f94e2028601564d528e8fce439))
  *  #45 use new consolidated metadata REST call ([9f5fa741](https://github.com/aml-development/ozp-center/commit/9f5fa741e37c4a833a367065a831a9994894cc2f))     
* **version**:  Generate version.txt in dist #81 ([9edb97c0](https://github.com/aml-development/ozp-center/commit/9edb97c01d0f282709e5c3105e89426a5c60581b))   
* **title**
  *  #91 Make page title configurable ([0d43d58a](https://github.com/aml-development/ozp-center/commit/0d43d58af50505f0a46777c74f5a6087402e97ae))
  *  #91 Make page title configurable ([f2bbe4bb](https://github.com/aml-development/ozp-center/commit/f2bbe4bb04b7acf4f6312d0643fc11e83908e2b5))    
* **configuration**
  *  #91 Fix title configuration in Firefox ([737b56f9](https://github.com/aml-development/ozp-center/commit/737b56f99bd05ae29db8d926146fc8128567f63a))
  *  #91 Fix title configurability in Firefox ([7147cf48](https://github.com/aml-development/ozp-center/commit/7147cf48351accf8fe4f7b62acc7d386fa8c935c))
  *  #91 Make title configurable ([0d11cab5](https://github.com/aml-development/ozp-center/commit/0d11cab58cfd2a90ce9dd7f0b0fa6839c2288f0e))    
* **create/edit**
  *  #56 #57 Create ([b5e5af67](https://github.com/aml-development/ozp-center/commit/b5e5af6755304e07c5d73bef1f908b4fb5f97d9e))
  *  #57 changes from UX review ([1e0520aa](https://github.com/aml-development/ozp-center/commit/1e0520aa1108cf52e7512bc5fa7d929da29dda25))
  *  #57 Sidebar bug fixes ([4c7730a4](https://github.com/aml-development/ozp-center/commit/4c7730a4656457e4679d7e0a8bf412a777ee8e9a))
  *  #57 nav sidebar styling ([b42a123f](https://github.com/aml-development/ozp-center/commit/b42a123f5c5026b767efe8c6a2186004fcc1838c))
  *  #57 Sidebar nav functionality ([d0b5fd53](https://github.com/aml-development/ozp-center/commit/d0b5fd530569624dd91f43a0694f49c54ea6759b))
  *  #56 Scroll only the form ([51cd9426](https://github.com/aml-development/ozp-center/commit/51cd9426d2c7a73474cc82beab02222b293a832e))
  *  #56 Fix org steward modal open ([0d67539e](https://github.com/aml-development/ozp-center/commit/0d67539e0ec0d3e1823b0071a2d62a033c477400))
  *  #56 Initial 3-column create-edit code and styles ([4bfe9066](https://github.com/aml-development/ozp-center/commit/4bfe9066051bb8e68ac5a8d3a0dff88504c44793))    
* **create edit page**
  *  #69 working redirection and updating when listing is deleted ([fba583fc](https://github.com/aml-development/ozp-center/commit/fba583fc62e757297c704cdcac6cd3e43e03c009))
  *  #69 added delete button ([66889009](https://github.com/aml-development/ozp-center/commit/66889009dbbf3bcf39013ace1585593be8f05dcd))    
* **create edit listing**
  *  #58 reworked html for lists of stewards ([cac41bde](https://github.com/aml-development/ozp-center/commit/cac41bdedc4d2c45ac66d1e5f1cc200294472497))
  *  #58 organization stewards modal for create edit page ([c73b8d55](https://github.com/aml-development/ozp-center/commit/c73b8d5519e50a685d2ec97dd04cf1186454be7e))    
* **profile search**
  *  Fix profile search issues ([693b1222](https://github.com/aml-development/ozp-center/commit/693b122227715ef8edd60c27bab673e40d110dfc))
  *  Fix matching to work with more than one profile ([dd025335](https://github.com/aml-development/ozp-center/commit/dd0253350ea767f361ec51ef1bf9eb88f3c79470))    
* **load error**
  *  #50 Page load error handling ([02d5c175](https://github.com/aml-development/ozp-center/commit/02d5c175e2ba9ce76a14aa9b14ded6ca1d2a7b4b))
  *  Update to newest ozp-react-commons ([fc3dcbd8](https://github.com/aml-development/ozp-center/commit/fc3dcbd854fa9aac34da44cc732318ef38099d81))
  *  #50 Integrate LoadError component ([50317546](https://github.com/aml-development/ozp-center/commit/50317546f84341ecdb8f9ce819248cfc75b06e05))     
* **user search**:  on-demand profile search instead of global profile list load ([118c06ed](https://github.com/aml-development/ozp-center/commit/118c06ed252424a0b33af5e4b6d172d247d29dc0))    

#### Fixes 
* **styling**
  *  styled create ([2df8989f](https://github.com/aml-development/ozp-center/commit/2df8989f604f4876be4961c32803fd69a75bcd7e))
  *  #54 #55 Updated styling ([a6d81601](https://github.com/aml-development/ozp-center/commit/a6d81601d234cf521e09b87ce29e113c60001a51))
  *  Dropdown Filters ([c3d9ee87](https://github.com/aml-development/ozp-center/commit/c3d9ee87110215d2cef5ebd9b1f9b75b0c1920ae))
  *  #95 fixing navbar icons ([70582fc2](https://github.com/aml-development/ozp-center/commit/70582fc283500710ce13d01f7ba61a8a078833a4))
  *  #95 mall management page ([d6b6c98b](https://github.com/aml-development/ozp-center/commit/d6b6c98b9acdb38de7bb83a2a0426e9db6de52a4))
  *  #95 5 icons ([a4f49a67](https://github.com/aml-development/ozp-center/commit/a4f49a678e0dea0c18f5602490da33294c9c5fe1))
  *  #95 updated to use svg icons ([899f09b4](https://github.com/aml-development/ozp-center/commit/899f09b4687055256d9f564c752b86cf60a3908b))
  *  Updating the Detailed View icons ([c3282c0a](https://github.com/aml-development/ozp-center/commit/c3282c0ac4d783a94ab797ad94ef2499d2e965f3))
  *  Testing fix for search in IE11 ([3547c98f](https://github.com/aml-development/ozp-center/commit/3547c98f822d4ead4e72937f33933c5c40d15f40))
  *  Close button case and remove test ([68fd406f](https://github.com/aml-development/ozp-center/commit/68fd406f41e88e37377afc21c9f88338ef5f335f))
  *  #54 Styling update ([b4c7bf2b](https://github.com/aml-development/ozp-center/commit/b4c7bf2b2ea36f397a0298d7d06eab15a95fb366))
  *  Dropdown options initial styling ([076a3477](https://github.com/aml-development/ozp-center/commit/076a34772914226b159b8b9eb7039fe3fa1d1b35))
  *  Fixed margin bug with management tables ([bb98cf3a](https://github.com/aml-development/ozp-center/commit/bb98cf3ae2d9513e73ede5e2c07173da8653d15d))
  *  Listing tiles were too close to the tabs ([e095be81](https://github.com/aml-development/ozp-center/commit/e095be8164d033358dcb214674b02164ef36c0f1))
  *  Update Notifications Mngmnt icons ([5c9bd9da](https://github.com/aml-development/ozp-center/commit/5c9bd9da6a8648174c7b8f97c1711a0ab4a859d2))
  *  Switch search  ([598f49f7](https://github.com/aml-development/ozp-center/commit/598f49f714a26b0f61d5450508ccb8bfe78a612c))
  *  Update Approval Status Indicators ([fbcabec8](https://github.com/aml-development/ozp-center/commit/fbcabec8f9759156f1531fe86d39c23857cf0378))
  *  Updating bookmarks to OZONE font icon ([c2ae93b3](https://github.com/aml-development/ozp-center/commit/c2ae93b371ba4f30756ea1985df7d112a91c4ced))
  *  #69 updated styling ([b086d646](https://github.com/aml-development/ozp-center/commit/b086d646601e0dceea1f1f6e782e21e58684f474))
  *  Management tabs bottom border now 100 ([8f3113ce](https://github.com/aml-development/ozp-center/commit/8f3113ce397f48fad6cd42029acb58e6c40c4ca8))
  *  #78 Left Hand indicator ([b303d403](https://github.com/aml-development/ozp-center/commit/b303d40301a7671c970b9bc4c1f73140d454ade9))
  *  Removing old logo file ([3f634fcc](https://github.com/aml-development/ozp-center/commit/3f634fccdbbaceab9990115d56f2ec7a8183d963))
  *  Adding favicon ([79cae51c](https://github.com/aml-development/ozp-center/commit/79cae51c06b8cfcec9b66339004ccb603ce07365))
  *  #68 fixed sass selectors ([a5ab7db8](https://github.com/aml-development/ozp-center/commit/a5ab7db8a46826052b7275c810355c148bdc3ced))
  *  #68 added hover text for create edit form icons ([4e9d121a](https://github.com/aml-development/ozp-center/commit/4e9d121ad5251be6b6802c8c7c1c22255314afa0))    
* **trr**
  *  added console-polyfill to handle console logging ([6a8d6c15](https://github.com/aml-development/ozp-center/commit/6a8d6c158fdfe805b8c7c93ac00ca627849f5de1))
  *  update to window.console for React elements using warn ([94940ecd](https://github.com/aml-development/ozp-center/commit/94940ecdbf3f4a12f9651ddc284a275c8b2c7d1b))
  *  IE9 weird issue with console logging #122 ([62b32d21](https://github.com/aml-development/ozp-center/commit/62b32d21e803bfeb55b98aa668e4cec5a3da69f0))     
* **listing service**:  Issue with listing service ([9f6cc3ba](https://github.com/aml-development/ozp-center/commit/9f6cc3ba46e8a0e08a9f0a0ed2d61735822e931b))    
* **dependency**:  ozp-react-commons temp master update ([c407579a](https://github.com/aml-development/ozp-center/commit/c407579a7ee861bcceb56189c3015002b6e46ef5))    
* **headerbar**:  #120 Constrained Header Bar ([435b3368](https://github.com/aml-development/ozp-center/commit/435b3368b6e2a55c486174a1156f4d883acd88ec))    
* **dependencies**:  update to master ozp-react-commons ([8aabd6fb](https://github.com/aml-development/ozp-center/commit/8aabd6fbeb614c60b65c8b504642d0de83adc943))    
* **config**:  update config for app title ([f892c12f](https://github.com/aml-development/ozp-center/commit/f892c12f6597b2f241abf759d7120a610fbf230a))   
* **notifications**
  *  update to use global toolbar with notifications fix ([427e00bc](https://github.com/aml-development/ozp-center/commit/427e00bce6be3b895acf04ac66a32bc3f5b4488b))
  *  fix Date parsing in IE11 and Firefox ([4f323f24](https://github.com/aml-development/ozp-center/commit/4f323f24adc489107b8449b4aea8f7ce8c186cc9))
  *  handle dates correctly in IE ([2fe39fae](https://github.com/aml-development/ozp-center/commit/2fe39fae6b4dfc771130e8649d7ff7ab6378ea8d))
  *  classification banners should be on top ([4a460a49](https://github.com/aml-development/ozp-center/commit/4a460a495b7ec1ed9c2f68b7a0efb9c551f662c4))    
* **create edit**
  *  #117 update select2 elements on mount, not only on update ([87da18c9](https://github.com/aml-development/ozp-center/commit/87da18c90a506c1aff606eda11c9c9d74db92423))
  *  #98 cancelling delete on a new listing routes back to the edit page for that listing ([fd3b4a05](https://github.com/aml-development/ozp-center/commit/fd3b4a0519488cda5f4b2569a860d5e769a2575d))
  *  #58 code consistency for react component ([34954b09](https://github.com/aml-development/ozp-center/commit/34954b090b91fd965b23e2006fa01604585f12aa))
  *  remove button for testing ([e114e46b](https://github.com/aml-development/ozp-center/commit/e114e46b4dc66d0f42faec22b525c26542b8c121))    
* **icons**
  *  user menu dropdown icon blue on active ([637f328e](https://github.com/aml-development/ozp-center/commit/637f328e6123dde97125380a66a972a5ce7b6920))
  *  added sized icons ([c15b7fa1](https://github.com/aml-development/ozp-center/commit/c15b7fa1fc784c593bd7e84977f30d60d3c77b18))
  *  change icon colors for active app ([10c3c468](https://github.com/aml-development/ozp-center/commit/10c3c468ace7bdf9c2017970d00f78b7a4a5775d))
  *  pencil icon for user review ([d287e308](https://github.com/aml-development/ozp-center/commit/d287e3083ecfeed17e745f142f5fc1e3b72446c5))
  *  #95 fixed icon for org stewards ([a1f195f5](https://github.com/aml-development/ozp-center/commit/a1f195f53792cc09f9af3b3ee5a76d640b979380))
  *  styling for listing management icons ([88d43727](https://github.com/aml-development/ozp-center/commit/88d4372751ef13e74c003ef6ca564fee7e705a12))
  *  listing management icon fix ([9eff2b1d](https://github.com/aml-development/ozp-center/commit/9eff2b1d60953c39ae18557294771d47d01218c8))
  *  create edit trash image ([48391287](https://github.com/aml-development/ozp-center/commit/483912873745de1daa698bd000eca771b2d300ed))
  *  review edit icon, help modal ([e1a7407a](https://github.com/aml-development/ozp-center/commit/e1a7407a1e17f912909fc9108e0374101549677b))
  *  review iicons ([b31a2ac8](https://github.com/aml-development/ozp-center/commit/b31a2ac8e4e3aa8897666966175e983a9a0f80e0))
  *  #95 icons for noficiations and new icons for recent activity ([94cc3df5](https://github.com/aml-development/ozp-center/commit/94cc3df536823b2ddce441c26b5e5202a32e8e3a))    
* **create listing**
  *  #98 prevent form from clearing after canceling delete action ([b9a77903](https://github.com/aml-development/ozp-center/commit/b9a779033aa0e6c5e3edb03e4a5477007aadb10a))
  *  require one owner for draft, fix test ([0ac53cff](https://github.com/aml-development/ozp-center/commit/0ac53cff68458ab96ec5b3deb516f2ab5393fbf7))
  *  require one owner for draft ([e2065737](https://github.com/aml-development/ozp-center/commit/e2065737d404afb0e626643f8bef91f4bd50f2b7))
  *  you have unsaved changes is not showing when editing a listing from My Listing page ([40eb9131](https://github.com/aml-development/ozp-center/commit/40eb9131e8a7037abebb9209dfce24c8752a775a))
  *  selecting the preview button causes the listing to not be able to be saved ([fdc0b7d6](https://github.com/aml-development/ozp-center/commit/fdc0b7d62d55c32177a603b74a7216941e9d0e70))
  *  Submit Listing fails when owner has comma in name ([5741f659](https://github.com/aml-development/ozp-center/commit/5741f659386c319bdef7cd86067998550628f077))
  *  Clicking discard button after making changes to a listing throws error. ([7acb5c9a](https://github.com/aml-development/ozp-center/commit/7acb5c9abace570a7963ba788f15be9983566d4b))     
* **create listings**:  the confirmation box reappears repeatedly when browser back button is clicked ([cbcca732](https://github.com/aml-development/ozp-center/commit/cbcca732358170c74a5adf96e869294bd95802d8))    
* **create/edit**:  #106 Fix create ([dce1bf88](https://github.com/aml-development/ozp-center/commit/dce1bf88e75ab91dd7ebbe2e8052bea7248cb896))    
* **ie9**:  fix placeholder ([ff9c72b4](https://github.com/aml-development/ozp-center/commit/ff9c72b4c4229927b146f7b609b282c6d1320a1b))   
* **mall management**
  *  display error on unauthorized access to org steward page ([0e291737](https://github.com/aml-development/ozp-center/commit/0e291737121f9e233af0838f7314b8573619449f))
  *  display error when non-admin attempts to access ([b7673b4f](https://github.com/aml-development/ozp-center/commit/b7673b4f9a9f1114a0643072da8a1696eb44d99e))
  *  display error on unauthorized access to org steward page ([81595f8b](https://github.com/aml-development/ozp-center/commit/81595f8bb31807ba7a297b4b23fac202a2250b6a))
  *  display error when non-admin attempts to access ([b675613d](https://github.com/aml-development/ozp-center/commit/b675613d5e55d6eb9301884908171f8c54f7bbae))     
* **create edit listing**:  fix for organization stewards requests ([daec478c](https://github.com/aml-development/ozp-center/commit/daec478c9b07ff0e99421636fe69e039a4fe0b51))    
* **gh-pages**:  Update WEBTOP_URL in buildGhPages script ([ba66d916](https://github.com/aml-development/ozp-center/commit/ba66d916be682a6743bd744a984e53fa7fc38de9))    
* **my listings**:  #86 align sidebar ([1ed0f8cb](https://github.com/aml-development/ozp-center/commit/1ed0f8cbd43a0353477980124436cfff35b458a3))    
* **discovery**:  #74 Make sidebar expand to full page height ([8ab439dd](https://github.com/aml-development/ozp-center/commit/8ab439dd88ae2ce9908da70baa258bf5191b241f))    
* **delete button**:  fixed routing for org stewards page ([249018b1](https://github.com/aml-development/ozp-center/commit/249018b1c8c1ceef3379f95380d30ab1b2789728))    
* **listing management**:  fix sidebar width issue in Firefox ([20ec2a03](https://github.com/aml-development/ozp-center/commit/20ec2a03640e4a3066a297b4b2ca63a355834655))   
* **search**
  *  #80 Fix category search ([0942a413](https://github.com/aml-development/ozp-center/commit/0942a4134bc85d828474b33ab09decced4f2b71d))
  *  #71 Fix various issues with search ([899eacf9](https://github.com/aml-development/ozp-center/commit/899eacf989619e78b41731eb537fb6c89114de61))     
* **ie**:  #83 Add IE compat header ([4b5e1bfc](https://github.com/aml-development/ozp-center/commit/4b5e1bfc3a4e78c91c724dfb1530602d7791b695))    
* **styles**:  consistent icons for Administrative pages ([c756bcef](https://github.com/aml-development/ozp-center/commit/c756bcefd12ab880222e59073df12d53f745177e))    
* **ozp-react-commons**:  Changed hash to metrics fix ([ae3cf4b7](https://github.com/aml-development/ozp-center/commit/ae3cf4b787b1acbdcee3418a70c997fc7b87975d))    
* Fix for sync ([30b70005](https://github.com/aml-development/ozp-center/commit/30b7000531f5dd4a4c0b2f5d1fec12e3b10e0948))    
* **ui changes**:  resolves #53, verified no instances of AppsMall ([66bf8565](https://github.com/aml-development/ozp-center/commit/66bf85653d828851569266f35e6e015ebc21b487))     

#### Merge Pull Requests  
* Merge pull request #135 from ozone-development/unittest-fix-temp-master ([442c896d](https://github.com/aml-development/ozp-center/commit/442c896d43b6e217c5161952f17aba38454488a1))
* Merge pull request #134 from ozone-development/selectbox-ie-patch ([b845dd42](https://github.com/aml-development/ozp-center/commit/b845dd426cd7302d1d00e6b8852671b4a6f0109c))
* Merge pull request #132 from ozone-development/wski-patch-1 ([261b6aee](https://github.com/aml-development/ozp-center/commit/261b6aee8f6432e7324ac2a7e4b093969130357e))
* Merge pull request #119 from ozone-development/searchbar-iefix ([ee2862b2](https://github.com/aml-development/ozp-center/commit/ee2862b26aac88f4113a68e3751cb9519b119d23))
* Merge branch 'temp-master' into discovery-dropdowns ([8f262533](https://github.com/aml-development/ozp-center/commit/8f2625331e5964c01d1852cd5a2b953d22d2e10c))
* Merge branch 'icons' into temp-master ([af21d4d6](https://github.com/aml-development/ozp-center/commit/af21d4d6c0e3596adfb4e4d851f721f43eb41b1b))
* Merge branch 'ie9-placeholder' ([8d059803](https://github.com/aml-development/ozp-center/commit/8d059803768f54b295460c3f1e4f6f001e0f97e5))
* Merge branch 'issue-89-listing-management-sidebar' ([74f9e3dd](https://github.com/aml-development/ozp-center/commit/74f9e3ddd2c2746ffb742d56e79bf48dffc2c225))
* Merge pull request #105 from ozone-development/version ([9e6f0fb4](https://github.com/aml-development/ozp-center/commit/9e6f0fb4a9fb1558fccb29766532e18e2fd7ada4))
* Merge branch 'temp-master' of https://github.com/ozone-development/center-ui into version ([7f694ba8](https://github.com/aml-development/ozp-center/commit/7f694ba8c1979d36236ef0aba127eea863749d19))
* Merge branch 'temp-master' of https://github.com/ozone-development/center-ui into version ([08bf698d](https://github.com/aml-development/ozp-center/commit/08bf698de85a4d320958f5323297bf3f5101b15b))
* Merge branch 'issue-103-remove-owner' into temp-master ([eb6895de](https://github.com/aml-development/ozp-center/commit/eb6895de2a7b49e4293d2f3002c24a2a0f772b6d))
* Merge branch 'master' into issue-103-remove-owner ([473fd29f](https://github.com/aml-development/ozp-center/commit/473fd29f3c6aa7b54b3eeeae02211cb8b95fc44c))
* Merge branch 'issue-103-remove-owner' ([776052f8](https://github.com/aml-development/ozp-center/commit/776052f828fc0f3e63c482e52a797e149c22562a))
* Merge branch 'issue-96-unauthorized-access' into temp-master ([9c20683c](https://github.com/aml-development/ozp-center/commit/9c20683cb2bf78576b2aebcc883d097f6434979a))
* Merge branch 'master' into delete-button ([2ff077e5](https://github.com/aml-development/ozp-center/commit/2ff077e591bc8a4e196af5789da842f82c816344))
* Merge branch 'master' into create-edit-3-col ([f3b9aacd](https://github.com/aml-development/ozp-center/commit/f3b9aacdff1924903926e3d4d66d8710556d761e))
* Merge branch 'master' into create-preview ([4a80354e](https://github.com/aml-development/ozp-center/commit/4a80354e0f7ef091ec5c84189b738be9c83d9d78))
* Merge branch 'master' of https://github.com/ozone-development/center-ui ([27a5255c](https://github.com/aml-development/ozp-center/commit/27a5255c3f8625a9f8fbfc8b56134cc73da44f5c))
* Merge branch 'master' into create-edit-3-col ([6c908ef0](https://github.com/aml-development/ozp-center/commit/6c908ef08e16726b62c76c3bd5ca10264d45b9f1))
* Merge pull request #79 from ozone-development/sidebar-home-clear ([2eecb135](https://github.com/aml-development/ozp-center/commit/2eecb1356ab1690165ddd84b28b2942a36fefa8a))
* Merge pull request #77 from ozone-development/searchbar-clear ([b6a34101](https://github.com/aml-development/ozp-center/commit/b6a3410192911c781f8a0b76b8e17ba953dc32d8))
* Merge branch 'master' into demo-fix ([aecf8622](https://github.com/aml-development/ozp-center/commit/aecf862239b757e34fa689f0b7177b5f7df449be))        

#### Chore  
* **unit tests**:  Fix webpack error in unit tests ([e43a6474](https://github.com/aml-development/ozp-center/commit/e43a64744ba462245b8f34c28508af6b782b1d57))    
* **selectbox**:  Fix page being submitted on close click ([bf121eec](https://github.com/aml-development/ozp-center/commit/bf121eec623216b8b9822e237d2a0376d70a9ab7))    
* **metrics**:  Metrics opens in new tab ([fc45e44c](https://github.com/aml-development/ozp-center/commit/fc45e44c2e52a6503b427d645b09be7247361454))   
* **icons**
  *  Reverting to commit-specific icons ([223510d0](https://github.com/aml-development/ozp-center/commit/223510d0bbc5a7961451ee3592a07a9a288b33a9))
  *  Updating icons ([6b06e2a5](https://github.com/aml-development/ozp-center/commit/6b06e2a53e8af729c5414bc80b5399546e53a92a))
  *  Updating icons commit ([df4126a3](https://github.com/aml-development/ozp-center/commit/df4126a3c090ec44be22c30b9cd16fdd3057fe8c))     
* **fix**:  moving x left ([1fbcbc65](https://github.com/aml-development/ozp-center/commit/1fbcbc65dbd250ab927e5915abf9a84f8b1b4e94))   
* **search**
  *  Cleaned up fix for IE searchbar bug ([8f14ff41](https://github.com/aml-development/ozp-center/commit/8f14ff41c80dac40d3930432d7d2743e2bc658d4))
  *  Cleaned up fix for IE searchbar bug ([594c0312](https://github.com/aml-development/ozp-center/commit/594c0312eabd509f00cfbf16459bf95c03b15c8f))
  *  IE Search reloading page #94 ([c632ee2f](https://github.com/aml-development/ozp-center/commit/c632ee2f685eec2fcecbad5c8c6c036678b3594b))
  *  fix IE submitting form ([493d765d](https://github.com/aml-development/ozp-center/commit/493d765d0259361640843ad00af88be567580f21))
  *  Pointer when hovering clear button #82 ([d7e5e126](https://github.com/aml-development/ozp-center/commit/d7e5e126fe52315ac8b37b3e8138072039969d01))    
* **dependencies**
  *  updated shrinkwrap ([f46e826c](https://github.com/aml-development/ozp-center/commit/f46e826c3944541e5b152c54afbcd0996891df17))
  *  use right commons dep ([dfd9ea48](https://github.com/aml-development/ozp-center/commit/dfd9ea486448af94f37ecdad7b831e80a8f98716))
  *  update ozp-react-commons ([f3d15ac3](https://github.com/aml-development/ozp-center/commit/f3d15ac32f9cd512b4f23768fd9bbe98f7ca3311))
  *  update to npm-shrinkwrap, merge master into temp ([87fc4e32](https://github.com/aml-development/ozp-center/commit/87fc4e3225da4b918873c4a0c687a74f9fb2bb80))
  *  fix jquery gets included twice bug ([9f735131](https://github.com/aml-development/ozp-center/commit/9f735131101a0c149a1e57fa3478206aa08dbcff))
  *  update Webpack to 1.7.2 ([2f792102](https://github.com/aml-development/ozp-center/commit/2f79210280929e34959d6e9595dbf2c28f068dbd))
  *  update webpack version ([8299f758](https://github.com/aml-development/ozp-center/commit/8299f7580470061315cff816e52489ab0a52880c))
  *  upgrade ozp-react-commons ([003cb57b](https://github.com/aml-development/ozp-center/commit/003cb57b26d617a5a9ef1a0b75a54dde23c5fc64))     
* **create/edit**:  #99 Separate createEdit ([df05acbd](https://github.com/aml-development/ozp-center/commit/df05acbd23c4d3b437c8f3b62fabb9a9a6fc276f))    
* **router**:  fix tests ([2f775f0f](https://github.com/aml-development/ozp-center/commit/2f775f0fa1bea39502cbff8f8a8997a723929c8a))   
* **version**
  *  merge temp-master to fix conflics ([f7039603](https://github.com/aml-development/ozp-center/commit/f7039603339c25ce322c6296bbb990c8ade2521d))
  *  merge temp-master to fix conflics ([beb219d3](https://github.com/aml-development/ozp-center/commit/beb219d307ed25515ec88fbd089b930a1f90f632))
  *  merge temp-master to fix conflics ([28f8bc40](https://github.com/aml-development/ozp-center/commit/28f8bc400bd95f498643db54b2b5be384628ef33))    
* **styling**
  *  Update to latest Bootstrap ([10cc54b7](https://github.com/aml-development/ozp-center/commit/10cc54b7a5266c512b32616c15baca6e08782175))
  *  Updating Bootstrap ([0a2cd550](https://github.com/aml-development/ozp-center/commit/0a2cd550f4d99a702688a8e46e15690838c03b81))    
* **react commons**
  *  Updating ozp-react-commons version ([8486361f](https://github.com/aml-development/ozp-center/commit/8486361f82b48feebd0cc027b1c0a5b9e0dfc570))
  *  Update ozp-react-commons version ([4ef6b58d](https://github.com/aml-development/ozp-center/commit/4ef6b58dc3ed389d000488fbf18845ffd1729642))     
* **code**:  Cleaned up fix for #78 ([d266f908](https://github.com/aml-development/ozp-center/commit/d266f9087cefe668a035bcc254854f0e887f0999))    
*  Update webpack to avoid shrinkwrap peerDependencies bug ([cac90a95](https://github.com/aml-development/ozp-center/commit/cac90a95e7831b2f13da4c31742f74ec2663f146))    
* **sidebar**:  Clicking home now clears serach resolves ([64b9c9ca](https://github.com/aml-development/ozp-center/commit/64b9c9cae538511e0f8b968f4f913c726b9ea88a))    
* **carousel**:  Makes buttons clickable fixes #73 ([aedbc8f4](https://github.com/aml-development/ozp-center/commit/aedbc8f42f60cea1fedfed5bf0cc6edb9c19559e))    

#### Changes  
* moved IE-Edge meta tag under title ([cb650122](https://github.com/aml-development/ozp-center/commit/cb650122250962de5b71c870a74bdeee96b7589a))
* Merge with discovery-dropdowns ([42bc987c](https://github.com/aml-development/ozp-center/commit/42bc987c997d3dab46d8e3fdecc544bf9ebe0e37))
* Revert "Merge branch 'temp-master' into discovery-dropdowns" ([130d7e66](https://github.com/aml-development/ozp-center/commit/130d7e663b69973a011b865c25477f3476e940f5))
* Revert "fix(styling): Testing fix for search in IE11" ([11cdf777](https://github.com/aml-development/ozp-center/commit/11cdf77768374c2e18417f027408d6c6b7d71591))
* Merge temp-master into discovery-dropdown ([20837795](https://github.com/aml-development/ozp-center/commit/2083779505839eb4c0d458c0d36de52ece99fe43))
* Merge babeljs into temp-master ([0d3d4298](https://github.com/aml-development/ozp-center/commit/0d3d4298ea8fcffee270866b076a86d044cec60c))
* Merge create-discard branch into temp-master ([4d806486](https://github.com/aml-development/ozp-center/commit/4d80648690d144925bc61c6be0218cc262705c4f))
* Merge with delete-button ([a4960def](https://github.com/aml-development/ozp-center/commit/a4960def4e4352f39875d4dc57c098bce3cc127b))    
* **styling**:  Merging in new icons ([a685eebc](https://github.com/aml-development/ozp-center/commit/a685eebc82a0ba9046586fc808bb714b1ca0cc38))   
* **notifications**
  *  fix unit tests ([8e00dc11](https://github.com/aml-development/ozp-center/commit/8e00dc11e6ce8c125ad877956eac00f8cd3a981b))
  *  handle dismissing notifications in IE and Firefox ([24d80977](https://github.com/aml-development/ozp-center/commit/24d80977656a8c5e878912c9742a9c89702ddf1e))      

### 0.7.0 (2015-02-18)

#### Feature 
* **notifications**
  *  OZF-838 use Ozone as author ([0d20c3d4](https://github.com/aml-development/ozp-center/commit/0d20c3d426e0c2a5a8bb3ae18591e659eecfa631))
  *  OZF-838 add tests for past notification store ([d56eb4be](https://github.com/aml-development/ozp-center/commit/d56eb4be98bdd982e3ddb9d21d67cfbc04b321b9))
  *  OZF-838 add tests for create notification component ([fee123a0](https://github.com/aml-development/ozp-center/commit/fee123a0209c27917d957bb1f1f45e41118ba878))
  *  OZF-838 paginate past notifications ([c14fddcb](https://github.com/aml-development/ozp-center/commit/c14fddcbacc3959a134fce8aaaa0c84ebc5481f4))
  *  OZF-838 allow users to set expires date ([bbbb7e58](https://github.com/aml-development/ozp-center/commit/bbbb7e583b64a9ec416402966b6d07694d746d71))
  *  OZF-838 update op-react-commons ref ([fd910dee](https://github.com/aml-development/ozp-center/commit/fd910deec84527c96c6b9b658a82cd8f8dd433ba))
  *  OZF-838 use common components ([89cee578](https://github.com/aml-development/ozp-center/commit/89cee578e1ff6243d723d5594812fb9b28ff15ef))
  *  move user notifications to shared component ([8a48cb29](https://github.com/aml-development/ozp-center/commit/8a48cb29dfda0eca5b30c5615eccb9570046eec0))
  *  Implement displaying user notifications ([2874eb5a](https://github.com/aml-development/ozp-center/commit/2874eb5af9b83bf6e7ede51c6088d19482a02f29))
  *  Implement displaying active and past notifications ([4329bd14](https://github.com/aml-development/ozp-center/commit/4329bd14b60d0ef5df1a0d418f59b742cd3ee03b))
  *  Implement basic layout ([5bc3a77b](https://github.com/aml-development/ozp-center/commit/5bc3a77bf47aaedb45990b1e03d21c53097ce540))     
* **settings window, launch**:  OZF-593 OZF-585 ([0b3d17cc](https://github.com/aml-development/ozp-center/commit/0b3d17cc4891f640913de3851f0d7cb3fe3cb2f7))   
* **launch**
  *  Move some LaunchLink logic to commons ([9bf0ad84](https://github.com/aml-development/ozp-center/commit/9bf0ad84cb322e783284ba5764ec2d90630acd90))
  *  Launch into webtop from discovery tile ([5b9762de](https://github.com/aml-development/ozp-center/commit/5b9762de9de4bd52c1f4b277048142afce1967ac))
  *  OZF-585 Initial code to launch into webtop ([03310aeb](https://github.com/aml-development/ozp-center/commit/03310aeb9dd09815b5f384ec6fe42612b062bb7d))     
* **react commons**:  Move switches.scss to ozp-react-commons ([3d325272](https://github.com/aml-development/ozp-center/commit/3d32527230d7142a21e30e16ba065fe1a075c858))   
* **recent activity**
  *  OZF-576: added unit tests for the filters on the recent activity page ([99e5e149](https://github.com/aml-development/ozp-center/commit/99e5e1493fa3a2a078ebcbdcfaffee7e7657642f))
  *  OZF-576: update links for org stewards ([16c69173](https://github.com/aml-development/ozp-center/commit/16c6917303ca3b5ed0df9468e371bd8599870812))
  *  OZF-576: org steward filters for recent activity ([cac0dc4a](https://github.com/aml-development/ozp-center/commit/cac0dc4a2fa76000e832a000765ccbbda0dcf0ca))
  *  OZF-576: updated front end to filter by orgs that user is a steward of ([3a63e4c3](https://github.com/aml-development/ozp-center/commit/3a63e4c36948e2e765d8995c39d5bb6576f7f562))
  *  OZF-577: user view ([497b1d45](https://github.com/aml-development/ozp-center/commit/497b1d4588808badc7c041666b9d0b6878b55789))
  *  OZF-577: filters and list updated for users ([721a4b69](https://github.com/aml-development/ozp-center/commit/721a4b694a2ecd28ece7917c1376afc174acb063))     
* **settings window**:  Connecting Settings Window ([923f4152](https://github.com/aml-development/ozp-center/commit/923f41525359d4eac2232d47c24dcb9496f3f63e))   
* **most popular**
  *  OZF-720 fixed max listing count ([9934105c](https://github.com/aml-development/ozp-center/commit/9934105cfeec2acd4e32dfe93f84146a5d643734))
  *  OZF-720 fixed max listing count ([54825215](https://github.com/aml-development/ozp-center/commit/5482521531cd47272ac37464264ea489d3126a2c))
  *  OZF-720 load more button and layout added ([c9603a88](https://github.com/aml-development/ozp-center/commit/c9603a884887a8984f9ee116b412a7ab53c168f7))
  *  OZF-720 load more button and layout added ([f6cbe2ec](https://github.com/aml-development/ozp-center/commit/f6cbe2ecc77859e63bdd9bcf610a3baae41aadfb))    
* **profile window**
  *  Fix React bind warning ([1d6fc91e](https://github.com/aml-development/ozp-center/commit/1d6fc91e6b02b39a837d8dc525cc57b87cae1187))
  *  OZF-573 Profile Window ([d85190e0](https://github.com/aml-development/ozp-center/commit/d85190e0ff32ad7b3ace8dfab1649ba1d211239a))     

#### Fixes 
* **build**
  *  fix build errors on Windows ([249a6a62](https://github.com/aml-development/ozp-center/commit/249a6a623ba1448efe8855f6bd790fe4b756a770))
  *  fix build errors on Windows ([856e3735](https://github.com/aml-development/ozp-center/commit/856e373564a3dbbb554fdf892cac26426856baa6))
  *  fix build errors on Windows ([47fc6d47](https://github.com/aml-development/ozp-center/commit/47fc6d47c1a61f55467b593c0721d867f7c4b470))     
* **contact**:  OZF-985 Phone number validation ([05bc3966](https://github.com/aml-development/ozp-center/commit/05bc39667349879e2111b24f5d3a2f1f7edc9277))    
* **mall management**:  OZF-979: required checkbox wasn't persisting ([26c7428b](https://github.com/aml-development/ozp-center/commit/26c7428b9f8c07ba52cfced208a886891ce20569))   
* **recent activity**
  *  OZF-576: fixed routing issues with Org Stewards page ([e4e81a9b](https://github.com/aml-development/ozp-center/commit/e4e81a9bf5e6a26ace83ef882e10db7bb6b047e1))
  *  OZF-576: update styling on change logs ([0c43d284](https://github.com/aml-development/ozp-center/commit/0c43d284b855b29498a7d20b8db1f7cb36287330))
  *  OZF-576: styling fix for recent activities sidebar ([8dbcaa80](https://github.com/aml-development/ozp-center/commit/8dbcaa80adfb7614d17e171e37df477d9851f7c8))     
* **short description**:  set max size to 100 ([d10fef31](https://github.com/aml-development/ozp-center/commit/d10fef317c035f1ad5e58232623a5c6e3fef65c4))    
* **navbar**:  corners of AppsMall logo are not clickable ([12ed031f](https://github.com/aml-development/ozp-center/commit/12ed031fa8e68709df75dde2ba5913506e979559))    
* **reviews**:  reviews are not appearing until the page is refreshed. ([469d9616](https://github.com/aml-development/ozp-center/commit/469d9616e04cec960e34fe00e0edd237178d5e86))    
* **create listing**:  While editing the title, the cursor jumps to end ([f86aea20](https://github.com/aml-development/ozp-center/commit/f86aea205105b764bdadee433838d761e49ee5df))   
* **styling**
  *  Fixed listing menu borders ([933a333e](https://github.com/aml-development/ozp-center/commit/933a333e7338b66a4a5a40281a7dfc34c024b5f6))
  *  Help Modal ([d8882fd5](https://github.com/aml-development/ozp-center/commit/d8882fd5b13ed8621f9354d8b9fd181bb71649e1))
  *  Help Modal ([9e4a5bac](https://github.com/aml-development/ozp-center/commit/9e4a5bac9590ba35f6e54af90da8620c6b2a6120))
  *  OZF-671 ([b1fb7b03](https://github.com/aml-development/ozp-center/commit/b1fb7b032312cc338842af9c5e03f302a2803677))
  *  Fix classification banner bleed ([26ae3224](https://github.com/aml-development/ozp-center/commit/26ae3224505674de58cc930ae985c2efcb5497b4))     
* **search**:  Add a wild card ( ([ea122312](https://github.com/aml-development/ozp-center/commit/ea1223129ef5754fc27cd7502ed7db63036935d2))    
* **all listings**:  hide badges when a filter is applied ([80ca0255](https://github.com/aml-development/ozp-center/commit/80ca025540fbe7d786ae9650450889ce0f2ee2e5))   
* **change log**
  *  OZF-912: change log for modified shows listing link ([dd676d7a](https://github.com/aml-development/ozp-center/commit/dd676d7a4dea6d61ff4d662072872e095ab832b0))
  *  OZF-912: changed the change log to show listing title for modified ([5bb0a6b5](https://github.com/aml-development/ozp-center/commit/5bb0a6b5dff1a5af302b627aec41e787dcfe305a))      

#### Merge Pull Requests  
* Merge pull request #59 from ozone-development/infinite-mp-patch ([126396c8](https://github.com/aml-development/ozp-center/commit/126396c8606adddf666bc38c2cf7cafaeae2b1f9))
* Merge branch 'master' into webtop-launch ([a7a02618](https://github.com/aml-development/ozp-center/commit/a7a026188eb0fffd47ceec6524b75bc5a61239b0))
* Merge branch 'master' into webtop-launch ([556f71e1](https://github.com/aml-development/ozp-center/commit/556f71e1e27708a352ceab5b051f937f1607371b))
* Merge pull request #43 from ozone-development/gregs-search-fix ([cb117563](https://github.com/aml-development/ozp-center/commit/cb117563dd301290d156eb7e6ca02ab4ce37bf32))
* Merge pull request #42 from ozone-development/wski-metrics-auth-patch ([66b0ad46](https://github.com/aml-development/ozp-center/commit/66b0ad4619e055d1bea20e0c12ec1d9a1a2855d2))
* Merge pull request #41 from ozone-development/mostPopular-loadMore ([516c64f5](https://github.com/aml-development/ozp-center/commit/516c64f539e5f848a8d6d8fd65d59908f2997ae6))
* Merge branch 'master' into webtop-launch ([1777931d](https://github.com/aml-development/ozp-center/commit/1777931dbbc0e18b1829b082614d2f73790ebd58))
* Merge pull request #40 from ozone-development/metrics-auth ([8c43b80b](https://github.com/aml-development/ozp-center/commit/8c43b80bdc90ddd05512fe130472e5c10ba0595b))
* Merge branch 'master' into profile-window ([9aeb72ab](https://github.com/aml-development/ozp-center/commit/9aeb72ab60cd49bf336bacb6aed796ae4ded0854))       

#### Test  
* **launch**:  Fixing existing tests ([152f272f](https://github.com/aml-development/ozp-center/commit/152f272f13531aded8f2bd279fd911ef44bd0274))    

#### Chore 
* **styling**
  *  Updating title ([a69bb63d](https://github.com/aml-development/ozp-center/commit/a69bb63d0c425379fa57a7d63b7e03ea95953ec8))
  *  Updating Bootstrap commit ([4606bcbc](https://github.com/aml-development/ozp-center/commit/4606bcbcedc00365f1814db0c31209e480fccdf3))    
* **most popular**
  *  OZF-720 general UI ([9bfc6e8a](https://github.com/aml-development/ozp-center/commit/9bfc6e8ae5596e692809d1f21c4e631891a7da64))
  *  OZF-720 Merged master into branch ([8cb0cfa1](https://github.com/aml-development/ozp-center/commit/8cb0cfa14c23cb0c1c04888e9a923a7a297fcdb4))    
* **react commons**
  *  Update react-commons dep ([c32309e6](https://github.com/aml-development/ozp-center/commit/c32309e6f37142f3c9d78b4ececb0b6e77a88cc4))
  *  Remove scss variables that were moved to commons ([bf9e9880](https://github.com/aml-development/ozp-center/commit/bf9e9880624cde3a28887cda6d9695552981b99a))
  *  use master ([2f1b75de](https://github.com/aml-development/ozp-center/commit/2f1b75de20076d80b9de2cb5a443a42abd31832d))
  *  switching to react-commons master ([541e7cbe](https://github.com/aml-development/ozp-center/commit/541e7cbe2d5e77a79783c6439d7ac11a5373da6c))
  *  Upgrade react commons and regenerate shrinkwrap for npm 2 ([916ab739](https://github.com/aml-development/ozp-center/commit/916ab73956f00ca13a168fa533db017e045fd5e4))
  *  Fix ozp-react-commons webpack loaders ([f1738c11](https://github.com/aml-development/ozp-center/commit/f1738c118ce11cc381b2145ddbf4e326a9009a13))    
* **selfstore**
  *  Fix use of deleted getCurrentUser method ([0acb0296](https://github.com/aml-development/ozp-center/commit/0acb0296577bf9052349b230a37dbf68d6d55723))
  *  Refactor SelfStore and related classes that were moved to commons ([ea5e9a99](https://github.com/aml-development/ozp-center/commit/ea5e9a99122d5162538f0abcf4bb919ff9f6ae3f))     
* **jshint**:  Add unused variable checking ([69560da9](https://github.com/aml-development/ozp-center/commit/69560da9a90ef4212234ce8e4b21cc768c55709b))    
* **library**:  Refactor library logic into separate store ([3bca5931](https://github.com/aml-development/ozp-center/commit/3bca5931594fff718c831afebc06a6764e8b0dfe))    
* **recent activity**:  Fix SelfStore require after merge ([99b13849](https://github.com/aml-development/ozp-center/commit/99b138493fa6ae022933ae3be0e63aaf5939c052))    
* **shrinkwrap**:  Fix npm install, again ([be4d33c2](https://github.com/aml-development/ozp-center/commit/be4d33c2c7b0e9bfdd69ecacc32054d6ad5fda76))    
* **unit test**:  OZF-576: updating unit tests ([c8670c51](https://github.com/aml-development/ozp-center/commit/c8670c5181fddc2a980f6d1ab410d7982c5b1aa2))    
* **metrics**:  Search fix, remove  ([19643fad](https://github.com/aml-development/ozp-center/commit/19643fad1ff50ffc2430b8e692c3026969f379d8))    
* **metrics auth**:  OZF-866 fixed Org Steward check ([744554f2](https://github.com/aml-development/ozp-center/commit/744554f249600b6ff5fd1b350d44992ae9dd0eb7))   
* **jsx**
  *  Switch new file to jsx extension ([dd125316](https://github.com/aml-development/ozp-center/commit/dd125316c3bf1f10dc39ca5d21dbaca4889c29cf))
  *  Switch to jsxhint ([68fae93e](https://github.com/aml-development/ozp-center/commit/68fae93e187b8472b7cd14daadc3eac0ca26a3ab))     
* **user menu**:  OZF-866 Metrics link visible to admin  ([963bcfc8](https://github.com/aml-development/ozp-center/commit/963bcfc89dad98ba45986e32c3f5c8d61e1d7d4f))    
* **style**:  consistent indentation ([8407bdad](https://github.com/aml-development/ozp-center/commit/8407bdade4618d319cae02bdedd6cb1cbdd49715))    
* **login/logout**:  OZF-594 Removed Logout  ([3d0f43dd](https://github.com/aml-development/ozp-center/commit/3d0f43dd812638c4b4a700773dbf859611279f39))    
* **travis**:  Update travis to use npm 2 ([b557ca86](https://github.com/aml-development/ozp-center/commit/b557ca862c13692d47b5313504029f3bbc8d0212))    
* **profile window**:  Update shrinkwrap ([7d896a8f](https://github.com/aml-development/ozp-center/commit/7d896a8fba6405d37c75d3c8984e2d1b95375d73))    

#### Changes  
* Merge remote-tracking branch 'origin/sidebar-height' ([e8623d5a](https://github.com/aml-development/ozp-center/commit/e8623d5a1610b882e767cc5eccb4004018142012))
* Merge master into notifications ([5e41ad4f](https://github.com/aml-development/ozp-center/commit/5e41ad4ffa08ab0303b6d670442f6a27d6808480))
* Merge master into notifications ([85b2d2e4](https://github.com/aml-development/ozp-center/commit/85b2d2e49c7b2139a5cb22ba8ecb87084cc9616e))
* save before merging mater ([c3c4b1f6](https://github.com/aml-development/ozp-center/commit/c3c4b1f67ae5bde4a56134d240b81ecd1d0ebcf4))
* Merge with master ([005b47c2](https://github.com/aml-development/ozp-center/commit/005b47c257e3ba8eb59fbfe09461b7a7cd48134e))
* Merge with master ([1ebfbc76](https://github.com/aml-development/ozp-center/commit/1ebfbc76ff3691c726be38bac99ebaf99c302c24))
* Revert "fix(styling): Help Modal" ([f6ae2a40](https://github.com/aml-development/ozp-center/commit/f6ae2a40926406ca555b3fabd9c7816063408152))     

### 0.6.0 (2015-02-04)

#### Feature 
* **recent activity**
  *  OZF-574: fixed styling ([cc5b6077](https://github.com/aml-development/ozp-center/commit/cc5b607724cd427483442ff95eddec2aa56df5ac))
  *  OZF-574: fixed change logs in admin tab styling ([d6822f53](https://github.com/aml-development/ozp-center/commit/d6822f53693aa861f4e51be338b715106b0d74c7))
  *  OZF-910: updated styles ([9b2f6c33](https://github.com/aml-development/ozp-center/commit/9b2f6c334f3de4943a4e586065bbc2d8336992e5))
  *  OZF-574: added links to recent activity ([e514b243](https://github.com/aml-development/ozp-center/commit/e514b243ddc3c58f67836a1e38cff7bbef2900fe))
  *  OZF-574: working link filters ([a6931c6c](https://github.com/aml-development/ozp-center/commit/a6931c6cec3df1375e02b96cde4eca16c3bce366))
  *  OZF-574: updated change log and paginated list ([0e9c451b](https://github.com/aml-development/ozp-center/commit/0e9c451b173e0222539ad9d5af2e0b8fd045a62c))
  *  OZF-574: first round of recent activity changes ([b4cce967](https://github.com/aml-development/ozp-center/commit/b4cce96765233e1637c8b5fa4dc0a8d8450ff1e6))
  *  OZF-574: added sidebar and links ([068a9a1b](https://github.com/aml-development/ozp-center/commit/068a9a1b63938966789d11a01d4df3d561be9c47))    
* **profile window**
  *  Configurable close button ([6792f522](https://github.com/aml-development/ozp-center/commit/6792f522da0f01dba84cfd101d8bc8b9cb021b52))
  *  Encapsulate modal links as components ([debbb85d](https://github.com/aml-development/ozp-center/commit/debbb85d5d45dad8ff30feabd98bab23ee615172))
  *  UX Review tweaks ([25d8810d](https://github.com/aml-development/ozp-center/commit/25d8810dc15079cbe21ed597e055efc116f72615))
  *  OZF-573 Fix reversed color variables ([a63e89b1](https://github.com/aml-development/ozp-center/commit/a63e89b1ab50f37e6837b696320ce1c8b3be4c25))
  *  OZF-573 Tweaks after merge ([292b8904](https://github.com/aml-development/ozp-center/commit/292b89041ddef42d761bb536d62ebac6d26e31a7))
  *  OZF-573 Add links to author from changelog ([ee495b4f](https://github.com/aml-development/ozp-center/commit/ee495b4f9238eb3c6433986cbf0cb0d1aa1264ff))
  *  OZF-573 Link to Profile Window from details tab ([6c69a9a0](https://github.com/aml-development/ozp-center/commit/6c69a9a030ef515f990083d2b3826717df93cb78))
  *  OZF-573 Styling ([eef44dcd](https://github.com/aml-development/ozp-center/commit/eef44dcd90592a31e52d6f1f7b66d7b54368af29))
  *  OZF-573 Profile Window basic functionality ([3fba7869](https://github.com/aml-development/ozp-center/commit/3fba78696ced01ce6a42b66ac964ef19bb0ec96a))
  *  OZF-573 profile window initial code ([1a1dc852](https://github.com/aml-development/ozp-center/commit/1a1dc8527bb6e568d7c1de0ef5cd7c825c724fb3))    
* **recent activities**
  *  OZF-547: fixed links for admin tab ([52c2099f](https://github.com/aml-development/ozp-center/commit/52c2099fa3a4fddb572c30e60d642f79e93fc29c))
  *  OZF-547: fixed links for admin tab ([a2dbe23d](https://github.com/aml-development/ozp-center/commit/a2dbe23dd61438a5e7bc66d409dee389cee08789))
  *  OZF-547: added icons, links in listing titles, and styling ([670d186c](https://github.com/aml-development/ozp-center/commit/670d186ccc826c39480cee12dfdf6e88761c78da))    
* **metrics**
  *  Removed un-bookmark hook ([ec14f765](https://github.com/aml-development/ozp-center/commit/ec14f765d1827e817cb66748ceca3e8d642c36e6))
  *  Added more tracking hooks ([3ed5eb4a](https://github.com/aml-development/ozp-center/commit/3ed5eb4a23fe1bda47b893a8ac5104d39b00862f))    
* **reviews tab**
  *  OZF-882 The stars being shown for reviews are not matching the avgRate ([e3af773a](https://github.com/aml-development/ozp-center/commit/e3af773a75610cf16c727b24a669eebd55c3084d))
  *  OZF-882 The stars being shown for reviews are not matching the avgRate ([79ddc9a1](https://github.com/aml-development/ozp-center/commit/79ddc9a1421ee9c1646cda1f5fe4d3e70f83b725))
  *  OZF-483 add tests ([2ad508c6](https://github.com/aml-development/ozp-center/commit/2ad508c67317b7b4b391611b8c3e6a4026dfd9d3))
  *  OZF-483 bug fixes ([827c9b50](https://github.com/aml-development/ozp-center/commit/827c9b509bf9e79ab0f3b44acacc5415d3b9055e))
  *  OZF-483 add text when there are no reviews ([6cc1f968](https://github.com/aml-development/ozp-center/commit/6cc1f9686dfc27d64ab104efe902ac31d2ffcf94))
  *  OZF-483 implement edit functionality ([cc11deb2](https://github.com/aml-development/ozp-center/commit/cc11deb2247466bb549c6c0c0d3094ba22ab581c))    
* **image server**
  *  OZF-879 intent icon upload UX review fixes ([092a5623](https://github.com/aml-development/ozp-center/commit/092a5623ea65c140cf4e1dace9c538381de397cf))
  *  OZF-819 Intent image upload ([0b99a4d5](https://github.com/aml-development/ozp-center/commit/0b99a4d51c83671bc08216aae2d1ce940fa8b7b0))
  *  Fixing admin tab issues ([1dda165d](https://github.com/aml-development/ozp-center/commit/1dda165d44177ffd942753858c6055d0d333133a))
  *  OZF-875 Intent image upload edge cases ([d7f36be2](https://github.com/aml-development/ozp-center/commit/d7f36be21e6888eca702d1e452548dce21dfbef9))     

#### Fixes  
* **org listings**:  fix uncaught reference error ([66d10bf2](https://github.com/aml-development/ozp-center/commit/66d10bf2aa8a5720f462090e2c098ddb2312c8e7))    
* **ozoneconfig**:  Fix OzoneConfig include in main.js ([ca8088bc](https://github.com/aml-development/ozp-center/commit/ca8088bc81c5de2f2765305b001496a8b0f1ac29))    
* **branding**:  OZF-806 Switching AML to MP ([47a88681](https://github.com/aml-development/ozp-center/commit/47a8868132aff176e885a702216ef2a04ecf585a))   
* **styling**
  *  Moved MP listing hover buttons down ([5ca598bf](https://github.com/aml-development/ozp-center/commit/5ca598bfaf52bfdf303f6aa3be368f4403df66f3))
  *  OZF-908 Detailed View header icon ([29d9506d](https://github.com/aml-development/ozp-center/commit/29d9506d429548638a69fceb781bad00a1b151cc))
  *  OZF-902 Create ([e919884c](https://github.com/aml-development/ozp-center/commit/e919884c71b2387c8071df957227fab41354a961))
  *  OZF-901 classification banner z-index problem ([10cc996e](https://github.com/aml-development/ozp-center/commit/10cc996ea8486465802a8782d1e207b523fd50d1))
  *  OZF-898 Fix unecessary scrollbar on discovery page ([bc0d212d](https://github.com/aml-development/ozp-center/commit/bc0d212d3b96d9415834edcc9466816cd4adc997))     
* **css**:  update listing state filter text styles ([9e26cee1](https://github.com/aml-development/ozp-center/commit/9e26cee18a4e974fd73526ee8afcbbe9cefe6215))   
* **listing tile**
  *  OZF-891 The Listing Name extends behind the short org name on the quick view ([6cbf82bc](https://github.com/aml-development/ozp-center/commit/6cbf82bc737b6d4eaf759ce39bb2fcbf9daaa35c))
  *  show ellipsis when title overflows ([0b868399](https://github.com/aml-development/ozp-center/commit/0b86839945c21934af7607db9869db740a4cd8e9))    
* **global navbar**
  *  fix help modal ([713b7c64](https://github.com/aml-development/ozp-center/commit/713b7c64663863eb87e571f3f5aa8bbd0ef0b554))
  *  fix usermenu routes ([7d423c97](https://github.com/aml-development/ozp-center/commit/7d423c97d33ca94c0416298ee0775bffa38d01b9))
  *  search input box now takes up full width ([382f99a2](https://github.com/aml-development/ozp-center/commit/382f99a20c0b4afdce74a8a880fe6b5bcc3a6e98))     
* **discovery page**:  OZF-883 Fix sort direction for Most Popular Listings ([72ea9e63](https://github.com/aml-development/ozp-center/commit/72ea9e6395601758bffdfe0c8d3b3e94fe74f346))    
* **sidebar**:  Sidebar height visibly 100 ([04c60a4f](https://github.com/aml-development/ozp-center/commit/04c60a4f3462fb71b8231bdc5d209c29d10c1c35))    
* **listing management**:  OZF-869 make tiles show correct editedDate ([31e194ca](https://github.com/aml-development/ozp-center/commit/31e194ca0cb29c4dc8b98435a3c489e0cb24d25d))    
* Fixed NavBar's URLs and role recognition ([d6d4209f](https://github.com/aml-development/ozp-center/commit/d6d4209f8cb784a28ebc256ea75930b5b057347b))     

#### Merge Pull Requests  
* Merge branch 'master' into profile-window ([67d49eca](https://github.com/aml-development/ozp-center/commit/67d49eca5898c2d33ff4e474e47a4d1b551c483d))
* Merge branch 'master' into profile-window ([10fda9c0](https://github.com/aml-development/ozp-center/commit/10fda9c0b5145f16b5da79751cd5f0b6747d27e6))
* Merge pull request #39 from ozone-development/metrics ([d6e270ee](https://github.com/aml-development/ozp-center/commit/d6e270ee7f01c0aad09535059bb7c7c339d2a77d))
* Merge branch 'master' into profile-window ([2aaec955](https://github.com/aml-development/ozp-center/commit/2aaec9557a28b9c041786d6e866968f73a0f3f58))
* Merge branch 'master' into profile-window ([b8f45647](https://github.com/aml-development/ozp-center/commit/b8f45647d0d24c9f7483e2e1aaa30075876cea3c))
* Merge branch 'recent-activity' into profile-window ([88534b51](https://github.com/aml-development/ozp-center/commit/88534b51a63362b5dc369edfb8c178788e52be5c))
* Merge branch 'master' into recent-activity ([d5ac9ebc](https://github.com/aml-development/ozp-center/commit/d5ac9ebcc5c3e466e8d81820855dc5a64256721b))
* Merge branch 'recent-activity' into profile-window ([379119fb](https://github.com/aml-development/ozp-center/commit/379119fb09bd6b6b5fee13c449ee489a0748d93a))
* Merge branch 'master' into review-tab ([eb4904fc](https://github.com/aml-development/ozp-center/commit/eb4904fc53d80a77aa05b29380bcfb0ad04bac64))
* Merge branch 'master' into Global-Toolbar ([0859e47b](https://github.com/aml-development/ozp-center/commit/0859e47bdef5f1a51ff82e218d95324a899c117c))
* Merge pull request #38 from ozone-development/Org-ListingTiles ([007bec9f](https://github.com/aml-development/ozp-center/commit/007bec9f0854586946b6de1dff00d02117a3dae1))
* Merge branch 'master' into image-server ([6671c77d](https://github.com/aml-development/ozp-center/commit/6671c77df4347d7b4e9b45a0b13c5641352dff8d))       

#### Test  
* **changelog**:  Fix changelog tests after merge ([b7291f16](https://github.com/aml-development/ozp-center/commit/b7291f16e9462fd0f9f54290423eb6458cc30b83))    
* **react commons**:  update test OzoneConfig location ([d7343149](https://github.com/aml-development/ozp-center/commit/d73431491e5aa56429790e333215f2342b79655c))    
* **sidebar**:  fix unit tests ([9b8bedf5](https://github.com/aml-development/ozp-center/commit/9b8bedf50db4cfb00d0147db4afb9701861cabcc))    
* **image server**:  OZF-877 Intent image upload unit tests ([636402ee](https://github.com/aml-development/ozp-center/commit/636402eed03697fd4534f7988773d6c6a12fa028))    

#### Chore  
* **gh-pages**:  fix config ([56998340](https://github.com/aml-development/ozp-center/commit/56998340641c3e2f01eea8703f8688a94db07192))    
* **travis**:  set version of npm to 1.4.28 for shrinkwrap to work properly ([beabdda8](https://github.com/aml-development/ozp-center/commit/beabdda87ef38d31d42e6622a2e06532599e7ded))    
* **build**:  Regenerating npm-shrinkwrap.json with npm 2 ([61dfe867](https://github.com/aml-development/ozp-center/commit/61dfe86759a46d570f6b0c960acf19b4a358a51d))   
* **react commons**
  *  Update to ozp-react-commons 0.1.0 ([6cc0bae0](https://github.com/aml-development/ozp-center/commit/6cc0bae02271631d8475c9e08d9f0e8728a30f5c))
  *  Integrating profile window from commons ([64bb2219](https://github.com/aml-development/ozp-center/commit/64bb2219924091b091f26a1de4e24fac402df949))
  *  remove components that are in commons ([dae3a593](https://github.com/aml-development/ozp-center/commit/dae3a593081c81ad34705e03c66e5818e6f40c21))
  *  separating out ozp-react-commons ([c83bf61c](https://github.com/aml-development/ozp-center/commit/c83bf61c6f49204725177681a4cec3b7fcfa3f49))     
* **style**:  Update tabs ([b75bf8e8](https://github.com/aml-development/ozp-center/commit/b75bf8e88099e97f263005e6bfed4d49c608a7a1))   
* **dependencies**
  *  update shrinkwrap ([bbdbe598](https://github.com/aml-development/ozp-center/commit/bbdbe598890bf3e8fb09779ade54e223de288458))
  *  use npm shrinkwrap to lockdown dependencies ([2c2830b7](https://github.com/aml-development/ozp-center/commit/2c2830b72df8b71964546a40d87e72e9daa5f0fd))     
* **config**:  Remove unneccessary configs ([9bba481d](https://github.com/aml-development/ozp-center/commit/9bba481db0d088b93b251c9f8854dc2b0f44db2f))    
* **unit tests**:  OZF-574: implemented change log and recent activity unit tests as well as fixed broken ones ([0ce5f603](https://github.com/aml-development/ozp-center/commit/0ce5f6038eb7969f804fadc4cec7b54e9bf2ef14))    
* **package.json**:   Switch to non-file ozp-react-commons rep ([8d9c04bc](https://github.com/aml-development/ozp-center/commit/8d9c04bc8021ce3706887d1b5eb0a7e6760b2431))   
* **external config**
  *  Moving external config for common module ([fd5223dd](https://github.com/aml-development/ozp-center/commit/fd5223dd7ceb83c2ffd00c01e834a6321484c945))
  *  Improved way of importing OzoneConfig as module ([c4391042](https://github.com/aml-development/ozp-center/commit/c439104236b1b21c7fe0044a28e1f373ba961817))
  *  consistent urls for metrics ([d4a9adae](https://github.com/aml-development/ozp-center/commit/d4a9adaec70d66efd850119dfdd464480069fc69))
  *  OZF-820 Making HUD and center config files identical ([75636a4d](https://github.com/aml-development/ozp-center/commit/75636a4d1db58c1d691b79b31d47dc259d3e3a55))
  *  OZF-893 Add WEBTOP_URL ([e86c51be](https://github.com/aml-development/ozp-center/commit/e86c51becefa6f37eaac2a5f47e213f6399b7412))
  *  OZF-892 Add placeholder DEVELOPER_RESOURCES_URL to config ([d4e822d6](https://github.com/aml-development/ozp-center/commit/d4e822d6238e67efa37ec09eb2351267540b1138))
  *  OZF-863 Fix gulp configuration ([3e9f2cc2](https://github.com/aml-development/ozp-center/commit/3e9f2cc2a52a77093dbb036a3f6c92803e5e4a24))
  *  OZF-863 Create external OzoneConfig.js file ([4985eae1](https://github.com/aml-development/ozp-center/commit/4985eae133bcf5fe6be3191a4fb19b7d0ff0e7d6))     
* **tests**:  Fix test harness after changing how config file works ([9141fbf1](https://github.com/aml-development/ozp-center/commit/9141fbf132af0a76cafbd8dcf7c5d39ea968ced8))   
* **metrics**
  *  Added a bit more time to search delay ([242159c5](https://github.com/aml-development/ozp-center/commit/242159c5a037bc4f15ed5fa81e31117a35c7d280))
  *  Moved Review View to ListingActions ([e330dc16](https://github.com/aml-development/ozp-center/commit/e330dc1693da9b187e07a08988e7b37491c5f3e8))
  *  move analytics tracking to actions ([f7a7e723](https://github.com/aml-development/ozp-center/commit/f7a7e723ad373e17d5fc2b46f01633c75e83891f))     
* **styling**:  Update bootstrap-sass ([464cd502](https://github.com/aml-development/ozp-center/commit/464cd50203d78d3784fb77335422a6a8f89eb026))    
* **unit test**:  fix unit test ([dbc0bf2b](https://github.com/aml-development/ozp-center/commit/dbc0bf2bf63a2e965efe9ae30a889133614a27c2))    
* **listingtiles**:  OZF-572 Added AgencyShort ([40b2cefc](https://github.com/aml-development/ozp-center/commit/40b2cefcadb5732e532f35564fcb2f8663fa52cc))    

#### Changes  
* Revert "chore(build): Regenerating npm-shrinkwrap.json with npm 2" ([02c46de5](https://github.com/aml-development/ozp-center/commit/02c46de580e4383ae58c6cafd8c5a235c7c923af))
* Merge master ([869a0253](https://github.com/aml-development/ozp-center/commit/869a0253b3081fd02db2fec34a06f4ec93be38f7))
* Switched to navbar_inverse ([c664dcbb](https://github.com/aml-development/ozp-center/commit/c664dcbbe7e0ef6412aaa9171c2b94e5febf949c))
* Button Updates ([6a0eb2bd](https://github.com/aml-development/ozp-center/commit/6a0eb2bd274cfc3dcb025ebacb6deaac95496288))
* Merge master into Global-Toolbar ([6f53bb36](https://github.com/aml-development/ozp-center/commit/6f53bb36fb49d5dbaac06dc800ea09319aa79f85))
* Merge master ([7ef5e1c1](https://github.com/aml-development/ozp-center/commit/7ef5e1c1e77d9358609c4ca8d5f6c05f9e65f765))
* Merged master ([82a3a001](https://github.com/aml-development/ozp-center/commit/82a3a001bfb4e1df000b2b19a4234010c7c0febe))
* Variables, icons, button styles ([fa77ea1d](https://github.com/aml-development/ozp-center/commit/fa77ea1d047b0c97821a7fd5cfccda6da64a7e34))
* Separated toolbar styles, limit title, typo, close ([20bca991](https://github.com/aml-development/ozp-center/commit/20bca9915a0488ec4d85c0dbaaa5b65808bc67a5))
* Updating search placeholder text ([83c76cc1](https://github.com/aml-development/ozp-center/commit/83c76cc1542e218b3a0c14307142e148ef7f27a8))
* Merging branch 'master' into Global-Toolbar ([dbd7b133](https://github.com/aml-development/ozp-center/commit/dbd7b133a307293c0075e4a2a687aed0b3c5fc32))
* Separating Detailed View text from Navbar text ([db7c4ef2](https://github.com/aml-development/ozp-center/commit/db7c4ef269c3174f30163195b653ace8ac7bbfc5))
* Added the NavBar across all areas ([6e647a28](https://github.com/aml-development/ozp-center/commit/6e647a28c8a0bc2c7132617b17c00fe3d36775b5))
* Setting up the NavBar ([26704630](https://github.com/aml-development/ozp-center/commit/267046305f75adedb760f94a19332fa680b4e3f0))
* Updating edit button colors ([aed48fba](https://github.com/aml-development/ozp-center/commit/aed48fba686e742d86638004555a440462ad8a8b))     

### 0.5.0 (2015-01-22)

#### Feature 
* **image server**
  *  Intent image upload basic functioning ([1dd2901f](https://github.com/aml-development/ozp-center/commit/1dd2901f6e1aa4a9f66fc4d4cd1dceae9ae3e2e9))
  *  OZF-837 IE9 error response handling ([dde59334](https://github.com/aml-development/ozp-center/commit/dde59334682f3c7a1016c4c022dadf7aeb0aed5e))
  *  OZF-836 Validation Errors for screenshots ([b24a7a60](https://github.com/aml-development/ozp-center/commit/b24a7a60e1f74ab0552382992407e0734370d5a5))
  *  Change Create ([486f0fb3](https://github.com/aml-development/ozp-center/commit/486f0fb37fd757d8f6c73b379ab5f21748e53e22))
  *  Fix IE10 and 11 issues ([0947306e](https://github.com/aml-development/ozp-center/commit/0947306ee206901eb000ca50f4d0025cbd12d826))
  *  Fixing removal of screenshot images ([b0ef08fa](https://github.com/aml-development/ozp-center/commit/b0ef08fa4aab4d82d2a717f975de0dfd98be0a14))
  *  OZF-815 Image removal button ([759cefbf](https://github.com/aml-development/ozp-center/commit/759cefbf48eb42a943c69881ae5a40ba6227242b))
  *  Handle unknown errors during image save ([135be814](https://github.com/aml-development/ozp-center/commit/135be8146d62c589a8adeee6916e85590cb29a97))
  *  OZF-817 Handle server-side image errors ([453f2f5e](https://github.com/aml-development/ozp-center/commit/453f2f5e63c16d34b553172a05f066b8f4f6688b))
  *  OZF-814 Tweaking focus behavior ([b13965ec](https://github.com/aml-development/ozp-center/commit/b13965ec6fa562e5cdd3f5948605af01b9f66edb))
  *  OZF-814 Loading spinner ([75192515](https://github.com/aml-development/ozp-center/commit/75192515451c97613bbf7d2a0dbf15443e04ab99))
  *  OZF-447 Clean up Listing json for save ([8d2f3b85](https://github.com/aml-development/ozp-center/commit/8d2f3b85b43ee0700a267e76f0a905477aa4f432))
  *  OZF-447 IE9 fixes ([bb89c0a3](https://github.com/aml-development/ozp-center/commit/bb89c0a390482031f56ebefd512ced03d885f2a1))
  *  OZF-447 Image Validation fix ([bf2639df](https://github.com/aml-development/ozp-center/commit/bf2639df67bf43ed30e1f08c27c6d043fe7d10c6))
  *  OZF-782 Previews, validation, and screenshot handling fixes ([b16a3568](https://github.com/aml-development/ozp-center/commit/b16a3568066f1aa79db969753a293bde4bfa8fed))
  *  OZF-782 Legacy hidden-iframe file upload ([36674610](https://github.com/aml-development/ozp-center/commit/366746105bb838dcd4ff27bd4b09a5ee7278f702))
  *  HTML 5 file upload ([6cdefc0e](https://github.com/aml-development/ozp-center/commit/6cdefc0e6cb499b7cc5937e37221ad5e9e7043a9))
  *  Disabling file upload validation for now ([0cb0c9c3](https://github.com/aml-development/ozp-center/commit/0cb0c9c3e8d6e0db1e9ce5a3abd7cf429f787df8))
  *  Updating UI messages ([dd3290cb](https://github.com/aml-development/ozp-center/commit/dd3290cb846be6cf8a15d4dc460f766c8d1343ae))
  *  OZF-780 Covert URL inputs to File inputs ([61ac3664](https://github.com/aml-development/ozp-center/commit/61ac3664c4af4c816467e5e2f22e0c90e78210ec))    
* **reviews tab**
  *  OZF-483 implement delete functionality with confirmation ([a4525646](https://github.com/aml-development/ozp-center/commit/a45256466ce3c584bcda06eeded1ce2bdc7faaad))
  *  OZF-483 update time ago every second, hide edit section after save ([d3de3798](https://github.com/aml-development/ozp-center/commit/d3de379851cc79d8d5b2a4e7a87cf8e08f144e7b))
  *  OZF-483 fetch reviews only once for a listing ([d24d2ba6](https://github.com/aml-development/ozp-center/commit/d24d2ba667cb14dd6e9aa3b71a072fd54b664574))
  *  OZF-483 Implement edit review functionality ([185cb80f](https://github.com/aml-development/ozp-center/commit/185cb80fc9cd163093f2de4f6663f158145f3ad5))
  *  OZF-483 Allow user to submit a review for a listing ([3bd15719](https://github.com/aml-development/ozp-center/commit/3bd1571961ea108e2f53e5d8e9faf055b80f48e9))
  *  OZF-483: include username with review ([97b3e9e1](https://github.com/aml-development/ozp-center/commit/97b3e9e179d329f7a816b51c891c004672f61679))    
* **review tab**
  *  OZF-483: existing user reviews in list ([fde09b81](https://github.com/aml-development/ozp-center/commit/fde09b8159596808e62216fc2fe7daea812652f0))
  *  OZF-483: getting appropriate information in the review tab, plus styling ([f89c004d](https://github.com/aml-development/ozp-center/commit/f89c004d0dace88c43ad10c7879b0ffbb00c4826))     
* **create edit page**:  Move warning text above inputs per UX request ([7abd1840](https://github.com/aml-development/ozp-center/commit/7abd1840bbd68f6f4382feb9dceab623c06921a8))   
* **org stewards**
  *  OZF-333: refresh data on tab change ([4af2f19b](https://github.com/aml-development/ozp-center/commit/4af2f19b519df2f5a708a7f5d4664475bc4a06d4))
  *  OZF-333: initial work for org steward listings ([1be555cb](https://github.com/aml-development/ozp-center/commit/1be555cb8eea1b9085b7f04917b09c62eec8af01))     
*  lazy require Admin UI components ([f99a5896](https://github.com/aml-development/ozp-center/commit/f99a5896c64dec16d5ce22b823a0686d9ac9f9d7))
*  lazy require Admin UI components ([118d3ca5](https://github.com/aml-development/ozp-center/commit/118d3ca5390067556ee95147088b84b819b53862))    
* **classification**:  OZF-805 Banners Added ([b92d1d48](https://github.com/aml-development/ozp-center/commit/b92d1d480f8072acf3c7887198de375baed692f8))    

#### Fixes 
* **org listings**
  *  OZF-333: fixed the org steward tabs ([ddacd503](https://github.com/aml-development/ozp-center/commit/ddacd503165093f26fc8cdfc5c7911f1644489e1))
  *  OZF-333: fixed the count for org steward status filter ([56083e39](https://github.com/aml-development/ozp-center/commit/56083e3935ed434ed1a0ed6d321365d50a64a8e4))
  *  OZF-33:Fixing the router to work for org stewards that aren't admins ([40428c60](https://github.com/aml-development/ozp-center/commit/40428c6076d8513e1970612f966abc1d639ac321))     
* **css**:  lazy require css for IE9's 4096 selector limit bug ([1c31062b](https://github.com/aml-development/ozp-center/commit/1c31062bd20395bcb34f3334b8768b81fda9d521))    
* **bookmarks**:  OZF-747 Fix bookmark implementation ([0dff45fc](https://github.com/aml-development/ozp-center/commit/0dff45fc11972bc75cf8457c01bf3d69ad534ec7))     

#### Merge Pull Requests  
* Merge branch 'master' into org-listings ([833d67e9](https://github.com/aml-development/ozp-center/commit/833d67e927494eb1fa045833de594d34ce24ad86))
* Merge branch 'master' into review-tab ([ce116d8c](https://github.com/aml-development/ozp-center/commit/ce116d8c117ed5175a809eadba7340c74fde3cdf))
* Merge branch 'master' into review-tab ([cd3bc411](https://github.com/aml-development/ozp-center/commit/cd3bc4112c75aca07e0c18d5dd8c92d1eb1c77ad))
* Merge branch 'master' into org-listings ([fb239549](https://github.com/aml-development/ozp-center/commit/fb23954930149d53d2dfc8deb45cd4a43a064e11))
* Merge branch 'master' into org-listings ([6174e96b](https://github.com/aml-development/ozp-center/commit/6174e96b7d602fa41199621e3c948ff55963537e))
* Merge branch 'master' into image-server ([b14a16e3](https://github.com/aml-development/ozp-center/commit/b14a16e354bc3594026a5ba844a13f33da5d5d39))
* Merge branch 'master' into org-listings ([c1946060](https://github.com/aml-development/ozp-center/commit/c194606031b5b5904753bcb9f7061207527292af))
* Merge branch 'master' into image-server ([42531fa6](https://github.com/aml-development/ozp-center/commit/42531fa655c6226aecb98abe6fd647bd62faf5b9))
* Merge pull request #35 from ozone-development/details-tab ([6f22e5c3](https://github.com/aml-development/ozp-center/commit/6f22e5c34f2f0fa1bdc90bacbebeb630ceb5060b))
* Merge pull request #34 from ozone-development/classification ([53fe5579](https://github.com/aml-development/ozp-center/commit/53fe55799769b2a3463724c45f295337a2663676))       

#### Test 
* **image server**
  *  OZF-784 Image upload tests' ([862af46f](https://github.com/aml-development/ozp-center/commit/862af46fe9b14bdefc8cf862b27eadefe3290bb4))
  *  OZF-784 CurrentListingStore image-related tests ([27226633](https://github.com/aml-development/ozp-center/commit/27226633bd26825a9612617ba1f192622d38be6c))
  *  OZF-784 ImageInput test ([3b4a0600](https://github.com/aml-development/ozp-center/commit/3b4a06007709787d0b9dd61dee5169baf6fdbe7c))     

#### Chore  
* **dev**:  disable async loading for now ([18abb9ab](https://github.com/aml-development/ozp-center/commit/18abb9ab3a96b332e47abb8e136e2faabf6a41eb))   
* **unit tests**
  *  OZF-822: created unit tests for the my listings page and sidebar ([3bb50f0f](https://github.com/aml-development/ozp-center/commit/3bb50f0fc5bac0ee4e1490db6374db9cc2966f44))
  *  OZF-333: round one of unit test fixes ([982771e8](https://github.com/aml-development/ozp-center/commit/982771e88858c84307f4180dd6c3c1219ee90895))     
* **jshint**:  Fix quote style error ([5f437851](https://github.com/aml-development/ozp-center/commit/5f437851e029ef2892837f3a0bfbf26a306b050a))   
* **testing**
  *  fix startup error ([64ec3a43](https://github.com/aml-development/ozp-center/commit/64ec3a43cee22944d7ad8b4cbcc76b12be0f7c35))
  *  implement proper example test (UserMenu) for components that reply on router modules ([d16f70aa](https://github.com/aml-development/ozp-center/commit/d16f70aa9a9446e7c8214aef749573adba1e395d))     
*  Use specific versions of all dependencies ([03f4346e](https://github.com/aml-development/ozp-center/commit/03f4346eb7482de4b95f79f742c746e845c8e494))
*  fix merge ([910d0bc0](https://github.com/aml-development/ozp-center/commit/910d0bc0d14292aa95a99ae8f49b3c321e68844c))    
* **org steward**:  OZF-823: made shared components for listing management pages ([18f155da](https://github.com/aml-development/ozp-center/commit/18f155da549cceabbbe6aeb267b5905a4e87edf6))    
* **webpack**:  Temporary fix to webpack issues from master ([1551a411](https://github.com/aml-development/ozp-center/commit/1551a411ff8a65eee93b9efb0ae97fa79b88f08d))    
* **details view**:  Remove debugging statement ([f3f2d274](https://github.com/aml-development/ozp-center/commit/f3f2d274e4b4094c9e6995b64784b4e3a3b456f6))    

#### Changes  
* Changing spacer color adjusting minor padding ([2040e4eb](https://github.com/aml-development/ozp-center/commit/2040e4ebbd964466d3eb1e8063b8a4476a471398))
* Updating logo ([2b859879](https://github.com/aml-development/ozp-center/commit/2b85987922e5201d6fc3c38bb4695d18bd5871f7))
* Cleaned up header and filters bars ([9a96e92c](https://github.com/aml-development/ozp-center/commit/9a96e92c5d191e485e8af6571c4dbed21553665e))
* Merge master into review-tab ([37fff364](https://github.com/aml-development/ozp-center/commit/37fff364c3abd77d0ce658ef7bf43cdf50597046))
* Changed ellipsis to angle-down, added hover ([cfa5733c](https://github.com/aml-development/ozp-center/commit/cfa5733c5341660e26f3bfde21f66ea82f3c09cd))
* Updating logo to OZONE Marketplace ([21f4c48b](https://github.com/aml-development/ozp-center/commit/21f4c48b6c8989e7e95fae8d51d566afa5b3cc32))    
* **details tab**:  OZF-592 Added remaining fields ([c94ab546](https://github.com/aml-development/ozp-center/commit/c94ab546730bcfa7cbce238ddc5ff84fab76728c))     

### 0.4.2 (2015-01-07) 

#### Fixes  
* **header**:  OZF-746 Keep header padding synced with body ([1c1483cd](https://github.com/aml-development/ozp-center/commit/1c1483cd280481b92db8c302bae0b96417fd67b9))   
* **detail view**
  *  OZF-649: rework of caching bug fix ([f8d298b2](https://github.com/aml-development/ozp-center/commit/f8d298b22cf319cd817a7287893f765dc74b48a4))
  *  OZF-649: fixed caching bug ([6ab6d80f](https://github.com/aml-development/ozp-center/commit/6ab6d80f8aeaca313e0b15a0f5da94256e1052d5))
  *  OZF-649: fixed caching problem so if a listing's detail view is opened it adds the listing to the cache directly ([7c1bcbc5](https://github.com/aml-development/ozp-center/commit/7c1bcbc574fc470421fa2b9083d2964cf7d2f472))     
* **listing administration**:  OZF-707 show proper 4 colums in IE ([12166d7c](https://github.com/aml-development/ozp-center/commit/12166d7c6ef2dc40c4ef233a4708c60bb278b7db))    
* **feedback**:  OZF-711 Correct feedback edit button href ([e987f3da](https://github.com/aml-development/ozp-center/commit/e987f3da76eb61c277d8cdde9eb34f21079e4db0))   
* **build**
  *  Dowgrading karma-webpack to fix build ([b89ddd4a](https://github.com/aml-development/ozp-center/commit/b89ddd4a25218e4a0b06603ec6824f71173de43d))
  *  Downgrade from broken version of karma-webpack ([f2e8ca81](https://github.com/aml-development/ozp-center/commit/f2e8ca81acd7149fe2d982e506807b14eb003e0b))     
* **travis**:  Attempt to fix travis errors ([0fcbeb2c](https://github.com/aml-development/ozp-center/commit/0fcbeb2c80223e8c6b807a8cc262eeb6214d2d1f))   
* **icons**
  *  OZF-734 A more consistent fix ([69c298f3](https://github.com/aml-development/ozp-center/commit/69c298f3fcdd0a18b256435e7966ce3e4b95d93c))
  *  OZF-734 fixed path issues for dist ([5c651212](https://github.com/aml-development/ozp-center/commit/5c65121255fc05d6986ba4bf69a2fcc10b2e8a89))     
* **ozf-643**:  Removing incorrect RouteHandler components ([8ce7294d](https://github.com/aml-development/ozp-center/commit/8ce7294d20f2e5461cff9a47b19a8ace13dc7c97))    
* **metrics**:  Remove hardcoded metrics path ([b7cba632](https://github.com/aml-development/ozp-center/commit/b7cba632737ca6d3907a27f1d7fd2f0171178076))   
* **listing management**
  *  fixed jshint errors ([697ce417](https://github.com/aml-development/ozp-center/commit/697ce41783460e4f99fd8285a8ad019f64169e2e))
  *  OZF-708 Fixed icons for listing status on the tile view ([1308a841](https://github.com/aml-development/ozp-center/commit/1308a8418979ae3a84099ac21f2040ee2d40c938))    
* **featured listings**
  *  OZF-645: featured carousel shows only one at a time ([582aec22](https://github.com/aml-development/ozp-center/commit/582aec224e9871ad60f9191bcc11f4917c7ba376))
  *  OZF-645: featured carousel shows 1 listing at a time if there is less than 3, shows scrolling arrows if more than 1 listing ([26f5cf82](https://github.com/aml-development/ozp-center/commit/26f5cf82a80eccbd33aa67559c143c253e18646a))     
* **change log**:  OZF-709: added organization when approved by an org steward ([bad1fb83](https://github.com/aml-development/ozp-center/commit/bad1fb83ba41a2c9037aef53ec3f69d157c3d123))     

#### Merge Pull Requests  
* Merge pull request #32 from ozone-development/icon-fix ([8a78a1a1](https://github.com/aml-development/ozp-center/commit/8a78a1a1785225b01c5a694831987dfd494f33e7))         

#### Changes  
* Revert "fix(Icons): OZF-734 fixed path issues for dist" ([4ef1d4da](https://github.com/aml-development/ozp-center/commit/4ef1d4dac46bc028d39d215ffa4c43bb0d6f5b35))     

### 0.4.1 (2014-12-24)

#### Feature  
* **listing management**:  OZF-464 fixed icons and sizing so it can be four across as per convo with Sarah ([02bf0884](https://github.com/aml-development/ozp-center/commit/02bf0884eeae8ba6a38a29d81561078b1967eb57))    

#### Fixes 
* **user menu**
  *  OZF-736 Metrics opens in new tab ([a0ce1573](https://github.com/aml-development/ozp-center/commit/a0ce1573d27d067a9cd46f144d4958f0e20c30c3))
  *  OZF-735 Fixed routing ([b75d8146](https://github.com/aml-development/ozp-center/commit/b75d814643d2eff0cb5b16b20aa0e8f1e46dbfb0))
  *  Added HUD_URL DefinePlugin ([a2f485e1](https://github.com/aml-development/ozp-center/commit/a2f485e1fa2b555c660c111fcf3113f2ee90f7d8))     
* **listing edit**:  OZF-666 Fix Edit button in IE9 ([cef8ece6](https://github.com/aml-development/ozp-center/commit/cef8ece631b70769d0f21f56a577796574cdc421))    
* **header styles**:  OZF-650 Fixed indentation ([def2b8fd](https://github.com/aml-development/ozp-center/commit/def2b8fd8682b22e95a6a54323cf12f02d6d2d93))   
* **user-menu.js**
  *  OZF-650 Fixed indentation ([85a6c528](https://github.com/aml-development/ozp-center/commit/85a6c52849464e868ef631f5455636ded84b705e))
  *  OZF-650 Fixed indentation ([94bad3cb](https://github.com/aml-development/ozp-center/commit/94bad3cbdde4a722569a9497fc919759df5b0f08))
  *  OZF-650 Fixed indentation ([3608ffcb](https://github.com/aml-development/ozp-center/commit/3608ffcba56e2d96d89a33257004a2fbbf35d66a))
  *  OZF-650 Fixed indentation ([2d5ffe4e](https://github.com/aml-development/ozp-center/commit/2d5ffe4ec9fb3f2c2ebfdf92ee000b1404c5a30f))     
* **user-menu test**:  OZF-650 Updated unit test ([8333e864](https://github.com/aml-development/ozp-center/commit/8333e8640c511eceebbb1a14c715385648fe0f0c))    
* **list-unstyled**:  Swapped for bootstrap list-unstyled ([500e4bc6](https://github.com/aml-development/ozp-center/commit/500e4bc68507fe0b2c62e5ec9b359a024da1774d))    
* **sass variables**:  Replaced inline colors ([fe9a0a0e](https://github.com/aml-development/ozp-center/commit/fe9a0a0e9cfed7ecf212d0bfd67a73067621a963))    
* **metrics_url**:  Missing semicolon ([6336ef66](https://github.com/aml-development/ozp-center/commit/6336ef66dbd5fad1650ecc7e2b2ef285cb5bb961))    
* **user-menu**:  Change links, styling and functionality #OZF-650 ([34e05977](https://github.com/aml-development/ozp-center/commit/34e05977bcabc6b3fc58a1ca1e30124a3c29c80f))     

#### Merge Pull Requests  
* Merge branch 'master' into unit-tests ([e9b5d9ae](https://github.com/aml-development/ozp-center/commit/e9b5d9ae60ca69486ab01d38546296cba4d962bc))
* Merge pull request #30 from ozone-development/user-menu ([e4ee60ad](https://github.com/aml-development/ozp-center/commit/e4ee60ad9122da93f946f9b83f52174fe4823090))
* Merge pull request #29 from ozone-development/user-menu ([9803098f](https://github.com/aml-development/ozp-center/commit/9803098f8d7686804bdc83467bd1cb98e48ddeb0))
* Merge pull request #28 from ozone-development/user-menu ([29e1fb26](https://github.com/aml-development/ozp-center/commit/29e1fb26bc76c75c1bf383bae385c518f35bdce8))       

#### Test  
*  Fix react-radio-group require after test update ([a6c94e99](https://github.com/aml-development/ozp-center/commit/a6c94e99a86c2f8631fdbdf70be01b60196fad24))
*  Fix test infrastructure to avoid duplicate Reacts ([787e1ef3](https://github.com/aml-development/ozp-center/commit/787e1ef386cf99487187ceb09821190d5eada6c5))    

#### Chore 
* **unit tests**
  *  working all listings sidebar unit tests ([b3c93cf5](https://github.com/aml-development/ozp-center/commit/b3c93cf5497219113a535c0b07c7240574b76510))
  *  working on tests for UI components ([5495a213](https://github.com/aml-development/ozp-center/commit/5495a213b426107bafa7bd323d17398bc260859f))
  *  OZF-664 continue working on all listings sidebar unit tests ([2aacf565](https://github.com/aml-development/ozp-center/commit/2aacf56536779e795dd88d1d5abba95736778cd4))
  *  OZF-664 first round of unit tests ([6da49faa](https://github.com/aml-development/ozp-center/commit/6da49faa2451212631aafe0e55adde8f5149e8af))     

#### Changes  
* **user menu**:  Added HUD_URL links ([aa282780](https://github.com/aml-development/ozp-center/commit/aa28278000964a04c11221c30691413f5f3b6c13))    
* **webpack config**:  Added HUD_URL variable ([adde450c](https://github.com/aml-development/ozp-center/commit/adde450cb49cd17dcdd22ad7ccd8771ff57794a2))     

### 0.4.0 (2014-12-09)

#### Feature  
* **listing management**:  OZF-464 updated the filters and counts for all listings admin view ([0889ec42](https://github.com/aml-development/ozp-center/commit/0889ec426828b6869f6d68d7fda95ce2f89d0a39))    
* **all listings**:  Implement all listings page for AppsMall stewards ([3708d11e](https://github.com/aml-development/ozp-center/commit/3708d11e58e53a7abcc3f84824ebf89c6773b546))    
* **org steward**:  OZF-569 Allow Org Stewards the ability to Approve ([6fb0c491](https://github.com/aml-development/ozp-center/commit/6fb0c49135fd37553d6b1b60bc10083c253a9d91))    
* **quickview**:  OZF-568 Allow Org Stewards to Edit Listings in their Steward Org ([a1259b40](https://github.com/aml-development/ozp-center/commit/a1259b408d6d7ed8eaf8b8fefa3fc9da2d13e1c1))   
* **featured**
  *  OZF-644 Correctly display featured flag changes in changelog ([dd860d29](https://github.com/aml-development/ozp-center/commit/dd860d293130b7ef4e5bec05aec2d663bd938474))
  *  Fixing toggle initial state ([8105c5bd](https://github.com/aml-development/ozp-center/commit/8105c5bdfff3a96dc8fdcc5ea37162ad2db3d9cd))
  *  OZF-570 Featured listing toggle ([b3cbe296](https://github.com/aml-development/ozp-center/commit/b3cbe29618690d555c97b382ba2a1727f12c67a6))
  *  Adjusting spacing in admin tab ([d240e189](https://github.com/aml-development/ozp-center/commit/d240e1897c4d3ab5cc40565dfe98d788e28022f0))
  *  OZF-632 Restricting Featured toggle to admins ([36f791bc](https://github.com/aml-development/ozp-center/commit/36f791bc0fd9340acbf2f98f1e7730994ba48edc))
  *  OZF-632 Admin Featured toggle ([0682d06d](https://github.com/aml-development/ozp-center/commit/0682d06d042fdbaf9b23c10694560aa2cc1e5e36))     
* **metrics**:  Integrate metrics ([7f6fe661](https://github.com/aml-development/ozp-center/commit/7f6fe661ad30fe06445a117a2f3079b3be4affb6))    
* **dependencies**:  Upgrade to React 0.12 and Router 0.11 ([373732ac](https://github.com/aml-development/ozp-center/commit/373732ac6d10965a135355c515703c94ab3dc57c))    

#### Fixes  
* **change log**:  OZF-598 Date ([a533d098](https://github.com/aml-development/ozp-center/commit/a533d0982c5871892ee088aab23eb968791eca9a))    
* **fonts**:  Ubuntu fonts are not looking right in IE ([202a5b0b](https://github.com/aml-development/ozp-center/commit/202a5b0bce138fe4d0a5cbe7e97301065ecf6b26))    
* **user menu**:  AppsMall Management menu option is not displaying ([2ca709a7](https://github.com/aml-development/ozp-center/commit/2ca709a7a6a78dc3ed8ff8877a4f91d8fa470061))   
* **help**
  *  Users are not able to view the help in IE9 or IE10 if they don't have PDF reader installed ([8d6ea580](https://github.com/aml-development/ozp-center/commit/8d6ea580dd7ebcfc653e12bb76c2fdae291c65cf))
  *  increase modal height ([3215bf89](https://github.com/aml-development/ozp-center/commit/3215bf89e65753fd17391025392be45f015a2365))     
* **modals**:  OZF-639 Switching from native, but unsupported, Promises to jquery ([35038064](https://github.com/aml-development/ozp-center/commit/35038064dde828cf788912d7f0059d8f3fb0a60f))    
* fix tests ([ae18427c](https://github.com/aml-development/ozp-center/commit/ae18427c17f42dcf98329138008e05ce4bb1cd59))
* fix help modal link ([5972741b](https://github.com/aml-development/ozp-center/commit/5972741bc9fec055b5a1dc4301cfbbc3eb7051ff))   
* **create edit**
  *  OZF-637 ([31eb8606](https://github.com/aml-development/ozp-center/commit/31eb86062fdc4c2994a5be631fee374e3d13f9b5))
  *  OZF-637. Users should not be able to navigate to the edit page if they don't own the listing ([21d99b33](https://github.com/aml-development/ozp-center/commit/21d99b331e8b21db5c9d4eb7b60f5da59c78a6c8))      

#### Merge Pull Requests  
* Merge branch 'master' of https://github.com/ozone-development/center-ui ([ae13b0df](https://github.com/aml-development/ozp-center/commit/ae13b0df6e3bd63e2459809d9b46f499bcb8d7dd))       

#### Test  
* **quickview**:  Quickview approve and reject buttons tests ([6318dd1b](https://github.com/aml-development/ozp-center/commit/6318dd1b9aec29c77f90fa7c6ae0f7f236c6f2c3))    
* **featured**:  Quickview Featured toggle tests ([f0a831de](https://github.com/aml-development/ozp-center/commit/f0a831de10889d46d84f2f05bfd35f45aa3159e1))    

#### Chore  
* **unit test**:  increase no activity timeout for travis servers ([c1cfb774](https://github.com/aml-development/ozp-center/commit/c1cfb7740f8420c254f0b780b20f1623df17ed42))      

### 0.3.0 (2014-11-26)

#### Feature  
* **help**:  Implement help modal window ([868ed6ad](https://github.com/aml-development/ozp-center/commit/868ed6ad4041757bfc70833181ccdc539a4bffe0))   
* **unit tests**
  *  use inject loader for injecting mocked dependencies ([e630a4e6](https://github.com/aml-development/ozp-center/commit/e630a4e6a8efbe55619080d101d44b3004a651d1))
  *  setup karma, mocha and chai based tooling ([8ebe0f0a](https://github.com/aml-development/ozp-center/commit/8ebe0f0a16709156596ef39013cf31119a4e5615))    
* **create/edit listing**
  *  OZF-326. Allow quickview to function as a preview for the create ([7af02df2](https://github.com/aml-development/ozp-center/commit/7af02df288d88c3db66282ead6ba8f48f906c1cc))
  *  OZF-326. Styling for createEdit page and save and close behavior ([3f654aba](https://github.com/aml-development/ozp-center/commit/3f654aba04b212824a58d3d82908128bf2805051))
  *  OZF-326. Completion of Edit ([c28e67cd](https://github.com/aml-development/ozp-center/commit/c28e67cd84c6e40a6cc9953b6dd773fa9c807d3a))     

#### Fixes  
* fix help link ([6d38c143](https://github.com/aml-development/ozp-center/commit/6d38c143d710354ae60459ba58c41a5ee6c99cca))   
* **create edit**
  *  is the current user as the default listing owner ([50d0bc28](https://github.com/aml-development/ozp-center/commit/50d0bc2830e4be29e5e9f6ac3d0f82a71d52958f))
  *  cleaning up help element when a help property does not exist on the input element ([3162e02e](https://github.com/aml-development/ozp-center/commit/3162e02ed42614e407761978a164b843c67510b8))
  *  Correcting help messages and descriptions for input fields ([d6f052b8](https://github.com/aml-development/ozp-center/commit/d6f052b86e2bd8c6caae2080b243eba421bd3dea))
  *  fixing the console error that sometimes occurs when scrolling the page to the first error ([afb90349](https://github.com/aml-development/ozp-center/commit/afb903496e5e24c24ed0f648078418e8b7e67775))
  *  Fixing scrollTo behavior on form errors. Add proper help message for contact types. ([83e443e8](https://github.com/aml-development/ozp-center/commit/83e443e886c87b4935fae550e06d0fed86993b39))     
* **quickview admin**:  OZF-485 - validate the rejection justification ([530cd1c4](https://github.com/aml-development/ozp-center/commit/530cd1c46fc2125690548e1f4b43dbee42ff3b62))    
* **createedit**:  After a submit attempt fails due to validation errors, don't hide errors on change ([332adc67](https://github.com/aml-development/ozp-center/commit/332adc6782413eecf3195b003e490144a6c0a1e3))    
* **quickview admin tab**:  OZF-575. Changelogs are not rendered on the admin tab ([9a6eff4f](https://github.com/aml-development/ozp-center/commit/9a6eff4feba5292baa5a0acd2c03ae306efb9b9c))   
* **create edit page**
  *  on validation failures the help messages is not properly highlighted on subobjects (e.g. screenshots) ([a8dd5bfb](https://github.com/aml-development/ozp-center/commit/a8dd5bfb4fe34dc6ebc3dcb7fa319b0155175972))
  *  Correcting the position of the sub header and button group ([84ef6ddf](https://github.com/aml-development/ozp-center/commit/84ef6ddf2ba5be132d98140e0e38bd4fbf694435))     
* **listing deletion**:  fixing delete confirmation box which was broken as part of refactoring Listing ([0a443f5d](https://github.com/aml-development/ozp-center/commit/0a443f5d4ffc5924646f1ba89dfc4d0ad86be838))    
* **quickview edit button**:  properly handle closing of the quick view modal ([1a7cdf76](https://github.com/aml-development/ozp-center/commit/1a7cdf76ffdbfbf55fd9af9bda993b8a51340a39))   
* **routing**
  *  OZF-363 Convert delete and feedback routes to use query params ([cf0f21ee](https://github.com/aml-development/ozp-center/commit/cf0f21ee11971f334fffaaa70b6dbaaabfcdf848))
  *  OZF-363 refactor routing to allow modals to be opened from anywhere in the app ([af3e291b](https://github.com/aml-development/ozp-center/commit/af3e291b9bb7399db6522e76075f63abdfa8c18e))
  *  OZF-479 prevent users from accessing mall management page ([1e10001a](https://github.com/aml-development/ozp-center/commit/1e10001ab91275040ee5691d4310ecfeac874e16))           

#### Chore 
* **cleanup**
  *  fix broken tests ([3f1fa75e](https://github.com/aml-development/ozp-center/commit/3f1fa75e5b3e39cb9c8db5e66ac63e5b5a4ddb75))
  *  fix errors at start up ([5f3f1d5f](https://github.com/aml-development/ozp-center/commit/5f3f1d5f4629c09bd71fe85718486094168d6178))
  *  Refactoring the Listing object and some clode cleanup ([9594288a](https://github.com/aml-development/ozp-center/commit/9594288a56a7192359b97ecd9dc1afc1435cae35))     
* **dependencies**:  fix dependencies to known working version ([7a0a059d](https://github.com/aml-development/ozp-center/commit/7a0a059d40161bf31b49d7d941ef6d7d427f9aa1))    
* **jshint**:  ignore jsx block ([ad1a45cc](https://github.com/aml-development/ozp-center/commit/ad1a45cc52b8a61e484b772777faa3db3bb9fa1a))    
* **gulp**:  Changing default dev server to listen on all interfaces ([7d9e3297](https://github.com/aml-development/ozp-center/commit/7d9e32971435c560cc4ce9065415534bc72cd036))   
* **changelog**
  *  write to CHANGELOG file ([9a3b4853](https://github.com/aml-development/ozp-center/commit/9a3b4853276605760c8b893280462229e636c680))
  *  add Changelog ([76a5a6fb](https://github.com/aml-development/ozp-center/commit/76a5a6fb4a241b92c7e24573dacb40caf49f65ee))    
* **bootstrap**
  *  update to 3.3.1 version of bootstrap ([e38465b5](https://github.com/aml-development/ozp-center/commit/e38465b544d71d20546b2c4e9d5a6e8bca930397))
  *  update to known working version ([509a3975](https://github.com/aml-development/ozp-center/commit/509a397524f99bf550a50af7f673d6f50197e994))     
* **fix indentation**:  replacing tabs with spaces ([1d1b8ba9](https://github.com/aml-development/ozp-center/commit/1d1b8ba9865aad6542c7385191fbe079d2eff714))      

### 0.2.0 (2014-11-12)

#### Feature 
* **error handling**
  *  fix typo ([49e11986](https://github.com/aml-development/ozp-center/commit/49e119868522541b250346a98cdbe3112c958752))
  *  add help messages for fields ([59e4c223](https://github.com/aml-development/ozp-center/commit/59e4c2235ab075b6a4af6b83d76d7206b476f016))
  *  gracefully fallback if fields are not defined ([4abde0ac](https://github.com/aml-development/ozp-center/commit/4abde0ac2d88f1a568d5b2714f86559a1323476f))
  *  modal doesn't close on save ([2b256e32](https://github.com/aml-development/ozp-center/commit/2b256e326b7201c44282053909036544e10cbebd))
  *  Display any AJAX errors thrown to users while managing admin objects ([e1557438](https://github.com/aml-development/ozp-center/commit/e155743887851b549562866397fad9b7024cea0a))    
* **mall management**
  *  prevent users from access admin page ([27a518be](https://github.com/aml-development/ozp-center/commit/27a518be6fbeabe83fddaa0a520eb84bf9485699))
  *  escape html ([ad05b7e3](https://github.com/aml-development/ozp-center/commit/ad05b7e32d19ee8e69d8fdbb47c478dd9b297d9e))
  *  Implement CRUD for admin types ([7637ed56](https://github.com/aml-development/ozp-center/commit/7637ed56a8a2ab57a38f31829bc9900896028243))    
* **quickview admin**
  *  render correctly when refreshing page with the quickview open. ([6d3a42f6](https://github.com/aml-development/ozp-center/commit/6d3a42f64fbd4313048e8033d398cb811b35822f))
  *  Add admin controls to the quick view. ([b9a60e31](https://github.com/aml-development/ozp-center/commit/b9a60e31ce78e3a5b1989e042cde53b69775b3e5))     
* **stewards**:  filter by ORG_STEWARD role ([60c87f6b](https://github.com/aml-development/ozp-center/commit/60c87f6bd3eed6c2bff9e54cab8bd234b6226c1d))    
* **styled checkbox**:  Adding css for styled checkboxes ([7d9dadb1](https://github.com/aml-development/ozp-center/commit/7d9dadb1c59da041841d72f5002d2f82a1b659b6))    

#### Fixes  
* **changlog**:  OZF-459 fixing review-edited changelog text ([3da43969](https://github.com/aml-development/ozp-center/commit/3da43969fc39806c06c4bb5796f0b9e42833a9ae))    
* **cache**:  refresh config cache after CUD on admin types ([6c4aa4c6](https://github.com/aml-development/ozp-center/commit/6c4aa4c6197eb1dab564dd8a70bacd794527617d))    
* **category**:  deleting a category is causing a 404 error ([cc2e7051](https://github.com/aml-development/ozp-center/commit/cc2e705132022449430552ed7e5eeebaf022328e))   
* **quickview admin**
  *  The admin tab should not be visible by users that are not an admin or owner ([1456a1a0](https://github.com/aml-development/ozp-center/commit/1456a1a00a516828c347a83234bd24d5839b5afd))
  *  correcting some mistakes made during merge ([9bca6c5a](https://github.com/aml-development/ozp-center/commit/9bca6c5a4887f6370706f0c43eaed34b1a57b38b))     
* **changelogs do not update when rejecting**:  Correcting a typo in the ListingAction.js ([8901e25c](https://github.com/aml-development/ozp-center/commit/8901e25c56b74e205a215a0ca285cfc466fa881a))    
* **load error on main page**:  Upgrading tcomb-form library to 0.1.5 ([5b4ce44e](https://github.com/aml-development/ozp-center/commit/5b4ce44eb09e84962efbf102b10aac35939b497a))     

#### Merge Pull Requests  
* Merge branch 'master' of https://github.com/ozone-development/center-ui ([834b9fd6](https://github.com/aml-development/ozp-center/commit/834b9fd66f969c4fd12129f169c1fda0b940624e))           
 