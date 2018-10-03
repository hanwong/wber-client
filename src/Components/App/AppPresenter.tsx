import PropTypes from 'prop-types';
import React from 'react';

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IProps> = ({isLoggedIn}) => {
  return isLoggedIn ? <span>You are IN</span> : <span>You are OUT</span>
};

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

export default AppPresenter;