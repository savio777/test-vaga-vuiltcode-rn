import styled, {css} from 'styled-components/native';

import colors from '../../helpers/colors';

interface ButtonsProps {
  principal?: boolean;
}

export const Container = styled.TouchableOpacity<ButtonsProps>`
  background-color: ${colors.blue};
  flex: 1;
  max-height: 50px;
  border-radius: 7px;

  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-bottom: 5px;

  ${props =>
    props.principal &&
    css`
      width: 60%;
    `}
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
`;
