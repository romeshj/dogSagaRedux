import { combineReducers} from 'redux'
import dogreducer from './dog_reducer';
import formreducer from './form_reducer';

export default combineReducers({
	dogreducer,
	formreducer
})
