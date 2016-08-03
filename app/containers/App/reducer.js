System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function globalReducer(state, action) {
        if (state === void 0) { state = {}; }
        switch (action.type) {
            default:
                return state;
        }
    }
    return {
        setters:[],
        execute: function() {
            exports_1("default",globalReducer);
        }
    }
});
