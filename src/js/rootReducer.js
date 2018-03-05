import { combineReducers } from 'redux';
import CityReducer from './components/CityEntries/CityReducer';
// import incomeReducer from './components/IncomeEntries/incomeReducer';

const rootReducer = combineReducers({
city: CityReducer

});

export default rootReducer;



