import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {colors} from 'assets/theme/Theme';
import BottomBar from 'components/BottomBar/BottomBar';
import Header from 'components/Header/Header';
import MasonryList from 'components/MasonryList/MasonryList';
import MenuBar from 'components/MenuBar/MenuBar';
import SearchBar from 'components/SearchBar/SearchBar';
import Text from 'components/Text/Text';
import {homeList} from 'constant/constant';
import React from 'react';
import {ImageBackground, Pressable, StyleSheet, View} from 'react-native';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const Home: React.FC<Props> = ({navigation}) => {
  const customItem = ({item, i}) => {
    return (
      <Pressable
        key={i}
        style={[styles.customWrapper, {height: item.height}]}
        onPress={() => navigation.navigate('Detail')}>
        <View style={styles.imageWrapper}>
          <ImageBackground source={{uri: item.image}} style={styles.image}>
            {item.discount ? (
              <View style={styles.discount}>
                <Text color="white" fontSize="xs">
                  {item.discount}
                </Text>
              </View>
            ) : null}
          </ImageBackground>
        </View>
        <View style={styles.nameWrapper}>
          <Text color="black" fontSize="s" fontFamily="interSemiBold">
            {item.name}
          </Text>
          <Text color="black" fontSize="s" fontFamily="interSemiBold">
            {item.price}
          </Text>
        </View>
        <View style={styles.brandWrapper}>
          <Text color="darkGray" fontSize="xs" fontFamily="interRegular">
            {item.brand}
          </Text>
          {item.discCut ? (
            <Text
              color="darkGray"
              fontSize="xs"
              fontFamily="interRegular"
              style={styles.price}>
              {item.discCut}
            </Text>
          ) : null}
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Voguish" leftIcon="menu" reddot />
      <SearchBar />
      <MenuBar />
      <MasonryList
        data={homeList}
        showsVerticalScrollIndicator={false}
        gap={20}
        renderCustomItem={customItem}
      />
      <BottomBar />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  customWrapper: {
    marginBottom: 18,
  },
  imageWrapper: {
    backgroundColor: colors.selago,
    borderRadius: 15,
    overflow: 'hidden',
    height: '80%',
  },
  image: {...StyleSheet.absoluteFillObject},
  nameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  brandWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  price: {textDecorationLine: 'line-through'},
  discount: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: colors.froly,
    margin: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
