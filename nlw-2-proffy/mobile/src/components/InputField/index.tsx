import React, { ReactNode } from 'react';
import {View,Text,TextInput} from 'react-native';

import styles from './styles';

interface InputFieldProps {
    label: string,
    name: string,
}
const InputField: React.FunctionComponent<InputFieldProps> = ({label, name,...children}) => {
    return(
        <View>
            <Text style={styles.label}>{name}</Text>
            <TextInput
                placeholder={label}
                placeholderTextColor="#c1bccc"
                {...children}
            />
        </View>
    );
}
export default InputField;
