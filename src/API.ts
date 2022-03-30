/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUsersInput = {
  id?: string | null,
  name: string,
};

export type ModelUsersConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelUsersConditionInput | null > | null,
  or?: Array< ModelUsersConditionInput | null > | null,
  not?: ModelUsersConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Users = {
  __typename: "Users",
  id: string,
  name: string,
  players?: ModelPlayersConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPlayersConnection = {
  __typename: "ModelPlayersConnection",
  items:  Array<Players | null >,
  nextToken?: string | null,
};

export type Players = {
  __typename: "Players",
  id: string,
  name: string,
  user: Users,
  stats?: ModelStatsConnection | null,
  createdAt: string,
  updatedAt: string,
  usersPlayersId?: string | null,
};

export type ModelStatsConnection = {
  __typename: "ModelStatsConnection",
  items:  Array<Stats | null >,
  nextToken?: string | null,
};

export type Stats = {
  __typename: "Stats",
  id: string,
  player: Players,
  gamesWon?: number | null,
  gamesLost?: number | null,
  winPercent?: number | null,
  highScore?: number | null,
  createdAt: string,
  updatedAt: string,
  playersStatsId?: string | null,
};

export type UpdateUsersInput = {
  id: string,
  name?: string | null,
};

export type DeleteUsersInput = {
  id: string,
};

export type CreatePlayersInput = {
  id?: string | null,
  name: string,
  usersPlayersId?: string | null,
};

export type ModelPlayersConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelPlayersConditionInput | null > | null,
  or?: Array< ModelPlayersConditionInput | null > | null,
  not?: ModelPlayersConditionInput | null,
  usersPlayersId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePlayersInput = {
  id: string,
  name?: string | null,
  usersPlayersId?: string | null,
};

export type DeletePlayersInput = {
  id: string,
};

export type CreateStatsInput = {
  id?: string | null,
  gamesWon?: number | null,
  gamesLost?: number | null,
  winPercent?: number | null,
  highScore?: number | null,
  playersStatsId?: string | null,
};

export type ModelStatsConditionInput = {
  gamesWon?: ModelIntInput | null,
  gamesLost?: ModelIntInput | null,
  winPercent?: ModelIntInput | null,
  highScore?: ModelIntInput | null,
  and?: Array< ModelStatsConditionInput | null > | null,
  or?: Array< ModelStatsConditionInput | null > | null,
  not?: ModelStatsConditionInput | null,
  playersStatsId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateStatsInput = {
  id: string,
  gamesWon?: number | null,
  gamesLost?: number | null,
  winPercent?: number | null,
  highScore?: number | null,
  playersStatsId?: string | null,
};

export type DeleteStatsInput = {
  id: string,
};

export type ModelUsersFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUsersFilterInput | null > | null,
  or?: Array< ModelUsersFilterInput | null > | null,
  not?: ModelUsersFilterInput | null,
};

export type ModelUsersConnection = {
  __typename: "ModelUsersConnection",
  items:  Array<Users | null >,
  nextToken?: string | null,
};

export type ModelPlayersFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelPlayersFilterInput | null > | null,
  or?: Array< ModelPlayersFilterInput | null > | null,
  not?: ModelPlayersFilterInput | null,
  usersPlayersId?: ModelIDInput | null,
};

export type ModelStatsFilterInput = {
  id?: ModelIDInput | null,
  gamesWon?: ModelIntInput | null,
  gamesLost?: ModelIntInput | null,
  winPercent?: ModelIntInput | null,
  highScore?: ModelIntInput | null,
  and?: Array< ModelStatsFilterInput | null > | null,
  or?: Array< ModelStatsFilterInput | null > | null,
  not?: ModelStatsFilterInput | null,
  playersStatsId?: ModelIDInput | null,
};

