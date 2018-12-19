import { CLEAR_MODAL, LOAD_AWS_MODAL, LOAD_GRID_MODAL, LOAD_MWP_MODAL, LOAD_VPS_MODAL } from './types';

export const loadAWSModal = () => {
    return ({ type: LOAD_AWS_MODAL });
};

export const loadGridModal = () => {
    return ({ type: LOAD_GRID_MODAL });
};

export const loadMWPModal = () => {
    return ({ type: LOAD_MWP_MODAL });
};

export const loadVPSModal = () => {
    return ({ type: LOAD_VPS_MODAL });
};

export const clearModal = () => {
    return ({ type: CLEAR_MODAL });
};
