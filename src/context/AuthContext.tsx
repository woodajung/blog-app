import { ReactNode, createContext, useEffect, useState } from "react";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "firebaseConf";

 // Context API = React 상태 관리 방법
 // 사용자 정보 관리
interface AuthProps {
    children: ReactNode;
  }
  // Context 생성
  const AuthContext = createContext({
    user: null as User | null,
  });
  
  export const AuthContextProvider = ({ children }: AuthProps) => {
    const auth = getAuth(app);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
  
    useEffect(() => {
        // 인증 상태가 변경될떄마다 호출되는 리스너 설정 (로그인, 로그아웃)
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(user);
        } else {
          setCurrentUser(user);
        }
      });
    }, [auth]);

    // Provider 를 통해 Context 를 구독하는 컴포넌트들에게 변화를 알림
    // value 값을 children 에게 넘겨줌
    return (
      <AuthContext.Provider value={{ user: currentUser }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthContext;