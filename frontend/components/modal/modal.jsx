import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

class Modal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            closingModal: false
        }
        this.modalCloseTransition = this.modalCloseTransition.bind(this)
    }

    modalCloseTransition(){
        this.setState( {closingModal: true},() => {
            setTimeout(()=>{
                this.props.closeModal()
                this.setState({closingModal: false})
            }, 400)
        } )
    }

    shouldComponentUpdate(nextProps={modal: null, currentUser: null}, nextState){
        debugger
        if((nextState.closingModal === true || Boolean(nextProps.modal)) || Boolean(nextProps.currentUser)){
            return true; //rerender
        }
        return false;
    }
    
    render(){
    const {modal} = this.props
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className={`modal-background-${this.state.closingModal}`} 
            onClick={this.modalCloseTransition}>
            <div onClick={this.modalCloseTransition} className="close-x">&times;</div>
            <div className={`modal-child-${this.state.closingModal}`} 
                onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}};

// export default Modal

import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
// import Modal from './modal'

const mapStateToProps = state => {
    return {
        modal: state.ui.modal,
        currentUser: state.session.currentUserId,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
