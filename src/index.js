/* eslint-disable */

// @material-ui/styles
// https://material-ui.com/css-in-js/basics/#migration-for--material-ui-core-users
// TODO Cleanup after Material UI v4 upgrade
import { install } from '@material-ui/styles';
install();

// Workaround for https://github.com/facebook/create-react-app/issues/3052
import './index.jsx';
