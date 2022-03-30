/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlayers = /* GraphQL */ `
  query GetPlayers($id: ID!) {
    getPlayers(id: $id) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getStats = /* GraphQL */ `
  query GetStats($id: ID!) {
    getStats(id: $id) {
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
export const listStats = /* GraphQL */ `
  query ListStats(
    $filter: ModelStatsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        player {
          id
          name
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
      nextToken
    }
  }
`;
