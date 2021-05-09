import React, {useCallback, useRef} from 'react';

import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {useAuth} from '../../hooks/Auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Title} from './styles';
import colors from '../../helpers/colors';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const {signIn} = useAuth();

  const passwordInputRef = useRef<TextInput>(null);

  const handleSignin = useCallback(
    async (data: SignInFormData) => {
      try {
        await signIn({email: data.email, password: data.password});

        // Alert.alert('logado', user?.name);
        navigation.navigate('Dashboard');
      } catch (error) {
        if (error.response) {
          console.log(error.response);
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque suas credenciais.',
        );
      }
    },
    [signIn, navigation],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        enabled
        behavior={Platform.OS === 'android' ? undefined : 'padding'}>
        <ScrollView
          contentContainerStyle={{flex: 1}}
          keyboardShouldPersistTaps="handled">
          <Container>
            <Icon name="hospital" size={50} color={colors.orange} />

            <View>
              <Title>Faça seu login</Title>
            </View>

            <Input
              name="email"
              placeholder="Email"
              icon="mail"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoCompleteType="off"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInputRef.current.focus();
              }}
            />
            <Input
              ref={passwordInputRef}
              name="password"
              placeholder="Senha"
              icon="lock"
              textContentType="newPassword"
              returnKeyType="send"
              secureTextEntry
              onSubmitEditing={handleSignin}
            />

            <Button onPress={handleSignin}>Entrar</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
