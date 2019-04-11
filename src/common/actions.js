export const actionTypes = {
    CHANGE_SCREEN: 'CHANGE_SCREEN',
    LOADING: 'LOADING',
};

export function changeScreen(screen, reRenderSidebar) {
    return {
        type: actionTypes.CHANGE_SCREEN,
        screen,
        reRenderSidebar,
    };
}

export function loading(isLoading) {
    return {
        type: actionTypes.LOADING,
        isLoading,
    };
}
