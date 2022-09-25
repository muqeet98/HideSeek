import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {wp} from '../Helpers/Responsiveness';

const Button = props => {
  return (
    <View>
      <LinearGradient
        colors={[
          props.color ? props.color : props.color1 ? props.color1 : '#36335D',
          props.color ? props.color : props.color2 ? props.color2 : '#36335D',
        ]}
        start={{x: 0, y: props.inverted ? 0 : 1}}
        end={{x: props.inverted ? 1 : 0, y: 0}}
        style={{borderRadius: props.borderRadius ? props.borderRadius : 6}}>
        <Pressable
          onPress={props.onPress}
          disabled={props.disabled ? props.disabled : false}
          style={[
            styles.ButtonStyle,
            props.style,
            {
              borderColor: props.borderColor
                ? props.borderColor
                : 'transparent',
              borderWidth: 1,
              marginTop: props.marginTop ? props.marginTop : 0,
            },
          ]}>
          <Text
            style={{
              color: props.TextColor ? props.TextColor : '#FFFFFF',
              fontWeight: props.fontWeight ? props.fontWeight : 'normal',
              textAlign: 'center',
              fontSize: props.fontSize ? props.fontSize : 18,
              marginLeft: props.textMarginLeft ? props.textMarginLeft : 0,
              fontFamily: 'Roboto',
            }}>
            {props.Text}
          </Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};
export default Button;
const styles = StyleSheet.create({
  ButtonStyle: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
});
