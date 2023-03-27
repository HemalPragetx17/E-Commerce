import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice';
import wishReducer from './slices/wishlistSlice';
import loginReducer from './slices/loginSlice';




const store = configureStore({
    reducer: {
        cart: cartReducer,
        wish: wishReducer,
        login: loginReducer
    }
});

export default store;