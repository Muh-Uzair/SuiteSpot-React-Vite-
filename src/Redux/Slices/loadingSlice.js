const loadingInitialState = {
  isLoading: false,
};

export default function loadingReducer(state = loadingInitialState, action) {
  switch (action.type) {
    case "isLoading/true":
      return { ...state, isLoading: true };

    case "isLoading/false":
      return { ...state, isLoading: false };

    default:
      return state;
  }
}
export function isLoading_true() {
  return { type: "isLoading/true" };
}
