import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../actions/session_actions'

const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.users[state.session.currentUserId]
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        logout: () => {
            return dispatch(logout())
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)