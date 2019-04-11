import reducer from '../sagas/reducers';
import {actionTypes} from '../../../common/actions';

const screen = 'Places';
const reRenderSidebar = true;

describe('test reducer sidebar', () => {
    it('should return the initial state', () => {
        expect(reducer({
            screen: '',
            reRenderSidebar: false,
        }, {})).toEqual({
            screen: '',
            reRenderSidebar: false,
        });
    });

    it('should handle CHANGE_SCREEN', () => {
        expect(
            reducer({
                screen: '',
                reRenderSidebar: false,
            }, {
                type: actionTypes.CHANGE_SCREEN,
                screen,
                reRenderSidebar,
            })
        ).toEqual({screen, reRenderSidebar});
    });
});
