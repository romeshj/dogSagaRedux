import * as types from './action-types';
export const getDogsData = () => ({
	type : types.API_CALL_REQUEST
})

export const submitForm = (data) => ({
	type : types.FORM_SUBMIT,
	payload :  data
})

