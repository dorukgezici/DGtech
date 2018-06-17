/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
    const { classes } = props;
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <Button
                    color="transparent"
                    href="/"
                    className={classes.navLink}
                    >Home
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="UI Kit"
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    buttonIcon={Apps}
                    dropdownList={[
                        <Link to="/components" className={classes.dropdownLink}>
                            All Components
                        </Link>,
                        <Link to="/profile-page" className={classes.dropdownLink}>
                            Profile Page
                        </Link>,
                        <Link to="/login-page" className={classes.dropdownLink}>
                            Login Page
                        </Link>,
                        <Link to="/landing-page" className={classes.dropdownLink}>
                            Landing Page
                        </Link>
                    ]}
                    />
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-twitter"
                    title="@dorukgezici"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                    >
                    <Button
                        href="https://linkedin.com/in/dorukgezici"
                        target="_blank"
                        color="transparent"
                        className={classes.navLink}
                        >
                        <i className={classes.socialIcons + " fab fa-linkedin"} />
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-twitter"
                    title="@derektraveller"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                    >
                    <Button
                        href="https://twitter.com/derektraveller"
                        target="_blank"
                        color="transparent"
                        className={classes.navLink}
                        >
                        <i className={classes.socialIcons + " fab fa-twitter"} />
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-tooltip"
                    title="@derektraveller"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                    >
                    <Button
                        color="transparent"
                        href="https://www.instagram.com/derektraveller"
                        target="_blank"
                        className={classes.navLink}
                        >
                        <i className={classes.socialIcons + " fab fa-instagram"} />
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-facebook"
                    title="@dorukgezici"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                    >
                    <Button
                        color="transparent"
                        href="https://www.facebook.com/dorukgezici"
                        target="_blank"
                        className={classes.navLink}
                        >
                        <i className={classes.socialIcons + " fab fa-facebook"} />
                    </Button>
                </Tooltip>
            </ListItem>
        </List>
    );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
