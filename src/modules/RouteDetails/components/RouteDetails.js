import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const RouteDetails = ({ priceRoute }) => {
  return (
    <div className="route-details">
      <div className="best-route">
        <h3 className="title">BEST ROUTE</h3>
        <TableContainer component={Paper} className="table-container">
          <Table className="table-content">
            <TableHead className="table-head">
              <TableRow className="table-row">
                <TableCell className="table-cell">EXCHANGE</TableCell>
                <TableCell className="table-cell">QTY</TableCell>
                <TableCell className="table-cell">PRICE&nbsp;(ETH/USDT)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table-body">
              {priceRoute && priceRoute.bestRoute && priceRoute.bestRoute.map(route => (
                <TableRow key={route.exchange} className="table-row">
                  <TableCell className="table-main-cell">{route.exchange}</TableCell>
                  <TableCell className="table-cell">{Math.round(route.percent)}%</TableCell>
                  <TableCell className="table-cell">{route.destAmount / 10 ** 18}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="other-routes">
        <h3 className="title">OTHER ROUTES</h3>
        <TableContainer component={Paper} className="table-container">
          <Table className="table-content">
            <TableHead className="table-head">
              <TableRow className="table-row">
                <TableCell className="table-cell">EXCHANGE</TableCell>
                <TableCell align="right" className="table-cell">PRICE&nbsp;(ETH/USDT)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table-body">
              {priceRoute && priceRoute.others && priceRoute.others.map(route => (
                <TableRow key={route.exchange} className="table-row">
                  <TableCell className="table-main-cell">{route.exchange}</TableCell>
                  <TableCell className="table-cell">{route.unit / 10 ** 18}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

RouteDetails.propTypes = {
  priceRoute: PropTypes.instanceOf(Object),
};

RouteDetails.defaultProps = {
  priceRoute: {},
};

export default RouteDetails;
