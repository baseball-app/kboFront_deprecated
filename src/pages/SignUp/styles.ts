import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
    container: ViewStyle;
    card: ViewStyle;
    backButton: TextStyle;
    button: ViewStyle;
    buttonDisabled: ViewStyle;
    input: TextStyle;
    title: TextStyle;
    subTitle: TextStyle;
    subText: TextStyle;
    inputWrapper: ViewStyle;
    label: TextStyle;
    checkboxContainer: ViewStyle;
    checkbox: ViewStyle;
    checkboxChecked: ViewStyle;
    checkboxInner: ViewStyle;
    labelSelected: TextStyle;
    labelUnselected: TextStyle;
    teams: ViewStyle;
    team: ViewStyle;
    teamText: TextStyle;
    buttonText: TextStyle;
    terms:ViewStyle;
    checkboxContainerSelected:ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        justifyContent: 'space-between', 
        padding: 16,
        marginTop: 150,
        
    },
    terms: {
        marginBottom:"50%",
        padding:3,
        marginRight:10,
        justifyContent:"flex-start",


    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width:"100%",
        marginBottom: 12,
        padding:10,

    },
    checkboxContainerSelected: {
        backgroundColor: '#e0e0e0',
        borderRadius:10,
        width:"100%", 
    },
    checkbox: {
        borderRadius:50,
        width: 30,
        height: 30,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        
        flexDirection: 'row',
    },
    checkboxChecked: {
        borderRadius:20,
        borderColor: 'black',
        backgroundColor: 'black',
        
    },
    checkboxInner: {
        backgroundColor: '#fff',
        marginRight:"90%"
    },
    card: {
        backgroundColor: '#f8f8f8',
        padding: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        width: '100%',
        height: '100%'
    },
    backButton: {
        marginBottom:30,
        marginTop:20,
        fontSize: 30,
        color: 'black',

    },
    button: {
        bottom:16,
        left:16,
        right:16,
        position:"absolute",
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonDisabled: {
        bottom:16,
        left:16,
        right:16,
        position:"absolute",
        backgroundColor: '#CCCCCC',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        color: '#000',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        marginRight:140
    },
    subTitle: {
        fontSize: 16,
        marginBottom: 20,
    },
    subText: {
        color: '#999',
        marginBottom: 20,
    },
    inputWrapper: {
        marginHorizontal: 30,
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },

    labelSelected: {
        color: '#000',
    },
    labelUnselected: {
        color: '#ccc',
    },
    teams: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    team: {
        backgroundColor: '#E0E0E0',
        padding: 20,
        borderRadius: 8,
        width: '30%',
        alignItems: 'center',
        marginBottom: 10,
    },
    teamText: {
        fontSize: 16,
    },
    buttonText: {
        color: 'white',
    },
    
});

