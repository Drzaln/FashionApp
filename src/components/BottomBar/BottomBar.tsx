import {Icons} from 'components/Icons/Icons';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const BottomBar = () => {
  return (
    <View style={styles.container}>
      <Icons name="home" />
      <Icons name="category" />
      <Icons name="heart" />
      <Icons name="profile" />
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 34,
  },
});
