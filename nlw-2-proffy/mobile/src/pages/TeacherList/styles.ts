import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#f0f0f7',
    },
    teachersItemList:{
        marginTop: -40,
    },
    searchForm:{
        marginBottom: 8,
    },

    inputGroup:{
        
    },
    inputBlock:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent:"space-between", 
        width: '50%',
    },
    searchImage: {
        backgroundColor: '#04d361',
        width: 56,
        height:56,
        borderRadius:8,
        justifyContent:'center',
        alignItems: 'center',
        marginRight: 8,
      
    }
});

export default styles;