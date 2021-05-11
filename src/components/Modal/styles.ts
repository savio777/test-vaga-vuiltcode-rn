import styled, {css} from 'styled-components/native';

import colors from '../../helpers/colors';

interface ModalProps {
  open: boolean;
}

export const Container = styled.View<ModalProps>`
  ${props =>
    props.open &&
    css`
      flex: 1;
      justify-content: center;
      align-items: center;
    `}
`;

export const Content = styled.View<ModalProps>`
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundColor};
  border-width: 1px;
  border-radius: 7px;
  ${props =>
    props.open &&
    css`
      width: 90%;
      height: 70%;
    `}
`;
