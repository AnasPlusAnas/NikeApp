import React from 'react';
import { FlatList, Image, StyleSheet, View, Pressable } from 'react-native';
import products from '../data/products';
import { useNavigation } from '@react-navigation/native';

const ProductsScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Product Details', { item })}
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
