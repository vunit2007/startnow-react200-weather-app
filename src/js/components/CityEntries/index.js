import { connect } from 'react-redux';
import CityEntries from './CityEntries';

// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {

  return {
    result: store.city.result,
    historys: store.city.historys,
   
  };
}

//city?
export default connect(mapStoreToProps)(CityEntries);