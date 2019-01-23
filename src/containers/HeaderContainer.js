// Product List
import Header from '../components/Header';
// Redux Actions 
import * as actions from '../actions';
import {connect} from 'react-redux';
// Sample Data 
import products from '../assets/data/products';

const mapStateToProps = state=>{
    return {
        wishListCount : state.wishList.length
    }
}

const mapDispatchToProps = (dispatch)=>({
    // addWishList: (item)=>{
    //     dispatch(actions.addWishList(item.id));
    // },
    // removeWishList:(item)=>{
    //     dispatch(actions.removeWishList(item.id))
    // },
})

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;