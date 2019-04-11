import {actionTypes} from '../../../common/actions';

const initialState = {
    screen: '',
    reRenderSidebar: false,
};

export default function (state = initialState, action) {
    if (action.type === actionTypes.CHANGE_SCREEN) {
        return Object.assign({}, state, {
            screen: action.screen,
            reRenderSidebar: action.reRenderSidebar,
        });
    }
    return state;
}
