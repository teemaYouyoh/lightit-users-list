import React, {Component} from "react";

import Accordion from "../Accordion/Accordion";
import Popup from "../Popup/Popup";
import UserService from "../../services/UserService";

import "./users-list.scss";

export default class UsersList extends Component {

    UserService = new UserService();

    state = {
        users : [],
        error : false,
        isSearch : ""
    }

    componentDidMount() {
        this.getUsers(10);
    }    

    getUsers = (value)=> {
        this.UserService.getUsers(value)
            .then(this.onUsersLoaded)
            .catch(this.onError);
    }

    onUsersLoaded = (users)=> {
        this.setState({
            users : users.results,
            error : false,
        });
    }

    onError = ()=>[
        this.setState({
            error : true
        })
    ]

    searchUser = (e)=> {
        this.setState({
            isSearch : e.target.value
        });
    }

    render() {
  
        return (
            <div className="users-list">
                <div className="container">
                    <div className="top-panel">
                        <Popup users={this.state.users}/>
                        <div className="search">
                            <span className="search__title">Search</span> 
                            <input type="text" onChange={this.searchUser}/>
                        </div>
                    </div>
                    <div className="navigation">
                        <span className="navigation__title"></span>
                        <span className="navigation__title">Last</span>
                        <span className="navigation__title">First</span>
                        <span className="navigation__title">Username</span>
                        <span className="navigation__title">Phone</span>
                        <span className="navigation__title">Location</span>
                        <span className="navigation__title"></span>
                    </div>
                    <Accordion users={this.state.users} isSearch={this.state.isSearch}/>
                </div> 
            </div>  
        );
    }
    
}