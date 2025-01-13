import 'react-native';
import { View } from 'react-native';
import "../global.css"
import Outward from './Outward/outward';
import OutwardDetails from './Outward/outwardDetails';
import Product from './Products/product';
import ProductDetails from './Products/productDetails';
import AddWarehouse from './Warehouse/addWarehouseDetails';
import UpdateWarehouse from './Warehouse/updateWarehouseDetails';
import Login from './login';

export default function Layout() {
  return (
    <View>
      
      {/* <Login></Login>  */}
       {/* <Inward></Inward> */}
      {/* <InwardDetails></InwardDetails> */}
      {/* <Outward></Outward> */}
      {/* <OutwardDetails></OutwardDetails> */}
      {/* <ProductDetails></ProductDetails> */}
      {/* <Product></Product> */}
      {/* <HomeScreen /> */}
      {/* <Features></Features> */}
      {/* <AddWarehouse></AddWarehouse> */}
      {/* <UpdateWarehouse></UpdateWarehouse> */}
      <Login></Login>
    </View>
  );
}
