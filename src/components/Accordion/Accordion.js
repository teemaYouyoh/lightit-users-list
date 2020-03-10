import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails";
import "../UsersList/users-list.scss";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: "33.33%",
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function Accordion(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const renderItem = (arr) => arr.map((item, i) => {
        const extraStyle = i % 2 ? "background-color-lightgrey" : "background-color-grey";

        if (props.isSearch === "" || item.name.first.toLowerCase().indexOf(props.isSearch.toLowerCase()) !== -1) {
            return (
                <div className={classes.root} key={item.login.uuid} >
                    <ExpansionPanel
                        className={extraStyle}
                        expanded={expanded === `panel${i}`}
                        onChange={handleChange(`panel${i}`)}
                    >
                        <ExpansionPanelSummary
                            expandIcon={expanded === `panel${i}` ? <RemoveIcon/> : <AddIcon />}
                            aria-controls={`panel${i}-bh-content`}
                            id={`panel${i}-bh-header`}
                        >
                            <User
                                user = {item}
                            />
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <UserDetails
                                user={item}
                            />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            );
        }

        return null;
    });

    return (
        <>
            {renderItem(props.users)}
        </>
    );
}

Accordion.propTypes = {
    users: PropTypes.any,
    isSearch: PropTypes.any,
};
