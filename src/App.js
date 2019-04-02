import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import ToDoList from "./components/ToDoList";

class App extends Component {
    state = {isAuth: false}

    isAuthenticated = (isAuth) => {
        this.setState({
            isAuth: isAuth
        })
    }

    render(){
        return (
            <div>
                <Header/>
                <div className='home'>
                    <Router>
                        <Route exact path={"/"}
                               render={(props) => <Login {...props}
                                                         loginCallback={this.isAuthenticated}
                                                         isAuth={this.state.isAuth}
                               />}
                        />
                        <PrivateRoute path={'/toDoList'} component={ToDoList} isAuth={this.state.isAuth}/>
                    </Router>
                </div>
                <Footer/>
            </div>

        )
    }
}

export default App;

const PrivateRoute = ({component: Component, isAuth, ...rest}) => {
    if (isAuth === true) {
        return <Route {...rest} render={(props) => <Component {...props}/>}/>
    } else {
        return <Route {...rest} render={(props) => <Redirect {...props} to={'/'}/>
        }/>
    }
}