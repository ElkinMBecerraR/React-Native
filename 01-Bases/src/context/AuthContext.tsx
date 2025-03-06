import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

enum AuthStatus {
    'checking' = 'checking',   // Verificando
    'authenticated' = 'authenticated',  // Autenticado
    'notAuthenticated' = 'notAuthenticated' // No autenticado
}

interface User {
    username: string;
    email: string;
}

interface AuthState {
    status: AuthStatus;
    token?: string;
    user?: User;
    isChecking: boolean;
    isAuthenticate: boolean;

    loginInput: (email: string, password: string) => void;
    logout: () => void;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [status, setStatus] = useState(AuthStatus.checking);
    const [user, setUser] = useState<User>();

    useEffect(() => {
        setTimeout(() => {
            setStatus(AuthStatus.notAuthenticated)
        }, 1500);
    }, []);

    const loginInput = (email: string, password: string) => {
        setUser({
            username: 'Elkin',
            email: email
        });

        setStatus(AuthStatus.authenticated);
    }

    const logout = () => {
        setStatus(AuthStatus.notAuthenticated);
        setUser(undefined);
    }

    return (
        <AuthContext.Provider
            value={{
                status: status,
                user: user,
                isChecking: status === AuthStatus.checking,
                isAuthenticate: status === AuthStatus.authenticated,

                //metodo accion
                loginInput,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}