export const GET_ALL_PLAYERS_FOR_USER = ``;
export const GET_PLAYER_BY_ID = `
query GetPlayerById($playerId: ID!) {
    getPlayers(id: $playerId) {
      usersPlayersId
      id
      name
    }
    getStats(id: $playerId) {
      highScore
      gamesWon
      gamesLost
      winPercent
    }
  }
  `;
