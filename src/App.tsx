import { useEffect, useState } from "react";
import { app, db } from "firebaseConf"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import Router from 'components/Router'
import Loader from "components/Loader";

function App() {
  //console.log(db);
  const auth = getAuth(app);
  // auth를 체크하기 전에 (initialize 전)에는 loader를 띄워주는 용도 (새로고침할때마다 로그인 페이지를 보여주기 때문에 추가함)
  const [init, setInit] = useState<boolean>(false);
  // auth의 currentUser가 있으면 authenticated로 변경
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  useEffect(() => {
    // 인증 상태가 변경될떄마다 호출되는 리스너 설정 (로그인, 로그아웃)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // 사용자가 로그인한 상태입니다.
        setIsAuthenticated(true);
      } else {
        // 사용자가 로그아웃한 상태입니다.
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);

  return (
    <>
      {/*<div>
        <Link to="/">Home</Link>
        <Link to="/posts">Post</Link>
        <Link to="/posts/:id">Post Detail</Link>
        <Link to="/posts/new">Post New</Link>
        <Link to="/posts/edit/:id">Post Edit</Link>
        <Link to="/profile">Profile</Link>
      </div>*/}
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}
    </>
  )
}

export default App
