import React from 'react';
import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const {song} = this.props
        return (
            <div>SongTitle: {song.title}</div>
        )
    }
}

export default SongIndexItem