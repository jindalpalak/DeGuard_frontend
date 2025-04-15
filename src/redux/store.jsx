import { persistStore, persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./reducer/user.reducer";

const persistConfig = {
    key: "ai_root",
    storage
}

const persistorReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer : {
        user: persistorReducer
    }
})

export const persistor = persistStore(store);