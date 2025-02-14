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
import { QUICK_ACTIONS } from "@/constants/QuickAction";
import { Link } from "expo-router";

const { width } = Dimensions.get("window");

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

          <View style={styles.content}>
            <View style={styles.quickActionsContainer}>
              <Text style={styles.quickSectionTitle}>How can we help you?</Text>
              <View style={styles.quickActionsGrid}>
                {QUICK_ACTIONS.map((action) => (
                  <Link href={action.route} key={action.label} asChild>
                    <TouchableOpacity style={styles.actionButton}>
                      <LinearGradient
                        colors={action.gradient}
                        style={styles.actionGradient}
                      >
                        <View style={styles.actionContent}>
                          <View style={styles.actionIcon}>
                            <Ionicons
                              name={action.icon}
                              size={30}
                              color="white"
                            />
                          </View>
                          <Text style={styles.actionLabel}>{action.label}</Text>
                        </View>
                      </LinearGradient>
                    </TouchableOpacity>
                  </Link>
                ))}
              </View>
            </View>
          </View>

          <View style={styles.progressSub}>
            <View>
              <Text className="text-lg font-bold text-center">
                <Text
                  style={{ color: "#182e6f", fontWeight: "bold", fontSize: 25 }}
                >
                  Your daily
                </Text>{" "}
                {"\n"}
                <Text
                  style={{
                    color: "#182e6f",
                    fontWeight: 300,
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
    paddingTop: 50,
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
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  content: {
    flex: 1,
    paddingTop: 30,
  },
  quickActionsContainer: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  quickActionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 15,
  },
  actionButton: {
    width: (width - 52) / 2,
    height: 115,
    borderRadius: 16,
    overflow: "hidden",
  },
  actionGradient: {
    flex: 1,
    padding: 15,
  },
  actionContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
    marginTop: 8,
  },
  quickSectionTitle: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "700",
  },
});
