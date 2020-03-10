import React, { Component } from "react";
import PropTypes from "prop-types";
import "./user.scss";

export default class User extends Component {
    render() {
        // eslint-disable-next-line object-curly-newline
        const { name, login, picture, phone, location } = this.props.user;

        return (
            <div className="user">
                <div className="user__info user__image">
                    <img src={picture.medium} alt="avatar" title="avatar" className="avatar"/>
                </div>
                <div className="user__info">{name.last}</div>
                <div className="user__info">{name.first}</div>
                <div className="user__info">{login.username}</div>
                <div className="user__info">{phone}</div>
                <div className="user__info">{location.city}</div>
            </div>
        );
    }
}

User.propTypes = {
    user: PropTypes.any,
};
