import React from 'react';

class EditFishForm extends React.Component {
    handleChange = event => {
        console.log(event.currentTarget.value);
        const updateFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.index,updateFish)
    }
    render() {
        return <div className="fish-edit">
            <input name="name" onChange={this.handleChange} value={this.props.fish.name} type="text" />
            <input name="price" onChange={this.handleChange} value={this.props.fish.price} type="text" />
            <select name="status" onChange={this.handleChange} value={this.props.fish.status} >
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out!</option>
            </select>
            <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
            <input name="image" onChange={this.handleChange} value={this.props.fish.image} type="text" />
            <button  onClick={() => this.props.deleteFish(this.props.index.deleteFish)}>Remove</button>
        </div>
    }
}


export default EditFishForm;