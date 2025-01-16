import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("window");

export default function CatagoryDetails() {
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
                <Text className='font-medium text-2xl'>Catagory Details</Text>
            </View>

            <View className="h-8"></View>
            <View className="px-4">
                <View className="px-5 flex-row justify-between items-center bg-slate-100 h-14 w-[330px] rounded-md">
                    <Text className="text-2xl font-medium">Cow Milk</Text>
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                        <Icon name="exit-to-app" size={24} color="black" /> {/* Exit-to-app icon */}
                    </TouchableOpacity>
                </View>
            </View>

            <View className="h-8"></View>
            {[
                { label: 'Category', placeholder: 'Ex. Paneer' },
                { label: 'Start Date', placeholder: 'Ex. 12/12/2023' },
            ].map((field, index) => (
                <View key={index} className='mb-5 px-4'>
                    <Text className='text-xl font-normal mb-2'>{field.label}</Text>
                    <TextInput
                        className='border border-blue-500 p-2 rounded-lg h-[48px]'
                        placeholder={field.placeholder}
                    />
                </View>
            ))}

            <View className="h-4"></View>
            <View className="px-4">
                <TextInput className='border border-blue-500  rounded-lg h-[55px] w-[240px] mb-5 bg-slate-100 text-2xl font-bold px-14' placeholder="Subcategories"></TextInput>
            </View>

            <View className="h-4"></View>

            <View className="px-4">
                <View className='border border-blue-500  rounded-lg h-[180px] w-[332px]'>
                    <TouchableOpacity className="px-2 flex-row justify-evenly items-center gap-3 top-4">
                        <TouchableOpacity>
                            <Text className="bg-slate-200 w-28 h-10 px-2 rounded-lg border border-slate-400 items-center">
                                Raw Milk
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text className="bg-slate-200 w-28 h-10 px-2 rounded-lg border border-slate-400">
                                Reduced-Fat Milk
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text className="bg-slate-200 w-28 h-10 px-2 rounded-lg border border-slate-400 items-center">
                                Fortified Milk
                            </Text>
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <View className="h-4"></View>
                    
                    <TouchableOpacity className="px-2 flex-row justify-evenly items-center gap-3 top-4">
                        <TouchableOpacity>
                            <Text className="bg-slate-200 w-28 h-10 px-2 rounded-lg border border-slate-400">
                                Lactose-Free Milk
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text className="bg-slate-200 w-28 h-10 px-2 rounded-lg border border-slate-400">
                                Condensed Milk
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text className="bg-slate-200 w-28 h-10 px-2 rounded-lg border border-slate-400">
                                Toned Milk
                            </Text>
                        </TouchableOpacity>
                    </TouchableOpacity>

                </View>
            </View>

            <View className="h-6"></View>

            <View className='flex-1 justify-center items-center'>
                <TouchableOpacity className='w-[182px] h-[48px] rounded-md justify-center mb-6 mt-4' style={{ backgroundColor: '#0CC0DF' }}>
                    <Text className='text-white font-bold text-center text-3xl'>Add</Text>
                </TouchableOpacity>
            </View>

            <View className="h-20"></View>
        </ScrollView>
    );
}