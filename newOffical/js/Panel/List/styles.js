import { StyleSheet } from 'react-native';
import transferByDpi from '../../utils/transferByDpi';

const styles = StyleSheet.create(transferByDpi({
  container: { flex: 0.8, padding: 60, backgroundColor: '#fff' },
  text: {
    fontFamily: 'Never say never',
  },
  title: {
    fontSize: 40,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 150,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 150,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
}));

export default styles;
