import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Header,
  Row,
  Column,
  HeaderTitle,
  BackButtonIcon,
  MainContainer,
  CartList,
  RemoveItemButton,
  RemoveItemButtonText,
  ItemContainer,
  ItemInfoContainer,
  ItemCircle,
  ItemTitle,
  ItemTotalContainer,
  ButtonBack,
  ButtonBackText,
  ItemTotalContainerQuantity,
  ItemTotalButton,
  ItemTotalButtonIconMinus,
  ItemTotalButtonIconPlus,
  ItemTotalQuantityLabel,
} from "./styles";
import {
  useShoppingCart,
  ICartItem,
  useShoppingCartActions,
  IShoppingCartItem,
} from "../../contexts/shoppingCart";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/AppStack";

type cartScreenProp = StackNavigationProp<RootStackParamList, "ShoppingCart">;

function ShoppingCartPage() {
  const { navigate } = useNavigation<cartScreenProp>();

  const { shoppingCart, cartSize, itemsQuantity } = useShoppingCart();

  const shoppingCartDispatch = useShoppingCartActions();

  function handleNavigateToHome() {
    navigate("Home");
  }

  const addOneItem = (item: ICartItem) => {
    shoppingCartDispatch({ type: "ADD_ITEM", payload: { item } });
  };

  const decreaseOneItem = (item: ICartItem) => {
    shoppingCartDispatch({ type: "DECREASE_ITEM", payload: { item } });
  };

  const clearShoppingCart = () => {
    shoppingCartDispatch({ type: "CLEAR_CART" });
  };

  const renderCartItem = (CartItem: IShoppingCartItem) => {
    return (
      <ItemContainer key={CartItem.item.id}>
        <ItemInfoContainer>
          <Row>
            <ItemCircle source={{ uri: CartItem.item.url }} />
            <Column>
              <ItemTitle>{CartItem.item.name}</ItemTitle>
            </Column>
          </Row>
        </ItemInfoContainer>
        <ItemTotalContainer>
          <ItemTotalContainerQuantity>
            <ItemTotalButton onPress={() => decreaseOneItem(CartItem.item)}>
              <ItemTotalButtonIconMinus />
            </ItemTotalButton>
            <ItemTotalQuantityLabel>{CartItem.quantity}</ItemTotalQuantityLabel>
            <ItemTotalButton onPress={() => addOneItem(CartItem.item)}>
              <ItemTotalButtonIconPlus />
            </ItemTotalButton>
          </ItemTotalContainerQuantity>
        </ItemTotalContainer>
      </ItemContainer>
    );
  };

  return (
    <>
      <Container>
        <Header>
          <BackButtonIcon onPress={handleNavigateToHome} />
          <HeaderTitle>My Cart</HeaderTitle>
          <ItemTitle>{itemsQuantity} added items</ItemTitle>

          <RemoveItemButton onPress={clearShoppingCart}>
            <RemoveItemButtonText>Remove ({cartSize})</RemoveItemButtonText>
          </RemoveItemButton>
        </Header>
        <MainContainer>
          <CartList<React.ElementType>
            showsVerticalScrollIndicator={false}
            data={shoppingCart}
            keyExtractor={({ item }: { item: { id: string } }) => item.id}
            renderItem={({ item }: { item: IShoppingCartItem }) => {
              return renderCartItem(item);
            }}
          />

          <ButtonBack onPress={handleNavigateToHome}>
            <ButtonBackText>Go Back</ButtonBackText>
          </ButtonBack>
        </MainContainer>
      </Container>
    </>
  );
}

export default ShoppingCartPage;
