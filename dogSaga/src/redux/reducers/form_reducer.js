import * as types from '../actions/action-types';
// reducer with initial state
const initialState = {
  formData : null
};
 

const formreducer = (state = initialState, action) =>  {
console.log(" formreducer " ,action);
    switch(action.type){
        case types.FORM_SUBMIT:
            return {...state , formData : action.payload}		
        default:
        return state
    }
}
export default formreducer;
