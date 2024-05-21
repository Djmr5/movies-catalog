import { User, UserCredential } from "firebase/auth";

export interface UserObject {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface Tokens {
    accessToken: string;
    refreshToken: string;
}

export type AppState = {
    user: User | null;
    setUser: (user: User) => void;
    // accountType: string;
    // setAccountType: (accountType: string) => void;
    tokens: Tokens | undefined;
    setTokens: (accessToken: string, refreshToken: string) => void;
    logOut: () => Promise<void>;
    signUp: (email: string, password: string) => Promise<UserCredential>;
    login: (email: string, password: string) => Promise<UserCredential>;
    loadingContext: boolean;
}

export type AppContextProps = {
    children: React.ReactNode;
}
