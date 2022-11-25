export const reducerCreator = (reducerMap, initialState) => (state = initialState, action) => {
    const reducer = reducerMap[action.type];
    if (reducer) return reducer(state, action);
    return state;
}
