// action types
const INIT_ARTICLES = 'INIT_ARTICLES';

// reducer
export default function (state, action) {
  if (!state) {
    state = { articles: [] }
  }
  switch (action.type) {
    case INIT_ARTICLES:
      return {
        articles : [...action.articles]
      };
    default:
      return state;
  }
}

// action creators
export const initArticles = (articles) => {
  return { type: INIT_ARTICLES, articles }
}
