import styled from 'styled-components/native';
import { metrics, colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
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
  width: 170px;
  height: 350px;
  margin-top: ${metrics.baseMargin}px;
  padding: ${metrics.basePadding}px;
  background-color: #fff;
  border-radius: ${metrics.baseRadius}px;
`;

export const ImageItem = styled.Image`
  height: 200px;
  margin: ${metrics.baseMargin}px;
`;

export const ItemName = styled.Text`
  color: ${colors.black};
  font-size: 16;
`;

export const ItemBrand = styled.Text`
  color: ${colors.regular};
  font-size: 14;
`;

export const ItemPrice = styled.Text`
  color: ${colors.secundary};
  font-size: 16;
  font-weight: bold;
`;
