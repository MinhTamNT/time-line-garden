import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";
import { styles } from "../../../Style/HomeStyle";
import Header from "../../../components/Header/Header";
import ScheduledList from "../../../components/ScheduleIrrigation/ScheduleIrrigation";
import ChartModal from "../../../components/Modal/Chart/ChartModal";

export default function HomePage() {
  const [isPumpOn, setIsPumpOn] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const humidity = "52%";
  const temperature = "32°C";
  const soilMoisture = "40%";

  const togglePump = () => setIsPumpOn((previousState) => !previousState);
  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.infoBox}>
        <View style={styles.column}>
          <Text style={styles.infoLabel}>Nhiệt độ:</Text>
          <Text style={styles.infoValue}>{temperature}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.column}>
          <Text style={styles.infoLabel}>Độ ẩm:</Text>
          <Text style={styles.infoValue}>{humidity}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.column}>
          <Text style={styles.infoLabel}>Độ ẩm đất:</Text>
          <Text style={styles.infoValue}>{soilMoisture}</Text>
        </View>
      </View>
      <TouchableOpacity style={localStyles.button} onPress={showModal}>
        <Text style={localStyles.buttonText}>Xem biểu đồ</Text>
      </TouchableOpacity>
      <View style={localStyles.footer}>
        <View style={localStyles.switchContainer}>
          <Text style={localStyles.switchLabel}>Bật/tắt máy bơm:</Text>
          <Switch
            value={isPumpOn}
            onValueChange={togglePump}
            trackColor={{ false: "#ccc", true: "black" }}
            thumbColor={isPumpOn ? "#fff" : "#f4f3f4"}
          />
        </View>
      </View>
      <ScheduledList />
      <ChartModal isVisible={isModalVisible} onClose={hideModal} />
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginHorizontal: 10,
    marginTop: 20,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: 181,
    marginLeft: 10,
    marginVertical: 5,
    elevation: 4, // Shadow for Android
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  switchContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  switchLabel: {
    fontSize: 16,
    marginRight: 10,
    color: "#333",
  },
});
