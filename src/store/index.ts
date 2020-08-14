import { configureStore, createStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { RootReducer, RootState } from 'store/reducers';
import { rootSaga } from 'store/sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['router', 'productsState', 'ordersState', 'sellersState'],
};

const PersistedReducer = persistReducer<RootState>(persistConfig, RootReducer);

export const store = configureStore({
  reducer: PersistedReducer,
  middleware: [sagaMiddleware],
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export type AppStore = ReturnType<typeof createStore>;

export type AppDispatch = AppStore['dispatch'];
