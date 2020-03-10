/* eslint-disable object-curly-newline */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMale, faFemale } from "@fortawesome/free-solid-svg-icons";
import "./user-details.scss";

export default class UserDetails extends Component {
    static get propTypes() {
        return {
            user: PropTypes.any,
        };
    }

    render() {
        const { name, gender, email, login, picture,
            phone, cell, location, dob, registered } = this.props.user;

        return (
            <div className="details">
                <div className="details__title">
                    <span>{name.first}</span>
                    <FontAwesomeIcon icon={gender === "male" ? faMale : faFemale} className="title__icon"/>
                </div>
                <div className="details__info">
                    <div className="details__col">
                        <div className="details__item">
                            <span className="item__title">Username </span>
                            <span>{login.username}</span>
                        </div>
                        <div className="details__item">
                            <span className="item__title">Registered </span>
                            <Moment format="DD/MM/YYYY">
                                {registered.date}
                            </Moment>
                        </div>
                        <div className="details__item">
                            <span className="item__title">Email </span>
                            <span>{email}</span>
                        </div>
                    </div>
                    <div className="details__col">
                        <div className="details__item">
                            <span className="item__title">Address </span>
                            <span>{`${location.street.number} ${location.street.name}`}</span>
                        </div>
                        <div className="details__item">
                            <span className="item__title">City </span>
                            <span>{location.city}</span>
                        </div>
                        <div className="details__item">
                            <span className="item__title">Zip Code </span>
                            <span>{location.postcode}</span>
                        </div>
                    </div>
                    <div className="details__col">
                        <div className="details__item">
                            <span className="item__title">Birthday </span>
                            <Moment format="DD/MM/YYYY">
                                {dob.date}
                            </Moment>
                        </div>
                        <div className="details__item">
                            <span className="item__title">Phone </span>
                            <span>{phone}</span>
                        </div>
                        <div className="details__item">
                            <span className="item__title">Cell </span>
                            <span>{cell}</span>
                        </div>
                    </div>
                    <div className="details__col">
                        <div className="details__item">
                            <img src={picture.large} alt="avatar" title="avatar"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
