import tX from '../../../../ref/tX.24.1.2.dev.min.js';
export default class comp { }

(async () => {

    //#region add the config entries here.  Please see the sample entry provided below
    comp.config = class {
        static deleteThis = 'delete this config entry.  not for production.  please use the config entries as per the development.';
        static tXLoginScreen = 'tXLoginScreen';
        static tXCenterDiv = 'tXCenterDiv';
        static tXCenterContent = 'tXCenterContent';
        static tXScreenMessage = 'tXScreenMessage';
    }
    //#endregion add the config entries here.  Please see the sample entry provided below

    //#region add the messages here.  Please see the sample entry provided below
    comp.messages = class {
        static deleteThis = 'delete this message.  not for production.  please use the messages as per the development.';
    }

    //#endregion add the messages here.  Please see the sample entry provided below
    comp.tXLogin = class {

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
                + '.tXLoginScreen { background: #eeecec; }'
                + '.tXCenterDiv { position: relative; height: 500px; }'
                + '.tXCenterContent { position: absolute; margin: 0; top: 50%; left: 50%; transform: translate(-50%, -50%); }'
                + '.tXScreenMessage { background: #e5dada; padding: 10px; }'
                ;
            await tX.css.postCSSAsync(id, css);
        }
        #postDesktopMessageAsync = async (loginMessageListEl) => {
            // post desktop message here
            await new tX.el().postAsync(loginMessageListEl.id, {
                'elementType': 'div'
                , 'text': 'All the messages here.  But this is message 1, for example.'
                , 'elementId': `${loginMessageListEl.id}-message1`
                , 'classList': [ comp.config.tXScreenMessage ], 'style': {}
            });
        }
        #postDesktopScreenAsync = async (loginScreenEl) => {
            // post desktop screen here
            await new tX.el().postAsync(loginScreenEl.id, {
                'elementType': 'div'
                , 'elementId': `${loginScreenEl.id}-content`
                , 'classList': [comp.config.tXCenterDiv], 'style': {}
            }).then(async tXContentEl => {
                await new tX.el().postAsync(tXContentEl.id, {
                    'elementType': 'div'
                    , 'elementId': `${tXContentEl.id}-content`
                    , 'classList': [comp.config.tXCenterContent], 'style': {}
                }).then(async tXBodyEl => {
                    await new tX.el().postAsync(tXBodyEl.id, {
                        'elementType': 'p'                        
                        , 'elementId': `${tXBodyEl.id}-section`
                        , 'classList': [], 'style': {}
                    }).then(async el => {
                        el.innerHTML = 'Actual login screen goes here.'
                        + '<br>All the elements should be displayed in the center of the screen like this.'
                        + '<br>Please use the <strong>comp.config.tXCenterDiv</strong> & <strong>comp.config.tXCenterContent</strong> css classes to center the elements.';
                    });
                });
            });
        }
        #postDesktopAsync = async (loginEl) => {
            // get the login screen parent id
            let loginElId = loginEl === document.body ? 'body' : loginEl.id;

            // post your desktop css here
            await this.#postDesktopCSSAsync(`${loginElId}-tXLogin-desktop-css`);

            return await new tX.el().postAsync(loginElId, {
                'elementType': 'div'
                , 'elementId': `${loginElId}-login-root`
                , 'classList': [comp.config.tXLoginScreen], 'style': {}
            })
                .then(async loginRootEl => {
                    await new tX.el().postAsync(loginRootEl.id, {
                        'elementType': 'div'
                        , 'elementId': `${loginRootEl.id}-message`
                        , 'classList': [], 'style': {}
                    })
                        .then(async loginMessageListEl => { await this.#postDesktopMessageAsync(loginMessageListEl); });
                    await new tX.el().postAsync(loginRootEl.id, {
                        'elementType': 'div'
                        , 'elementId': `${loginRootEl.id}-screen`
                        , 'classList': [], 'style': {}
                    })
                        .then(async loginScreenEl => { await this.#postDesktopScreenAsync(loginScreenEl); });
                });
        }
        //#endregion desktop

        //#region component crud
        postAsync = async (loginEl) => {
            let deviceType = await tX.device.getAsync();
            if (deviceType === tX.config.mobile) {
                return await this.#postMobileAsync(loginEl);
            }
            if (deviceType === tX.config.tablet) {
                return await this.#postTabletAsync(loginEl);
            }
            if (deviceType === tX.config.desktop) {
                return await this.#postDesktopAsync(loginEl);
            }
        }
        //#endregion component crud
    }
    return await new comp.tXLogin().postAsync(document.body).then(async compEl => { });
})();