import React from 'react';
import {Text} from 'react-native';
import {wp} from '../Helpers/Responsiveness';
import {handleMargin} from '../Helpers/themeHelper';
import {handlePadding} from '../Helpers/themeHelper';

const ResponsiveText = ({
  children,
  color,
  size,
  fontFamily,
  margin,
  position,
  padding,
  numberOfLines,
  style,
  textAlign,
  cutText,
  alignSelf,
  fontWeight,
  opacity,
  //sizes
  ...props
}) => {
  //   const colors = useTheme();
  return (
    <Text
      {...props}
      numberOfLines={numberOfLines}
      style={[
        {...styles.text},
        props.style,
        size && styles[size] ? styles[size] : wp(size),
        margin ? handleMargin(margin) : undefined,
        padding ? handlePadding(padding) : undefined,
        alignSelf ? alignSelf : undefined,
        position && {alignSelf: position},
        textAlign && {textAlign: 'center'},
        cutText && {textDecorationLine: 'underline'},
        {fontWeight: fontWeight ? fontWeight : '500'},

        {color: color ? color : color},
        // {fontFamily: fontFamily ? fontFamily : fonts.LatoRegular},
        {opacity: opacity ? opacity : undefined},
      ]}>
      {children}
    </Text>
  );
};
const styles = {
  text: {
    // fontFamily: fonts.LatoRegular,
    fontSize: wp(3.5),
  },
  h0: {fontSize: wp(13)},
  h1: {fontSize: wp(9)},
  h2: {fontSize: wp(8)},
  h3: {fontSize: wp(7)},
  h4: {fontSize: wp(6)},
  h5: {fontSize: wp(5)},
  h6: {fontSize: wp(4)},
  h7: {fontSize: wp(3)},
  h8: {fontSize: wp(3.5)},
  h9: {fontSize: wp(3)},
  h10: {fontSize: wp(2.5)},
  h11: {fontSize: wp(2)},
  header: {fontSize: wp(4.5)},
};
export default ResponsiveText;
