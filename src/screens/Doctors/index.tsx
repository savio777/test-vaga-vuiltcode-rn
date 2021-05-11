import React, {useEffect, useState} from 'react';

import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import api from '../../services/api';
import {ApplicationState} from '../../store';
import {AuthState} from '../../store/modules/Auth/types';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container} from './styles';

interface Doctors {
  id: string;
  name: string;
  crm: string;
  patients: Array<any>;
}

interface ResponseGetDoctors {
  itens: Doctors[];
  pageSize: number;
  totalPages: number;
  totalRecords: number;
}

const Doctors: React.FC = () => {
  const {accessToken}: AuthState = useSelector<ApplicationState>(
    state => state.auth,
  );

  const [listDoctors, setListDoctors] = useState<Doctors[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageSize, setPageSize] = useState(0);

  const [openModal, setOpenModal] = useState(true);
  const [nameDoctorModal, setNameDoctorModal] = useState('');
  const [crmDoctorModal, setCrmDoctorModal] = useState('');
  const [crmUfDoctorModal, setCrmUfDoctorModal] = useState('');

  useEffect(() => {
    async function initialFunction() {
      try {
        const response = await api.get('/doctors', {
          headers: {Authorization: `Bearer ${accessToken}`},
        });

        const responseData: ResponseGetDoctors = response.data;

        setListDoctors([...responseData.itens]);
        setTotalPages(responseData.totalPages);
        setTotalRecords(responseData.totalRecords);
        setPageSize(responseData.pageSize);
      } catch (error) {
        console.log('err get doctors ', error.response);
      }
    }
    initialFunction();
  }, [accessToken]);

  return (
    <>
      <Modal open={openModal}>
        <Input
          value={nameDoctorModal}
          onChangeText={setNameDoctorModal}
          placeholder="Nome"
        />
        <Input
          value={crmDoctorModal}
          onChangeText={setCrmDoctorModal}
          placeholder="CRM"
        />
        <Input
          value={crmUfDoctorModal}
          onChangeText={setCrmUfDoctorModal}
          placeholder="CRM UF"
        />
        <Button principal>Cadastrar</Button>
        <Button principal onPress={() => setOpenModal(false)}>
          Cancelar
        </Button>
      </Modal>

      <Container>
        {listDoctors.length === 0 && (
          <Text>Nenhum médico cadastrado ainda.</Text>
        )}
        <Button principal onPress={() => setOpenModal(true)}>
          Cadastrar Médico
        </Button>

        {listDoctors.map(doctor => (
          <View key={String(doctor.id)}>
            <Text>{doctor.name}</Text>
          </View>
        ))}
      </Container>
    </>
  );
};

export default Doctors;
