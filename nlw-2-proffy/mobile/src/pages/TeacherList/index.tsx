import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView, TextInput, RectButton, BorderlessButton } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import InputField from '../../components/InputField';

import styles from './styles';

import searchIcon from '../../assets/images/icons/w-search.png'
import {Feather} from '@expo/vector-icons';



export default function TeachersList(){
    const [isFilterFormVisable,setIsFilterFormVisable] = useState(false);
    const [subject,setSubject] = useState('');
    const [week_day,setWeekDay] = useState('');
    const [time,setTime]= useState('');

    
    function handleToogleFiltersVisable() {
        setIsFilterFormVisable(!isFilterFormVisable);
    }
    return(
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponíveis"
                headerRight={(
                    <BorderlessButton onPress={handleToogleFiltersVisable}>
                        <Feather name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                )}
            >
               {isFilterFormVisable &&( 
                    <View style={styles.searchForm}>
                    <InputField name="Matéria" label="Qual a Matéria" />
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <InputField value="subject" onChangeText={text =>setSubject(text)} name="Dia da Semana" label="Qual o dia da semana"/>

                            <InputField name="Horário" label="Qual o Horário"/>

                            <RectButton>
                                <Image source={searchIcon} style={styles.searchImage}/>
                            </RectButton>
                        </View>
                    </View>
                    
                    </View>
               )}
            </PageHeader>
            <ScrollView 
                style={styles.teachersItemList}
                contentContainerStyle={{
                    paddingHorizontal:16,
                    paddingBottom:16,
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    );
}