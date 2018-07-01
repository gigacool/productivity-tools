import React, { Component } from 'react';

class ErrorBoundary extends React.Component {

  state = { 
    error: null,
    hasError: false,
    info: info
  };

  componentDidCatch(error, info) {
    this.setState({ 
      error: error,
      hasError: true, 
      info: info
    });
  }

  render() {
    // TODO create a context specific error
    let { error, hasError, info } = this.state;
    if (hasError) {
      return (
        <div className="error-component">
          <h2>{'An error occured'}</h2>
          <pre>
            <code>
              {error}
            </code>
          </pre>
        </div>  
        );
      }
    return this.props.children;
  }
}