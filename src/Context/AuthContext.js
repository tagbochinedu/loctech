import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase";

const AuthContext = createContext();

export function UseAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe
  }, []);
  const value = { currentUser, signUp };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
