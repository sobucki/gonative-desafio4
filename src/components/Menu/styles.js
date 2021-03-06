import styled from 'styled-components/native';
import { metrics, colors } from '~/styles';

export const Container = styled.View`
  height: 60px;
  background-color: ${colors.primary};
`;

export const ScrollMenu = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const MenuList = styled.FlatList.attrs({
  horizontal: true,
})``;

export const ButtonMenu = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;
  align-content: center;

  padding: ${metrics.basePadding}px;
  border-color: #fff;
  margin-left: ${metrics.baseMargin}px;
  border-bottom-width: ${({ selected }) => (selected ? 5 : 0)};
`;

export const TextButton = styled.Text`
  font-weight: bold;
  color: #fff;
`;
