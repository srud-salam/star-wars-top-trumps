export const getPeople = () => ({
  type: "GET_PEOPLE",
});

export const getStarships = () => ({
  type: "GET_STARSHIPS",
});

export const playGame = (settings: any) => ({
  type: "PLAY_GAME",
  settings,
});
