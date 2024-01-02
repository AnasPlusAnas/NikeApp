import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import CartListItem from '../components/CartListItem';
import cart from '../data/cart';
import ShoppingCartTotals from '../components/ShoppingCartTotals';

//// Main Component
const ShoppingCartScreen = () => {
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={<ShoppingCartTotals />}
      />

      <Pressable style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
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

export default ShoppingCartScreen;
