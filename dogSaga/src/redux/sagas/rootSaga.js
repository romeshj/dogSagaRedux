import { all } from 'redux-saga/effects';
import DogsSaga from './dogs-saga';

function* watchAll() {
   yield all([
		DogsSaga()
   ]);
}

export default watchAll;

