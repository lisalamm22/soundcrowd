// import { connect } from 'react-redux';
// import SessionForm from './session_form'
// import { login, clearErrors } from '../actions/session_actions'

// const mapStateToProps = (state) => {
//     return ({
//         errors: state.errors.session,
//         formType: 'Sign In',
//     })
// }

// const mapDispatchToProps = (dispatch) => {
//     return ({
//         processForm: (user) => {
//             return dispatch(login(user))
//         },
//         clearErrors: () => {
//             return dispatch(clearErrors())
//         }
//     })
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors } from '../actions/session_actions';
import { openModal, closeModal } from '../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign In',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);