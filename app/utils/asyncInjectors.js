System.register(['../reducers'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var reducers_1;
    /**
     * Inject an asynchronously loaded reducer
     */
    function injectAsyncReducer(store) {
        return function (name, asyncReducer) {
            store.asyncReducers[name] = asyncReducer; // eslint-disable-line no-param-reassign
            store.replaceReducer(reducers_1["default"](store.asyncReducers));
        };
    }
    exports_1("injectAsyncReducer", injectAsyncReducer);
    /**
     * Inject an asynchronously loaded saga
     */
    function injectAsyncSagas(store) {
        return function (sagas) { return sagas.map(store.runSaga); };
    }
    exports_1("injectAsyncSagas", injectAsyncSagas);
    /**
     * Helper for creating injectors
     */
    function getAsyncInjectors(store) {
        return {
            injectReducer: injectAsyncReducer(store),
            injectSagas: injectAsyncSagas(store)
        };
    }
    exports_1("getAsyncInjectors", getAsyncInjectors);
    return {
        setters:[
            function (reducers_1_1) {
                reducers_1 = reducers_1_1;
            }],
        execute: function() {
        }
    }
});
