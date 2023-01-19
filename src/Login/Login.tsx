import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import './Login.scss';

type formLoginType = {
    name: string;
    password: string;
}

function Login() {
    const [form, setForm] = useState<formLoginType>({name: '', password: ''});
    const [disabledButton, setDisableButton] = useState<boolean>(false);
    const navigate = useNavigate();

    function redirectRoute() {
        navigate('/main');
    }

    function loginRequest() {
        setDisableButton(true);
        fakeLogin(form).then(() => {
            navigate('/main');
        }).catch((e) => {
            setDisableButton(false);
            console.error(e);
        })
    }

    function fakeLogin(credentials: formLoginType) {
        const loginPromise = new Promise((resolve, reject) => {
            if (credentials.name === 'a') {
                setTimeout(() => {
                    resolve("success");
                }, 1000);
            } else {
                reject('error');
            }

        });
        return loginPromise;
    }

    function onFormInputChange(e: any) {
        const formCopy: any = {...form};
        formCopy[e.target.name] = e.target.value;
        setForm(formCopy);
    }

    return (
        <div className="Login">
            <div>Login</div>
            <div className={'login-box'}>
                <div className={'login-input-wrapper'}>
                    <label>name: </label>
                    <input name={'name'} value={form['name']} onChange={onFormInputChange}/>
                </div>
                <div className={'login-input-wrapper'}>
                    <label>password: </label>
                    <input name={'password'} value={form['password']} onChange={onFormInputChange}/>
                </div>
                <button className={'login-button'} onClick={loginRequest} disabled={disabledButton}>submit</button>
            </div>
            <div onClick={redirectRoute}>go to contacts</div>
        </div>
    );
}

export default Login;
