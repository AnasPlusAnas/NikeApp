import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import CartListItem from '../components/CartListItem';
import ShoppingCartTotals from '../components/ShoppingCartTotals';
import { useSelector, useDispatch } from 'react-redux';

//// Main Component
const ShoppingCartScreen = () => {
  const cart = useSelector((state) => state.cart.items);

  if (cart.length != 0) {
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
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: '500' }}>
          Your cart is empty
        </Text>
      </View>
    );
  }
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
