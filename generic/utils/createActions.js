export default {
  onlyType: (actionType) => ({type: actionType}),
  withParams: (actionType, {...payload}) => {
    return {type: actionType, payload: {...payload}};
  },
};
