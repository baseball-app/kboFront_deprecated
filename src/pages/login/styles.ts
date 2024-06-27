import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
    container: ViewStyle;
    card: ViewStyle;
    header: ViewStyle;
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
}

export const styles = StyleSheet.create<Styles>({
    container: {
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
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    backButton: {
        fontSize: 16,
        color: '#007BFF',
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonDisabled: {
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
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    checkbox: {
        width: 30,
        height: 30,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        borderColor: 'black',
        backgroundColor: 'black',
    },
    checkboxInner: {
        width: 12,
        height: 12,
        backgroundColor: '#fff',
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
