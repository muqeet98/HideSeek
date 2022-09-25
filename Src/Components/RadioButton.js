import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import SelectedChecBox from '../Assets/Icons/SelectedChecBox.png';
import UnSelectedChecBox from '../Assets/Icons/UnSelectedCheckBox.png';
import {wp} from '../Helpers/Responsiveness';

const CheckBox = ({
  selected,
  onPress,
  style,
  textStyle,
  size = 22,
  color = '#656565',
  text = '',
  ...props
}) => (
  console.log(selected),
  (
    <TouchableOpacity
      style={[styles.checkBox, style]}
      onPress={onPress}
      {...props}>
      <Text style={textStyle}> {text} </Text>

      {selected ? (
        <Image source={SelectedChecBox} style={styles.image} />
      ) : (
        <Image source={UnSelectedChecBox} style={styles.image} />
      )}
    </TouchableOpacity>
  )
);

export default CheckBox;

const styles = StyleSheet.create({
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 8,
  },
  image: {
    resizeMode: 'contain',
    height: wp(6),
    width: wp(6),
  },
});
