import React from 'react';
import { withRouter } from 'react-router';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';



const AppHeader = ({ account }) => {
  return (
    <div className="app-header-container" id="app-header">
      <div className="app-name-wrapper">
        <div className="app-name">Defi Swap</div>
      </div>
      <div className="metamask-address">{account && account}</div>
    </div>
  );
};

export default withRouter(AppHeader);
