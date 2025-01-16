import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions, StyleSheet, Platform } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // For icons

const { width, height } = Dimensions.get("window");

const images = {
  Jaispal: require("../../assets/images/Jaispal.png"),
  Siddhesh: require("../../assets/images/Siddhesh.png"),
  Anirudha: require("../../assets/images/Anirudha.png"),
  SaiPallavi: require("../../assets/images/SaiPallavi.png"),
  Vikram: require("../../assets/images/Vikram.png"),
  Mrunal: require("../../assets/images/Mrunal.png"),
};

export default function InwardDetails() {
  const customers = [
    { name: "Jaispal Singh", status: "Delivered", items: "Cheese, Yogurt", icon: "check-circle-outline", image: "Jaispal" },
    { name: "Siddhesh Deshmukh", status: "In Transit", items: "Butter, Cream", icon: "local-shipping", image: "Siddhesh" },
    { name: "Anirudha Kulkarni", status: "Cancel", items: "Milk, Butter", icon: "cancel", image: "Anirudha" },
    { name: "Sai Pallavi", status: "Delivered", items: "Milk, Cheese", icon: "check-circle-outline", image: "SaiPallavi" },
    { name: "Vikram Jadhav", status: "Pending", items: "Cheese, Yogurt", icon: "pending", image: "Vikram" },
    { name: "Mrunal Joshi", status: "In Transit", items: "Cheese, Yogurt", icon: "local-shipping", image: "Mrunal" },
  ];

  return (
    <ScrollView >
      {/* Header Section */}
      <View style={[styles.header, styles.shadow]}>
        <Image style={styles.logo} source={require("../../assets/images/1.png")} />
        <Text style={styles.headerText}>Customers</Text>
        <TouchableOpacity>
          <Icon name="menu" color="white" size={width * 0.12} />
        </TouchableOpacity>
      </View>

      <View style={styles.spacing} />

      {/* Add Customer Section */}
      <View style={[styles.addCustomerContainer, styles.shadow]}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.spacing} />

      {/* Customer List */}
      {customers.map((customer, index) => (
        <View key={index}>
          <View style={[styles.customerCard, styles.shadow]}>
            <Image style={styles.customerImage} source={images[customer.image]} />
            <View style={styles.customerInfo}>
              <Text style={styles.customerName}>{customer.name}</Text>
              <Text style={styles.customerStatus}>{customer.status}</Text>
              <Text style={styles.customerItems}>{customer.items}</Text>
            </View>
            <TouchableOpacity>
              <Icon
                name={customer.icon}
                color="black"
                size={width * 0.06}
                style={customer.icon === "local-shipping" ? styles.truckIcon : {}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.spacing} />
        </View>
      ))}

      <View style={styles.spacing} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingVertical: height * 0.02,
      backgroundColor: "#f8f9fa",
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: width * 0.05,
      paddingVertical: height * 0.02,
      backgroundColor: "#0CC0DF",
      borderRadius: 10,
    },
    logo: {
      width: width * 0.12,
      height: width * 0.12,
      borderRadius: width * 0.06,
    },
    headerText: {
      fontSize: width * 0.07,
      fontWeight: "bold",
      color: "white",
    },
    addCustomerContainer: {
      alignSelf: "center",
      backgroundColor: "#e6e8ea",
      borderRadius: 10,
      paddingVertical: height * 0.02,
      width: width * 0.9,
    },
    addButton: {
      backgroundColor: "#0CC0DF",
      alignSelf: "center",
      width: width * 0.7,
      height: height * 0.06,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
    addButtonText: {
      fontSize: width * 0.045,
      color: "white",
      fontWeight: "bold",
    },
    spacing: {
      height: height * 0.02,
    },
    customerCard: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 10,
      padding: width * 0.03,
      width: width * 0.95, // Ensures full width of the container
      alignSelf: "center",
      overflow: "hidden",
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 4,
        },
      }),
    },
    customerImage: {
      width: width * 0.25, // Adjust width to prevent overflow
      height: undefined, // Allow dynamic height based on width
      aspectRatio: 1, // Keeps the aspect ratio of 1:1
      borderRadius: 10,
      resizeMode: "contain", // Ensures the image fits without cutting off
    },
    customerInfo: {
      flex: 1,
      marginLeft: width * 0.03,
    },
    customerName: {
      fontSize: width * 0.05,
      fontWeight: "bold",
    },
    customerStatus: {
      fontSize: width * 0.04,
      color: "#6c757d",
    },
    customerItems: {
      fontSize: width * 0.04,
      color: "#6c757d",
    },
    truckIcon: {
      paddingHorizontal: width * 0.0,
    },
  });
  
