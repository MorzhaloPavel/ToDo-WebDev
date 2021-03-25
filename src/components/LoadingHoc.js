import React, { Component } from 'react'

const isEmpty = (prop) => (
  prop === null ||
  prop === undefined ||
  (prop.hasOwnProperty('length') && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0)
)

const LoadingHoc = (loadingProp) => (WrappedComponent) => {
  return class LoadingHoc extends Component {
    render() {
      return isEmpty(this.props[loadingProp]) ? 
      <div className='loader' /> :
      <WrappedComponent {...this.props} />
    }
  }
}

export default LoadingHoc 
