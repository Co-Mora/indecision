import React from 'react';
import Option from '../components/Option';

const Options = (props) => (
        <div>
            <div className="widget-header">
                <h3 className=" widget-header__title">Your Option</h3>
                <button
                    className="button button--link"
                    onClick={props.handleDeleteOptions}>
                    Remove All
                </button>
            </div>

            {props.arr.length === 0 && <p className="widget__message">Please add thing to get started</p>}
            {props.arr.map((text, index) => <Option
                key={text}
                optionText={text}
                count={index + 1}
                handleDeleteOption={props.handleDeleteOption}
            />)}
        </div>
    );

export default Options;
