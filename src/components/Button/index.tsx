import React from 'react';

import {TouchableOpacityProps} from 'react-native';

import {Container, TextButton} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  principal?: boolean;
}

const Button: React.FC<ButtonProps> = ({children, onPress, principal}) => (
  <Container principal={principal} onPress={onPress}>
    <TextButton>{children}</TextButton>
  </Container>
);

export default Button;
