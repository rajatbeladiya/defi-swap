import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RouteDetails from './RouteDetails';

class RouteDetailsContainer extends Component {
  render() {
    const { priceRoute } = this.props;
    return (
      <RouteDetails priceRoute={priceRoute} />
    )
  }
}

RouteDetailsContainer.propTypes = {
  priceRoute: PropTypes.instanceOf(Object),
};

RouteDetailsContainer.defaultProps = {
  priceRoute: {},
};

const mapStateToProps = state => ({
  priceRoute: state.landing.priceRoute,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteDetailsContainer);
