import React from "react";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
    return (
        <nav>
            <h1>Harmony Hub</h1>
            <button
                onClick={() => {
                    setLibraryStatus(!libraryStatus);
                }}fcdddc 
            >
                <h4>Library</h4>
            </button>
        </nav>
    );
};

export default Nav; 