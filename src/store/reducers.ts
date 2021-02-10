const initialState = {
  loading: false,
  game: [],
  people: {
    currentPage: 0,
    hasNext: true,
    data: [],
  },
  starships: {
    currentPage: 0,
    hasNext: true,
    data: [],
  },
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_PEOPLE":
      return { ...state, loading: true };
    case "PEOPLE_RECEIVED":
      return {
        ...state,
        loading: false,
        people: {
          currentPage: action.payload.currentPage,
          hasNext: action.payload.hasNext,
          data: [...state.people.data, ...action.payload.data],
        },
      };
    case "PEOPLE_FULLY_RECEIVED":
      return {
        ...state,
        loading: false,
      };

    case "GET_STARSHIPS":
      return { ...state, loading: true };
    case "STARSHIPS_RECEIVED":
      return {
        ...state,
        loading: false,
        starships: {
          currentPage: action.payload.currentPage,
          hasNext: action.payload.hasNext,
          data: [...state.starships.data, ...action.payload.data],
        },
      };
    case "STARSHIPS_FULLY_RECEIVED":
      return {
        ...state,
        loading: false,
      };

    case "PLAY_GAME":
      return { ...state, loading: true };

    case "GAME_PLAYED":
      return {
        ...state,
        game: [...state.game, action.payload],
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
