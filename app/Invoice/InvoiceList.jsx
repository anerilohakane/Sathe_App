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

export default function InvoiceList() {
    const data = [
        { Invoice: "INV001", Date: "2023-01-01", Source: "Mumbai", Destination: "Pune" },
        { Invoice: "INV002", Date: "2023-02-01", Source: "Delhi", Destination: "Chennai" },
        { Invoice: "INV003", Date: "2023-03-01", Source: "Bangalore", Destination: "Hyderabad" },
        { Invoice: "INV004", Date: "2023-04-01", Source: "Mumbai", Destination: "Ahmedabad" },
        { Invoice: "INV005", Date: "2023-05-01", Source: "Kolkata", Destination: "Surat" },
        { Invoice: "INV006", Date: "2023-06-01", Source: "Jaipur", Destination: "Mumbai" },
        { Invoice: "INV007", Date: "2023-07-01", Source: "Nagpur", Destination: "Delhi" },
    ];

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = data.filter(
            (item) =>
                item.Invoice.toLowerCase().includes(query.toLowerCase()) ||
                item.Date.toLowerCase().includes(query.toLowerCase()) ||
                item.Source.toLowerCase().includes(query.toLowerCase()) ||
                item.Destination.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const handleMicPress = () => {
        console.log("Voice input activated");
    };

    return (
        <FlatList
            data={filteredData}
            keyExtractor={(item) => item.Invoice} // Corrected to use Invoice as the key
            ListHeaderComponent={
                <>
                    {/* Header Section */}
                    <View style={styles.headerContainer}>
                        <Image
                            style={styles.logo}
                            source={require("../../assets/images/1.png")}
                        />
                        <Text style={styles.headerTitle}>Invoice</Text>
                        <TouchableOpacity>
                            <Icon name="menu" color="white" size={width * 0.12} />
                        </TouchableOpacity>
                    </View>

                    <View className="h-7"></View>

                    {/* Title Section */}
                    <View>
                        <Text style={styles.titleText}>Invoice List</Text>
                    </View>

                    <View className="h-6"></View>

                    {/* Search Bar Section */}
                    <View style={styles.searchBarContainer}>
                        <View style={styles.searchBar}>
                            <Icon name="search" size={width * 0.06} color="gray" />
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Search by Invoice Id"
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
                            <Text style={styles.tableHeaderText}>Invoice</Text>
                            <Text style={styles.tableHeaderText}>Date</Text>
                            <Text style={styles.tableHeaderText}>Source</Text>
                            <Text style={styles.tableHeaderText}>Destination</Text>
                        </View>
                    </View>
                </>
            }
            renderItem={({ item }) => (
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>{item.Invoice}</Text>
                    <Text style={styles.tableCell}>{item.Date}</Text>
                    <Text style={styles.tableCell}>{item.Source}</Text>
                    <Text style={styles.tableCell}>{item.Destination}</Text>
                </View>
            )}
            ListFooterComponent={
                <>
                    {filteredData.length === 0 && (
                        <Text style={styles.noResultsText}>No results found</Text>
                    )}

                    <View className="h-5"></View>

                    <View className=" p-4 mb-4">
                        <Text className="text-2xl font-bold">Invoice Details :-</Text>

                        <View className="h-4"></View>

                        {/* Milk Item */}
                        <View className=" flex-row justify-between items-center my-2">
                            <Text className="text-xl font-normal">Milk</Text>
                            <Text className="text-xl font-normal">$ 50</Text>
                        </View>

                        {/* Butter Item */}
                        <View className="flex-row justify-between items-center my-2">
                            <Text className="text-xl font-normal">Butter</Text>
                            <Text className="text-xl font-normal">$ 30</Text>
                        </View>

                        {/* Divider */}
                        <View className="h-px bg-gray-300 my-2"></View>

                        {/* Total */}
                        <View className="flex-row justify-between items-center my-2">
                            <Text className="text-xl font-normal">Total</Text>
                            <Text className="text-xl font-bold">$ 80</Text>
                        </View>
                    </View>
                </>
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
        fontSize: width * 0.08,
        fontWeight: "bold",
        color: "white",
    },
    titleText: {
        fontSize: width * 0.07,
        fontWeight: "bold",
        textAlign: "center",
    },
    searchBarContainer: {
        backgroundColor: "#f0f0f0",
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.01,
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
