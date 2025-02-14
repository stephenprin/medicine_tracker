import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Dimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import CircularProgress from "@/components/CircularProgress";

const { width, height } = Dimensions.get("window");
const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={["#ffffff", "#fff"]}>
        <View>
          <View style={styles.header}>
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>Online{"\n"}Tracker</Text>
            </View>
            <TouchableOpacity style={styles.notificationButton}>
              <Ionicons name="notifications-outline" size={20} color="black" />
              {
                <View style={styles.NotificationBadge}>
                  <Text style={styles.NotificationCount}>1</Text>
                </View>
              }
            </TouchableOpacity>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.card}></View>
          </View>

          <View style={styles.progressSub}>
            <View>
              <Text className="text-lg font-bold text-center">
                <Text
                  style={{ color: "#182e6f", fontWeight: "bold", fontSize: 24 }}
                >
                  Your daily
                </Text>{" "}
                {"\n"}
                <Text
                  style={{
                    color: "#182e6f",
                    fontWeight: "medium",
                    fontSize: 20,
                 
                  }}
                >
                  Progress
                </Text>
              </Text>
            </View>
            {/* Circular progress */}
            <CircularProgress progress={50} totalDose={10} completeDose={5} />
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9a",
  },
  header: {
    paddingTop: 60,
    marginBottom: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    paddingHorizontal: 20,
  },
  headerContent: {
    alignContent: "center",
    paddingHorizontal: 20,
  },
  headerTextContainer: {
    alignContent: "center",
    flex: 1,
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#3058a7",
  },
  card: {
    width: width - 40,
    padding: 30,
    borderRadius: 30,
    backgroundColor: "pink",
    alignItems: "center",
    shadowColor: "rgba(67, 51, 51, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.25,
    elevation: 10,
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  notificationButton: {
    position: "relative",
    padding: 8,
    backgroundColor: "rgba(150, 160, 203, 0.13)",
    borderRadius: 12,
    marginLeft: 8,
  },
  NotificationBadge: {
    position: "absolute",
    top: -3,
    right: -3,
    backgroundColor: "#ff5252",
    borderRadius: 10,
    padding: 4,
    height: 20,
    minWidth: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
    borderWidth: 2,
    borderColor: "#d4736c",
  },
  NotificationCount: {
    fontSize: 10,
    color: "white",
    fontWeight: "bold",
  },

  progressLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "rgba(255,255,255,0.9)",
  },
  progressPercentage: {
    fontSize: 34,
    fontWeight: "bold",
    color: "white",
  },
  progressDetails: {
    fontSize: 10,
    color: "white",
    fontWeight: "bold",
  },
  progressSub: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
