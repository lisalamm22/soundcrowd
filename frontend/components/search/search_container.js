import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Search from './search';

const mapStateToProps = state => ({
    songs: state.entities.songs,
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Search));
