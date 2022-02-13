import {showMessage} from 'react-native-flash-message';

export const showMsg = (text, type) => {
  showMessage({
    message: text,
    type: type || 'danger',
    duration: 2500,
  });
};
