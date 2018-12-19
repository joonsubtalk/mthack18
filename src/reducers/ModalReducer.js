import { CLEAR_MODAL, LOAD_AWS_MODAL, LOAD_GRID_MODAL, LOAD_MWP_MODAL, LOAD_VPS_MODAL } from '../actions/types';

const MODAL_ENUM = {
    AWS : 'aws',
    GRID : 'grid',
    MWP : 'mwp',
    VPS : 'vps',
    NONE : ''
}

const INITIAL_STATE = {
    isModalActive : false,
    activeModal : MODAL_ENUM.NONE
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_AWS_MODAL:
            return {...state,
                isModalActive : true,
                activeModal : MODAL_ENUM.AWS
            };
        case LOAD_GRID_MODAL:
            return {...state,
                isModalActive : true,
                activeModal : MODAL_ENUM.GRID
            };
        case LOAD_MWP_MODAL:
            return {...state,
                isModalActive : true,
                activeModal : MODAL_ENUM.MWP
            };
        case LOAD_VPS_MODAL:
            return {...state,
                isModalActive : true,
                activeModal : MODAL_ENUM.VPS
            };
        case CLEAR_MODAL:
            return {...state,
                isModalActive : false,
                activeModal : MODAL_ENUM.NONE
            };
        default:
            return state;
    }
};

