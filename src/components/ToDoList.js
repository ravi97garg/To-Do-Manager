import React from 'react';
import './ToDoList.css';
import AddTask from "./AddTask";
// rdxhd.rocks

export default class ToDoList extends React.Component{
    constructor(){
        super();
        this.state = {todos: [
                {
                    "title": "Cleaning Floors",
                    "description": "Bring Lizol",
                    "createdBy": "Ravi",
                    "deadline": "2019-04-02",
                    "dateCreated": "2019-04-01",
                    "status": 0
                },
                {
                    "title": "Purchasing fruits",
                    "description": "Mango, Kiwi and Melon",
                    "createdBy": "Ravi",
                    "deadline": "2019-04-02",
                    "dateCreated": "2019-04-01",
                    "status": 0
                },
                {
                    "title": "Coding",
                    "description": "Complete coding assignment",
                    "createdBy": "Ravi",
                    "deadline": "2019-04-02",
                    "dateCreated": "2019-04-01",
                    "status": 0
                },

            ]};
    }

    addTask = (task) => {
        this.setState({
            todos: [...this.state.todos, task]
        })
    };

    removeTask = (taskIndex) => {
        let items = this.state.todos;
        items.splice(taskIndex, 1);
        this.setState({
            todos: items
        });
    };

    render() {
        return (
            <div className='todo-bg'>
                <AddTask addTaskCallback={this.addTask}/>
                <ul className='list'>
                    {this.state.todos.map((todo, index) => {
                    return (
                        <ToDoTemplate
                            title = {todo.title}
                            description = {todo.description}
                            deadline = {todo.deadline}
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
        this.titleRef = React.createRef();
        this.descrRef = React.createRef();
        this.dateRef = React.createRef();
    }

    toggleEdit=()=>{
        this.titleRef.current.contentEditable = !this.state.editStatus;
        this.descrRef.current.contentEditable = !this.state.editStatus;
        this.dateRef.current.contentEditable = !this.state.editStatus;
        this.setState({
            editStatus: !this.state.editStatus
        });
    }


    render(){
        return (
            <div className='todo-card clearfix'>
                <p ref={this.titleRef}><b>{this.props.title}</b></p>
                <p ref={this.descrRef}>{this.props.description}</p>
                <p>Deadline: <span ref={this.dateRef}>{this.props.deadline}</span></p>
                <button className='todo-btn blue' onClick={()=>this.props.removeTaskCallback(this.props.id)}>Mark as done</button>
                <button className='todo-btn green' onClick={this.toggleEdit}>{this.state.editStatus?'Save':'Edit'}</button>
            </div>
        )
    }
}