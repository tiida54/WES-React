import React, { Fragment } from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    goToStore = event => {
        event.preventDefault();
        console.log("goToStore : ", this);
    }
    render() {
        return (
            <Fragment>
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Enter</h2>
                    <input type="text" required placeholder="Store Name" defaultValue={getFunName()}></input>
                    <button type="submit">Visit Store</button>
                </form>
            </Fragment>
        );
    }
}

export default StorePicker;