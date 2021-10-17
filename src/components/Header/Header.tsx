import {colors} from 'assets/theme/Theme';
import {iconName} from 'components/Icons/iconName';
import {Icons} from 'components/Icons/Icons';
import Text from 'components/Text/Text';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

type HeaderProps = {
  leftIcon?: keyof typeof iconName;
  rightIcon?: keyof typeof iconName;
  title: string;
  reddot?: boolean;
  onPressLeft?: () => void;
};

const Header: React.FC<HeaderProps> = ({
  leftIcon = 'back',
  rightIcon = 'cart',
  title,
  reddot = false,
  onPressLeft,
}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPressLeft}>
        <Icons color="parisM" name={leftIcon} />
      </Pressable>
      <Text fontFamily="dmsansBold" fontSize="ms">
        {title}
      </Text>
      <View>
        <Icons color="parisM" name={rightIcon} />
        {reddot && <View style={styles.redDot} />}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  redDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.froly,
    position: 'absolute',
    right: -5,
    top: 0,
    borderWidth: 1,
    borderColor: colors.white,
  },
});
