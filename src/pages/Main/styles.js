import styled from 'styled-components/native';
import { metrics, colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  height: 60;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: ${colors.primary};
  font-size: 16;
  font-weight: bold;
`;

export const ScrollMenu = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  height: 60px;
`;

export const MenuList = styled.FlatList.attrs({
  horizontal: true,
})`
  background-color: ${colors.primary};
`;

export const ButtonMenu = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;
  align-content: center;

  padding: 5px;
  border-color: #fff;
  margin-left: 21px;
`;

export const TextButton = styled.Text`
  font-weight: bold;
  color: #fff;
`;
export const ItemList = styled.FlatList.attrs({
  columnWrapperStyle: { justifyContent: 'space-around' },
  numColumns: 2,
})`
  background-color: ${colors.lighter};
`;

export const ItemFolder = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  /* padding: ${metrics.basePadding}px; */
  width: 170px;
  height: 350px;
  margin-top:${metrics.baseMargin}px;
  padding:${metrics.basePadding}px;
  /* max-height: 310px; */
  background-color: #fff;
  /* margin: ${metrics.baseMargin}px;  */
  border-radius: ${metrics.baseRadius}px;
`;

export const ImageItem = styled.Image`
  height: 200px;
  margin: ${metrics.baseMargin}px;
`;

export const ItemName = styled.Text`
  color: ${colors.black};
  font-size: 16;
  /* padding: 5px; */
`;

export const ItemBrand = styled.Text`
  color: ${colors.regular};
  font-size: 14;
  /* padding: 5px; */
`;

export const ItemPrice = styled.Text`
  color: ${colors.secundary};
  font-size: 16;
  font-weight: bold;
  /* padding: 5px; */
`;
