import styled from "styled-components/native";

import colors from "../../assets/colors/colors";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Platform } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  flex-direction: column;
  padding: 20px 30px;
`;

export const Header = styled.View`
  padding-top: ${Platform.OS === "ios" ? getStatusBarHeight() : 0}px;
`;

export const BackButtonIcon = styled(Icon).attrs({
  name: "angle-left",
  size: 28,
  color: "#000",
})``;

export const HeaderTitle = styled.Text`
  font-size: 26px;
  color: #000;
  font-family: "ObjectSans-Heavy";
  margin-top: 30px;
`;

export const MainContainer = styled.View`
  flex: 1;
  margin: 5px;
`;

export const CartList = styled.FlatList.attrs({
  contentContainerStyle: { paddingVertical: 20 },
})`
  margin: 0 0px;
`;

export const RemoveItemButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 5px;
  right: 0;
`;

export const RemoveItemButtonText = styled.Text`
  font-size: 12px;
  font-family: "ObjectSans-Regular";
  color: ${colors.primary};
`;

export const ItemContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const SeparatorList = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
`;

export const LineSeparator = styled.View`
  flex: 1;
  height: 1px;
  background: #c4c4c4;
  margin-left: 40px;
`;

export const ItemChefName = styled.Text`
  font-size: 14px;
  font-family: "ObjectSans-Regular";
  color: ${colors.primary};
`;

export const ItemInfoContainer = styled.View`
  flex: 1;
`;

export const ItemTotalContainer = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const ItemCircle = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  border-width: 1px;
  margin-right: 10px;
  border-color: ${colors.primary};
`;

export const ItemTitle = styled.Text`
  font-size: 14px;
  font-family: "ObjectSans-Regular";
  color: black;
  margin-right: 5px;
`;

export const ItemValue = styled.Text`
  font-size: 12px;
  font-family: "ObjectSans-Regular";
  color: ${colors.primary};
`;

export const ItemValueTotal = styled.Text`
  font-size: 14px;
  font-family: "ObjectSans-Heavy";
  color: ${colors.primary};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.View`
  flex-direction: column;
`;

export const ButtonBack = styled.TouchableOpacity`
  border-radius: 5px;
  border-color: ${colors.primary};
  border-width: 1px;

  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ButtonBackText = styled.Text`
  font-size: 14px;
  color: ${colors.primary};
  padding: 15px;
  font-family: "ObjectSans-Heavy";
`;

export const FooterContainer = styled.View`
  flex: 0.1;
  flex-direction: row;
  border-top-color: gray;
  border-top-width: 1px;
  background-color: #fff;
  padding: 25px;
  align-items: center;
`;

export const FooterContainerTotal = styled.View`
  flex: 1;
`;

export const FooterContainerButton = styled.TouchableOpacity`
  background-color: ${({ disabled }) => (disabled ? "gray" : colors.primary)};
  border-radius: 30px;
  padding: 5px 25px;
`;

export const FooterTotalLabel = styled.Text`
  color: #c4c4c4;
  font-size: 20px;
  font-family: "ObjectSans-Regular";
  margin-bottom: 5px;
`;

export const FooterTotalValue = styled.Text`
  color: ${colors.primary};
  font-size: 20px;
  font-family: "ObjectSans-Heavy";
`;

export const FooterContainerButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: "ObjectSans-Heavy";
  padding: 8px;
  text-align: center;
`;

export const ItemTotalContainerQuantity = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ItemTotalQuantityLabel = styled.Text`
  min-width: 50px;
  text-align: center;
  font-size: 12px;
  font-family: "ObjectSans-Regular";
`;

export const ItemTotalButton = styled.TouchableOpacity`
  background: ${colors.primary};
  width: 24px;
  padding: 6px 7px;
  border-radius: 20px;
`;

export const ItemTotalButtonIconPlus = styled(Icon).attrs({
  name: "plus",
  size: 12,
  color: "#FFF",
})``;

export const ItemTotalButtonIconMinus = styled(Icon).attrs({
  name: "minus",
  size: 12,
  color: "#FFF",
})``;

export const ContentRight = styled.View`
  align-self: flex-end;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
`;
