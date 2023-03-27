import React from "react";
import { Provider } from "react-redux";
// import LoginForm from "./components/LoginForm";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Wishlist from "./components/Wishlist";
import store from "./store/store";
// import Signup from "./components/Signup";

 function App() {
  return (
    <div>
      <Provider store={store}>
        {/* <LoginForm/> */}
        {/* <Signup/> */}
        <Header></Header>
        <Wishlist></Wishlist>
        <Cart></Cart>
        <Footer></Footer>
      </Provider>
    </div>
  );
}

export default App