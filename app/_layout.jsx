import 'react-native';
import { View } from 'react-native';
import "../global.css"
import Product from './Products/product';
import ProductDetails from './Products/productDetails';
import AddWarehouse from './Warehouse/addWarehouseDetails';
import UpdateWarehouse from './Warehouse/updateWarehouseDetails';
import Login from './Home/login';
import AddCustomer from './Customers/addCustomerDetails';
import AddCategory from './Category/addCategoryDetails';
import Catagories from './Category/categories';
import CatagoryDetails from './Category/catagoryDetails';
import TransportManagement from './Transport/TransportManagement';
import TransportOverView from './Transport/TransportOverview';
import Inward from './Inward/inward';
import InwardProductDetails from './Inward/inwardProductDetails';
import OutwardProductDetails from './Outward/outwardProductDetails';
import Outward from './Outward/outward';
import WarehouseList from './Warehouse/WarehouseList';
import InvoiceList from './Invoice/InvoiceList';
import Customers from './Customers/customers';
import Profile from './Home/Profile';
import Report from './Invoice/Report';
import Invoice from './Invoice/Invoice';
import SatheInvoice from './Invoice/satheInvoice';
import InwardDetails from './Inward/inwardDetails';
import HomeScreen from './Home/homeScreen';



export default function Layout() {
  return (
    <View>
      {/* <ProductDetails></ProductDetails> */}
      {/* <Product></Product> */}
      {/* <Features></Features> */}
      {/* <AddWarehouse></AddWarehouse> */}
      {/* <UpdateWarehouse></UpdateWarehouse> */}
      {/* <Login></Login> */}
      {/* <AddCustomer></AddCustomer> */}
      {/* <AddCustomer /> */}
      {/* <AddCategory></AddCategory> */}
      {/* <Catagories></Catagories> */}
      {/* <CatagoryDetails></CatagoryDetails> */}
      {/* <TransportManagement></TransportManagement> */}
      {/* <TransportOverView></TransportOverView> */}
      {/* <InwardDetails></InwardDetails> */}
      {/* <InwardProductDetails></InwardProductDetails> */}
      {/* <Inward></Inward> */}
      {/* <OutwardDetails></OutwardDetails> */}
      {/* <OutwardProductDetails></OutwardProductDetails> */}
      {/* <Outward></Outward> */}
      {/* <WarehouseList></WarehouseList> */}
      {/* <InvoiceList></InvoiceList> */}
      {/* <Customers></Customers> */}
      <Profile></Profile>
      {/* <Report></Report> */}
      {/* <Invoice></Invoice> */}
      {/* <SatheInvoice></SatheInvoice> */}
      {/* <HomeScreen></HomeScreen> */}
    </View>
  );
}
