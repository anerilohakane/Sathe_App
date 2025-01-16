import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("window");

export default function Catagories() {
    return (
        <ScrollView>

            {/* Header */}
            <View className='flex-row rounded-md items-center justify-between px-4 py-3' style={{ backgroundColor: "#0CC0DF" }} >
                <Image className='w-12 h-12 rounded-full' source={require("../../assets/images/1.png")} />
                <Text className='font-semibold text-white text-3xl'>Catagories</Text>
                <TouchableOpacity>
                    <Icon name="menu" color="white" size={46}></Icon>
                </TouchableOpacity>
            </View>

            {/* Spacing */}
            <View className='h-8' />

            {/* Add CAtegory Section */}
            <View className='flex-row items-center justify-center gap-3'>
                <Image className='w-8 h-8' source={require("../../assets/images/Inscription.png")} />
                <Text className='font-medium text-2xl'>Add Catagory</Text>
            </View>

            {/* category List */}
            <View className="h-8"></View>
            {["Cow Milk", "Cream Milk", "Paneer", "Cheese", "Ghee"].map((item, index) => (
                <View key={index} style={{ marginBottom: width * 0.02, alignItems: "center" }}>
                    <View
                        className="flex-row justify-between items-center"
                        style={{
                            width: "90%",
                            paddingHorizontal: width * 0.05,
                            backgroundColor: "#F1F5F9",
                            height: width * 0.15,
                            borderRadius: width * 0.02,
                        }}>

                        {/* exit to app icon */}
                        <Text className="font-medium" style={{ fontSize: width * 0.05 }}>
                            {item}
                        </Text>
                        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", gap: width * 0.01 }}>
                            <Icon name="exit-to-app" size={width * 0.06} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
            <View className="h-8"></View>

            <View className='flex-1 justify-center items-center'>
                <TouchableOpacity className='w-[182px] h-[48px] rounded-md justify-center mb-6 mt-4' style={{ backgroundColor: '#0CC0DF' }}>
                    <Text className='text-white font-bold text-center text-3xl'>Add</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}