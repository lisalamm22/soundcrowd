import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "", 
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoUserLogin = this.demoUserLogin.bind(this)
    }

    componentDidMount(){
        this.props.clearErrors()
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(this.props.closeModal)
            .then(() => this.props.history.push('/'));
    }

    handleChange(field) {
        return (e) => { this.setState({ [field]: e.target.value }) }
    }

    demoUserLogin(){
        const user = Object.assign({}, {
            // username: "demo",
            email: "demo@user.edu",
            password: "demouser",
        });
        this.props.processForm(user)
            .then(this.props.closeModal)
            .then(() => this.props.history.push('/'));
    }

    // renderErrors() {
    //     debugger
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={i}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }


    render() {
        const errors = {}
        this.props.errors.forEach((err) => {
            errors[err.split(" ")[0].toLowerCase()] = err
        })
        console.log(errors)
        const email = (<div>
                        <input 
                            className={errors['username'] ? "session-err" : "session-input"}
                            // className = 'session-err'
                            placeholder="Your username"
                            type="text" 
                            value={this.state.username} 
                            onChange={this.handleChange('username')} 
                        />
                        {errors['username'] ? <p className="login-err" >{errors['username']}</p> : ''}
                    </div>)
        const {formType} = this.props
        debugger
        return (
            <div>
                <h2>SoundCrowd</h2>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    {/* Please {this.props.formType} or {this.props.otherForm} */}
                    {/* <div onClick={this.props.closeModal} className="close-x"></div> */}
                    <br />
                    
                        <input 
                            className={errors['email'] ? "session-err" : "session-input" }
                            type="text" 
                            placeholder="Your email address"
                            value={this.state.email} 
                            onChange={this.handleChange('email')} 
                        />
                        {errors['email'] ? <p className="login-err" >{errors['email']}</p> : ''}
                        <input 
                        className={errors['password'] ? "session-err" : "session-input"}
                            type="password" 
                            placeholder="Your password"
                            value={this.state.password} 
                            onChange={this.handleChange('password')} 
                        />
                        {errors['password'] ? <p className="login-err" >{errors['password']}</p> : ''}
                    {formType === 'Sign Up' ? email : ""}
                    {/* {this.renderErrors()} */}
                    <button className='session-submit-button'>{formType}</button>
                    
                    {formType === "Sign In" ? <button 
                        onClick={this.demoUserLogin}
                        className="demo"
                        >
                        Demo User
                    </button> : ''}
                </form>
                    {/* {this.props.otherForm} */}
            </div>
        )
    }
}

export default withRouter(SessionForm);
