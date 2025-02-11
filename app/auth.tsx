import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import * as LocalAuthentication from "expo-local-authentication";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

const { width, height } = Dimensions.get("window");

const AuthScreen = () => {
  const { hasBiometric, setHasBiometric } = useState(true);
  const { isAuthenticating, setIsAuthenticating } = useState(false);
  const { error, setError } = useState("");
  return (
    <LinearGradient
      colors={["#44449c", "#1f1f85", "#181880"]}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="medical" size={80} color="white" />
        </View>
        <Text style={styles.title}>MedTracker</Text>
        <Text style={styles.subtitle}>Your Personal Medication Tracker</Text>

        <View style={styles.card}>
          <Text style={styles.welcomeText}>Welcome Back!</Text>
          <Text style={styles.instructionText}>
            {hasBiometric
              ? "Use face ID/TouchID Or PIN to access your medications"
              : "Enter your PIN to access your medications"}
          </Text>
          <TouchableOpacity
            style={[styles.button, isAuthenticating && styles.buttonDisabled]}
            disabled={isAuthenticating}
          >
            <Ionicons
              name={hasBiometric ? "finger-print-outline" : "key-outline"}
              size={24}
              color="white"
              style={styles.iconButton}
            />
            <Text style={styles.buttonText}>
              {isAuthenticating
                ? "Verifying..."
                : hasBiometric
                ? "Authenticate"
                : "Enter PIN"}
            </Text>
          </TouchableOpacity>
          {error && (
            <View style={styles.errorContainer}>
              <Ionicons name="alert-circle" size={24} color={"#f44336"} />
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}
        </View>
      </View>
    </LinearGradient>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: 120,
    height: 120,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: "#f2b949",
    fontWeight: "bold",
    marginBottom: 20,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowRadius: 3,
    textShadowOffset: { width: 1, height: 1 },
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: 40,
    textAlign: "center",
  },
  card: {
    width: width - 40,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.25,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 24,
    color: "#333",
    fontWeight: "bold",
    marginBottom: 15,
  },
  instructionText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  iconButton: {
    marginRight: 10,
  },
  button: {
    backgroundColor: "#f2b949",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    padding: 10,
    backgroundColor: "#ffebee",
    borderRadius: 8,
  },
  errorText: {
    color: "#f44336",
    fontSize: 14,
    marginRight: 8,
  },
});
