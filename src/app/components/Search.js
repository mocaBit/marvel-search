import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startSearch, setCharacters } from '../actions/menu';
import api from '../api';

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearching: false,
            query: '',
            timeout: null
        }
    }

    search(query) {        
        if(query.length > 0){
            api.characters.search(query);
        }
    } 

    manage(event) {
        let timeout = this.state.timeout;
        clearTimeout(timeout);
        const query = event.target.value;
        timeout = setTimeout(()=>{this.search(query)}, 500);
        this.setState({timeout});
    }        

    render() {
        return(
            <div className="search_component align-content-md-center">
                <div className="text-center">    
                    <input 
                        type="text"
                        placeholder="Search..."
                        className="form-control search-input"
                        onChange={(e)=>this.manage(e)}/> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { search } = state;
    return {
        search
    }
}

export default connect(mapStateToProps, { startSearch, setCharacters })(Search);