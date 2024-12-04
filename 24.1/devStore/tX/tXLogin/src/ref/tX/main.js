import tX from '../../../../ref/tX.24.1.1.dev.min.js';
export default class comp { }

(async () => {
    
    //#region add the config entries here.  Please see the sample entry provided below
    comp.config = class {
        static deleteThis = 'delete this config entry.  not for production.  please use the config entries as per the development.';
    }
    //#endregion add the config entries here.  Please see the sample entry provided below

    //#region add the messages here.  Please see the sample entry provided below
    comp.messages = class {
        static deleteThis = 'delete this message.  not for production.  please use the messages as per the development.';
    }
    
    //#endregion add the messages here.  Please see the sample entry provided below
    comp.tXLogin = class {
    
        //#region mobile
        #postMobileAsync = async() => {
            return await new tX.el().postAsync('body', {
                'elementType': 'h3'
                , 'elementId': 'comp'
                , 'text': 'Your mobile login goes here'
                , 'classList': [], 'style': {}
            });
        }
        //#endregion mobile

        //#region tablet
        #postTabletAsync = async() => {
            return await new tX.el().postAsync('body', {
                'elementType': 'h3'
                , 'elementId': 'comp'
                , 'text': 'Your tablet login goes here'
                , 'classList': [], 'style': {}
            });
        }
        //#endregion tablet

        //#region desktop
        #postDesktopAsync = async() => {
            return await new tX.el().postAsync('body', {
                'elementType': 'h3'
                , 'elementId': 'comp'
                , 'text': 'Your desktop login goes here'
                , 'classList': [], 'style': {}
            });
        }
        //#endregion desktop

        //#region component crud
        postAsync = async() => {
            let deviceType = await tX.device.getAsync();
            if (deviceType === tX.config.mobile) {
               return await this.#postMobileAsync(); 
            }
            if (deviceType === tX.config.tablet) {
                return await this.#postTabletAsync(); 
            }
            if (deviceType === tX.config.desktop) {
                return await this.#postDesktopAsync(); 
            }            
        }
        //#endregion component crud
    }
    return await new comp.tXLogin().postAsync().then(async compEl => {});
})();