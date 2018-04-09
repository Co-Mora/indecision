import React from 'react';
const Header = (props) => (


        <div className="header">
            <div className="container">
                <h1 className="header__title">{props.title}</h1>
                {props.content && <h2 className="header__subtitle">{props.content}</h2>}
            </div>

        </div>

    );


Header.defaultProps = {
    title:"Indecision",
    content: "Put your code here!"
}


export default Header;