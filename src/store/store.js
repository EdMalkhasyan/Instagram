import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ignoreSpaceInSearch, searchLowerCase } from "./middlewares/search";
import { messagesReducer } from "./slices/messages/messagesSlice";
import { postsReducer } from "./slices/posts/postsSlice";
import { searchReducer } from "./slices/search/searchSlice";
import { usersReducer } from "./slices/users/usersSlice";


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: "myinstagram",
  storage,
}

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  search: searchReducer,
  messages: messagesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleWare) => [
    ...getDefaultMiddleWare({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }), searchLowerCase, ignoreSpaceInSearch,
  ],
})

export const persistor = persistStore(store)

export default store