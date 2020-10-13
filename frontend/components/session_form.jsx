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
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.handleChange('username')} />
                    </label>
                    <br /></div>)
        return (
            <div>
                <h2>SoundCrowd</h2>
                <form onSubmit={this.handleSubmit}>
                    Please {this.props.formType} or {this.props.otherForm}
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.props.formType === 'Sign In' ? <Link to='/signup' >SignUp</Link> : <Link to='/login' >Login</Link>}
                    <br />
                    
                    <label>Email:
                        <input 
                            type="text" 
                            value={this.state.email} 
                            onChange={this.handleChange('email')} 
                        />
                    </label>
                    <br />
                    <label>Password:
                        <input 
                            type="password" 
                            value={this.state.password} 
                            onChange={this.handleChange('password')} 
                        />
                    </label>
                    <br/>
                    {this.props.formType === 'Sign Up' ? email : ""}
                    {this.renderErrors()}
                    <input type="submit" value={this.props.formType} />
                </form>
                {this.props.formType === "Sign In" ? <button onClick={this.demoUserLogin}>Demo User</button> : ''}
            </div>
        )
    }
}

export default withRouter(SessionForm);
