import { combineReducers } from 'redux';
import PolyListReducer from './PolyListReducer';
import CurrentReducer from './CurrentReducer';
import GDPRrd from './GDPRrd';
import ModalRd from './ModalReducer';

export default combineReducers({
    posts: PolyListReducer,
    gdpr: GDPRrd,
    current: CurrentReducer,
    modal: ModalRd
});
