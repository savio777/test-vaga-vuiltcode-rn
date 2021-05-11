import React, {useEffect, useState} from 'react';

import {FlatList, View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import api from '../../services/api';
import {ApplicationState} from '../../store';
import {AuthState} from '../../store/modules/Auth/types';

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
    <Container>
      {listDoctors.length === 0 && <Text>Nenhum médico cadastrado ainda.</Text>}
      {/*<FlatList
        keyExtractor={item => String(item.id)}
        data={listDoctors}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
        //style={{borderWidth: 1, borderColor: '#ccc'}}
        />*/}
      {listDoctors.map(doctor => (
        <View key={String(doctor.id)}>
          <Text>{doctor.name}</Text>
        </View>
      ))}
    </Container>
  );
};

export default Doctors;
