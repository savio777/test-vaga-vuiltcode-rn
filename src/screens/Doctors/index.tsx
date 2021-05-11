import React, {useCallback, useEffect, useState} from 'react';

import {Text, Alert, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '../../services/api';
import {ApplicationState} from '../../store';
import {AuthState} from '../../store/modules/Auth/types';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Cards, Right, Title} from './styles';
import {configsApi} from '../../helpers/configs';
import colors from '../../helpers/colors';

interface IDoctors {
  id: string;
  name: string;
  crm: string;
  crmUf: string;
  patients: Array<any>;
}

interface ResponseGetDoctors {
  itens: IDoctors[];
  pageSize: number;
  totalPages: number;
  totalRecords: number;
}

const Doctors: React.FC = () => {
  const {accessToken}: AuthState = useSelector<ApplicationState>(
    state => state.auth,
  );

  const [listDoctors, setListDoctors] = useState<IDoctors[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageSize, setPageSize] = useState(0);

  const [openModal, setOpenModal] = useState(false);
  const [typeModalDoctor, setTypeModalDoctor] = useState<'create' | 'update'>(
    'create',
  );
  const [idDoctorUpdate, setIdDoctorUpdate] = useState('');
  const [nameDoctorModal, setNameDoctorModal] = useState('');
  const [crmDoctorModal, setCrmDoctorModal] = useState('');
  const [crmUfDoctorModal, setCrmUfDoctorModal] = useState('');

  const initialFunction = useCallback(async () => {
    try {
      const response = await api.get('/doctors', configsApi(accessToken));

      const responseData: ResponseGetDoctors = response.data.data;

      setListDoctors([...responseData.itens]);
      setTotalPages(responseData.totalPages);
      setTotalRecords(responseData.totalRecords);
      setPageSize(responseData.pageSize);
    } catch (error) {
      console.log('err ', error);
      Alert.alert('Erro', 'Erro ao pegar lista');
    }
  }, [accessToken]);

  useEffect(() => {
    initialFunction();
  }, [initialFunction]);

  async function createDoctor() {
    try {
      const response = await api.post(
        '/doctors/create',
        {
          name: nameDoctorModal,
          crm: crmDoctorModal,
          crmUf: crmUfDoctorModal,
        },
        configsApi(accessToken),
      );

      if (response.status === 200) {
        const newDoctor: IDoctors = response.data?.data;

        Alert.alert('Cadastro Concluído', newDoctor.name);

        setListDoctors([...listDoctors, newDoctor]);
        setOpenModal(false);
        setNameDoctorModal('');
        setCrmDoctorModal('');
        setCrmUfDoctorModal('');
      }
    } catch (error) {
      if (error?.response?.data?.errors) {
        Alert.alert('Erro!', error?.response?.data?.errors[0]);
      } else {
        Alert.alert('Erro!', '');
      }
      console.log('err', error);
    }
  }

  async function deleteDoctor(id: string) {
    try {
      const response = await api.delete(
        `/doctors/delete/${id}`,
        configsApi(accessToken),
      );

      if (response.status === 200) {
        const newListDoctors = listDoctors.filter(doc => doc.id !== id);
        setListDoctors(newListDoctors);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', '');
    }
  }

  function openModalEditDoctor(index: number) {
    const doctor = listDoctors[index];

    setOpenModal(true);
    setIdDoctorUpdate(doctor.id);
    setNameDoctorModal(doctor.name);
    setCrmDoctorModal(doctor.crm);
    setCrmUfDoctorModal(doctor.crmUf);
    setTypeModalDoctor('update');
  }

  async function updateDoctor() {
    try {
      const response = await api.put(
        `/doctors/update/${idDoctorUpdate}`,
        {
          name: nameDoctorModal,
          crm: crmDoctorModal,
          crmUf: crmUfDoctorModal,
        },
        configsApi(accessToken),
      );

      if (response.status === 200) {
        setOpenModal(false);
        setTypeModalDoctor('create');
        setNameDoctorModal('');
        setCrmDoctorModal('');
        setCrmUfDoctorModal('');
        initialFunction();

        Alert.alert('Atualizado com sucesso', '');
      }
    } catch (error) {
      if (error?.response?.data?.errors) {
        Alert.alert('Erro!', error?.response?.data?.errors[0]);
      } else {
        Alert.alert('Erro!', '');
      }
      console.log('err', error);
    }
  }

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
        <Button
          principal
          onPress={() => {
            typeModalDoctor === 'create' ? createDoctor() : updateDoctor();
          }}>
          {typeModalDoctor === 'create' ? 'Cadastrar' : 'Editar'}
        </Button>
        <Button
          principal
          onPress={() => {
            setOpenModal(false);
            setTypeModalDoctor('create');
            setNameDoctorModal('');
            setCrmDoctorModal('');
            setCrmUfDoctorModal('');
          }}>
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

        <ScrollView
          style={{height: '75%', width: '100%'}}
          contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
          {listDoctors.map((doctor, index: number) => (
            <Cards key={String(doctor.id)}>
              <Title>
                <Text>{doctor.name}</Text>
              </Title>
              <Right>
                <Icon
                  name="pencil"
                  color={colors.orange}
                  size={22}
                  style={{marginRight: 5}}
                  onPress={() => openModalEditDoctor(index)}
                />
                <Icon
                  name="delete"
                  color={colors.error}
                  size={22}
                  onPress={() => deleteDoctor(doctor.id)}
                />
              </Right>
            </Cards>
          ))}
        </ScrollView>
      </Container>
    </>
  );
};

export default Doctors;
