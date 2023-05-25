import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "DummyName",
        email: "DummyName@gmail.com"
    }
})

UserContext.displayName = "MyUserContext"
export default UserContext;