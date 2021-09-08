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
        {/* <FormControl>
          <Select
            // value={age}
            // onChange={handleChange}
            label="Age"
          >
            <MenuItem value={1}>Ethereum</MenuItem>
            <MenuItem value={56}>Polygon</MenuItem>
            <MenuItem value={137}>BSC</MenuItem>
          </Select>
        </FormControl> */}
      </div>
      <div className="metamask-address">{account && account}</div>
    </div>
  );
};

export default withRouter(AppHeader);
