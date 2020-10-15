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
        return () => {const user = Object.assign({}, {
            email: "demo@user.edu",
            password: "demouser",
        });
        this.props.processForm(user)
            .then(this.props.closeModal)
            .then(() => this.props.history.push('/'));
    }}

    render() {
        const errors = {}
        this.props.errors.forEach((err) => {
            errors[err.split(" ")[0].toLowerCase()] = err
        })
        const email = (<div className="form-username">
                        <input 
                            className={errors['username'] ? "session-err" : "session-input"}
                            placeholder="Your username"
                            type="text" 
                            value={this.state.username} 
                            onChange={this.handleChange('username')} 
                        />
                        {errors['username'] ? <p className="login-err" >{errors['username']}</p> : ''}
                    </div>)
        const {formType} = this.props
        return (
            <div className="session">
                {formType === "Sign In" ? <button 
                    onClick={this.demoUserLogin()}
                    className="demo"
                    >
                    Demo User
                </button> : ''}
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <div className="form-seperator">
                        {formType === "Sign In" ? <>
                        <div className="line-1px"></div>
                        <span>or</span>
                        <div className="line-1px"></div> </>
                        : null}
                    </div>
                    <div className="form-email">
                        <input 
                            className={errors['email'] ? "session-err" : "session-input" }
                            type="text" 
                            placeholder="Your email address"
                            value={this.state.email} 
                            onChange={this.handleChange('email')} 
                        />
                        {errors['email'] ? <p className="login-err" >{errors['email']}</p> : ''}
                    </div>
                    <div className="form-password">
                        <input 
                        className={errors['password'] ? "session-err" : "session-input"}
                            type="password" 
                            placeholder="Your password"
                            value={this.state.password} 
                            onChange={this.handleChange('password')} 
                        />
                        {errors['password'] ? <p className="login-err" >{errors['password']}</p> : ''}
                    </div>
                    {formType === 'Sign Up' ? email : ""}
                    <button className='session-submit-button'>{formType}</button>
                    
                </form>
                <p class="modal-fine-print">We may use your email and devices for updates and tips on SoundCrowd's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.</p>
            </div>
        )
    }
}

export default withRouter(SessionForm);
