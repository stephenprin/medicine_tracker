import { StyleSheet, Text, View, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const scaleAnimation = useRef(new Animated.Value(0.5)).current;
 const router = useRouter();
  useEffect(() => {
      Animated.parallel([
        Animated.timing(fadeAnimation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnimation, {
          toValue: 1,
            friction: 2,
            tension: 10,
          useNativeDriver: true,
        }),
      ]).start();

      const timer = setTimeout(() => { 
        router.replace('/auth')
      }, 2000);

      return () => clearTimeout(timer);
      
  }, [scaleAnimation, fadeAnimation]);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.iconContainer,
          {
            opacity: fadeAnimation,
            transform: [{ scale: scaleAnimation }],
          },
        ]}
      >
        <Ionicons name="medical" size={100} color="white" />
        <Text style={styles.appName}>MedTracker</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111184",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    alignItems: "center",
  },
  appName: {
    fontSize: 20,
    color: "#f2b949",
    fontWeight: "bold",
    letterSpacing: 1,
    marginTop: 0,
  },
});
