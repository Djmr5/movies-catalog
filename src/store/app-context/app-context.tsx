import { User, createUserWithEmailAndPassword, getIdToken, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { AppContextProps, AppState, Tokens } from "./types";
import { auth } from "../../firebase";
import httpInstance from "../../services/httpInstance";

export const AppContext = createContext<AppState | undefined>(undefined);

export const AppContextProvider = ({ children }: AppContextProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingContext, setLoadingContext] = useState<boolean>(true);
  const [tokens, setTokens] = useState<Tokens | undefined>(undefined);

  const setTokensState = (accessToken: string, refreshToken: string) => {
    setTokens({ accessToken, refreshToken });
  }

  const signUp = async (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const login = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = async () => {
    setUser(null);
    setTokens(undefined);
    localStorage.removeItem("tokens");
    localStorage.removeItem("user");
    return signOut(auth);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadingContext(false);
      if (currentUser) {
        httpInstance.interceptors.request.use( async (config) => {
          const newConfig = { ...config };
          const token = await getIdToken(currentUser);
          console.log(token);
          // TODO: Add the token from moviesDB
          //newConfig.headers.Authorization = `Bearer ${token}`;
          return newConfig;
        }, (error) => {
          return Promise.reject(error);
        });
      }
    });
  });

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        tokens,
        setTokens: setTokensState,
        logOut,
        signUp,
        login,
        loadingContext,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
