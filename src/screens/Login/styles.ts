import styled from 'styled-components/native';

import {Platform} from 'react-native';

import colors from '../../helpers/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 30px ${Platform.OS === 'android' ? 60 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${colors.orange};
  margin: 64px 0 24px;
`;

export const TextError = styled.Text`
  font-size: 16px;
  color: ${colors.error};
`;
