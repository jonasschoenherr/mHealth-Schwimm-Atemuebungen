import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme1 from "../styles/theme1";

export default function QuestionField({ label, value, onPress }) {
  const styles = theme1;

  return (
    <Pressable style={styles.questionField} onPress={onPress}>
      <Text style={styles.questionLabel}>{label}</Text>

      <View style={styles.questionRight}>
        <Text style={styles.questionValue}>{value}</Text>
        <Ionicons
          name="chevron-down"
          size={18}
          color="#F5A623"
        />
      </View>
    </Pressable>
  );
}