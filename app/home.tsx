import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Dimensions,
  Modal,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import CircularProgress from "@/components/CircularProgress";

import { Link } from "expo-router";
import { QUICK_ACTIONS } from "@/constants/QuickAction";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={["#ffffff", "#fff"]}>
        <View>
          <View style={styles.header}>
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>Med{"\n"}Tracker</Text>
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

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Today's Schedule</Text>
              <Link href="/calender">
                <TouchableOpacity>
                  <Text style={styles.seeAllButtonText}>See All</Text>
                </TouchableOpacity>{" "}
                |
              </Link>
            </View>
            {true ? (
              <View style={styles.emptyState}>
                <Ionicons name="medical-outline" size={46} color="#ccc" />
                <Text style={styles.emptyStateText}>
                  No Medications Scheduled
                </Text>
                <Link
                  href="/medications/add"
                  asChild
                  style={styles.addMedicationButton}
                >
                  <TouchableOpacity>
                    <Text style={styles.addMedicationButtonText}>
                      Add Medication
                    </Text>
                  </TouchableOpacity>
                </Link>
              </View>
            ) : (
              [].map((medication) => {
                //const taken =
                return (
                  <View style={styles.doseCard}>
                    <View
                      style={[
                        styles.dosageInfo,
                        // { backgroundColor: medication.color },
                      ]}
                    >
                      <Ionicons name="medical" size={24} />
                    </View>
                    <View style={styles.doseInfo}>
                      <View>
                        <Text style={styles.medicineName}>name</Text>
                        <Text style={styles.dosageInfo}>doseage</Text>
                      </View>
                      <View style={styles.doseTime}>
                        <Ionicons name="time-outline" size={16} color="#ccc" />
                        <Text style={styles.timeText}>time</Text>
                      </View>
                    </View>
                    {true ? (
                      <View style={styles.takeDoseButton}>
                        <Ionicons name="checkmark-circle-outline" size={24} />
                        <Text style={styles.takeDoseText}>Taken</Text>
                      </View>
                    ) : (
                      <TouchableOpacity style={styles.takeDoseButton}>
                        <Ionicons name="close-circle-outline" size={24} />
                        <Text style={styles.takeDoseText}>Take</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                );
              })
            )}
          </View>
        </View>
      </LinearGradient>

      <Modal  visible={false} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Notification</Text>
            <TouchableOpacity style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#ccc"/>
            </TouchableOpacity>
          </View>
          {[].map((medication) => (
            <View style={styles.notificationItem} >
              <View style={styles.notificationIcon}>
                <Ionicons name="medical" size={24} />
              </View>
              <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>medicationname</Text>
              <Text style={styles.notificationMessage}>medicationdosage</Text>
              <Text style={styles.notificationTime}> medicationtime</Text>
            </View>
            </View>
          ))}

              </View>
      </Modal>
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
    padding: 4,
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
    marginBottom: 20,
  },
  content: {
    flex: 1,
    paddingTop: 20,
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

  section: {
    paddingHorizontal: 30,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 5,
  },

  seeAllButtonText: {
    color: "rgba(183, 70, 70, 0.5)",
    fontWeight: "600",
  },
  emptyStateText: {
    fontSize: 16,
    color: "#6b6868",
    marginTop: 10,
    marginBottom: 20,
  },
  addMedicationButton: {
    backgroundColor: "#0a5db0",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  addMedicationButtonText: {
    color: "white",
    fontWeight: 600,
  },
  doseCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  doseBadge: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  doseInfo: {
    flex: 1,
    justifyContent: "space-between",
  },
  medicineName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  dosageInfo: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  doseTime: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeText: {
    marginLeft: 5,
    color: "#666",
    fontSize: 14,
  },
  takeDoseButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginLeft: 10,
  },
  takeDoseText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  emptyState: {
    alignItems: "center",
    padding: 30,
    backgroundColor: "white",
    borderRadius: 16,
    marginTop: 10,
    shadowColor: "#2e2c2c",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(29, 29, 29, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  closeButton: {
    padding: 5,
  },
  notificationItem: {
    flexDirection: "row",
    padding: 15,
    borderRadius: 12,
    backgroundColor: "#eae8e8",
    marginBottom: 10,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
    color: "#999",
  },
});
