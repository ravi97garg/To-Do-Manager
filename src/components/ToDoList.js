import React from 'react';
import {Link} from 'react-router-dom';
import './ToDoList.css';
import AddTask from "./AddTask";
// rdxhd.rocks

export default class ToDoList extends React.Component{
    constructor(){
        super();
        this.state = {todos: [
                {
                    "title": "Important1",
                    "description": "Lorem Ipsum Dolor sit amet...",
                    "createdBy": "Ravi",
                    "deadline": "2 April 2019",
                    "dateCreated": "1 April 2019",
                    "status": 0
                },
                {
                    "title": "Important2",
                    "description": "Lorem Ipsum Dolor sit amet...",
                    "createdBy": "Ravi",
                    "deadline": "2 April 2019",
                    "dateCreated": "1 April 2019",
                    "status": 0
                },
                {
                    "title": "Important3",
                    "description": "Lorem Ipsum Dolor sit amet...",
                    "createdBy": "Ravi",
                    "deadline": "2 April 2019",
                    "dateCreated": "1 April 2019",
                    "status": 0
                },

            ]};
    }

    addTask = (task) => {
        this.setState({
            todos: [...this.state.todos, task]
        })
    }

    removeTask = (taskIndex) => {
        console.log('Task indx:',taskIndex);
        let items = this.state.todos;
        items.splice(taskIndex, 1)
        this.setState({
            todos: items
        }, console.log('hell',this.state.todos));
    }

    render() {
        console.log('after',this.state.todos)
        return (
            <div>
                <AddTask addTaskCallback={this.addTask}/>
                <ul className='list'>
                    {this.state.todos.map((todo, index) => {
                    return (
                        <ToDoTemplate
                            title = {todo.title}
                            id = {index}
                            key = {index}
                            removeTaskCallback={this.removeTask}
                        />
                        )}
                    )}
                </ul>
            </div>
        )
    }
}


class ToDoTemplate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editStatus: false
        };
        this.myRef = React.createRef();
    }

    toggleEdit=()=>{
        this.myRef.current.contentEditable = !this.state.editStatus;
        this.setState({
            editStatus: !this.state.editStatus
        });
    }


    render(){
        return (
            <div className='ToDo-card clearfix'>
                <h4 ref={this.myRef}>{this.props.title}</h4>
                <button onClick={()=>this.props.removeTaskCallback(this.props.id)}>Mark as done</button>
                <button onClick={this.toggleEdit}>Edit</button>
            </div>
        )
    }
}