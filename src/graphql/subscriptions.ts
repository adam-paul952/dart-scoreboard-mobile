/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
      id
      name
      players {
        items {
          id
          name
          createdAt
          updatedAt
          usersPlayersId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers {
    onUpdateUsers {
      id
      name
      players {
        items {
          id
          name
          createdAt
          updatedAt
          usersPlayersId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers {
    onDeleteUsers {
      id
      name
      players {
        items {
          id
          name
          createdAt
          updatedAt
          usersPlayersId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlayers = /* GraphQL */ `
  subscription OnCreatePlayers {
    onCreatePlayers {
      id
      name
      user {
        id
        name
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      stats {
        items {
          id
          gamesWon
          gamesLost
          winPercent
          highScore
          createdAt
          updatedAt
          playersStatsId
        }
        nextToken
      }
      createdAt
      updatedAt
      usersPlayersId
    }
  }
`;
export const onUpdatePlayers = /* GraphQL */ `
  subscription OnUpdatePlayers {
    onUpdatePlayers {
      id
      name
      user {
        id
        name
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      stats {
        items {
          id
          gamesWon
          gamesLost
          winPercent
          highScore
          createdAt
          updatedAt
          playersStatsId
        }
        nextToken
      }
      createdAt
      updatedAt
      usersPlayersId
    }
  }
`;
export const onDeletePlayers = /* GraphQL */ `
  subscription OnDeletePlayers {
    onDeletePlayers {
      id
      name
      user {
        id
        name
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      stats {
        items {
          id
          gamesWon
          gamesLost
          winPercent
          highScore
          createdAt
          updatedAt
          playersStatsId
        }
        nextToken
      }
      createdAt
      updatedAt
      usersPlayersId
    }
  }
`;
export const onCreateStats = /* GraphQL */ `
  subscription OnCreateStats {
    onCreateStats {
      id
      player {
        id
        name
        user {
          id
          name
          createdAt
          updatedAt
        }
        stats {
          nextToken
        }
        createdAt
        updatedAt
        usersPlayersId
      }
      gamesWon
      gamesLost
      winPercent
      highScore
      createdAt
      updatedAt
      playersStatsId
    }
  }
`;
export const onUpdateStats = /* GraphQL */ `
  subscription OnUpdateStats {
    onUpdateStats {
      id
      player {
        id
        name
        user {
          id
          name
          createdAt
          updatedAt
        }
        stats {
          nextToken
        }
        createdAt
        updatedAt
        usersPlayersId
      }
      gamesWon
      gamesLost
      winPercent
      highScore
      createdAt
      updatedAt
      playersStatsId
    }
  }
`;
export const onDeleteStats = /* GraphQL */ `
  subscription OnDeleteStats {
    onDeleteStats {
      id
      player {
        id
        name
        user {
          id
          name
          createdAt
          updatedAt
        }
        stats {
          nextToken
        }
        createdAt
        updatedAt
        usersPlayersId
      }
      gamesWon
      gamesLost
      winPercent
      highScore
      createdAt
      updatedAt
      playersStatsId
    }
  }
`;
