import {colors} from 'assets/theme/Theme';
import {Icons} from 'components/Icons/Icons';
import Text from 'components/Text/Text';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icons name="search" />
      </View>
      <Text fontSize="xs" color="veryLightGray" style={styles.marginL8}>
        Search Products
      </Text>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 47,
    borderWidth: 1,
    borderColor: colors.whiteSmoke,
    marginVertical: 10,
  },
  iconWrapper: {
    marginTop: 6,
  },
  marginL8: {
    marginLeft: 8,
  },
});
