export interface IActions {
  type: string;
  payload?: {
    id: string | null;
    username: string | null;
    userToken: string | null;
  };
}

export interface IAuthState {
  id: string | null;
  username: string | null;
  userToken: string | null;
  isSignout: boolean;
  isLoading: boolean;
}

export const authReducer = (state: IAuthState, action: IActions) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...state,
        id: action.payload!.id,
        username: action.payload!.username,
        userToken: action.payload!.userToken,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...state,
        id: action.payload!.id,
        username: action.payload!.username,
        userToken: action.payload!.userToken,
        isSignout: false,
      };
    case "SIGN_OUT":
      return {
        ...state,
        id: null,
        username: null,
        userToken: null,
        isSignout: true,
      };
    default:
      return state;
  }
};
