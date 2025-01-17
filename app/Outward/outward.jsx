import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, Dimensions, StyleSheet, Platform } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // For icon
import DateTimePicker from '@react-native-community/datetimepicker';


const { width, height } = Dimensions.get("window");

export default function Inward() {
  const [searchQuery, setSearchQuery] = useState("");
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

  const handleSearch = () => {
    console.log("Search for:", searchQuery);
  };

  const handleMicPress = () => {
    console.log("Voice input activated");
  };

  return (
    <ScrollView>
      {/* Header Section */}
      <View style={[styles.header, { paddingHorizontal: width * 0.04, paddingVertical: height * 0.01 }]}>
        <Image style={styles.headerImage} source={require("../../assets/images/1.png")} />
        <Text style={styles.headerTitle}>Outward</Text>
        <TouchableOpacity>
          <Icon name="menu" color="white" size={width * 0.12} />
        </TouchableOpacity>
      </View>

      <View style={{ height: height * 0.02 }} />

      {/* Search Bar Section */}
      <View style={{ paddingHorizontal: width * 0.04 }}>
        <View style={styles.searchBar}>
          <Icon name="search" size={width * 0.06} color="gray" style={{ marginRight: width * 0.02 }} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by Product Name, Supplier or Batch..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity onPress={handleMicPress}>
            <Icon name="mic" size={width * 0.06} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ height: height * 0.02 }} />

      {/* Date, Supplier, and Product Container */}
      <View style={[styles.filterRow, { paddingHorizontal: width * 0.04 }]}>
        {/* Date Block */}
        <View style={styles.filterItem}>
          <TouchableOpacity onPress={() => setShowPicker(true)} style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.filterText}>
              {selectedDate ? selectedDate.toLocaleDateString() : "Date"} {/* Show selected date or "Date" */}
            </Text>
            <Icon name="arrow-drop-down" color="black" size={width * 0.07} />
          </TouchableOpacity>
        </View>

        {/* Supplier Block */}
        <View style={styles.filterItem}>
          <Text style={styles.filterText}>Supplier</Text>
          <TouchableOpacity>
            <Icon name="arrow-drop-down" color="black" size={width * 0.07} />
          </TouchableOpacity>
        </View>

        {/* Product Block */}
        <View style={styles.filterItem}>
          <Text style={styles.filterText}>Product</Text>
          <TouchableOpacity>
            <Icon name="arrow-drop-down" color="black" size={width * 0.07} />
          </TouchableOpacity>
        </View>
      </View>

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


      <View style={{ height: height * 0.02 }} />

      {/* Products Container */}
      <View style={[styles.productRow, { paddingHorizontal: width * 0.04 }]}>
        {['Milk', 'Cream', 'Butter', 'Cheese', 'Yogurt', 'Paneer', 'Ghee', 'ButterMilk'].map((item) => (
          <View key={item} style={styles.productItem}>
            <Text style={styles.productText}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={{ height: height * 0.02 }} />

      {/* Products List */}
      <View style={[styles.listContainer, { height: height * 0.75 }]}>
        {[{
          image: require('../../assets/images/MilkTranker.png'),
          title: 'Milk Delivery',
          quantity: '2000L',
          price: 'Rs.170531'
        }, {
          image: require('../../assets/images/CreamTruck.png'),
          title: 'Cream Delivery',
          quantity: '1000L',
          price: 'Rs.15553'
        },
        {
          image: require('../../assets/images/MilkTranker.png'),
          title: 'Milk Delivery',
          quantity: '3000L',
          price: 'Rs.157533'
        },
        {
          image: require('../../assets/images/CreamTruck.png'),
          title: 'Cream Delivery',
          quantity: '2000L',
          price: 'Rs.16553'
        },
        {
          image: require('../../assets/images/MilkTranker.png'),
          title: 'Milk Delivery',
          quantity: '5000L',
          price: 'Rs.187533'
        },].map((item, index) => (
          <View key={index} style={styles.card}>
            <Image style={styles.cardImage} source={item.image} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardQuantity}>Quantity: {item.quantity}</Text>
              <View style={styles.cardFooter}>
                <Text style={styles.cardPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.detailsButton}>
                  <Text style={styles.detailsButtonText}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0CC0DF",
    borderRadius: 5
  },
  headerImage: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: width * 0.075,
  },
  headerTitle: {
    fontSize: width * 0.08,
    fontWeight: "bold",
    color: "white",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: width * 0.02,
    height: height * 0.06,
    paddingHorizontal: width * 0.03,
    borderWidth: 1,
    borderColor: "#d3d3d3",
  },
  searchInput: {
    flex: 1,
    fontSize: width * 0.04,
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#a9a9a9",
    borderRadius: width * 0.02,
    width: width * 0.3,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.01,
  },
  filterText: {
    fontSize: width * 0.04,
  },
  productRow: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productItem: {
    backgroundColor: "#f0f0f0",
    borderRadius: width * 0.02,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    width: width * 0.2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: height * 0.02,
    paddingVertical: height * 0.01,
  },
  productText: {
    fontSize: width * 0.035,
  },
  listContainer: {
    backgroundColor: "#f8f8f8",
    paddingHorizontal: width * 0.04,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: width * 0.02,
    padding: width * 0.05,
    marginBottom: height * 0.02,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  cardImage: {
    width: width * 0.3,
    height: width * 0.2,
    borderRadius: width * 0.02,
  },
  cardContent: {
    flex: 1,
    marginLeft: width * 0.03,
  },
  cardTitle: {
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  cardQuantity: {
    fontSize: width * 0.035,
    marginVertical: height * 0.005,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardPrice: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    color: "#0CC0DF",
  },
  detailsButton: {
    backgroundColor: "#0CC0DF",
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.005,
  },
  detailsButtonText: {
    color: "#fff",
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
});




// import React, { useState } from "react";
// import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons"; // For icon


// const { width, height } = Dimensions.get("window");

// export default function Inward() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = () => {
//     console.log("Search for:", searchQuery);
//   };

//   const handleMicPress = () => {
//     console.log("Voice input activated");
//   };

//   return (
//     <ScrollView>
//       {/* Header Section */}
//       <View style={[styles.header, { paddingHorizontal: width * 0.04, paddingVertical: height * 0.01 }]}>
//         <Image style={styles.headerImage} source={require("../../assets/images/1.png")} />
//         <Text style={styles.headerTitle}>Inward</Text>
//         <TouchableOpacity>
//           <Icon name="menu" color="white" size={width * 0.12} />
//         </TouchableOpacity>
//       </View>

//       <View style={{ height: height * 0.02 }} />

//       {/* Search Bar Section */}
//       <View style={{ paddingHorizontal: width * 0.04 }}>
//         <View style={styles.searchBar}>
//           <Icon name="search" size={width * 0.06} color="gray" style={{ marginRight: width * 0.02 }} />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search by Product Name, Supplier or Batch..."
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//             onSubmitEditing={handleSearch}
//           />
//           <TouchableOpacity onPress={handleMicPress}>
//             <Icon name="mic" size={width * 0.06} color="gray" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       <View style={{ height: height * 0.02 }} />

//       {/* Date, Supplier, and Product Container */}
//       <View style={[styles.filterRow, { paddingHorizontal: width * 0.04 }]}>
//         {['Date', 'Supplier', 'Product'].map((item) => (
//           <View key={item} style={styles.filterItem}>
//             <Text style={styles.filterText}>{item}</Text>
//             <TouchableOpacity>
//               <Icon name="arrow-drop-down" color="black" size={width * 0.07} />
//             </TouchableOpacity>
//           </View>
//         ))}
//       </View>

//       <View style={{ height: height * 0.02 }} />

//       {/* Products Container */}
//       <View style={[styles.productRow, { paddingHorizontal: width * 0.04 }]}>
//         {['Milk', 'Cream', 'Butter', 'Cheese', 'Yogurt', 'Paneer', 'Ghee', 'ButterMilk'].map((item) => (
//           <View key={item} style={styles.productItem}>
//             <Text style={styles.productText}>{item}</Text>
//           </View>
//         ))}
//       </View>

//       <View style={{ height: height * 0.02 }} />

//       {/* Products List */}
//       <View style={[styles.listContainer, { height: height * 0.75 }]}>
//         {[{
//           image: require('../../assets/images/MilkTranker.png'),
//           title: 'Milk Delivery',
//           quantity: '2000L',
//           price: 'Rs.170531'
//         }, {
//           image: require('../../assets/images/CreamTruck.png'),
//           title: 'Cream Delivery',
//           quantity: '1000L',
//           price: 'Rs.15553'
//         },
//         {
//             image: require('../../assets/images/MilkTranker.png'),
//             title: 'Milk Delivery',
//             quantity: '3000L',
//             price: 'Rs.157533'
//           },
//           {
//             image: require('../../assets/images/CreamTruck.png'),
//             title: 'Cream Delivery',
//             quantity: '2000L',
//             price: 'Rs.16553'
//           },
//           {
//             image: require('../../assets/images/MilkTranker.png'),
//             title: 'Milk Delivery',
//             quantity: '5000L',
//             price: 'Rs.187533'
//           },].map((item, index) => (
//           <View key={index} style={styles.card}>
//             <Image style={styles.cardImage} source={item.image} />
//             <View style={styles.cardContent}>
//               <Text style={styles.cardTitle}>{item.title}</Text>
//               <Text style={styles.cardQuantity}>Quantity: {item.quantity}</Text>
//               <View style={styles.cardFooter}>
//                 <Text style={styles.cardPrice}>{item.price}</Text>
//                 <TouchableOpacity style={styles.detailsButton}>
//                   <Text style={styles.detailsButtonText}>Details</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         ))}
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     backgroundColor: "#0CC0DF",
//     borderRadius : 5
//   },
//   headerImage: {
//     width: width * 0.15,
//     height: width * 0.15,
//     borderRadius: width * 0.075,
//   },
//   headerTitle: {
//     fontSize: width * 0.08,
//     fontWeight: "bold",
//     color: "white",
//   },
//   searchBar: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#f0f0f0",
//     borderRadius: width * 0.02,
//     height: height * 0.06,
//     paddingHorizontal: width * 0.03,
//     borderWidth: 1,
//     borderColor: "#d3d3d3",
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: width * 0.04,
//   },
//   filterRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   filterItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     borderWidth: 1,
//     borderColor: "#a9a9a9",
//     borderRadius: width * 0.02,
//     width: width * 0.3,
//     paddingHorizontal: width * 0.02,
//     paddingVertical: height * 0.01,
//   },
//   filterText: {
//     fontSize: width * 0.04,
//   },
//   productRow: {
//     flexWrap: "wrap",
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   productItem: {
//     backgroundColor: "#f0f0f0",
//     borderRadius: width * 0.02,
//     borderWidth: 1,
//     borderColor: "#d3d3d3",
//     width: width * 0.2,
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: height * 0.02,
//     paddingVertical: height * 0.01,
//   },
//   productText: {
//     fontSize: width * 0.035,
//   },
//   listContainer: {
//     backgroundColor: "#f8f8f8",
//     paddingHorizontal: width * 0.04,
//   },
//   card: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     borderRadius: width * 0.02,
//     padding: width * 0.05,
//     marginBottom: height * 0.02,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 5,
//   },
//   cardImage: {
//     width: width * 0.3,
//     height: width * 0.2,
//     borderRadius: width * 0.02,
//   },
//   cardContent: {
//     flex: 1,
//     marginLeft: width * 0.03,
//   },
//   cardTitle: {
//     fontSize: width * 0.05,
//     fontWeight: "bold",
//   },
//   cardQuantity: {
//     fontSize: width * 0.035,
//     marginVertical: height * 0.005,
//   },
//   cardFooter: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   cardPrice: {
//     fontSize: width * 0.04,
//     fontWeight: "bold",
//     color: "#0CC0DF",
//   },
//   detailsButton: {
//     backgroundColor: "#0CC0DF",
//     borderRadius: width * 0.02,
//     paddingHorizontal: width * 0.04,
//     paddingVertical: height * 0.005,
//   },
//   detailsButtonText: {
//     color: "#fff",
//     fontSize: width * 0.04,
//     fontWeight: "bold",
//   },
// });
