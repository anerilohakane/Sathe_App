import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // For icons

const { width, height } = Dimensions.get("window");

export default function WarehouseList() {
  const data = [
    { Id: "WH001", Location: "Central", Capacity: "150", Manager: "Anirudha..." },
    { Id: "WH002", Location: "Eastside", Capacity: "250", Manager: "Vikram..." },
    { Id: "WH003", Location: "Westside", Capacity: "456", Manager: "Siddhesh..." },
    { Id: "WH004", Location: "Northside", Capacity: "101", Manager: "Ritesh..." },
    { Id: "WH005", Location: "Southside", Capacity: "789", Manager: "Jaspal..." },
    { Id: "WH006", Location: "Westside", Capacity: "202", Manager: "Virat..." },
    { Id: "WH007", Location: "Eastside", Capacity: "123", Manager: "Emily..." },
    { Id: "WH008", Location: "Northside", Capacity: "400", Manager: "David..." },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = data.filter(
      (item) =>
        item.Id.toLowerCase().includes(query.toLowerCase()) ||
        item.Location.toLowerCase().includes(query.toLowerCase()) ||
        item.Manager.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleMicPress = () => {
    console.log("Voice input activated");
  };

  return (
    <FlatList
      data={filteredData}
      keyExtractor={(item) => item.Id}
      ListHeaderComponent={
        <>
          {/* Header Section */}
          <View style={[styles.headerContainer]}>
            <Image
              style={styles.logo}
              source={require("../../assets/images/1.png")}
            />
            <Text style={styles.headerTitle}>Warehouse List</Text>
            <TouchableOpacity>
              <Icon name="menu" color="white" size={width * 0.12} />
            </TouchableOpacity>
          </View>

          <View className="h-4"></View>

          {/* Title Section */}
          <View className=" h-36">
          <View className="px-4" style={styles.titleContainer}>
            <Icon name="house" color="black" size={width * 0.12} />
          </View>

          <View>
            <Text className="font-bold text-3xl px-6">Warehouse List</Text>
          </View>
          </View>
          <View className="h-4"></View>
          <View style={styles.actionContainer}>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
            </View>

          <View style={{ height: 8 }}></View>

          {/* Search Bar Section */}
          <View style={styles.searchBarContainer}>
            <View style={styles.searchBar}>
              <Icon name="search" size={width * 0.06} color="gray" />
              <TextInput
                style={styles.searchInput}
                placeholder="Search by Id"
                value={searchQuery}
                onChangeText={handleSearch}
              />
              <TouchableOpacity onPress={handleMicPress}>
                <Icon name="mic" size={width * 0.06} color="gray" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Table Header Section */}
          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>ID</Text>
              <Text style={styles.tableHeaderText}>Location</Text>
              <Text style={styles.tableHeaderText}>Capacity</Text>
              <Text style={styles.tableHeaderText}>Manager Name</Text>
            </View>
          </View>
        </>
      }
      renderItem={({ item }) => (
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>{item.Id}</Text>
          <Text style={styles.tableCell}>{item.Location}</Text>
          <Text style={styles.tableCell}>{item.Capacity}</Text>
          <Text style={styles.tableCell}>{item.Manager}</Text>
        </View>
      )}
      ListFooterComponent={
        filteredData.length === 0 && (
          <Text style={styles.noResultsText}>No results found</Text>
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0CC0DF",
    padding: width * 0.03,
    borderRadius: 8,
  },
  logo: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.06,
  },
  headerTitle: {
    fontSize: width * 0.07,
    fontWeight: "bold",
    color: "white",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    marginVertical: height * 0.02,
  },
  titleText: {
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: width * 0.05,
  },
  listTitle: {
    fontSize: width * 0.06,
    fontWeight: "medium",
  },
  addButton: {
    backgroundColor: "#0CC0DF",
    paddingVertical: width * 0.04,
    paddingHorizontal: width * 0.07,
    borderRadius: 8,
    marginLeft: "auto",
  },
  addButtonText: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  searchBarContainer: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: width * 0.03,
    height: height * 0.06,
  },
  searchInput: {
    flex: 1,
    marginLeft: width * 0.02,
  },
  tableContainer: {
    backgroundColor: "#f8f8f8",
    paddingHorizontal: width * 0.00,
    paddingTop: height * 0.02,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#e0e0e0",
    padding: width * 0.02,
    borderRadius: 8,
  },
  tableHeaderText: {
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginVertical: height * 0.01,
    padding: width * 0.02,
    borderRadius: 8,
    elevation: 1,
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
  },
  noResultsText: {
    textAlign: "center",
    color: "gray",
    marginVertical: height * 0.02,
  },
});
