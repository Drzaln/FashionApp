/* eslint-disable react-native/no-inline-styles */
import {colors, fonts} from 'assets/theme/Theme';
import {iconName} from 'components/Icons/iconName';
import {Icons} from 'components/Icons/Icons';
import Text from 'components/Text/Text';
import React from 'react';
import {Pressable, StyleProp, StyleSheet, ViewStyle} from 'react-native';

type ButtonProps = {
  children: string;
  icon?: keyof typeof iconName;
  font?: keyof typeof fonts;
  style?: StyleProp<ViewStyle>;
  isWhite?: boolean;
  disabled?: boolean;
  onPress?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  style,
  isWhite,
  disabled,
  onPress,
  font = 'dmsansBold',
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        {
          backgroundColor: isWhite ? colors.white : colors.parisM,
          borderWidth: isWhite ? 1 : 0,
          padding: icon ? 13 : 16,
        },
        style,
      ]}>
      {icon && (
        <Icons
          name={icon}
          color={isWhite ? 'parisM' : 'white'}
          size={24}
          style={styles.marginR14}
        />
      )}
      <Text
        color={isWhite ? 'parisM' : 'white'}
        fontSize="s"
        fontFamily={font}
        style={styles.text}>
        {children}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {textTransform: 'capitalize'},
  marginR14: {marginRight: 14},
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    overflow: 'hidden',
    borderColor: colors.whiteSmoke,
  },
});
