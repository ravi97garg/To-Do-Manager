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

    updateHandle = (event, id) => {
        let arr = this.state.todos;
        let obj = this.state.todos[id];
        arr.splice(id,1,{...obj, [event.target.name]:event.target.value})
        this.setState(
            {
                todos: arr
            },
        )
    };


    render(){
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
                            updateCallback={this.updateHandle}
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

    toggleEdit = (e) => {
        this.setState({
            editStatus: !this.state.editStatus
        })
    }

    render(){
        return (
            <div className='todo-card clearfix'>
                <input type='text'
                       disabled={!this.state.editStatus}
                       onChange={(e)=>this.props.updateCallback(e, this.props.id)}
                       name="title"
                       value={this.props.title}
                />
                <input type='text'
                       disabled={!this.state.editStatus}
                       onChange={(e)=>this.props.updateCallback(e, this.props.id)}
                       name="description"
                       value={this.props.description}
                />
                <p>Deadline: <input type='date'
                                    disabled={!this.state.editStatus}
                                    value={this.props.deadline}
                                    name='deadline'
                                    onChange={(e)=>this.props.updateCallback(e, this.props.id)}/>
                </p>
                <button className='todo-btn blue' onClick={()=>this.props.removeTaskCallback(this.props.id)}>Mark as done</button>
                <button className='todo-btn green' onClick={this.toggleEdit}>{this.state.editStatus?'Save':'Edit'}</button>
            </div>
        )
    }
}