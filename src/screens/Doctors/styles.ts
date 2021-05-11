import styled from 'styled-components/native';

import colors from '../../helpers/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${colors.backgroundColor};
`;

export const Cards = styled.View`
  flex: 1;
  flex-direction: row;
  border-width: 1px;
  border-color: ${colors.blue};
  border-radius: 5px;
  padding: 7px;
  margin-bottom: 10px;
  max-height: 40px;
  height: 100%;
  width: 70%;

  align-items: center;
`;

export const Title = styled.View`
  flex: 1;
  width: 80%;
`;

export const Right = styled.View`
  flex: 1;
  width: 20%;
  flex-direction: row;
  justify-content: flex-end;
`;
