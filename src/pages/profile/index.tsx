import Footer from "components/Footer";
import Header from "components/Header";
import PostBoxList from "components/PostBoxList";
import ProfileBox from "components/ProfileBox";

export default function Profile() {
    return (
        <>
            <Header />
            <ProfileBox />
            <PostBoxList hasNavigation={false} defaultTab="my"/>
            <Footer />
        </>
    )
}