import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// Custom Component 
import ProductView from './ProductView'

// import products from '../assets/data/products.json'

const styles = {
  root: {
    padding: '2px 4px',
    flexWrap: 'wrap',
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


class ProductList extends React.Component{

  static getDerivedStateFromProps(props, state) {
    return {
      products : props.products,
      wishList: props.wishList
    }
  }

  wishToggleHandler (index){
    let item =this.props.products[index];
    item.isWishItem = !!!item.isWishItem;

    this.setState({
      products : this.state.products
    })
    console.log(item);
    this.props.onWish(item);
  }

  render(){
    const { classes } = this.props;

    return (
      <div className={classes.root}>
          <GridList cellHeight={450} cols={4} spacing={0} className={classes.gridList}>
              {this.state.products.map((item,idx) => (
                  <GridListTile key={item.id} rows={1} cols={1}>
                      <ProductView 
                          key={item.id}
                          src={item.src} 
                          name={item.name} 
                          from={item.from} 
                          price={item.price} 
                          isWishItem={item.isWishItem}
                          onToggleWish={this.wishToggleHandler.bind(this, idx)}
                      />
                  </GridListTile>
              ))}
          </GridList>
      </div>
    )
  }
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired,
  images : PropTypes.array.isRequired
}

// export default MainPage
export default withStyles(styles)(ProductList);
