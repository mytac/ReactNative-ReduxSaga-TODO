import { StyleSheet } from 'react-native';
import transferByDpi from '../utils/transferByDpi';

export default StyleSheet.create(transferByDpi({
  animeWrapper: {
    flex: 1,
    zIndex: 5,
    backgroundColor: '#3385ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
