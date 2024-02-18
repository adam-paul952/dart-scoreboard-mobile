import { Alert, type AlertButton, Platform } from 'react-native';

const alertPolyfill = (
  title: string,
  description?: string,
  buttons?: AlertButton[],
) => {
  if (buttons === undefined || buttons.length === 0) {
    window.alert([title, description].filter(Boolean).join('\n'));
    return;
  }

  const result = window.confirm(
    [title, description].filter(Boolean).join('\n'),
  );

  if (result === true) {
    const confirm = buttons.find(({ style }) => style !== 'cancel');
    confirm?.onPress?.();
    return;
  }

  const cancel = buttons.find(({ style }) => style === 'cancel');
  cancel?.onPress?.();
};

export const alert = Platform.OS === 'web' ? alertPolyfill : Alert.alert;
