import ProductsScreen from './screens/ProductsScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ShoppingCartScreen from './screens/ShoppingCartScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          headerRight: () => (
            <Pressable
              style={{
                flexDirection: 'row',
                marginRight: 10,
                gap: 8,
              }}
              onPress={() => {
                navigation.navigate('Cart');
              }}
            >
              <FontAwesome5 name="shopping-cart" size={18} color="gray" />
              <Text style={{ fontWeight: '500', fontSize: 16 }}>1</Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="Product Details"
        component={ProductDetailsScreen}
        options={{ presentation: 'modal' }}
      />
      <Stack.Screen name="Cart" component={ShoppingCartScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
