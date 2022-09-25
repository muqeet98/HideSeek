import {StyleSheet} from 'react-native';
import {hp} from '../../Helpers/Responsiveness';
import {wp} from '../../Helpers/Responsiveness';

export const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: hp(2),
    paddingHorizontal: wp(0),
  },
  formHeading: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#555568',
    marginHorizontal: 2,
  },
});
