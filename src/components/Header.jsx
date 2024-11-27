import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>This is the header</h1>
            {props.children}
        </div>
    );
}

export default Header;
