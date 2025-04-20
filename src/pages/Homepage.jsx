import Advertisement from "../components/Advertisement";
import Latestpostshome from "../components/Latestpostshome";
import SimpleSlider from "../components/Simpleslider";



const Homepage = () => {
    return (
        <div>
            <SimpleSlider></SimpleSlider>
            <Advertisement></Advertisement>
            <Latestpostshome></Latestpostshome>
        </div>
    );
};

export default Homepage;