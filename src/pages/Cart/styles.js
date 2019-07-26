import styled from 'styled-components/native';
import { metrics, colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.lighter};
`;

export const ItemView = styled.View`
  flex-direction: row;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  padding: ${metrics.basePadding}px;
  height: 125px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const CartList = styled.FlatList`
  padding: ${metrics.basePadding * 2}px;
`;

export const ProductView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageView = styled.View`
  width: 60;
  height: 80;
  /* margin: 10px; */
`;
export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  flex: 1;
`;

export const ProductInfoView = styled.View`
  flex-direction: column;
  /* padding: 10px; */
`;

export const NameProduct = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.black};
`;
export const BrandProduct = styled.Text`
  color: ${colors.regular};
  font-size: 12px;
`;
export const PriceProduct = styled.Text`
  color: ${colors.secundary};
  font-size: 16px;
  font-weight: bold;
`;

export const QuantityView = styled.View`
  flex-direction: row;
  width: 100px;
  align-items: center;
  justify-content: space-evenly;
`;

export const QuantityInput = styled.TextInput.attrs({
  keyboardType: 'numeric',
})`
  border-width: 2px;
  border-color: #ccc;
  border-radius: 5px;
  width: 50px;
  height: 35px;
  justify-content: center;
  padding-left: 10px;
`;

export const RemoveItem = styled.TouchableOpacity`
  height: 35px;
  width: 35px;
  align-items: center;
  justify-content: center;
`;

export const TotalView = styled.View`
  height: 80px;
  background-color: ${colors.white};
  border-top-width: 1px;
  border-top-color: ${colors.light};

  align-items: center;
  justify-content: center;
`;
export const TotalValue = styled.Text`
  color: ${colors.secundary};
  font-size: 22px;
  font-weight: bold;
`;
export const SubTotal = styled.Text`
  color: ${colors.light};
  font-size: 18px;
  font-weight: bold;
`;
