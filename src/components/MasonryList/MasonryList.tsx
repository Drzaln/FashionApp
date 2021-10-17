import React from 'react';
import {
  Image,
  NativeScrollEvent,
  Pressable,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import isCloseToBottom from 'utils/isCloseToBottom';
import randomHeightMinMax from 'utils/randomHeightMinMax';

interface MasonryListProps extends Omit<ScrollViewProps, 'onScroll'> {
  data: T[];
  gap?: number;
  numColumns?: number;
  style?: StyleProp<ViewStyle>;
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
  renderCustomItem?: ({item: {}, i: number}) => React.ReactNode;
}

const MasonryList: React.FC<MasonryListProps> = ({
  data,
  gap = 16,
  numColumns = 2,
  style,
  onEndReached,
  onEndReachedThreshold,
  renderCustomItem,
  ...rest
}: MasonryListProps) => {
  const {width} = useWindowDimensions();
  const min = width * 0.6;
  const max = width * 0.8;

  const list = Object.keys(data).map(i => ({
    ...data[Number(i)],
    height: randomHeightMinMax(min, max),
  }));

  return (
    <ScrollView
      {...rest}
      removeClippedSubviews={true}
      style={style}
      contentContainerStyle={{
        flexDirection: 'row',
        paddingHorizontal: gap,
        paddingTop: gap,
      }}
      scrollEventThrottle={16}
      onScroll={({nativeEvent}: {nativeEvent: NativeScrollEvent}) => {
        if (isCloseToBottom(nativeEvent, onEndReachedThreshold || 0.1)) {
          onEndReached?.();
        }
      }}>
      {Array.from(Array(numColumns), (_, num) => {
        return (
          <>
            <View key={num.toString()} style={{flex: 1 / numColumns}}>
              {list
                .filter((_, index) => index % numColumns === num)
                .map((item, i) => {
                  if (renderCustomItem) {
                    return renderCustomItem({item, i});
                  } else {
                    return (
                      <MasonryItem
                        key={item.key}
                        height={item.height}
                        image={item.image}
                        gap={gap}
                      />
                    );
                  }
                })}
            </View>
            {num < numColumns - 1 && (
              <View key={`${num + 2}`} style={{width: gap}} />
            )}
          </>
        );
      })}
    </ScrollView>
  );
};

export default MasonryList;

const MasonryItem = ({
  height,
  gap,
  image,
}: {
  height: number;
  gap: number;
  image: string;
}) => {
  return (
    <Pressable
      style={{
        height,
        backgroundColor: 'lightgrey',
        marginBottom: gap,
        borderRadius: gap / 2,
        overflow: 'hidden',
      }}>
      <Image
        source={{uri: image}}
        resizeMode="cover"
        style={{...StyleSheet.absoluteFillObject}}
      />
    </Pressable>
  );
};
