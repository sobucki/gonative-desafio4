import styled from 'styled-components/native';
import { metrics, colors } from '~/styles';

export const Container = styled.View`
  /* flex: 1; */
  background-color: #fff;
`;

export const ScrollMenu = styled.ScrollView`
  height: 60px;
  /* position: absolute; */
  /* top: 0;
  left: 0; */
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
  /* border-bottom-width: 5px; */
  margin-left: 21px;
`;

export const TextButton = styled.Text`
  font-weight: bold;
  color: #fff;
`;
export const StageView = styled.View`
  flex: 1;
`;
