import { createStore, combineReducers } from "redux";
import reducerCounter from "./modules/counter/reducer";

// Aqui importamos os nossos reducers, no caso temos apenas de counter

// Aqui combinamos todos os reducers que importamos
const reducers = combineReducers({ counter: reducerCounter });

// Por fim passamos esses reducers para o createStore
const store = createStore(reducers);

export default store;
