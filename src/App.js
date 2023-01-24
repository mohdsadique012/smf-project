import "./App.css";

// import Footer from './layout/Footer';
import MainNavbar from "./layout/MainNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import ProductDeatils from "./pages/product_details";
import ProductCategory from "./pages/single_product_category";
import SingleProductSubcategory from "./pages/single_one_product"
import ProductCategories from "./pages/product_categories";
import CheckoutDeatils from "./pages/checkout_details";
import MainCategory from "./pages/Admin/Categories/main_category";
import SubCategory from "./pages/Admin/Categories/sub_category";
import AdminSidebar from "./pages/Admin/Layout/admin_sidebar";
import Login from "./pages/Login";
import Sidebar from "./layout/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
// import  {Redirect} from "react-router-dom";
// import SubFooter from './layout/Sub_Footer';
import { useState ,useEffect } from "react";
import Backdrop from "./layout/Backdrop/Backdrop";
import Category from "./pages/category";
import ProductListing from "./pages/product_listing";
import Cart from "./component/Cart/Cart";
import AdminHeader from "./pages/Admin/Layout/admin_header";
import UserProfile from "./pages/Admin/Layout/user_profile";
import Axios from "axios"
// import { event } from "jquery";

function App() {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [])

  const [addcart ,setAddcart]= useState([])
  let a = addcart;
  const data = (passdata)=>{
     a.push(passdata)
      setAddcart(a) 
   
  } 
  const [stateroute,setRRoute]=useState({})
  const datarroute = (passdata)=>{
    setRRoute(passdata)
    } 
console.log(stateroute,'qwertyuiop')

  const [sdata,setData] = useState({})

  const getData = async()=>{
    const response = await Axios.get("http://localhost:7600/getData");
    setData(response.data);
  }

    useEffect(() =>{
      getData()
    },[]);

  const [toggle, setToggle] = useState(false);

  const flipcart = (props)=>{
    console.log("flipcart" , "#", "ftgfg")
    setToggle(props)
  }

  const drawerToggleClickHandler = () => {
    console.log("CLicked " + toggle);
    setToggle(!toggle);
  };

  const backdropClickHandler = () => {
    console.log(toggle);
    setToggle(false);
  };

  let backdrop;
  if (toggle) {
    backdrop = <Backdrop  />
  }
  const [cartCount, setCartCount] = useState([1]);

  function addCart() {
    setCartCount((current) => [...current, 1]);
    console.log(cartCount);
  }
  // .....
  // function checkpath() {
  //   if (window.location.pathname == '/login') {
  //     check = false;
  //     alert(check);

  //   } else {
  //     check = true;
  //     alert(check);

  //   }
  // }
  // checkpath();

  // function removeCart(e) {
  //   setCartCount((see) => (people.filter(function (item) {
  //     return item !== e.target.value
  //   }))
  //   )
  // }
  return (
    <>
      <MainNavbar cartOpen={drawerToggleClickHandler} />
      <Sidebar addCart={addcart} cartCount={cartCount} show={toggle} flipcart={flipcart}  />
      {backdrop}
      {/* <Container fluid direction="horizontal" gap={3}> */}
      <Routes>
        <Route
          exact
          path="/"
          element={<Home  datarroute={datarroute} cartCount={cartCount} flipcart={addCart} />}
        ></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/categories" element={<Category />}></Route>
        <Route
          exact
          path="/Admin/Layout/user_profile"
          element={<UserProfile />}
        ></Route>
        <Route
          exact
          path="/cart"
          element={<Cart cartCount={cartCount} />}
        ></Route>
        <Route
          exact
          path="/product_listing"
          element={<ProductListing />}
        ></Route>
        <Route
          exact
          path="/product_details"
          element={<ProductDeatils dataAdd={data} />}
        ></Route>
        <Route
          exact
          path="/single_product_category/:product_list"
          element={<ProductCategory />}
        ></Route>
        <Route
        exact
        path="/single_product_bysubcategory/:product_listss"
        element={<SingleProductSubcategory />}
      ></Route>
        <Route
          exact
          path="/product_categories"
          element={<ProductCategories />}
        ></Route>
        <Route
          exact
          path="/checkout_details"
          element={<CheckoutDeatils />}
        ></Route>
        <Route
          exact
          path="/Admin/Layout/admin_header"
          element={<AdminHeader />}
        ></Route>
        <Route
          exact
          path="/Admin/Layout/admin_sidebar"
          element={<AdminSidebar />}
        ></Route>
        <Route
          exact
          path="/Admin/Categories/main_category"
          element={<MainCategory />}
        ></Route>
        <Route
          exact
          path="/Admin/Categories/sub_category"
          element={<SubCategory />}
        ></Route>
        {/* <Redirect to="/" /> */}
      </Routes>
    </>
  );
}

export default App;
