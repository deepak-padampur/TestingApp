
import PropTypes from "prop-types";
import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";


import { Route,
    
  BrowserRouter as Router , Link , 
  Switch} from 'react-router-dom'

class DesktopContainer extends Component {
    state = {loading : true , loggedIn :false };
    static propTypes = {
      color: PropTypes.string,
    }

    componentWillMount = () => {
  fire.auth().onAuthStateChanged(user => {
        if (user) {
          this.setState({ loggedIn: true });
          console.log(user.email);
        } else {
          this.setState({ loading: false, loggedIn: false });
          console.log("xyz");
        }
      });
    };




  
    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });
  
    render() {
      const { children } = this.props;
      const { fixed } = this.state;

      console.log(this.props.loggedIn);
  
      
  
      return (
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 450, padding: "1em 0em", 
              backgroundImage: "url(" + "https://www.nationalgeographic.com/content/dam/environment/photos/future_of_food/organic_farming_rough/01_organic_farming_i8860_20181003_11260.adapt.1900.1.jpg" + ")",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'}}
            >
              <Menu
                fixed={fixed ? "top" : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size="large"
                color= "yellow"
              >
                <Container style={{background:"transparent" ,width:"100%"  }} >
                  <Menu.Item as="a" active ><Link to="/"/>Home</Menu.Item>
                  <Menu.Item as="a"><Link to="/villageList"/>Buy</Menu.Item>
                  <Menu.Item as="a"><Link to="/"/>Profile</Menu.Item>
                  <Menu.Item as="a"><Link to="/retailer"/>Account</Menu.Item>
                  <Menu.Item position="right">
                    <Button as="a" inverted={!fixed}>
                      Log in
                    </Button>
                    <Button
                      as="a"
                      inverted={!fixed}
                      primary={fixed}
                      style={{ marginLeft: "0.5em" }}
                    >
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Container>
              </Menu>
              
            </Segment>
          </Visibility>
  
          {children}
        </Responsive>
      );
    }
  }
  
  DesktopContainer.propTypes = {
    children: PropTypes.node
  };


  export default DesktopContainer;
  
  