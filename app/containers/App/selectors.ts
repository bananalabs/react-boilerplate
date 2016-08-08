/**
 * The global state selectors
 */
import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.global;

const getVisibility = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.show
);

const selectLocationState = () => {
  let prevRoutingState;

  return (state) => {
    const routingState = state.route; // or state.route

    if (routingState !== prevRoutingState) {
      prevRoutingState = routingState;
    }

    return prevRoutingState;
  };
};

export {
  getVisibility,
  selectLocationState,
};
