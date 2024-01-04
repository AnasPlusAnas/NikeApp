import React from 'react';
import { FlatList, Image, StyleSheet, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { productSlice } from '../store/productSlice';

const ProductsScreen = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable
            style={styles.itemContainer}
            onPress={() => {
              dispatch(productSlice.actions.setSelectedProduct(item.id));
              navigation.navigate('Product Details');
            }}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  itemContainer: {
    width: '50%',
    padding: 1,
  },
});
