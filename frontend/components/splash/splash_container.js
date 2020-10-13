import { connect } from 'react-redux';
import Splash from './splash';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ entities, session }) => ({
    currentUser: entities.users[session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps,mapDispatchToProps)(Splash)