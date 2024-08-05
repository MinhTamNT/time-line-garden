import React from "react";
import {
  View,
  Modal,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { LineChart } from "react-native-gifted-charts";

const ChartModal = ({ isVisible, onClose }) => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  // Data for temperature, humidity, and soil moisture charts with hours as labels
  const temperatureData = [
    { value: 20, label: "08:00" },
    { value: 25, label: "10:00" },
    { value: 28, label: "12:00" },
    { value: 30, label: "14:00" },
    { value: 35, label: "16:00" },
    { value: 40, label: "18:00" },
    { value: 45, label: "20:00" },
  ];

  const humidityData = [
    { value: 50, label: "08:00" },
    { value: 55, label: "10:00" },
    { value: 60, label: "12:00" },
    { value: 65, label: "14:00" },
    { value: 70, label: "16:00" },
    { value: 75, label: "18:00" },
    { value: 80, label: "20:00" },
  ];

  const soilMoistureData = [
    { value: 30, label: "08:00" },
    { value: 42, label: "10:00" },
    { value: 40, label: "12:00" },
    { value: 45, label: "14:00" },
    { value: 10, label: "16:00" },
    { value: 30, label: "18:00" },
    { value: 70, label: "20:00" },
  ];

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.modalBackground}>
        <View style={[styles.modalContainer, { height: screenHeight - 100 }]}>
          <LineChart
            data={temperatureData}
            width={screenWidth - 40}
            height={150}
            isAnimated
            showVerticalLines={false}
            xAxisLabelStyle={{ color: "#000" }}
            yAxisLabelStyle={{ color: "#000" }}
            color="#ff5733"
            style={styles.chart}
          />
          <Text style={styles.chartTitle}>Biểu đồ nhiệt độ</Text>

          <LineChart
            data={humidityData}
            width={screenWidth - 40}
            height={150}
            isAnimated
            showVerticalLines={false}
            xAxisLabelStyle={{ color: "#000" }}
            yAxisLabelStyle={{ color: "#000" }}
            color="#33c1ff"
            style={styles.chart}
          />
          <Text style={styles.chartTitle}>Biểu đồ độ ẩm</Text>

          <LineChart
            data={soilMoistureData}
            width={screenWidth - 40}
            height={150}
            isAnimated
            showVerticalLines={false}
            xAxisLabelStyle={{ color: "#000" }}
            yAxisLabelStyle={{ color: "#000" }}
            color="#4caf50"
            style={styles.chart}
          />
          <Text style={styles.chartTitle}>Biểu đồ độ ẩm đất</Text>

          <Button title="Close" onPress={onClose} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
  },
  modalContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    maxHeight: "100%",
  },
  chart: {
    marginVertical: 10,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 5,
    color: "#333",
  },
});

export default ChartModal;
