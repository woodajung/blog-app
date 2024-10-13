import Carousel from "components/Carousel";
import Footer from "components/Footer";
import Header from "components/Header";
import PostBoxList from "components/PostBoxList";

export default function Home() {
    return (
        <>
            <Header />
            <Carousel />
            <PostBoxList />
            <Footer />
        </>
    )
}