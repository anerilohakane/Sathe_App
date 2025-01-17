import { useState } from "react";
import { FlatList } from "react-native";
import { View, Text, Image, TextInput, TouchableOpacity, Platform } from "react-native";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function TransportManagement() {
    const [vehicleType, setVehicleType] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
     const [selectedDate, setSelectedDate] = useState(new Date());
        const [showPicker, setShowPicker] = useState(false);
        const [mode, setMode] = useState('date'); // 'date' or 'time'
    
        const handleDateChange = (event, date) => {
            const currentDate = date || selectedDate;
            setShowPicker(false); // Hide picker after selection
            setSelectedDate(currentDate);
        };
    
        const showDatePicker = () => {
            setMode('date');
            setShowPicker(true);
        };

        const showTimePicker = () => {
            setMode('time');
            setShowPicker(true);
          };
    

    const vehicleTypes = ['Truck', 'Chhota Hathi', 'Bolero Pickup', 'Piaggio Ape', 'Maruti Suzuki Super Carry', 'Tanker Trucks', 'Insulated Containers', 'Electric Milk Transport Vehicles'];


    return (
        <ScrollView>
            <View className='flex-row rounded-md items-center justify-between px-4 py-3' style={{ backgroundColor: "#0CC0DF" }} >
                <Image className='w-12 h-12 rounded-full' source={require("../../assets/images/1.png")} />
                <Text className='font-semibold text-white text-3xl'>Transport</Text>
                <TouchableOpacity>
                    <Icon name="menu" color="white" size={46}></Icon>
                </TouchableOpacity>
            </View>

            {/* Spacing */}
            <View className='h-8' />

            {/* Add Trasport Management Section */}
            <View className='flex-row items-center justify-center gap-5 bg-slate-50 h-20 '>
                <Image className='w-11 h-9' source={require("../../assets/images/TruckIcon.png")} />
                <Text className='font-medium text-2xl'>Transport Management</Text>
            </View>
            <View className="px-4 bg-slate-50 h-16">
                <TouchableOpacity className="px-2 flex-row justify-evenly items-center gap-6 top-4">
                    <TouchableOpacity><Text className="w-24 h-10 px-2 pt-1 rounded-lg border border-slate-300 text-xl text-center flex items-center justify-center">Inward</Text></TouchableOpacity>
                    <TouchableOpacity><Text className="w-24 h-10 px-2 pt-1 rounded-lg border border-slate-300 text-xl text-center flex items-center justify-center">Outward</Text></TouchableOpacity>
                    <TouchableOpacity><Text className="w-24 h-10 px-2 pt-1 rounded-lg border border-slate-300 text-xl text-center flex items-center justify-center">All</Text></TouchableOpacity>
                </TouchableOpacity>
            </View>

            {/* Spacing */}
            <View className="h-5"></View>
            <View className="flex-1 p-5">
                {[
                    { label: 'Vehicle Number', placeholder: 'Ex. TRK7890' },
                    { label: 'Vehicle Type', placeholder: 'Ex. Truck' },
                    { label: 'Driver Name', placeholder: 'Ex. Rajesh Sharma' },
                    { label: 'Driver Contact Number', placeholder: 'Ex. 9075438660' },
                ].map((field, index) => (
                    <View key={index} className="mb-5">
                        <Text className="text-lg font-medium text-gray-800 mb-2">
                            {field.label}
                        </Text>
                        {field.label === 'Vehicle Type' ? (
                            <View>
                                <TextInput
                                    className="border border-blue-500 p-3 rounded-md h-[48px]"
                                    value={vehicleType}
                                    placeholder={field.placeholder}
                                    onFocus={() => setShowDropdown(true)}
                                    onChangeText={(text) => {
                                        setVehicleType(text);
                                        setShowDropdown(true); // Show dropdown when typing
                                    }}
                                />
                                {showDropdown && (
                                    <FlatList
                                        data={vehicleTypes.filter((type) =>
                                            type.toLowerCase().includes(vehicleType.toLowerCase())
                                        )}
                                        keyExtractor={(item, idx) => idx.toString()}
                                        className="border border-gray-300 bg-white rounded-md max-h-40 mt-2"
                                        renderItem={({ item }) => (
                                            <TouchableOpacity
                                                className="p-3 border-b border-gray-200"
                                                onPress={() => {
                                                    setVehicleType(item);
                                                    setShowDropdown(false);
                                                }}>
                                            
                                                <Text className="text-gray-700">{item}</Text>
                                            </TouchableOpacity>
                                        )}
                                    />
                                )}
                            </View>
                        ) : (
                            <TextInput
                                className="border border-blue-500 p-3 rounded-md h-[48px]"
                                placeholder={field.placeholder}
                            />
                        )}
                    </View>
                ))}
                {/* Date Picker */}
            {showPicker && (
                <DateTimePicker
                    value={selectedDate}
                    mode={mode}
                    is24Hour={true}
                    display={Platform.OS === 'android' ? 'spinner' : 'default'}
                    onChange={handleDateChange}
                />
            )}
            </View>


            <View className="px-4 flex-row justify-between items-center bottom-6">
                <Text className="text-lg font-medium mb-3">Arrival Date</Text>
                <Text className="text-lg font-medium mb-3">Arrival Time</Text>
                <Text className="text-lg font-medium mb-3 ">Transport Date</Text>
            </View>
            <View className="px-4 flex-row justify-between items-center gap-1 bottom-6">
                <TextInput className="border border-blue-500 p-3 rounded-md h-[50px] w-auto" placeholder={selectedDate.toLocaleDateString()} onPress={showDatePicker}></TextInput>
                <TextInput className="border border-blue-500 p-3 rounded-md h-[50px] w-[100px]" placeholder={selectedDate.toLocaleTimeString()}  onPress={showTimePicker}></TextInput>
                <TextInput className="border border-blue-500 p-3 rounded-md h-[50px] w-auto" placeholder={selectedDate.toLocaleDateString()}  onPress={showDatePicker}></TextInput>
            </View>

            <View className="p-5 bottom-6">
                <Text className="text-lg font-medium mb-3">Rental Cost</Text>
                <TextInput className="border border-blue-500 p-3 rounded-md h-[48px]" placeholder="Ex. 500 ₹"></TextInput>
            </View>

            <View className='flex-1 justify-center items-center'>
                <TouchableOpacity className='w-[182px] h-[48px] rounded-md justify-center mb-6' style={{ backgroundColor: '#0CC0DF' }}>
                    <Text className='text-white font-bold text-center text-3xl'>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}