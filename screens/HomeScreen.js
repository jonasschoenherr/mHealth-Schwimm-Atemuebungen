import { defaultScreenContent } from "../modules/defaults";


const HomeScreen = ({ navigation, route }) => {
    return (
        <defaultScreenContent navigation={navigate} route={route} />
    );
}

export default HomeScreen;
