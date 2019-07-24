import styled from 'styled-components/native';

import { metrics, colors } from '~/styles';

export const Container = styled.View`
  margin: ${metrics.baseMargin}px;
  background-color: ${colors.lighter};
  flex: 1;
  align-items: stretch;
  justify-content: center;
`;

export const DetailItem = styled.View`
  flex: 1;
  /* flex-direction: column; */
  background-color: #f0f;
  justify-content: center;
  align-items: center;
  padding: ${metrics.basePadding}px;
`;

export const ImageProduct = styled.Image`
  height: 100;
  width: 100;
`;

export const Name = styled.Text`
  font-size: 20px;
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
`;

export const TextButton = styled.Text`
  color: #fff;
`;
