import React from 'react';

import {TouchableOpacityProps} from 'react-native';

import {Container, TextButton} from './styles';

const Button: React.FC<TouchableOpacityProps> = ({children, onPress}) => (
  <Container onPress={onPress}>
    <TextButton>{children}</TextButton>
  </Container>
);

export default Button;
