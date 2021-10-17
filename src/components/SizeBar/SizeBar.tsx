import {colors} from 'assets/theme/Theme';
import Text from 'components/Text/Text';
import {size} from 'constant/constant';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

const SizeBar = () => {
  const [selected, setSelected] = React.useState<number>(0);
  return (
    <View style={styles.row}>
      {size.map((item, index) => (
        <Pressable
          key={item}
          style={[
            styles.size,
            {
              backgroundColor:
                selected === index ? colors.parisM : colors.white,
              borderColor:
                selected === index ? colors.parisM : colors.whiteSmoke,
            },
          ]}
          onPress={() => setSelected(index)}>
          <Text
            color={selected === index ? 'white' : 'darkGray'}
            fontSize="s"
            fontFamily="dmsansRegular"
            style={styles.sizeText}>
            {item}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default SizeBar;

const styles = StyleSheet.create({
  sizeText: {
    textTransform: 'uppercase',
  },
  size: {
    height: 30,
    minWidth: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
  },
  row: {flexDirection: 'row', alignItems: 'center', marginBottom: 27},
});
