import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dashboard from './Dashboard';
import CharacterList from './Character/CharacterList';

class RootScene extends Component {

  render() {
    const { page } = this.props.menu;

    switch(page) {
      case 'DASHBOARD':
        return <Dashboard />
      case 'CHARACTERS':
        return <CharacterList />
      default:
        return <Dashboard />
    }
  }

}

const mapStateToProps = (state) => {
  return { ...state };
}

export default connect(mapStateToProps)(RootScene);
