import React, {Component} from 'react';

export default class AddTask extends Component{

    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            deadline: (new Date()).toDateString()
        }
    }

    updateHandle=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    validateInputs=()=>{
        if(this.state.title === '' || this.state.description === '' || this.state.deadline === ''){
            return false;
        }
        return true;
    };

    addTask = () => {
        if(this.validateInputs() === true){
            this.props.addTaskCallback({
                "title":this.state.title,
                "description":this.state.description,
                "createdBy": 'Ravi',
                "deadline": this.state.deadline,
                "dateCreated": new Date().toDateString(),
                "status": 0
            })
        } else {
            alert("Invalid Input tasks");
        }
    }

    render() {
        let {title, description, deadline} = this.state;
        return (
            <div>
                <input type='text' name='title' onChange={this.updateHandle} placeholder='Task Title' value={title}/>
                <input type='text' name='description' onChange={this.updateHandle} placeholder='Task Description' value={description}/>
                <input type='date' name='deadline' onChange={this.updateHandle} placeholder='Deadline [dd-mm-yyyy]' value={deadline}/>
                <button onClick={this.addTask}>Add Task</button>
            </div>
        )
    }

}