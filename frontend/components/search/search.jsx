import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        let value = e.currentTarget.value;
        this.setState({ inputVal: value });
    }

    handleClick(e) {
        debugger
        let songId = e.currentTarget.value;
        this.props.history.push(`/songs/${songId}`)
        this.setState({inputVal: ""})
    }

    render() {
        const searchResults = this.state.inputVal === "" ? null : 
            Object.values(this.props.songs).map((song, idx) => {
                if (song.title.toUpperCase().match(this.state.inputVal.toUpperCase()) 
                    || song.artist.username.toUpperCase().match(this.state.inputVal.toUpperCase())
                    || song.genre.toUpperCase().match(this.state.inputVal.toUpperCase())) {
                return (
                    <li className="navbar-search-result-item" onClick={this.handleClick} 
                        key={idx} value={song.id}>
                        {song.title}
                    </li>
                );
                }
            })
        return (
        <div className="navbar-search-container">
            <input className = "navbar-search" placeholder="Search" 
                onChange={this.handleChange} value={this.state.inputVal} />
            <ul className="navbar-search-results">
            {searchResults}
            </ul>
        </div>
        );
    }
}

export default Search;