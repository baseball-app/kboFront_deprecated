import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Header from '../login/headers';
import { styles } from '../login/styles';

interface Step4Props {
    prevStep: () => void;
}

const Step4: React.FC<Step4Props> = ({ prevStep }) => {
    const { control, handleSubmit, setValue } = useForm();
    const [selectedTeam, setSelectedTeam] = useState<string>('');

    const onSubmit = (data: any) => {
        console.log(data);
        alert('회원가입이 완료되었습니다!');
    };

    const handleTeamPress = (team: string) => {
        setSelectedTeam(team);
        setValue('team', team);
    };

    const teams = [
        'LG 트윈스', 'KT 위즈', 'SSG 랜더스', 'NC 다이노스', '두산 베어스',
        'KIA 타이거즈', '롯데 자이언츠', '삼성 라이온즈', '한화 이글스', '키움 히어로즈'
    ];

    return (
        <View >
            <Header onBack={prevStep} />
            <View style={styles.card}>
                <Text style={styles.title}>마이팀을 선택해주세요</Text>
                <View style={styles.teams}>
                    {teams.map((team) => (
                        <TouchableOpacity
                            key={team}
                            style={[styles.team, selectedTeam === team && { backgroundColor: 'black' }]}
                            onPress={() => handleTeamPress(team)}
                        >
                            <Text style={[styles.teamText, selectedTeam === team && { color: 'white' }]}>
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
                    disabled={!selectedTeam}
                >
                    <Text style={styles.buttonText}>시작하기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Step4;

