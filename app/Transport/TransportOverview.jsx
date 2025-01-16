import { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function TransportOverView() {
    // Define searchQuery as state using useState
    const [searchQuery, setSearchQuery] = useState(""); // Search query state

    const data = [
        { Date: "1/10/2023", Temprature: "20.5", Weight: "150.26" },
        { Date: "2/10/2023", Temprature: "21.0", Weight: "140.25" },
        { Date: "3/10/2023", Temprature: "19.8", Weight: "160.26" },
        { Date: "4/10/2023", Temprature: "22.3", Weight: "110.86" },
        { Date: "5/10/2023", Temprature: "18.5", Weight: "120.6" },
        { Date: "6/10/2023", Temprature: "21.4", Weight: "145.60" },
        { Date: "7/10/2023", Temprature: "23.5", Weight: "170.00" },
    ];

    // Filter data based on search query
    const filteredData = data.filter(
        (item) =>
            (item.Temprature ? item.Temprature.toLowerCase() : "").includes(
                searchQuery.toLowerCase()
            )
    );

    return (
        <ScrollView>
            <View className="flex-row rounded-md items-center justify-between px-4 py-3" style={{ backgroundColor: "#0CC0DF" }}>
                <Image className="w-12 h-12 rounded-full" source={require("../../assets/images/1.png")} />
                <Text className="font-semibold text-white text-3xl">Transport</Text>
                <TouchableOpacity>
                    <Icon name="menu" color="white" size={46}></Icon>
                </TouchableOpacity>
            </View>

            {/* Spacing */}
            <View className="h-8" />

            {/* Add Transport Management Section */}
            <View className="flex-row items-center justify-center gap-5 bg-slate-50 h-16 ">
                <Image className="w-11 h-9" source={require("../../assets/images/TruckIcon.png")} />
                <Text className="font-medium text-xl">Transport Operations Overview</Text>
            </View>

            <View className="h-5"></View>

            <View className="px-2">
                <Text className="text-2xl font-bold">Transport Summary</Text>
                <View className="flex-row justify-evenly items-center gap-2">
                    <TouchableOpacity className="border border-slate-100 rounded-lg bg-slate-50 w-[111px] h-[84px] top-4 flex justify-center items-center">
                        <Text className="text-lg font-medium">120</Text>
                        <Text className="text-slate-500">Inward</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="border border-slate-100 rounded-lg bg-slate-50 w-[111px] h-[84px] top-4 flex justify-center items-center">
                        <Text className="text-lg font-medium">150</Text>
                        <Text className="text-slate-500">Outward</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="border border-slate-100 rounded-lg bg-slate-50 w-[111px] h-[84px] top-4 flex justify-center items-center">
                        <Text className="text-lg font-medium">$ 5000</Text>
                        <Text className="text-slate-500">CostIn</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="h-7"></View>

            <View className="flex-1 p-5">
                {/* Search Bar */}
                <View className="flex-row items-center space-x-2 border border-slate-200 bg-slate-50 rounded-md h-12 px-3">
                    <Image className="h-[15px] w-[15px]" source={require("../../assets/images/Search.png")} />
                    <TextInput
                        style={{ flex: 1 }}
                        className="h-full p-3"
                        placeholder="Search Inward Transport..."
                        onChangeText={(text) => setSearchQuery(text)} // Update searchQuery on text change
                        value={searchQuery} // Bind searchQuery value to input
                    />
                    <TouchableOpacity>
                        <Icon name="mic" size={24} color="#0CC0DF" /> {/* Voice search icon */}
                    </TouchableOpacity>
                </View>
            </View>

            <View className="px-2">
                <Text className="text-2xl font-bold">Inward Transport</Text>
                <View className="flex-row justify-evenly items-center gap-2">
                    <TouchableOpacity className="border border-slate-100 rounded-lg bg-slate-50 w-[111px] h-[84px] top-4 flex justify-center items-center">
                        <Text className="text-lg font-medium">10</Text>
                        <Text className="text-slate-500">Pending</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="border border-slate-100 rounded-lg bg-slate-50 w-[111px] h-[84px] top-4 flex justify-center items-center">
                        <Text className="text-lg font-medium">20</Text>
                        <Text className="text-slate-500">Transit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="border border-slate-100 rounded-lg bg-slate-50 w-[111px] h-[84px] top-4 flex justify-center items-center">
                        <Text className="text-lg font-medium ">90</Text>
                        <Text className="text-slate-500">Delivered</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="h-5"></View>

            <View className="flex-1 justify-center items-end p-4">
                <TouchableOpacity className="w-[108px] h-[48px] rounded-md justify-center" style={{ backgroundColor: "#0CC0DF" }}>
                    <Text className="text-white font-bold text-center text-3xl">Add</Text>
                </TouchableOpacity>
            </View>

            <View className="px-4">
                <View className="border border-slate-300 rounded-lg overflow-hidden">
                    {/* Table Header */}
                    <View className="flex-row bg-slate-100 p-3 justify-between">
                        <Text className="font-bold">Date</Text>
                        <Text className="font-bold">Temprature(°C)</Text>
                        <Text className="font-bold">Weight(kg)</Text>
                    </View>

                    {/* Table Rows */}
                    {filteredData.map((item, index) => (
                        <View key={index} className="flex-row p-3 justify-between border-b border-slate-200">
                            <Text>{item.Date}</Text> {/* Wrapped item.Date in <Text> */}
                            <Text>{item.Temprature}</Text> {/* Wrapped item.Temprature in <Text> */}
                            <Text>{item.Weight}</Text> {/* Wrapped item.Weight in <Text> */}
                        </View>
                    ))}
                </View>
            </View>



            <View className="h-7"></View>
        </ScrollView>
    );
}
