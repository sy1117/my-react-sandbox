import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const styles = theme => ({
  card: {
  },
  title:{
    fontSize: '1.0rem'
  },
  media: {
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'contain'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class ProductView extends React.Component {
  
  state = { 
    wishButtonColor : "default"
  };

  static getDerivedStateFromProps(props, state) {
    // Any time the current user changes,
    // Reset any parts of state that are tied to that user.
    if (props.isWishItem) {
      return {
        wishButtonColor :"secondary"
      };
    }else{
      return {
        wishButtonColor :"default"
      };
    }
    return null;
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader className={classes.title}
          title={this.props.name}
          subheader={this.props.price + " at."+this.props.from}
          titleTypographyProps={{variant:"subtitle1"}}>
          >
        </CardHeader>
        <CardMedia
          className={classes.media}
          image={this.props.src} //"/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton 
            color={this.state.wishButtonColor}
            onClick={this.props.onToggleWish.bind(this)}
            aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

ProductView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductView);