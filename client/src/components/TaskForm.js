import React, { Component } from 'react';

export default class TaskForm extends Component {
    
    state = {
        
    }

    
    
    onSubmit = e => {
        e.preventDefault()
        const form = document.getElementById('form')
        const data = new FormData(form)
        const concept = document.getElementById('concept')
        const amount = document.getElementById('amount')
        const type = document.getElementById('select')
        data.set('concept', concept.value)
        data.append('amount', amount.value)
        data.append('type', type.value)
        fetch('http://localhost:3050/add',{
            method: 'POST',
            body: {
                "type": type.value,
                "amount": amount.value,
                "concept": concept.value
            }
        })
        console.log(data.get('concept'))
        console.log(data.get('type'))
    }

    
    
    render() {
        return (
            <form className="col-5 card p-3 mx-auto my-2" method="POST" id="form" name="form" onSubmit={this.onSubmit} action="http://localhost:3050/add">
                <h6 className="text-center">Add new ticket</h6>
                <div className="form-group">
                    <label for="select">Type</label>
                    <select className="form-control" name="type" id="select">
                        <option value="0">Entry</option>
                        <option value="1">Expense</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Concept</label>
                    <input type="text" className="form-control" id="concept" name="concept" placeholder="Enter the concept"/>
                </div>
                <div className="form-group">
                    <label>Amount</label>
                    <input type="text" className="form-control" id="amount" name="amount" placeholder="Enter the amount"/>
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>         
        )
    }

}