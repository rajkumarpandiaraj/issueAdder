import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import db from '../config/fbConfig';

export class Issueform extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            issue : '',
            name: '',
            address : '',
            mobile : '',
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        db.collection('issues').add({
            ...this.state,
            status : 'Not Opened',
            openedBy : '-',
            date : new Date(),
            openedId : '', 
        }).then(()=>{
            console.log('Success')
        }).catch(err =>{
            console.log('err.message')
        })

        this.setState({
            issue : '',
            name: '',
            address : '',
            mobile : '',
        })
    }
    
    render() {
        return (
            <div className='container'>
                <h3 className='mt-4 text-center'>Complaint Form</h3>
            <form className='mt-4' onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="issue">Issue</label>
                    <input type="text" value={this.state.issue} onChange={this.handleChange} name='issue' className="form-control" id="issue" aria-describedby="emailHelp" placeholder="Enter Issue"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} name='name' className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" value={this.state.address} onChange={this.handleChange} name='address' className="form-control" id="address" aria-describedby="emailHelp" placeholder="Enter Address"/>
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile.no</label>
                    <input type="number" value={this.state.mobile} onChange={this.handleChange} name='mobile' className="form-control" id="mobile" aria-describedby="emailHelp" placeholder="Mobile Number"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form> 
            </div>
        )
    }
}

export default Issueform
