// const configureStore = require('@reduxjs/toolkit').configureStore;
import { configureStore } from '@reduxjs/toolkit';
// const reduxLogger = require('redux-logger');
// const cakeReducer = require('../features/cake/cakeSlice');
// const icecreamReducer = require('../features/icecream/icecreamSlice');
// const userReducer = require('../features/user/userSlice');
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
import userReducer from '../features/user/userSlice';

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// module.exports = store;
export default store;

// extraReducers를 간단히 살펴보기 위해 logger 미들웨어 주석처리
