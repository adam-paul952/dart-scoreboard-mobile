/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
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
export const createPlayers = /* GraphQL */ `
  mutation CreatePlayers(
    $input: CreatePlayersInput!
    $condition: ModelPlayersConditionInput
  ) {
    createPlayers(input: $input, condition: $condition) {
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
export const updatePlayers = /* GraphQL */ `
  mutation UpdatePlayers(
    $input: UpdatePlayersInput!
    $condition: ModelPlayersConditionInput
  ) {
    updatePlayers(input: $input, condition: $condition) {
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
export const deletePlayers = /* GraphQL */ `
  mutation DeletePlayers(
    $input: DeletePlayersInput!
    $condition: ModelPlayersConditionInput
  ) {
    deletePlayers(input: $input, condition: $condition) {
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
export const createStats = /* GraphQL */ `
  mutation CreateStats(
    $input: CreateStatsInput!
    $condition: ModelStatsConditionInput
  ) {
    createStats(input: $input, condition: $condition) {
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
export const updateStats = /* GraphQL */ `
  mutation UpdateStats(
    $input: UpdateStatsInput!
    $condition: ModelStatsConditionInput
  ) {
    updateStats(input: $input, condition: $condition) {
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
export const deleteStats = /* GraphQL */ `
  mutation DeleteStats(
    $input: DeleteStatsInput!
    $condition: ModelStatsConditionInput
  ) {
    deleteStats(input: $input, condition: $condition) {
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
