System.register(['./utils/asyncInjectors'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var asyncInjectors_1;
    var errorLoading, loadModule;
    function createRoutes(store) {
        // create reusable async injectors using getHooks factory
        var injectReducer = asyncInjectors_1.getAsyncInjectors(store).injectReducer;
        return [
            {
                path: '/',
                name: 'app',
                getComponent: function (nextState, cb) {
                    var importModules = Promise.all([
                        System.import('containers/App/reducer'),
                        System.import('containers/App/App'),
                    ]);
                    var renderRoute = loadModule(cb);
                    importModules.then(function (_a) {
                        var reducer = _a[0], component = _a[1];
                        injectReducer('ui', reducer.default);
                        renderRoute(component);
                    });
                    importModules.catch(errorLoading);
                }
            },
        ];
    }
    exports_1("default", createRoutes);
    return {
        setters:[
            function (asyncInjectors_1_1) {
                asyncInjectors_1 = asyncInjectors_1_1;
            }],
        execute: function() {
            errorLoading = function (err) {
                console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
            };
            loadModule = function (cb) { return function (componentModule) {
                cb(null, componentModule.default);
            }; };
        }
    }
});
