import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navigate, setCharacters } from '../../actions/menu';
import Post from '../../components/Post';
import Search from '../../components/Search';
import CharacterList from '../Character/CharacterList';

export class Dashboard extends Component {

  render() {
    return (
      <div className="dashboard__container">
        <Search />
        <CharacterList />
        <Post>
          <button style={{padding: 10}} onClick={() => this.props.navigate('CHARACTERS')}>
            Character List
          </button>
          <button style={{padding: 10}} onClick={() => this.props.setCharacters([{name: 'julio', id: 1}])}>
            Set Characters
          </button>
        </Post>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return Object.assign({},state);
}

export default connect(mapStateToProps, {navigate, setCharacters})(Dashboard);
