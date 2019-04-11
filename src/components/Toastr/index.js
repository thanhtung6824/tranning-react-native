import {Toast} from 'native-base';

const toastr = {
    showToast: (message, duration = 2500) => {
        Toast.show({
            text: message,
            duration,
            position: 'bottom',
            textStyle: {textAlign: 'center'},
        });
    },
};

export default toastr;
