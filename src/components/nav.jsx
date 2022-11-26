import React from "react";
import SearchBar from "./SearchBar";
import Logo from "./logo.png";


function Nav(props){
    return(
        <div className="buscador">
          <img className="logo" src={Logo}  alt="rick and morty" />


        <SearchBar
          onSearch={props.onSearch}
        />

      </div>
    )
}

export default Nav;