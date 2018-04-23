import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navigate, setCharacters } from '../../actions/menu';
import ReactLoading from 'react-loading';

export class CharacterList extends Component {

  render() {
    return (
      <div className="character_list_component">                
          <div className="CharapterList">
            <div className={this.props.search.isSearching ? 'searching':'hide'}>
              <div>
                  <ReactLoading type='spin' color='#FFFFFF'/>
              </div>
            </div>   
              { 
              this.props.characters.map((character, idx) => {
                const { path, extension } = character.thumbnail;
                return(
                  <div className="track"
                    key={idx}>
                    <img className="track-img"
                        src={path+'.'+extension}
                        alt="track"/>
                    <p className="track-text">
                      {character.name}
                    </p>
                  </div>  
                )
              })    
              }  
             
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { search, characters } = state;
  return {
    search,
    characters
  }
}

export default connect(mapStateToProps, {navigate, setCharacters})(CharacterList);
