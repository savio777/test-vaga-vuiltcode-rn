import React from 'react';

import {TouchableOpacity, Text} from 'react-native';

//import {useAuth} from '../../hooks/Auth';

import {Container} from './styles';

const Doctors: React.FC = () => {
  //const {signOut} = useAuth();

  return (
    <Container>
      <TouchableOpacity onPress={() => {}}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Doctors;
