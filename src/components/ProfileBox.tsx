import AuthContext from "context/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { app } from "firebaseConf"
import { useContext } from "react";
import { toast } from "react-toastify";

const onSignOut = async () => {
    try {
        const auth = getAuth(app);
        await signOut(auth);
        toast.success("로그아웃 되었습니다.");
    } catch (e: any) {
        console.log(e);
        toast.error(e?.code);
    }
};

export default function ProfileBox() {
    const { user } = useContext(AuthContext); // 사용자 정보 가져옴

    return (
        <div className="profile__box">
        <div className="flex__box-lg">
            <div className="profile__image" />
            <div>
                {/* <div className="profile__email">{auth?.currentUser?.email}</div> */}
                <div className="profile__email">{user?.email}</div>
                <div className="profile__name">{user?.displayName || "사용자"}</div>
            </div>
        </div>
        <div role="presentation" className="profile__logout" onClick={onSignOut}>
            로그아웃
        </div>
        </div>
    );
}