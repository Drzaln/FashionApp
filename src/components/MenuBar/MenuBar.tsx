import {colors} from 'assets/theme/Theme';
import {Icons} from 'components/Icons/Icons';
import Text from 'components/Text/Text';
import {menuBar} from 'constant/constant';
import React from 'react';
import {Pressable, ScrollView, StyleSheet, View} from 'react-native';

const MenuBar = () => {
  const [active, setActive] = React.useState(0);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconWrapper}>
        <Icons name="filter" />
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}>
        {menuBar.map((item, index) => (
          <Pressable
            key={item}
            onPress={() => setActive(index)}
            style={[
              styles.itemContainer,
              {
                backgroundColor:
                  active === index ? colors.parisM : colors.white,
              },
            ]}>
            <Text color={active === index ? 'white' : 'darkGray'} fontSize="xs">
              {item}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default MenuBar;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  container: {
    paddingRight: 20,
    marginVertical: 10,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginRight: 10,
  },
  itemContainer: {
    paddingBottom: 12,
    paddingTop: 10,
    paddingHorizontal: 10,
    minWidth: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.whiteSmoke,
    marginRight: 12,
  },
});
