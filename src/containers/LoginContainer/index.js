import * as React from 'react';
import {TextInput, View} from 'react-native';
import {
    Icon, Form
} from 'native-base';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Login from '../../screens/Login';
import validator from '../../validator/index';
import * as loginAction from './sagas/actions';
import toastr from '../../components/Toastr/index';
import loginStyle from '../../styles/login';
import componentRounded from '../../styles/component-rounded';
import * as loadingAction from '../../common/actions';

export interface Props {
    navigation: any;
    valid: boolean;
}

export interface State {
}

class LoginForm extends React.Component<Props, State> {
    textInput: any; // eslint-disable-line

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    renderInput({input, meta: {touched, error}}) {
        return (
            <View
                style={[loginStyle.inputIcon, loginStyle.formGroup]}
                error={error && touched}
            >
                <Icon
                    active
                    name={input.name === 'LoginID' ? 'person' : 'unlock'}
                    style={[loginStyle.icon, error && touched ? componentRounded.red : {}]}
                />
                <TextInput
                    ref={c => (this.textInput = c)} // eslint-disable-line
                    placeholder={input.name === 'LoginID' ? 'Username' : 'Password'}
                    placeholderTextColor={error && touched ? '#f36a5a' : '#BFBFBF'}
                    style={[loginStyle.input, loginStyle.inputIcon]}
                    secureTextEntry={input.name === 'Password'}
                    {...input}
                />
            </View>
        );
    }

    login() {
        if (this.props.valid) {
            const user = {
                LoginID: this.props.LoginID,
                Password: this.props.Password,
            };
            this.props.actions.login(user);
            this.props.actions.loading(true);
        } else {
            toastr.showToast('Enter valid Username & Password');
        }
    }

    render() {
        const form = (
            <Form>
                <Field
                    name="LoginID"
                    component={this.renderInput}
                    validate={[validator.required]}
                />
                <Field
                    name="Password"
                    component={this.renderInput}
                    validate={[validator.required]}
                />
            </Form>
        );
        return <Login loginForm={form} onLogin={() => this.login()}/>;
    }
}

const LoginContainer = reduxForm({
    form: 'login',
})(LoginForm);
const selector = formValueSelector('login');

function mapStateToProps(state) {
    const LoginID = selector(state, 'LoginID');
    const Password = selector(state, 'Password');
    return {
        user: state.loginReducer,
        LoginID,
        Password,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, loginAction, loadingAction), dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
