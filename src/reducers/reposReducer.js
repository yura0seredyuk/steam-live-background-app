const SET_COUNT = "SET_COUNT";
const SET_REPOS = "SET_REPOS";

const defaultState = {
  items: [],
  isFetching: true,
  count: 0
};

export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        count: action.payload
      }
    case SET_REPOS:
      return {
        ...state,
        items: action.payload.items
      }
    default: return state;
  }
};

export const setCount = (count) => ({ type:SET_COUNT, payload:count });
export const setRepos = (repos) => ({ type:SET_REPOS, payload:repos });
