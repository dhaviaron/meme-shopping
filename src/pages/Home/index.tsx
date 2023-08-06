import React from "react";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/MaterialIcons";

import {
  AddItemButton,
  CardItem,
  CartSize,
  Container,
  Header,
  ItemButtonText,
  Picture,
  RemoveItemButton,
  ShoppingFloatButton,
  Title,
} from "./styles";

import { useFetchData } from "../../services/api/api";

import { FlatList, RefreshControl, View } from "react-native";
import {
  useShoppingCart,
  useShoppingCartActions,
} from "../../contexts/shoppingCart";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/AppStack";

export interface Item {
  id: string;
  name: string;
  url: string;
}

type homeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

const Home: React.FC = () => {
  const { navigate } = useNavigation<homeScreenProp>();
  const { shoppingCart, cartSize } = useShoppingCart();
  const shoppingCartDispatch = useShoppingCartActions();

  const { data, loading, reloadData } = useFetchData();

  const renderListItems = (item: { id: string; name: string; url: string }) => {
    return (
      <CardItem>
        <Picture source={{ uri: item.url }} />

        <Title>{item.name}</Title>
        {shoppingCart.find((cartItem) => cartItem.item.id === item.id) ? (
          <RemoveItemButton
            onPress={() => {
              shoppingCartDispatch({
                type: "REMOVE_ITEM",
                payload: { item: item },
              });
            }}
          >
            <ItemButtonText>Remove</ItemButtonText>
          </RemoveItemButton>
        ) : (
          <AddItemButton
            onPress={() => {
              shoppingCartDispatch({
                type: "ADD_ITEM",
                payload: { item: item },
              });
            }}
          >
            <ItemButtonText>Add</ItemButtonText>
          </AddItemButton>
        )}
      </CardItem>
    );
  };

  function handleNavigateToShoppingCart() {
    navigate("ShoppingCart");
  }

  return (
    <Container>
      <Header>
        <ShoppingFloatButton onPress={handleNavigateToShoppingCart}>
          {cartSize > 0 && <CartSize>{cartSize.toString()}</CartSize>}
          <Icon color={"#FFF"} name="shopping-cart" size={28} />
        </ShoppingFloatButton>
      </Header>

      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        key="list"
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => renderListItems(item)}
        contentContainerStyle={{ paddingHorizontal: 25 }}
        onEndReachedThreshold={0.3}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={reloadData} />
        }
        ListEmptyComponent={
          !loading && data.length === 0 ? (
            <View style={{ flex: 1, backgroundColor: "green" }}>
              <Title style={{ textAlign: "center" }}>
                No results for current search
              </Title>
            </View>
          ) : null
        }
        ListFooterComponent={
          loading && data.length >= 10 ? (
            <>
              {Array(2)
                .fill(null)
                .map((_, index) => (
                  <CardItem key={index}>
                    <View style={{ height: 45, width: 45 }} />
                  </CardItem>
                ))}
            </>
          ) : null
        }
      />
    </Container>
  );
};

export default Home;
