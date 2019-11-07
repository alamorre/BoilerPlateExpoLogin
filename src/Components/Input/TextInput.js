import React from 'react';
import { TextInput, StyleSheet, Dimensions } from 'react-native';

/**
 * to be wrapped with redux-form Field component
 */
export default function TextField(props) {
    const { input, ...inputProps } = props;
    const { meta: { touched, error } } = props;
    const hasError = touched && error;

    // Important not to autocap password
    const autoCapitalize = props.type === 'password' ? 'none' : 'sentences'
    const secureText = props.type === 'password'

    return (
        <TextInput
            {...inputProps}
            placeholderTextColor="#454545" 
            autoCapitalize={autoCapitalize}
            placeholder={props.placeholder}
            autoCompleteType={input.type}
            onChangeText={input.onChange}
            secureTextEntry={secureText}
            autoFocus={props.autoFocus}
            editable={!props.disabled}
            style={styles.TextField}
            onFocus={input.onFocus}
            onBlur={input.onBlur}
            value={input.value}
        />
    );
}

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    TextField: {
        backgroundColor: '#fafafa',
        width: screenWidth - 75,
        borderColor: "#454545",
        paddingRight: 24,
        borderRadius: 8,
        paddingLeft: 24,
        borderWidth: 1,
        fontSize: 16,
        height: 55,
    },
});
