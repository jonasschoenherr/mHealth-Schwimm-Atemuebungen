import theme1 from "../styles/theme1";

import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import { Button } from 'react-native';
import { useState } from "react";

import QuestionField from "../elements/QuestionField";

const OnboardingGeneralQuestionsScreen = ({ navigation, route }) => {

    const styles = theme1;

    const [birthday, setBirthday] = useState("");
    const [sex, setSex] = useState("");
    const [weight, setWeight] = useState("");
    const [yearsSwimming, setYearsSwimming] = useState("");
    const [frequency, setFrequency] = useState("");

    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.container}>

            <Button title="Go Back" onPress={() => navigation.goBack()} />

            <Text style={styles.title}>Personalize your{"\n"}training</Text>

            <Text style={styles.subtitle}>
                This information helps us create personalized
                exercises to your level and goals.
                Your details are not shared with us.
            </Text>

            <QuestionField
              label="Date of birth"
              value={birthday}
              onPress={() => setVisible(true)}
            />

            <QuestionField
              label="Sex"
              value={sex}
              onPress={() => {}}
            />

            <QuestionField
              label="Weight"
              value={weight}
              onPress={() => {}}
            />

            <QuestionField
                label="How long swimming?"
                value={yearsSwimming}
                onPress={() => {}}
            />

            <QuestionField
                label="Swim frequency"
                value={frequency}
                onPress={() => {}}
            />

            <View style={{ height: 70 }} />
            <View style={styles.dots}>

                <View style={styles.dot} />
                <View style={styles.whiteDot} />
                <View style={styles.dot} />
            </View>

            <View>
                <Pressable style={styles.button}
                    onPress={() =>
                        navigation.navigate("/onboarding/hold_breath")
                    }
                >
                    <Text style={styles.buttonText}>
                        Continue
                    </Text>
                </Pressable>

                <Pressable>
                    <Text style={styles.skipText}>
                        Skip onboarding and continue{"\n"}
                        with default values
                    </Text>
                </Pressable>
            </View>

            <StatusBar style="light" />

        </View>
    );
}

export default OnboardingGeneralQuestionsScreen;
