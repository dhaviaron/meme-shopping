import styled from "styled-components/native";

import colors from "../../assets/colors/colors";

import { getStatusBarHeight, ifIphoneX } from "react-native-iphone-x-helper";
import { Platform } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  ${ifIphoneX(
    {
      paddingTop: 30,
    },
    {
      paddingTop: 20,
    }
  )};
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  min-height: 80px;
  padding: 20px 0;
  border-bottom-width: 1px;
  border-bottom-color: gray;
`;

export const CardItem = styled.TouchableOpacity`
  background: #f7f7f7;
  width: 160px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AddItemButton = styled.TouchableOpacity`
  background-color: green;
  border-radius: 10px;
  height: 30px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
`;

export const ItemButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-family: "ObjectSans-Heavy";
`;

export const RemoveItemButton = styled.TouchableOpacity`
  background-color: red;
  border-radius: 10px;
  height: 30px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
`;

export const Title = styled.Text`
  height: 40px;
  font-size: 16px;
  font-family: "ObjectSans-Heavy";
  margin-top: 10px;
`;

export const CartSize = styled.Text`
  width: 20px;
  height: 20px;
  position: absolute;
  right: -10px;
  bottom: 35px;
  border-radius: 50px;
  background: #092247;
  text-align: center;
  color: #fff;
  justify-content: center;
  align-items: center;
`;

export const ShoppingFloatButton = styled.TouchableOpacity`
  background: ${colors.primary};
  position: absolute;
  width: 55px;
  height: 55px;
  bottom: 15px;
  right: 20px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const Picture = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 100px;
  height: 100px;
  border-radius: 20px;
`;
