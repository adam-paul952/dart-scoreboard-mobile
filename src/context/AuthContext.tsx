import React from "react";

import { IAuthState, IActions, authReducer } from "./authReducer";

interface IAuthContext {
  state: IAuthState;
  dispatch: React.Dispatch<IActions>;
}

const initialState: IAuthState = {
  id: null,
  username: null,
  userToken: null,
  isSignout: false,
  isLoading: true,
};

const AuthStateContext = React.createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<IAuthState, IActions>
  >(authReducer, initialState);

  return (
    <AuthStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthStateContext.Provider>
  );
};

const useAuthState = () => {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuthState };
