import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import React, {createContext, useState, useContext, useEffect} from 'react';

export type AuthUser = FirebaseAuthTypes.User | null;

const AuthContext = createContext<AuthUser>(null);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<AuthUser>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);
    return subscriber;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthUser => {
  const context = useContext(AuthContext);
  return context;
};
