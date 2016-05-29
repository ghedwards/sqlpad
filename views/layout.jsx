
'use strict';

var React = require('react');
var fetch = require("whatwg-fetch");
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var MenuItem = require('react-bootstrap').MenuItem;
var NavDropdown = require('react-bootstrap').NavDropdown;

module.exports = React.createClass({
  displayName: 'Layout',
  
  render: function render() {

    return (
      <html lang="en">
        <head>
          <meta charSet='utf-8' />
          <title>{this.props.title}</title>
            <link rel="stylesheet" href="/stylesheets/bootstrap.min.css"/>
            <link rel="stylesheet" href="/stylesheets/bootstrap-theme.min.css"/>

            <link rel="stylesheet" href="/stylesheets/vendor/codemirror/codemirror.css" type="text/css"/>
            <link rel="stylesheet" href="/stylesheets/vendor/codemirror/addon/hint/show-hint.css" />
            <link rel="stylesheet" href="/stylesheets/vendor/fontawesome/css/font-awesome.min.css" type="text/css"/>
{/*
            <link rel="stylesheet" href="javascripts/vendor/slickgrid/slick.grid.css" type="text/css"/>
            <link rel="stylesheet" href="javascripts/vendor/slickgrid/slick-default-theme.css" type="text/css"/>
            <link rel="stylesheet" href="javascripts/vendor/bootstrap-tagsinput/bootstrap-tagsinput.css" type="text/css"/>
            <link rel="stylesheet" href="javascripts/vendor/tauCharts/tauCharts.min.css" type="text/css"/>
            */}

            <link rel="stylesheet" href="/stylesheets/style.css" />

        </head>
        <body>

            <Navbar className="navbar-inverse navbar-fixed-top">
              <Navbar.Header>
              </Navbar.Header>

               <Nav>

                  {( this.props.isAuthenticated ) ? <NavItem eventKey={1} href="/query/new">New Query</NavItem> : "" }

                  {( this.props.isAuthenticated ) ? <NavItem className={(this.props.pageTitle && this.props.pageTitle === "Queries") ? "active" : ""} eventKey={2} href={"/queries?createdBy="+this.props.user.email}>Queries</NavItem> : "" }

                  {( this.props.user && this.props.user.admin ) ? <NavItem className={(this.props.pageTitle && this.props.pageTitle === "Connections") ? "active" : ""} href="/connections">Connections</NavItem> : "" }

                  {( this.props.user && this.props.user.admin ) ? <NavItem className={(this.props.pageTitle && this.props.pageTitle === "Users") ? "active" : ""} href="/users">Users</NavItem> : "" }

                  {( this.props.user && this.props.user.admin ) ? <NavItem className={(this.props.pageTitle && this.props.pageTitle === "Configuration") ? "active" : ""} href="/configs">Configuration</NavItem> : "" }

                </Nav>

                {(() => {

                    if ( this.props.isAuthenticated ) {

                      return <Nav className="navbar-right">

                          <NavDropdown eventKey={5} title={this.props.user.email.split('@')[0]} id="basic-nav-dropdown">
                            <MenuItem eventKey={5.1} href="/signout">Sign Out</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={5.2} href="/about">About SqlPad</MenuItem>
                          </NavDropdown>

                        </Nav>
                        
                    } else {

                       return <Nav className="navbar-right"><NavItem href="signin">Sign In</NavItem>
                                <NavItem href="signup">Sign Up</NavItem>
                            </Nav>

                    }

                })()}

          </Navbar>

          <div className="container-fluid">
              <div className="row">

                  {/* Router now automatically populates this.props.children of your components based on the active route. https://github.com/rackt/react-router/blob/latest/CHANGES.md#routehandler */}
                  {this.props.children}
              </div>
          </div>

          {/*<script src="/javascripts/vendor/jquery-2.2.0.min.js"></script>
          <script src="/javascripts/vendor/underscore-min.js"></script>
          
           
          <script src="javascripts/vendor/bootstrap.min.js"></script>

         

          <script src="javascripts/vendor/jquery.event.drag-2.2.js"></script>
          <script src="javascripts/vendor/slickgrid/slick.core.js"></script>
          <script src="javascripts/vendor/slickgrid/slick.grid.js"></script>
          <script src="javascripts/vendor/d3.min.js"></script>
          <script src="javascripts/vendor/saveSvgAsPng.js"></script>
          <script src="javascripts/vendor/typeahead.bundle.js"></script>
          <script src="javascripts/vendor/bootstrap-tagsinput/bootstrap-tagsinput.min.js"></script>
          <script src="javascripts/vendor/tauCharts/tauCharts.min.js"></script>
         
          
          <script src="/javascripts/vendor/ZeroClipboard/ZeroClipboard.min.js"></script>

          

          <script src="/javascripts/vendor/codemirror/addon/hint/show-hint.js" type="text/javascript"></script>
          <script src="/javascripts/vendor/codemirror/addon/hint/sql-hint.js" type="text/javascript"></script>*/}

          <script src="/javascripts/vendor/codemirror/codemirror.js" type="text/javascript"></script>
          <script src="/javascripts/vendor/codemirror/sql.js" type="text/javascript"></script>

          <script src="/javascripts/vendor/codemirror/addon/hint/show-hint.js" type="text/javascript"></script>
          <script src="/javascripts/vendor/codemirror/addon/hint/sql-hint.js" type="text/javascript"></script>

          <script src="/javascripts/browserified.js"></script>

          <script>
            window.configItems = {};
          </script>
        </body>
      </html>
    );
  }
});
