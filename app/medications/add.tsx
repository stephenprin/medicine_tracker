
import { FREQUENCIES } from "@/constants/Frequency";
import { DURATIONS } from "@/constants/durations";
import { Ionicons } from "@expo/vector-icons";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Switch,
  TouchableOpacity,
  Dimensions,
  Platform,
  Alert,
} from "react-native";

const AddMedication = () => {
  const renderFrequencyOption = () => {
    return (
      <View>
        {FREQUENCIES.map((freq) => (
          <TouchableOpacity key={freq.id}>
            <View>
              <Ionicons name={freq.icon} />
              <Text>{freq.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderDurationOption = () => {
    return (
      <View>
        {DURATIONS.map((duration) => (
          <TouchableOpacity key={duration.id}>
            <View>
            <Text>{duration.value? duration.value: "∞"}</Text>
              <Text>{duration.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  return (
    <View>
      <LinearGradient
        colors={["#275fb9", "#063364"]}
        // style={styles.headerGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
      <View>
        <View>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={28} color={"#aeb4af"} />
          </TouchableOpacity>
          <Text>New Medication</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View>
            <TextInput
              placeholder="Medication Name"
              placeholderTextColor={"#999"}
            />
          </View>
          <View>
            <TextInput
              placeholder="Dosage (e.g., 500mg)"
              placeholderTextColor={"#999"}
            />
          </View>
          <View>
            <Text>How often?</Text>
            {renderFrequencyOption()}

            <Text>For how long?</Text>
            {renderDurationOption()}

            <TouchableOpacity>
              <View >
                  <Ionicons name="calendar"  size={20} color="#686969" />
              </View>
              <Text>Start:</Text>
            </TouchableOpacity>
            <RNDateTimePicker mode="date" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddMedication;

const styles = StyleSheet.create({});