export type CreateUsersMutationVariables = {
  input: CreateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type CreateUsersMutation = {
  createUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayersConnection",
      items:  Array< {
        __typename: "Players",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        usersPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUsersMutationVariables = {
  input: UpdateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type UpdateUsersMutation = {
  updateUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayersConnection",
      items:  Array< {
        __typename: "Players",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        usersPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUsersMutationVariables = {
  input: DeleteUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type DeleteUsersMutation = {
  deleteUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayersConnection",
      items:  Array< {
        __typename: "Players",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        usersPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlayersMutationVariables = {
  input: CreatePlayersInput,
  condition?: ModelPlayersConditionInput | null,
};

export type CreatePlayersMutation = {
  createPlayers?:  {
    __typename: "Players",
    id: string,
    name: string,
    user:  {
      __typename: "Users",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    stats?:  {
      __typename: "ModelStatsConnection",
      items:  Array< {
        __typename: "Stats",
        id: string,
        gamesWon?: number | null,
        gamesLost?: number | null,
        winPercent?: number | null,
        highScore?: number | null,
        createdAt: string,
        updatedAt: string,
        playersStatsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    usersPlayersId?: string | null,
  } | null,
};

export type UpdatePlayersMutationVariables = {
  input: UpdatePlayersInput,
  condition?: ModelPlayersConditionInput | null,
};

export type UpdatePlayersMutation = {
  updatePlayers?:  {
    __typename: "Players",
    id: string,
    name: string,
    user:  {
      __typename: "Users",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    stats?:  {
      __typename: "ModelStatsConnection",
      items:  Array< {
        __typename: "Stats",
        id: string,
        gamesWon?: number | null,
        gamesLost?: number | null,
        winPercent?: number | null,
        highScore?: number | null,
        createdAt: string,
        updatedAt: string,
        playersStatsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    usersPlayersId?: string | null,
  } | null,
};

export type DeletePlayersMutationVariables = {
  input: DeletePlayersInput,
  condition?: ModelPlayersConditionInput | null,
};

export type DeletePlayersMutation = {
  deletePlayers?:  {
    __typename: "Players",
    id: string,
    name: string,
    user:  {
      __typename: "Users",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    stats?:  {
      __typename: "ModelStatsConnection",
      items:  Array< {
        __typename: "Stats",
        id: string,
        gamesWon?: number | null,
        gamesLost?: number | null,
        winPercent?: number | null,
        highScore?: number | null,
        createdAt: string,
        updatedAt: string,
        playersStatsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    usersPlayersId?: string | null,
  } | null,
};

export type CreateStatsMutationVariables = {
  input: CreateStatsInput,
  condition?: ModelStatsConditionInput | null,
};

export type CreateStatsMutation = {
  createStats?:  {
    __typename: "Stats",
    id: string,
    player:  {
      __typename: "Players",
      id: string,
      name: string,
      user:  {
        __typename: "Users",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      stats?:  {
        __typename: "ModelStatsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      usersPlayersId?: string | null,
    },
    gamesWon?: number | null,
    gamesLost?: number | null,
    winPercent?: number | null,
    highScore?: number | null,
    createdAt: string,
    updatedAt: string,
    playersStatsId?: string | null,
  } | null,
};

export type UpdateStatsMutationVariables = {
  input: UpdateStatsInput,
  condition?: ModelStatsConditionInput | null,
};

export type UpdateStatsMutation = {
  updateStats?:  {
    __typename: "Stats",
    id: string,
    player:  {
      __typename: "Players",
      id: string,
      name: string,
      user:  {
        __typename: "Users",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      stats?:  {
        __typename: "ModelStatsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      usersPlayersId?: string | null,
    },
    gamesWon?: number | null,
    gamesLost?: number | null,
    winPercent?: number | null,
    highScore?: number | null,
    createdAt: string,
    updatedAt: string,
    playersStatsId?: string | null,
  } | null,
};

export type DeleteStatsMutationVariables = {
  input: DeleteStatsInput,
  condition?: ModelStatsConditionInput | null,
};

export type DeleteStatsMutation = {
  deleteStats?:  {
    __typename: "Stats",
    id: string,
    player:  {
      __typename: "Players",
      id: string,
      name: string,
      user:  {
        __typename: "Users",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      stats?:  {
        __typename: "ModelStatsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      usersPlayersId?: string | null,
    },
    gamesWon?: number | null,
    gamesLost?: number | null,
    winPercent?: number | null,
    highScore?: number | null,
    createdAt: string,
    updatedAt: string,
    playersStatsId?: string | null,
  } | null,
};

export type GetUsersQueryVariables = {
  id: string,
};

export type GetUsersQuery = {
  getUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayersConnection",
      items:  Array< {
        __typename: "Players",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        usersPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlayersQueryVariables = {
  id: string,
};

export type GetPlayersQuery = {
  getPlayers?:  {
    __typename: "Players",
    id: string,
    name: string,
    user:  {
      __typename: "Users",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    stats?:  {
      __typename: "ModelStatsConnection",
      items:  Array< {
        __typename: "Stats",
        id: string,
        gamesWon?: number | null,
        gamesLost?: number | null,
        winPercent?: number | null,
        highScore?: number | null,
        createdAt: string,
        updatedAt: string,
        playersStatsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    usersPlayersId?: string | null,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: ModelPlayersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers?:  {
    __typename: "ModelPlayersConnection",
    items:  Array< {
      __typename: "Players",
      id: string,
      name: string,
      user:  {
        __typename: "Users",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      stats?:  {
        __typename: "ModelStatsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      usersPlayersId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStatsQueryVariables = {
  id: string,
};

export type GetStatsQuery = {
  getStats?:  {
    __typename: "Stats",
    id: string,
    player:  {
      __typename: "Players",
      id: string,
      name: string,
      user:  {
        __typename: "Users",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      stats?:  {
        __typename: "ModelStatsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      usersPlayersId?: string | null,
    },
    gamesWon?: number | null,
    gamesLost?: number | null,
    winPercent?: number | null,
    highScore?: number | null,
    createdAt: string,
    updatedAt: string,
    playersStatsId?: string | null,
  } | null,
};

export type ListStatsQueryVariables = {
  filter?: ModelStatsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStatsQuery = {
  listStats?:  {
    __typename: "ModelStatsConnection",
    items:  Array< {
      __typename: "Stats",
      id: string,
      player:  {
        __typename: "Players",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        usersPlayersId?: string | null,
      },
      gamesWon?: number | null,
      gamesLost?: number | null,
      winPercent?: number | null,
      highScore?: number | null,
      createdAt: string,
      updatedAt: string,
      playersStatsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUsersSubscription = {
  onCreateUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayersConnection",
      items:  Array< {
        __typename: "Players",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        usersPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUsersSubscription = {
  onUpdateUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayersConnection",
      items:  Array< {
        __typename: "Players",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        usersPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUsersSubscription = {
  onDeleteUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayersConnection",
      items:  Array< {
        __typename: "Players",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        usersPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlayersSubscription = {
  onCreatePlayers?:  {
    __typename: "Players",
    id: string,
    name: string,
    user:  {
      __typename: "Users",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    stats?:  {
      __typename: "ModelStatsConnection",
      items:  Array< {
        __typename: "Stats",
        id: string,
        gamesWon?: number | null,
        gamesLost?: number | null,
        winPercent?: number | null,
        highScore?: number | null,
        createdAt: string,
        updatedAt: string,
        playersStatsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    usersPlayersId?: string | null,
  } | null,
};

export type OnUpdatePlayersSubscription = {
  onUpdatePlayers?:  {
    __typename: "Players",
    id: string,
    name: string,
    user:  {
      __typename: "Users",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    stats?:  {
      __typename: "ModelStatsConnection",
      items:  Array< {
        __typename: "Stats",
        id: string,
        gamesWon?: number | null,
        gamesLost?: number | null,
        winPercent?: number | null,
        highScore?: number | null,
        createdAt: string,
        updatedAt: string,
        playersStatsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    usersPlayersId?: string | null,
  } | null,
};

export type OnDeletePlayersSubscription = {
  onDeletePlayers?:  {
    __typename: "Players",
    id: string,
    name: string,
    user:  {
      __typename: "Users",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    stats?:  {
      __typename: "ModelStatsConnection",
      items:  Array< {
        __typename: "Stats",
        id: string,
        gamesWon?: number | null,
        gamesLost?: number | null,
        winPercent?: number | null,
        highScore?: number | null,
        createdAt: string,
        updatedAt: string,
        playersStatsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    usersPlayersId?: string | null,
  } | null,
};

export type OnCreateStatsSubscription = {
  onCreateStats?:  {
    __typename: "Stats",
    id: string,
    player:  {
      __typename: "Players",
      id: string,
      name: string,
      user:  {
        __typename: "Users",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      stats?:  {
        __typename: "ModelStatsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      usersPlayersId?: string | null,
    },
    gamesWon?: number | null,
    gamesLost?: number | null,
    winPercent?: number | null,
    highScore?: number | null,
    createdAt: string,
    updatedAt: string,
    playersStatsId?: string | null,
  } | null,
};

export type OnUpdateStatsSubscription = {
  onUpdateStats?:  {
    __typename: "Stats",
    id: string,
    player:  {
      __typename: "Players",
      id: string,
      name: string,
      user:  {
        __typename: "Users",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      stats?:  {
        __typename: "ModelStatsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      usersPlayersId?: string | null,
    },
    gamesWon?: number | null,
    gamesLost?: number | null,
    winPercent?: number | null,
    highScore?: number | null,
    createdAt: string,
    updatedAt: string,
    playersStatsId?: string | null,
  } | null,
};

export type OnDeleteStatsSubscription = {
  onDeleteStats?:  {
    __typename: "Stats",
    id: string,
    player:  {
      __typename: "Players",
      id: string,
      name: string,
      user:  {
        __typename: "Users",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      stats?:  {
        __typename: "ModelStatsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      usersPlayersId?: string | null,
    },
    gamesWon?: number | null,
    gamesLost?: number | null,
    winPercent?: number | null,
    highScore?: number | null,
    createdAt: string,
    updatedAt: string,
    playersStatsId?: string | null,
  } | null,
};
