import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import { connect } from 'react-redux';

import './screen.scss';

/**
 * TODO Add description to component
 * TODO add appropriate proptypes to component
 * TODO add unit tests to component
 */
export class $1 extends PureComponent {

  static PropTypes = {
    fetchData: PropTypes.func.isRequired
  };

  static defaultProps = {

  };

  componentDidMount(){
    let { fetchData } = this.props;
    fetchData();
  }

  render(){
    return (
      <h1>
        {'Hello, 你好, bonjour'}
      </h1>
    );
  }

}

function mapStateToProps(state){
  return {
    example:state.example
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchData: ()=> {
      dispatch({ type: 'SOME_FETCH_ACTION' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)($1);