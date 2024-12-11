import { createContext, useMemo, useState } from "react";

export const LoginContext = createContext([]);

export default function LoginProvider({ children }) {

    const userLogin = useMemo(() => [
        { id: 1, userName: "user", password: "pass" , role:"user" },
        { id: 2, userName: "admin", password: "pass",role:"admin" }
    ], []);

    const [getUserLogin, setUserLogin] = useState(userLogin);

    return (
        <LoginContext.Provider value={[getUserLogin, setUserLogin]}>
            {children}
        </LoginContext.Provider>
    );
}
