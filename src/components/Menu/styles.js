import styled from 'styled-components/native';
import { metrics, colors } from '~/styles';

export const Container = styled.View``;

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

  padding: ${metrics.basePadding}px;
  border-color: #fff;
  margin-left: ${metrics.baseMargin}px;
  border-bottom-width: ${({ selected }) => (selected ? 5 : 0)};
`;

export const TextButton = styled.Text`
  font-weight: bold;
  color: #fff;
`;
