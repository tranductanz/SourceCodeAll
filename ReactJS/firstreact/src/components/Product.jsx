import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src="holder.js/100x180/" alt />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
            </div>



        )
    }
}
