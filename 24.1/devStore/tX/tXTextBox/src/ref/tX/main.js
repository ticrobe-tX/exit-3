import tX from '../../../../ref/tX.24.1.5.dev.min.js';
export default class comp { }

(async () => {

    //#region add the config entries here.  Please see the sample entry provided below
    comp.config = class {
        static deleteThis = 'delete this config entry.  not for production.  please use the config entries as per the development.';
        static tXCenterDiv = 'tXCenterDiv';
        static tXCenterContent = 'tXCenterContent';
        static tXFloatingLabel = 'tXFloatingLabel';
        static tXFloatingLabelEl = 'tXFloatingLabelEl';
        static tXFloatingLabelInput = 'tXFloatingLabel input';
        static tXFloatingLabelLabel = 'tXFloatingLabel label';
        static tXHelperText = 'tXHelperText';
        static tXFloatingLabelClick = `tXFloatingLabel input:focus+label, .tXFloatingLabel input:not(:placeholder-shown)+label`;
        static tXTextBox = 'tXTextBox';
    }
    //#endregion add the config entries here.  Please see the sample entry provided below

    //#region add the messages here.  Please see the sample entry provided below
    comp.messages = class {
        static deleteThis = 'delete this message.  not for production.  please use the messages as per the development.';
    }

    //#endregion add the messages here.  Please see the sample entry provided below

    comp.tXTextBox = class {

        //#region mobile
        #postMobileAsync = async (loginEl) => {
            let loginElId = loginEl === document.body ? 'body' : loginEl.id;
            return await new tX.el().postAsync(loginElId, {
                'elementType': 'h3'
                , 'elementId': `${loginElId}-root`
                , 'text': 'Your mobile login goes here'
                , 'classList': [], 'style': {}
            });
        }
        //#endregion mobile

        //#region tablet
        #postTabletAsync = async (loginEl) => {
            let loginElId = loginEl === document.body ? 'body' : loginEl.id;
            return await new tX.el().postAsync(loginElId, {
                'elementType': 'h3'
                , 'elementId': `${loginElId}-root`
                , 'text': 'Your tablet login goes here'
                , 'classList': [], 'style': {}
            });
        }
        //#endregion tablet

        //#region desktop
        #postDesktopCSSAsync = async (id) => {
            let css = ''
                + `.${comp.config.tXFloatingLabel} { position: relative; }`
                + `.${comp.config.tXFloatingLabelInput} { padding: 8px 12px; font-size: 16px; border-bottom: 1px solid #ccc; border-top: 0px; border-right: 0px; border-left: 0px; border-radius: 4px; }`
                + `.${comp.config.tXFloatingLabelLabel} { position: absolute; top: 50%; left: 12px; transform: translateY(-50%); color: #aaa; font-size: 16px; transition: 0.2s ease all; pointer-events: none; }`
                + `.${comp.config.tXFloatingLabelClick} { font-size: 12px; color: #007BFF; }`
                + `.${comp.config.tXHelperText} { font-size: 10px; color: #333435; padding-left: 10px; }`
                + '.tXCenterDiv { position: relative; height: 50px; weight: 50px; }'
                + '.tXCenterContent { position: absolute; margin: 0; top: 50%; left: 50%; transform: translate(-50%, -50%); }'
                + 'input:focus { outline: none; border: none; }'
                + '.tXTextBox {  }'
                ;
            await tX.css.postCSSAsync(id, css);
        }
        #postDesktopTextBoxAsync = async (tXTextBoxRootEl) => {
            // post desktop screen here            
            await new tX.el().postAsync(tXTextBoxRootEl.id, {
                'elementType': 'input'
                , 'type': 'text'
                , 'elementId': `${tXTextBoxRootEl.id}-inp`
                , 'classList': [], 'style': { 'height': '40px' }
            }).then(async el => {
                el.addEventListener('focus', async (e) => {
                    let flEl = await new tX.el().getClosestElAsync(e.target, comp.config.tXFloatingLabel);
                    let flLabelEl = (await new tX.el().getAsync(flEl, comp.config.tXFloatingLabelEl))[0];
                    flLabelEl.style.top = '15%';
                });
                await new tX.el().postAsync(tXTextBoxRootEl.id, {
                    'elementType': 'label'
                    , 'for': `${tXTextBoxRootEl.id}-inp`
                    , 'text': 'user name'
                    , 'elementId': `${tXTextBoxRootEl.id}-lbl`
                    , 'classList': [comp.config.tXFloatingLabelEl], 'style': {}
                }).then(async el => { });
            });
        }
        #postDesktopAsync = async (tbConfig) => {
            // get the textBoxEl parent id
            let textBoxElId = tbConfig.tbParentEl === document.body ? 'body' : tbConfig.tbParentEl.id;

            // post your desktop css here
            await this.#postDesktopCSSAsync(`${textBoxElId}-tXTextBox-desktop-css`);
            
            return await new tX.el().postAsync(textBoxElId, {
                'elementType': 'div'
                , 'elementId': `${textBoxElId}-tb`
                , 'classList': [], 'style': { 'display': 'flex', 'padding': '10px' }
            }).then(async tbEl => {
                await new tX.el().postAsync(tbEl.id, {
                    'elementType': 'div'
                    , 'elementId': `${tbEl.id}-icons`
                    , 'classList': [], 'style': {}
                }).then(async tbIconsEl => {
                    await new tX.el().postAsync(tbIconsEl.id, {
                        'elementType': 'div'
                        , 'elementId': `${tbIconsEl.id}-div1`
                        , 'classList': [], 'style': { 'padding': '5px', 'background': '#dcd5d5' }
                    }).then(async tbIconDiv1El => {
                        await new tX.el().postAsync(tbIconDiv1El.id, {
                            'elementType': 'span'
                            , 'elementId': `${tbIconDiv1El.id}-icon`
                            , 'text': 'person'
                            , 'classList': ['material-icons'], 'style': { 'color': 'blue' }
                        });
                    });
                    await new tX.el().postAsync(tbIconsEl.id, {
                        'elementType': 'div'
                        , 'elementId': `${tbIconsEl.id}-div2`
                        , 'classList': [], 'style': { 'padding': '5px', 'background': '#dcd5d5' }
                    }).then(async tbIconDiv2El => {
                        await new tX.el().postAsync(tbIconDiv2El.id, {
                            'elementType': 'span'
                            , 'elementId': `${tbIconDiv2El.id}-icon`
                            , 'text': 'cancel'
                            , 'classList': ['material-icons'], 'style': { 'color': 'red', 'font-weight': 'bold' }
                        });
                    });
                });
                await new tX.el().postAsync(tbEl.id, {
                    'elementType': 'div'
                    , 'elementId': `${tbEl.id}-form`
                    , 'classList': [], 'style': {}
                }).then(async tbFormEl => {
                    await new tX.el().postAsync(tbFormEl.id, {
                        'elementType': 'div'
                        , 'elementId': `${tbFormEl.id}-tb-root`
                        , 'classList': [comp.config.tXFloatingLabel], 'style': {}
                    }).then(async tXTextBoxRootEl => { await this.#postDesktopTextBoxAsync(tXTextBoxRootEl); });
                    await new tX.el().postAsync(tbFormEl.id, {
                        'elementType': 'label'
                        , 'text': 'test helper text'
                        , 'elementId': `${tbFormEl.id}-help`
                        , 'classList': [comp.config.tXHelperText], 'style': {}
                    }).then(async el => { });
                });                
            });
        }
        #postDesktopAsync1 = async (textBoxEl) => {
            // get the textBoxEl parent id
            let textBoxElId = textBoxEl === document.body ? 'body' : textBoxEl.id;

            // post your desktop css here
            await this.#postDesktopCSSAsync(`${textBoxElId}-tXTextBox-desktop-css`);
            return await new tX.el().postAsync(textBoxElId, {
                'elementType': 'div'
                , 'elementId': `${textBoxElId}-tb`
                , 'classList': [], 'style': { 'display': 'flex', 'padding': '10px' }
            }).then(async tbEl => {
                await new tX.el().postAsync(tbEl.id, {
                    'elementType': 'div'
                    , 'elementId': `${tbEl.id}-icon-div`
                    , 'classList': [comp.config.tXCenterDiv], 'style': { 'height': '65px', 'width': '40px', 'background': '#d3cdcd' }
                }).then(async iconEl => {
                    await new tX.el().postAsync(iconEl.id, {
                        'elementType': 'div'
                        , 'elementId': `${iconEl.id}-icons`
                        , 'classList': [comp.config.tXCenterDiv], 'style': {}
                    }).then(async iconsEl => {
                        await new tX.el().postAsync(iconsEl.id, {
                            'elementType': 'span'
                            , 'elementId': `${iconsEl.id}-icon1`
                            , 'text': 'person'
                            , 'classList': ['material-icons', comp.config.tXCenterContent], 'style': { 'color': 'blue' }
                        }).then(async el => { });
                        await new tX.el().postAsync(iconsEl.id, {
                            'elementType': 'span'
                            , 'elementId': `${iconsEl.id}-icon2`
                            , 'text': 'menu'
                            , 'classList': ['material-icons', comp.config.tXCenterContent], 'style': { 'color': 'blue' }
                        }).then(async el => { });
                    });
                });
                await new tX.el().postAsync(tbEl.id, {
                    'elementType': 'form'
                    , 'elementId': `${tbEl.id}-form`
                    , 'classList': [comp.config.tXTextBox], 'style': { 'background': '#eee5e5' }
                }).then(async formEl => {
                    await new tX.el().postAsync(formEl.id, {
                        'elementType': 'div'
                        , 'elementId': `${formEl.id}-tb-root`
                        , 'classList': [comp.config.tXFloatingLabel], 'style': {}
                    }).then(async tXTextBoxRootEl => { await this.#postDesktopTextBoxAsync(tXTextBoxRootEl); });
                    await new tX.el().postAsync(formEl.id, {
                        'elementType': 'label'
                        , 'text': 'test helper text'
                        , 'elementId': `${formEl.id}-help`
                        , 'classList': [comp.config.tXHelperText], 'style': {}
                    }).then(async el => { });
                });
            });
        }
        //#endregion desktop

        //#region component crud
        postAsync = async (tbConfig) => {
            await tX.env.postAsync();
            await tX.css.postAsync();
            let deviceType = await tX.device.getAsync();
            if (deviceType === tX.config.mobile) {
                return await this.#postMobileAsync(tbConfig);
            }
            if (deviceType === tX.config.tablet) {
                return await this.#postTabletAsync(tbConfig);
            }
            if (deviceType === tX.config.desktop) {
                return await this.#postDesktopAsync(tbConfig);
            }
        }
        //#endregion component crud
    }
    return await new comp.tXTextBox().postAsync({
        tbParentEl: document.body
        , tbId: 'tbUserName'
    }).then(async compEl => { });
})();