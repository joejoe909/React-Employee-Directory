import React from "react";

function SearchBar (props){ 
    return(
        <div className = "SearchBar">
            <div>
                <form>
                    <input placeholder ="search" 
                           className= "searchBar"
                           value = {props.search}
                           onChange = {props.handleInputChange}
                           name = "search"
                           type = "text"/>
                </form>
            </div>
            
            
        </div>
    )
}

export default SearchBar;
