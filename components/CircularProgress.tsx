import { useEffect, useRef } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";
import { Circle, Svg } from "react-native-svg";

interface CircularProgressProps {
  progress: number;
  totalDose: number;
  completeDose: number;
}

const { width, height } = Dimensions.get("window");
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function CircularProgress({
  progress,
  totalDose,
  completeDose,
}: CircularProgressProps) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const size = width * 0.55;
  const strokeWidth = 15;
  const radius = (size - strokeWidth) / 2;
  const conference = 2 * Math.PI * radius;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [progress]);

  const strokeDahOffset = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [conference, 0],
  });

  return (
    <View style={styles.progressContainer}>
      <View style={styles.progressTextContainer}>
        <Text style={styles.progressPercentage}>{Math.round(progress)}%</Text>
        <Text style={styles.progressLabel}>
          {completeDose} of {totalDose} doses
        </Text>
      </View>
      <Svg width={size} height={size} style={styles.progressRing}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={"rgba(250, 80, 83, 0.15)"}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#f3625a"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={conference}
          strokeDashoffset={strokeDahOffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },

  progressTextContainer: {
    position: "absolute",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  progressPercentage: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#FA766E",
  },
  progressLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "rgba(32, 25, 25, 0.5)",
  },
  progressRing: {
    transform: [{ rotate: "-90deg" }],
  },
});
