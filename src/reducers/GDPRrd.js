import { ACCEPT_TERMS } from '../actions/types';

const INITIAL_STATE = {
    hasAcceptedTerms : false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACCEPT_TERMS:
            return {...state,
                hasAcceptedTerms : true
            };
        default:
            return state;
    }
};

