import styled from 'styled-components/native';

import { metrics, colors } from '~/styles';

export const Container = styled.View`
  background-color: ${colors.lighter};
  flex: 1;
  align-items: stretch;
  justify-content: center;
`;

export const DetailItem = styled.View`
  flex: 1;
  /* flex-direction: column; */
  margin: ${metrics.baseMargin}px;
  background-color: #fff;
  border-radius: ${metrics.baseRadius}px;
  justify-content: center;
  align-items: center;
  padding: ${metrics.basePadding}px;
`;

export const ImageProduct = styled.Image.attrs({
  resizeMode: 'contain',
})`
  flex: 80;
  height: ${metrics.screenWidth - metrics.baseMargin * 2}px;
  width: ${metrics.screenWidth - metrics.baseMargin * 2}px;
`;

export const OverallView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 20;
`;
export const InfoView = styled.View`
  flex: 70;
  align-items: flex-start;
`;
export const PriceView = styled.View`
  flex: 30;
  align-items: flex-end;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: ${colors.black};
`;
export const Brand = styled.Text`
  color: ${colors.regular};
  font-size: 16;
`;
export const Price = styled.Text`
  color: ${colors.secundary};
  font-size: 20px;
  font-weight: bold;
`;
export const AddToCart = styled.TouchableOpacity`
  background-color: ${colors.secundary};
  /* flex: 1; */
  display: flex;
  width: 100%;
  align-items: center;
  height: 60px;
  margin-top: ${metrics.baseMargin}px;
  border-radius: ${metrics.baseRadius}px;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 18;
  font-weight: bold;
`;
