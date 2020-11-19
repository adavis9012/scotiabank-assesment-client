import React, {useReducer} from 'react';
import {AUTH_TOKEN} from "../../config/constants";
import {ApolloError, gql, useMutation} from "@apollo/client";
import {RouteComponentProps} from "react-router";
import Button from "../atoms/Button";
import './styles/Login.scss';
import Input from "../atoms/Input";

interface State {
    login?: boolean
    email?: string
    password?: string
    name?: string
    idCard?: string
    error?: string
}

interface Action extends State {
    type: 'SET_LOGIN' | 'SET_EMAIL' | 'SET_PASSWORD' | 'SET_NAME' | 'SET_ID_CARD' | 'SET_ERROR'
}

interface Data {
    login: any
    signup: any
}

const SIGNUP_MUTATION = gql`
    mutation SignupMutation($email: String!, $citizenshipCard: String!, $password: String!, $name: String!, $lastname: String!) {
        signup(email: $email , citizenshipCard: $citizenshipCard , password: $password , name: $name , lastname: $lastname ) {
            token
        }
    }
`;

const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`;

const loginReducer = (state: State, action: Action) => {
    switch (action.type) {
        case "SET_LOGIN":
            return {
                ...state,
                login: action.login
            }
        case "SET_EMAIL":
            return {
                ...state,
                email: action.email
            }
        case "SET_PASSWORD":
            return {
                ...state,
                password: action.password
            }
        case "SET_NAME":
            return {
                ...state,
                name: action.name
            }
        case "SET_ID_CARD":
            return {
                ...state,
                idCard: action.idCard
            }
        case "SET_ERROR":
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

const Login: React.FC<RouteComponentProps> = (({history}) => {
    let [state, dispatch] = useReducer(loginReducer, {
        login: true,
        email: '',
        password: '',
        name: '',
        idCard: '',
        error: '',
    });
    const mutationType = state.login ? LOGIN_MUTATION : SIGNUP_MUTATION;

    const [loginMutation] = useMutation(mutationType, {
        variables: {
            email: state.email,
            password: state.password,
            name: state.password
        },
        onCompleted: (data => handleConfirm(data)),
        onError: (error => handleError(error)),
    });

    function render() {
        return (
            <div className="login">
                <h4 className="login_title">{state.login ? 'Ingresar' : 'Registrarse'}</h4>
                <div>{state.error && state.error}</div>
                <form className="login_form">
                    {renderNameInput()}
                    <Input
                        value={state.email}
                        onChange={e => dispatch({type: 'SET_EMAIL', email: e.target.value})}
                        placeholder="Correo electronico"
                    />
                    {renderIdCardInput()}
                    <Input
                        value={state.password}
                        onChange={e => dispatch({type: 'SET_PASSWORD', password: e.target.value})}
                        placeholder="Contraseña"
                    />
                    <Button className="login_button" onClick={() => loginMutation()}>
                        {state.login ? 'ingresar' : 'registrarse'}
                    </Button>
                </form>
                <div
                    className="login_text login_text-selectable"
                    onClick={() => dispatch({type: 'SET_LOGIN', login: !state.login})}
                >
                    {state.login
                        ? '¿Necesita crear una cuenta?'
                        : '¿Ya tiene una cuenta?'
                    }
                </div>
            </div>
        );
    }

    function renderNameInput() {
        return !state.login && (
            <Input
                value={state.name}
                onChange={e => dispatch({type: 'SET_NAME', name: e.target.value})}
                placeholder="Nombre"
            />
        );
    }

    function renderIdCardInput() {
        return !state.login && (
            <Input
                value={state.idCard}
                onChange={e => dispatch({type: 'SET_ID_CARD', email: e.target.value})}
                placeholder="Documento de identidad"
            />
        );
    }

    async function handleConfirm(data: Data) {
        const {token} = state.login ? data.login : data.signup;

        saveUserData(token);
        history.push('/accounts');
    }

    function handleError(error: ApolloError) {
        console.log({error})
        dispatch({type: 'SET_ERROR', error: error.message});
    }

    function saveUserData(token: string) {
        localStorage.setItem(AUTH_TOKEN, token);
    }

    return render();
});

export default Login;
