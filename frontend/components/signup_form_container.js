import { connect } from 'react-redux';
import SessionForm from './session_form'
import { signup } from '../actions/session_actions'

const mapStateToProps = (state) => {
    return ({
        errors: state.errors.session,
        formType: 'Sign Up',
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: (user) => {
            return dispatch(signup(user))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)