import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';


function TeacherItem(){
    return( 
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar} 
                    source={{ uri: 'https://avatars1.githubusercontent.com/u/32313981?s=460&u=c05e6e956fd8219424dae9c44ff5eb463bd3a1a4&v=4'}}
                />

                <View style={styles.profileInfo}> 
                    <Text style={styles.name}>Leandro Santo</Text>
                    <Text style={styles.subject}>Química</Text>
                    
                </View>
            </View>

            <Text style={styles.bio}> 
                Entusiasta das melhores tecnologias de química avançada.
                 {'\n'} {'\n'}   
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </Text>

            <View style={styles.footer}>
                <Text   style={styles.price}>
                    Preço/Hora {'   '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton  style={[styles.favoriteButton, styles.favorited]}>
                        {/*<Image source={heartOutLineIcon} />*/}
                        <Image source={unFavoriteIcon} />
                    </RectButton>
                    <RectButton  style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em Contato</Text>
                    </RectButton>
                </View>
            </View>

        </View>
    )
}
export default TeacherItem;