import Banner from "../HomepageElement/Banner";
import CategoryList from "../HomepageElement/CategoryList";
import FeaturedJobs from "../HomepageElement/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;