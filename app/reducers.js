/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */
System.register(['redux', 'react-router-redux', 'containers/App/reducer'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var redux_1, react_router_redux_1, reducer_1;
    var routeInitialState;
    /**
     * Merge route into the global application state
     */
    function routeReducer(state, action) {
        if (state === void 0) { state = routeInitialState; }
        switch (action.type) {
            /* istanbul ignore next */
            case react_router_redux_1.LOCATION_CHANGE:
                return Object.assign({}, state, {
                    locationBeforeTransitions: action.payload
                });
            default:
                return state;
        }
    }
    /**
     * Creates the main reducer with the asynchronously loaded ones
     */
    function createReducer(asyncReducers) {
        return redux_1.combineReducers(Object.assign({}, asyncReducers, {
            route: routeReducer,
            global: reducer_1["default"]
        }));
    }
    exports_1("default", createReducer);
    return {
        setters:[
            function (redux_1_1) {
                redux_1 = redux_1_1;
            },
            function (react_router_redux_1_1) {
                react_router_redux_1 = react_router_redux_1_1;
            },
            function (reducer_1_1) {
                reducer_1 = reducer_1_1;
            }],
        execute: function() {
            /*
             * routeReducer
             *
             * The reducer merges route location changes into our immutable state.
             * The change is necessitated by moving to react-router-redux@4
             *
             */
            // Initial routing state
            routeInitialState = {
                locationBeforeTransitions: null
            };
        }
    }
});
