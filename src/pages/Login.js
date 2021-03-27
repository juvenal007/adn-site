import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, CustomInput } from 'reactstrap';


import 'parsleyjs/dist/parsley.min.js';

import getApi from '../utils/api/index';
import swal from 'sweetalert';
import 'sweetalert2/src/sweetalert2.scss'
class Login extends Component {

    state = {
        formLogin: {
            email: 'admin@admin.cl',
            password: 'admin'
        },
        show: true
    }

    cargaEstadosCodigo = () => {
        if (!this.state.show) {
          return `card card-flat whirl double-up`;    
        }
        else {
          return 'card card-flat';
        }
      }
     componentDidMount() {
   
     }


    validateOnChange = event => {
        const input = event.target;
        const form = input.form
        const value = input.type === 'checkbox' ? input.checked : input.value;

        // const result = FormValidator.validate(input);

        this.setState({
            [form.name]: {
                ...this.state[form.name],
                [input.name]: value,
                // errors: {
                //     ...this.state[form.name].errors,
                //     [input.name]: result
                // }
            }
        });      

    }

    onSubmit = e => {

        e.preventDefault();    
        this.setState({show: false});
        let email = this.state.formLogin.email.toLowerCase().trim();
        let password = this.state.formLogin.password;

        let url = 'login';
      
        
        getApi(url, "LOGIN", { email, password }, (status, data, msg) => {
            console.log(status, data, msg);
            if (status) {       
                    this.setState({show: true});
                    this.props.history.push(`home-principal`);               
            } else {
                console.log(msg)
                this.setState({show: true});
                this.setState( {formLogin: {
                    usuario: '',
                    password: ''
                }});
                swal({
                    title: 'Datos Incorrectos',
                    text: 'Verifique sus credenciales',
                    icon: "error",
                  });
            }
            // this.detailsLoading(false);
            console.log(status, data, msg);
        }, true);
    }

    /* Simplify error check */
    hasError = (formName, inputName, method) => {
        return  this.state[formName] &&
                this.state[formName].errors &&
                this.state[formName].errors[inputName] &&
                this.state[formName].errors[inputName][method]
    }
    
    render() {
        return (
            <div className="block-center mt-4 wd-xl">
                <div className={this.cargaEstadosCodigo()}>
                    <div className="card-header text-center bg-dark">
                        <a href="">
                            <img className="block-center rounded" src="img/logo.png" alt="Logo"/>
                        </a>
                    </div>
                    <div className="card-body">
                        <p className="text-center py-2">Iniciar Sistema.</p>
                        <form className="mb-3" name="formLogin" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <div className="input-group with-focus">
                                    <Input type="email"
                                        name="email"
                                        className="border-right-0"
                                        placeholder="Enter email"                                      
                                        onChange={this.validateOnChange}
                                        data-validate='["required", "email"]'
                                        value={this.state.formLogin.email}/>
                                    <div className="input-group-append">
                                        <span className="input-group-text text-muted bg-transparent border-left-0">
                                            <em className="fa fa-envelope"></em>
                                        </span>
                                    </div>
                                    { this.hasError('formLogin','email','required') && <span className="invalid-feedback">Campo requerido</span> }
                                    { this.hasError('formLogin','email','email') && <span className="invalid-feedback">Ingrese Email Válido</span> }
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group with-focus">
                                    <Input type="password"
                                        id="id-password"
                                        name="password"
                                        className="border-right-0"
                                        placeholder="Password"
                                        invalid={this.hasError('formLogin','password','required')}
                                        onChange={this.validateOnChange}
                                        data-validate='["required"]'
                                        value={this.state.formLogin.password}
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text text-muted bg-transparent border-left-0">
                                            <em className="fa fa-lock"></em>
                                        </span>
                                    </div>
                                    <span className="invalid-feedback">Campo Requerido</span>
                                </div>
                            </div>
                            <div className="clearfix">
                                <CustomInput type="checkbox" id="Recordar"
                                    className="float-left mt-0"
                                    name="Recordar"
                                    label="Recordar">
                                </CustomInput>
                                <div className="float-right">
                                    <Link to="recover" className="text-muted">Olvido su contraseña?</Link>
                                </div>
                            </div>
                            <button className="btn btn-block btn-primary mt-3" type="submit">Login</button>
                        </form>
                        {/* <p className="pt-3 text-center">Need to Signup?</p>
                        <Link to="register" className="btn btn-block btn-secondary">Register Now</Link> */}
                    </div>
                </div>
                <div className="p-3 text-center">
                    <span className="mr-2">&copy;</span>
                    <span>2021</span>
                    <span className="mx-2">-</span>
                    <span>Software Test</span>
                    <br/>
                  
                </div>
            </div>
        );
    }
}

export default Login;
