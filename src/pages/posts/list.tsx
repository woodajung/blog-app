import Footer from "components/Footer";
import Header from "components/Header";
import PostBoxList from "components/PostBoxList";

export default function PostList() {
    return (
        <>
            <Header />
            <PostBoxList hasNavigation={false}/>
            <Footer />
        </>
    )
}