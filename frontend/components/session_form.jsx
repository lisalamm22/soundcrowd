import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "", 
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.history.push('/'));
    }

    handleChange(field) {
        return (e) => { this.setState({ [field]: e.target.value }) }
    }

    render() {
        const email = (<div>
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.handleChange('username')} />
                    </label>
                    <br /></div>)
        return (
            <div>
                <h2>{this.props.formType}</h2>
                <form onSubmit={this.handleSubmit}>
                    {this.props.formType === 'Sign In' ? <Link to='/signup' >SignUp</Link> : <Link to='/login' >Login</Link>}
                    <br />
                    
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleChange('email')} />
                    </label>
                    <br />
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
                    </label>
                    <br/>
                    {this.props.formType === 'Sign Up' ? email : ""}
                    
                    <input type="submit" value={this.props.formType} />
                </form>
                <ul>{this.props.errors.map((err, idx) => {
                    return <li key={idx}>{err}</li>
                })}</ul>
            </div>
        )
    }
}

export default SessionForm