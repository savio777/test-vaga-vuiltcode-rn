import React from 'react';

import {TouchableOpacity, Text} from 'react-native';

//import {useAuth} from '../../hooks/Auth';

import {Container} from './styles';

const Dashboard: React.FC = () => {
  //const {signOut} = useAuth();

  return (
    <Container>
      <TouchableOpacity onPress={() => {}}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Dashboard;
