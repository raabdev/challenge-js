import React, { Component } from 'react';

export default class TaskForm extends Component {
    
    state = {
        
    }

    
    
    onSubmit = e => {

        const concept = document.getElementById('concept')
        const type = document.getElementById('type')
        const amount = document.getElementById('amount')

        fetch ('http://localhost:3050/add', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                concept: concept.value,
                type: type.value,
                amount: amount.value
            }),
            headers: { 'Content-Type': 'application/json' }
          })
          .then(res => res.json())
          .then(res => {
            if (res.success) { // exito
              alert('Categoría creada');
            }
          });

          e.preventDefault()
        
    }

    
    
    render() {
        return (
            <form className="col-5 card p-3 mx-auto my-2" method="POST" id="form" name="form" onSubmit={this.onSubmit} action="#">
                <h6 className="text-center">Add new ticket</h6>
                <div className="form-group">
                    <label for="select">Type</label>
                    <select className="form-control" name="type" id="type">
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