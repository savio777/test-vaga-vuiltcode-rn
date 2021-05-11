import styled from 'styled-components/native';
import colors from '../../helpers/colors';

export const Container = styled.TouchableOpacity`
  background-color: ${colors.blue};
  flex: 1;
  max-height: 50px;
  border-radius: 7px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
`;
