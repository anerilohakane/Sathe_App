import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, Dimensions, Platform } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // For icons
import DateTimePicker from '@react-native-community/datetimepicker';

const { width, height } = Dimensions.get("window");

export default function InwardDetails() {

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

    return (
        <ScrollView>
            {/* Header Section */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: width * 0.04,
                paddingVertical: height * 0.02,
                backgroundColor: "#0CC0DF",
                borderRadius: 5
            }}>
                <Image
                    style={{
                        width: width * 0.12,
                        height: width * 0.12,
                        borderRadius: width * 0.06
                    }}
                    source={require("../../assets/images/1.png")}
                />
                <Text style={{
                    fontSize: width * 0.08,
                    fontWeight: 'bold',
                    color: 'white'
                }}>Inward</Text>
                <TouchableOpacity>
                    <Icon name="menu" color="white" size={width * 0.1} />
                </TouchableOpacity>
            </View>

            {/* Spacing */}
            <View style={{ height: height * 0.02 }} />

            {/* Add Inward Details Section */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: width * 0.03
            }}>
                <Image style={{ width: width * 0.08, height: width * 0.08 }} source={require("../../assets/images/Inscription.png")} />
                <Text style={{
                    fontSize: width * 0.05,
                    fontWeight: '500'
                }}>Add Inward Details</Text>
            </View>

            <View style={{ height: height * 0.02 }} />

            {/* Form Fields */}
            {[
                { label: 'Source', placeholder: 'Ex. ' },
                { label: 'Destination', placeholder: 'Ex. Warehouse A' },
                { label: 'Category', placeholder: 'Ex. Purchased' },
                { label: 'Warehouse', placeholder: 'Ex. Central Depot' },
                { label: 'Vehicle Number', placeholder: 'Ex. MH 12 AD 1236' },
                { label: 'Mobile Number', placeholder: 'Ex. 9595652525' },
                { label: 'SKU', placeholder: 'Ex. SKU1236' },
                { label: 'Quantity In Bags/Cases', placeholder: 'Ex. 95' },
                { label: 'Quantity in kg', placeholder: 'Ex. 55000' },
                { label: 'Rate', placeholder: 'Ex. 60000' },
                { label: 'Amount', placeholder: 'Ex. 764000' },
                { label: 'Date', placeholder: selectedDate.toLocaleDateString(), onPress: showDatePicker },
                { label: 'Supplier Contact Number', placeholder: 'Ex. 7984527457' },
                { label: 'Invoice ID', placeholder: 'Ex. 1250' },
                { label: 'Remark/Notes', placeholder: '', multiline: true }
            ].map((field, index) => (
                <View key={index} style={{ marginBottom: height * 0.02, paddingHorizontal: width * 0.04 }}>
                    <Text style={{ fontSize: width * 0.05, marginBottom: height * 0.01 }}>{field.label}</Text>
                    <TextInput
                        style={{
                            borderWidth: 1,
                            borderColor: '#3b82f6',
                            paddingHorizontal: width * 0.04,
                            paddingVertical: height * 0.015,
                            borderRadius: 8,
                            height: height * 0.06
                        }}
                        placeholder={field.placeholder}
                        multiline={field.multiline || false}
                        onFocus={field.onPress} // Trigger date picker on focus
                    />
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

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity
                    style={{
                        width: width * 0.45,
                        height: height * 0.06,
                        borderRadius: 10,
                        backgroundColor: '#0CC0DF',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: height * 0.04
                    }}
                >
                    <Text style={{
                        fontSize: width * 0.06,
                        fontWeight: 'bold',
                        color: 'white'
                    }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
