import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

interface Step4Props {
  prevStep: () => void;
  navigation: any;
}

const Step4: React.FC<Step4Props> = ({ prevStep, navigation }) => {
  const { control, handleSubmit, setValue } = useForm();
  const [selectedTeam, setSelectedTeam] = useState<string>('');

  const onSubmit = (data: any) => {
    console.log(data);
    Alert.alert(
      '회원가입이 완료되었습니다!',
      '',
      [
        {
          text: '확인',
          onPress: () => navigation.navigate('Login')
        }
      ]
    );
  };

  const handleTeamPress = (team: string) => {
    setSelectedTeam(team);
    setValue('team', team);
  };

  const teams = [
    'LG 트윈스',
    'KT 위즈',
    'SSG 랜더스',
    'NC 다이노스',
    '두산 베어스',
    'KIA 타이거즈',
    '롯데 자이언츠',
    '삼성 라이온즈',
    '한화 이글스',
    '키움 히어로즈',
  ];

  return (
    <View>
      <View style={styles.card}>
        <TouchableOpacity onPress={prevStep} style={styles.backButton}>
          <Icon name="chevron-back-outline" size={25} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>마이팀을 선택해주세요</Text>
        <Text style={styles.subText}>
          마이팀은 내가 응원하고 싶은 최애 야구 구단을 뜻해요.
        </Text>
        <View style={styles.teams}>
          {teams.map(team => (
            <TouchableOpacity
              key={team}
              style={[
                styles.team,
                selectedTeam === team && { backgroundColor: 'black' },
              ]}
              onPress={() => handleTeamPress(team)}>
              <Text
                style={[
                  styles.teamText,
                  selectedTeam === team && { color: 'white' },
                ]}>
                {team}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Controller
          control={control}
          name="team"
          render={({ field }) => <></>}
          defaultValue=""
        />
        <TouchableOpacity
          style={selectedTeam ? styles.button : styles.buttonDisabled}
          onPress={handleSubmit(onSubmit)}
          disabled={!selectedTeam}>
          <Text style={styles.buttonText}>시작하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Step4;
