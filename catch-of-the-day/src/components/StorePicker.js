import React, { Fragment } from 'react';

class StorePicker extends React.Component {
    render() {
        return (
            <Fragment>
                <form className="store-selector">
                    <h2>Enter</h2>
                    <input type="text" required placeholder="Store NAme" ></input>
                    <button type="Submit">Visit Store</button>
                </form>
            </Fragment>
        );
    }
}

export default StorePicker;