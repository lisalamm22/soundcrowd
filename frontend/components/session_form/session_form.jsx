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

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const email = (<div>
                        <input 
                            className="session-email"
                            placeholder="Your username"
                            type="text" 
                            value={this.state.username} 
                            onChange={this.handleChange('username')} 
                        />
                    </div>)
        const {formType} = this.props
        return (
            <div>
                <h2>SoundCrowd</h2>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    {/* Please {this.props.formType} or {this.props.otherForm} */}
                    {/* <div onClick={this.props.closeModal} className="close-x"></div> */}
                    <br />
                    
                        <input 
                            className="session-email"
                            type="text" 
                            placeholder="Your email address"
                            value={this.state.email} 
                            onChange={this.handleChange('email')} 
                        />

                        <input 
                            className="session-password"
                            type="password" 
                            placeholder="Your password"
                            value={this.state.password} 
                            onChange={this.handleChange('password')} 
                        />

                    {formType === 'Sign Up' ? email : ""}
                    {this.renderErrors()}
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
