import React from 'react'
import "./css/Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
            <div className="header">
                <img 
                className="header_logo" 
                src="https://www.acisolutions.net/wp-content/uploads/2019/09/amazon-logo-vector-png-amazon-logo-vector-512.png" height="100"
                />

                <div className="header_search">
                    <input
                    className="header_searchInput"
                    type="text"/>
                    <SearchIcon 
                    className="header_searchIcon"/>


                
                </div>
                <div className="header_nav">
                    <div className="header_option">
                        <span className="header_optionLineOne">Hello</span>
                        <span className="header_optionLineTwo">Sign In</span>
                    </div>

                    <div className="header_option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">&Orders</span>
                    </div>

                    <div className="header_option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>

                    <div className="header_option">
                    </div>
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_basketCount">0</span>
                    </div>
                
                </div>
            </div>
    )
}

export default Header
