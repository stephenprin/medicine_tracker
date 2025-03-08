import { DURATIONS } from "@/constants/durations";
import { FREQUENCIES } from "@/constants/frequency";
import { Ionicons } from "@expo/vector-icons";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
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

const { width } = Dimensions.get("window");

const AddMedication = () => {
  const [form, setForm] = useState({
    name: "",
    dosage: "",
    frequency: "",
    duration: "",
    startDate: new Date(),
    times: ["09:00"],
    notes: "",
    reminderEnabled: true,
    refillReminder: false,
    currentSupply: "",
    refillAt: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [selectedFrequency, setSelectedFrequency] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const renderFrequencyOption = () => {
    return (
      <View style={styles.optionsGrid}>
        {FREQUENCIES.map((freq) => (
          <TouchableOpacity
            key={freq.id}
            style={[
              styles.optionCard,
              selectedFrequency == freq.label && styles.selectedOptionCard,
            ]}
          >
            <View
              style={[
                styles.optionIcon,
                selectedFrequency == freq.label && styles.selectedOptionIcon,
              ]}
            >
              <Ionicons
                name={freq.icon}
                size={20}
                color={selectedFrequency == freq.label ? "white" : "#666"}
              />
              </View>
              <Text
                style={[
                  styles.optionLabel,
                  selectedFrequency == freq.label && styles.selectedOptionLabel,
                ]}
              >
                {freq.label}
              </Text>
            
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderDurationOption = () => {
    return (
      <View style={styles.optionsGrid}>
        {DURATIONS.map((duration) => (
          <TouchableOpacity
            key={duration.id}
            style={[
              styles.optionCard,
              selectedDuration == duration.label && styles.selectedOptionCard,
            ]}
          >
            <Text
              style={[
                styles.durationNumber,
                selectedDuration == duration.label &&
                  styles.selectedDurationNumber,
              ]}
            >
              {duration.value ? duration.value : "∞"}
            </Text>
            <Text>{duration.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#275fb9", "#063364"]}
        style={styles.headerGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="chevron-back" size={28} color={"#aeb4af"} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>New Medication</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.formContentContainer}
          style={{ flex: 1 }}
        >
          <View style={styles.section}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Medication Name"
                placeholderTextColor={"#999"}
                style={[styles.mainInput, errors.name && styles.inputError]}
                value={form.name}
                onChange={(event) => {
                  setForm({ ...form, name: event.nativeEvent.text });
                  if (errors.name) {
                    setErrors({ ...errors, name: "" });
                  }
                }}
              />
              {errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.mainInput, errors.dosage && styles.inputError]}
                placeholder="Dosage (e.g., 500mg)"
                placeholderTextColor={"#999"}
                value={form.dosage}
                onChange={(event) => {
                  setForm({ ...form, dosage: event.nativeEvent.text });
                  if (errors.dosage) {
                    setErrors({ ...errors, dosage: "" });
                  }
                }}
              />
              {errors.dosage && (
                <Text style={styles.errorText}>{errors.dosage}</Text>
              )}
            </View>
            <View style={styles.container}>
              <Text style={styles.sectionTitle}>How often?</Text>
              {errors.frequency && (
                <Text style={styles.errorText}>{errors.frequency}</Text>
              )}
              {renderFrequencyOption()}

              <Text style={styles.sectionTitle}>For how long?</Text>
              {errors.duration && (
                <Text style={styles.errorText}>{errors.duration}</Text>
              )}
              {renderDurationOption()}

              <TouchableOpacity>
                <View>
                  <Ionicons name="calendar" size={20} color="#686969" />
                </View>
                <Text>Start:</Text>
              </TouchableOpacity>
              <RNDateTimePicker mode="date" value={form.startDate} />
              <RNDateTimePicker
                mode="time"
                value={(() => {
                  const [hours, minutes] = form.times[0].split(":").map(Number);
                  const date = new Date();
                  date.setHours(hours, minutes, 0, 0);
                  return date;
                })()}
              />
            </View>
          </View>
          {/* Reminder */}
          <View>
            <View>
              <View>
                <View>
                  <Ionicons name="notifications" size={20} color="#d4c00c69" />
                  <View>
                    <Text>Reminder</Text>
                    <Text>
                      Get notified when it's time to take your medication
                    </Text>
                  </View>
                </View>
                <Switch
                  trackColor={{ false: "#ddd", true: "#2A8EDE" }}
                  thumbColor={"white"}
                />
              </View>
            </View>
          </View>

          {/* Refill Tracking */}

          {/* Note Tracking */}
          <View>
            <View>
              <TextInput
                placeholder="Add notes or special instructions..."
                placeholderTextColor="#999#"
              />
            </View>
          </View>
        </ScrollView>
        <View>
          <TouchableOpacity>
            <LinearGradient
              colors={["#275fb9", "#063364"]}
              // style={styles.headerGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text>
                Add
                {isSubmitting ? "Adding..." : "Add Medication"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddMedication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  headerGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: Platform.OS === "ios" ? 140 : 120,
  },
  content: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 50 : 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    zIndex: 1,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "white",
    marginLeft: 25,
  },

  formContentContainer: {
    padding: 20,
    paddingTop: 8,
  },
  section: {
    marginBottom: 20,
  },
  mainInput: {
    fontSize: 17,
    color: "#333",
    padding: 15,
    fontWeight: 500,
  },
  optionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 15,
    marginTop: 10,
  },

  inputContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  optionCard: {
    width: (width - 60) / 2,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 15,
    margin: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  selectedOptionCard: {
    backgroundColor: "#092992",
    borderColor: "#092992",
  },
  selectedOptionIcon: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  optionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f9f0de",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  optionLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  selectedOptionLabel: {
    color: "white",
  },
  inputError: {
    borderColor: "#e61f4054",
  },
  errorText: {
    fontSize: 2,
    marginTop: 4,
    marginLeft: 12,
    color: "#e61f4054",
  },
  durationNumber: {
    fontSize: 25,
    fontWeight: "700",
    color: "#0f5496",
    marginBottom: 5,
  },
  selectedDurationNumber: {
    color: "white",
  },
});
