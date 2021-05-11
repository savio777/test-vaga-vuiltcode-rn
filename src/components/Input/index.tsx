import React from 'react';

import {TextInputProps} from 'react-native';

import {TextInput} from './styles';

const Input: React.FC<TextInputProps> = ({...props}) => (
  <TextInput {...props} />
);

export default Input;
