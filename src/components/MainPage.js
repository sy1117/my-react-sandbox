import React from 'react'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
};


const MainPage= (props) => {
  const { classes } = props;

  return (
  <Paper className={classes.root} elevation={1}>
    <InputBase className={classes.input} placeholder="Search Google Maps" />
    <IconButton className={classes.iconButton} aria-label="Search">
      <SearchIcon />
    </IconButton>
  </Paper>
  )
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

// export default MainPage
export default withStyles(styles)(MainPage);
