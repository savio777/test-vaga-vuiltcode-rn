import React from 'react';

import {Modal} from 'react-native';
import {Container, Content} from './styles';

interface ModalProps {
  open: boolean;
}

const ModalPersonalized: React.FC<ModalProps> = ({children, open = false}) => (
  <Container open={open}>
    <Modal visible={open} animationType="slide" transparent>
      <Container open={open}>
        <Content open={open}>{children}</Content>
      </Container>
    </Modal>
  </Container>
);

export default ModalPersonalized;
