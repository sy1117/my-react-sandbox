// Product List
import ProductList from '../components/ProductList';
// Redux Actions 
import * as actions from '../actions';
import {connect} from 'react-redux';
// Sample Data 
import products from '../assets/data/products';

const mapStateToProps = state=>{

    products.forEach(item => {
        if(state.wishList.indexOf(item.id)>-1){
            item.isWishItem = true
        }else{
            item.isWishItem = false
        }
    });

    return {
        wishList : state.wishList
        , products: products
    }
}

const mapDispatchToProps = (dispatch)=>({
    onWish:(item)=>{
        if(item.isWishItem){
            dispatch(actions.addWishList(item.id));
        }else{
            dispatch(actions.removeWishList(item.id));
        }
    }
})

const ProductListContainer = connect(mapStateToProps, mapDispatchToProps)(ProductList);

export default ProductListContainer;