import React, { Component } from "react";
import Navbar from "custom/Navbar/Navbar";
import Portrait from "custom/Portrait/Portrait";

import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import "./App.css"

import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";

import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import pp from "./pp.jpg";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class App extends Component {
    render() {
        const { classes, ...rest } = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );
        const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
        return (
            <div className="App">
                <Header
                    color="transparent"
                    brand="DGtech"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "white"
                    }}
                    {...rest}
                />
                <Parallax small filter image={require("./macbook-coffee.jpg")}/>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <img src={pp} className={imageClasses} style={{maxWidth: 250 + "px"}}/>
                                    <div className={classes.name} style={{position: "relative", top: -40 + "px"}}>
                                        <h2>Doruk Gezici <small><a href="https://visualcv.com/dorukgezici" target="_blank">CV</a></small></h2>
                                        <h4>Full-Stack Developer & Entrepreneur</h4>
                                        <h5>Computer Engineering #3 at Istanbul Technical University</h5>
                                        <Button href="https://linkedin.com/in/dorukgezici" target="_blank" justIcon link className={classes.margin5}>
                                            <i className={"fab fa-linkedin"} />
                                        </Button>
                                        <Button href="https://twitter.com/derektraveller" target="_blank" justIcon link className={classes.margin5}>
                                            <i className={"fab fa-twitter"} />
                                        </Button>
                                        <Button href="https://instagram.com/derektraveller" target="_blank" justIcon link className={classes.margin5}>
                                            <i className={"fab fa-instagram"} />
                                        </Button>
                                        <Button href="https://facebook.com/dorukgezici" target="_blank" justIcon link className={classes.margin5}>
                                            <i className={"fab fa-facebook"} />
                                        </Button>
                                    </div>
                                </div>
                                <div className={classes.description}>
                                    <p><b>Computer Engineering</b> student who is very passionate about information technologies, <b>innovation, entrepreneurship and leadership</b>. Experienced in Mobile Apps (iOS, <b>Swift</b>), Full-Stack Web Development (<b>Python/Django</b>, Linux SysAdmin, <b>HTML/CSS</b>), IoT (Raspberry Pi, Arduino), <b>freelancing and coordinating/leading</b> a team. Interested in making everything more <b>efficient/autonomous/smart</b> using digital & creative solutions. Also loves to play some <b>blues rock</b> with his electric guitar.</p>
                                    <p>Here, I share about my journey and some projects along the way...</p>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                                <NavPills alignCenter color="primary" tabs={[
                                    {
                                        tabButton: "Studio",
                                        tabIcon: Camera,
                                        tabContent: (
                                            <GridContainer justify="center">
                                                <GridItem xs={12} sm={12} md={4}>
                                                    <img src={studio1} className={navImageClasses}/>
                                                    <img src={studio2} className={navImageClasses}/>
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={4}>
                                                    <img src={studio5} className={navImageClasses}/>
                                                    <img src={studio4} className={navImageClasses}/>
                                                </GridItem>
                                            </GridContainer>
                                        )
                                    },
                                    {
                                        tabButton: "Work",
                                        tabIcon: Palette,
                                        tabContent: (
                                            <GridContainer justify="center">
                                                <GridItem xs={12} sm={12} md={4}>
                                                    <img src={work1} className={navImageClasses}/>
                                                    <img src={work2} className={navImageClasses}/>
                                                    <img src={work3} className={navImageClasses}/>
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={4}>
                                                    <img src={work4} className={navImageClasses}/>
                                                    <img src={work5} className={navImageClasses}/>
                                                </GridItem>
                                            </GridContainer>
                                        )
                                    },
                                    {
                                        tabButton: "Favorite",
                                        tabIcon: Favorite,
                                        tabContent: (
                                            <GridContainer justify="center">
                                                <GridItem xs={12} sm={12} md={4}>
                                                    <img src={work4} className={navImageClasses}/>
                                                    <img src={studio3} className={navImageClasses}/>
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={4}>
                                                    <img src={work2} className={navImageClasses}/>
                                                    <img src={work1} className={navImageClasses}/>
                                                    <img src={studio1} className={navImageClasses}/>
                                                </GridItem>
                                            </GridContainer>
                                        )
                                    }
                                ]}/>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default withStyles(profilePageStyle)(App);
