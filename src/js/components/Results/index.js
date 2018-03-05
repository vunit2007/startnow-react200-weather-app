import { connect } from 'react-redux';
import Results from './Results';

// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {

  return {
    result: store.city.result,
  };
}


export default connect(mapStoreToProps)(Results);