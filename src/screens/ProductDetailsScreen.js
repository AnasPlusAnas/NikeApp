import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import products from '../data/products';

const ProductDetailsScreen = () => {
  const product = products[0]; // TODO: Replace with actual product
  const { width } = useWindowDimensions();

  const addToCart = () => {
    console.warn('Added to cart');
  };

  return (
    <View>
      <ScrollView>
        {/* Image Carousel */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ aspectRatio: 1, width }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled // Scroll one image at a time, kind of like a book
        />

        <View style={{ padding: 10 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <Pressable style={styles.button} onPress={addToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>

      {/* Navigation Icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
  },
  title: { fontSize: 34, fontWeight: '500', marginVertical: 10 },
  price: { fontWeight: '500', fontSize: 16 },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300',
  },
  button: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: 'black',
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { color: 'white', fontWeight: '500', fontSize: 18 },
});

export default ProductDetailsScreen;
