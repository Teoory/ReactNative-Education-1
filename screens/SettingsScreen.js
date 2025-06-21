import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";

export default function ucuncuScreen({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);

  const resetUsername = () => {
    setUsername("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayarlar Sayfa</Text>
      <Text style={styles.subtitle}>
        Bu sayfada kullanıcı ayarlarınızı yönetebilirsiniz.
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.buttonText}>Kullanıcı Bilgilerini Sıfırla</Text>
        </TouchableOpacity>

        {modalVisible && (
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>
              Kullanıcı adını sıfırlamak istediğinize emin misiniz?
            </Text>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => {
                resetUsername();
                setModalVisible(false);
                navigation.navigate("HomePage", {
                  message: "Kullanıcı adı başarıyla sıfırlandı!",
                  data: { userId: null, userName: "" },
                });
              }}
            >
              <Text style={styles.buttonText}>Evet</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Hayır</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setModalVisible(false);
            navigation.goBack();
          }}
        >
          <Text style={styles.buttonText}>Geri Dön</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  buttonsContainer: {
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 10,
    minWidth: 200,
    alignItems: "center",
  },
  button2: {
    backgroundColor: "#FF6347",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 10,
    minWidth: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
