import defaultStyle from '../styles/defaultStyle';


import { Button, Text, View } from 'react-native';


const DefaultScreenContent = ({ navigation, route }) => {
    const style = defaultStyle;

    return (
        <View>
            <Text style={style.heading}>No content available.</Text>
            <Text style={style.description}>
                This part of the app has not been implemented yet.
            </Text>
            <Button
                title="Return to last app screen"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}


export default DefaultScreenContent;
