
'use strict';

var React = require('react');
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
            <link rel="stylesheet" href="stylesheets/bootstrap.min.css"/>
            <link rel="stylesheet" href="stylesheets/bootstrap-theme.min.css"/>

            <link rel="stylesheet" href="stylesheets/vendor/codemirror/codemirror.css" type="text/css"/>
            <link rel="stylesheet" href="stylesheets/vendor/codemirror/addon/hint/show-hint.css" />

            <link rel="stylesheet" href="javascripts/vendor/slickgrid/slick.grid.css" type="text/css"/>
            <link rel="stylesheet" href="javascripts/vendor/slickgrid/slick-default-theme.css" type="text/css"/>
            <link rel="stylesheet" href="javascripts/vendor/bootstrap-tagsinput/bootstrap-tagsinput.css" type="text/css"/>
            <link rel="stylesheet" href="javascripts/vendor/tauCharts/tauCharts.min.css" type="text/css"/>
            <link rel="stylesheet" href="stylesheets/vendor/fontawesome/css/font-awesome.min.css" type="text/css"/>

            <link rel="stylesheet" href="stylesheets/style.css" />

        </head>
        <body>

        <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div class="container-fluid">
            
            {(() => {

              //console.log(this.props);
                
              if ( this.props.isAuthenticated ) {

                return <Navbar>
                    <Navbar.Header>
                    </Navbar.Header>
                    <Nav>

                      <NavItem eventKey={1} href="/queries/new">New Query</NavItem>
                      <NavItem eventKey={2} href="queries?createdBy={this.props.user.email}">Queries</NavItem>

                     
                    </Nav>
                  </Navbar>

              } else {

                  return "";

              }

            })()}

              {/*<Navbar.Brand>
                  <a href="#">React-Bootstrap</a>
                </Navbar.Brand>*/}
              

             {/*<% if (isAuthenticated && user.admin) { %>
                <li class="<%= (pageTitle && pageTitle == "Connections" ? "active" : "") %>"><a href="<%= baseUrl %>/connections">Connections</a></li>
                <li class="<%= (pageTitle && pageTitle == "Users" ? "active" : "") %>"><a href="<%= baseUrl %>/users">Users</a></li>
                <li class="<%= (pageTitle && pageTitle == "Configuration" ? "active" : "") %>"><a href="<%= baseUrl %>/configs">Configuration</a></li>
                */}

                {/*<NavItem eventKey={2} href="#">Link</NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>*/}

            {/*<div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>*/}
            
            {/*<div class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li class="<%= (pageTitle && pageTitle == "Queries" ? "active" : "") %>"><a href="<%= baseUrl %>/queries?createdBy=<%= encodeURIComponent(user.email) %>">Queries</a></li>
                <li><a href="<%= baseUrl %>/queries/new">New Query</a></li>
                <% if (isAuthenticated && user.admin) { %>
                <li class="<%= (pageTitle && pageTitle == "Connections" ? "active" : "") %>"><a href="<%= baseUrl %>/connections">Connections</a></li>
                <li class="<%= (pageTitle && pageTitle == "Users" ? "active" : "") %>"><a href="<%= baseUrl %>/users">Users</a></li>
                <li class="<%= (pageTitle && pageTitle == "Configuration" ? "active" : "") %>"><a href="<%= baseUrl %>/configs">Configuration</a></li>
                <% } %>
              </ul>
              
              <ul class="nav navbar-nav navbar-right">
                <% if (isAuthenticated) { %>
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown"><%= user.email.split('@')[0] %> <b class="caret"></b></a>
                       <ul class="dropdown-menu">
                         <li><a href="<%= baseUrl %>/signout">Sign Out</a></li>
                         <li role="presentation" class="divider"></li>
                         <li><a href="#" data-toggle="modal" data-target="#aboutModal">About SqlPad</a></li>
                       </ul>                       
                  </li>
                <% } else { %>
                  <li><a href="<%= baseUrl %>/signin">Sign In</a></li>
                  <li><a href="<%= baseUrl %>/signup">Sign Up</a></li>
                <% } %>
              </ul>
            </div>*/}
            
          </div>
        </div>

          <div className="container-fluid">
              <div className="row">

                  {/* Router now automatically populates this.props.children of your components based on the active route. https://github.com/rackt/react-router/blob/latest/CHANGES.md#routehandler */}
                  {this.props.children}
              </div>
          </div>

          <script src="javascripts/vendor/underscore-min.js"></script>
          <script src="javascripts/vendor/jquery-2.2.0.min.js"></script>
          <script src="javascripts/vendor/bootstrap.min.js"></script>
          <script src="javascripts/vendor/codemirror/codemirror.js" type="text/javascript" charset="utf-8"></script>
          <script src="javascripts/vendor/codemirror/sql.js" type="text/javascript" charset="utf-8"></script>

          <script src="javascripts/vendor/codemirror/addon/hint/show-hint.js" type="text/javascript" charset="utf-8"></script>
          <script src="javascripts/vendor/codemirror/addon/hint/sql-hint.js" type="text/javascript" charset="utf-8"></script>

          <script src="javascripts/vendor/jquery.event.drag-2.2.js"></script>
          <script src="javascripts/vendor/slickgrid/slick.core.js"></script>
          <script src="javascripts/vendor/slickgrid/slick.grid.js"></script>
          <script src="javascripts/vendor/d3.min.js"></script>
          <script src="javascripts/vendor/saveSvgAsPng.js"></script>
          <script src="javascripts/vendor/typeahead.bundle.js"></script>
          <script src="javascripts/vendor/bootstrap-tagsinput/bootstrap-tagsinput.min.js"></script>
          <script src="javascripts/vendor/tauCharts/tauCharts.min.js"></script>
          <script src="javascripts/vendor/ZeroClipboard/ZeroClipboard.min.js"></script>
          
          <script src="javascripts/browserified.js"></script>

          <script>
            window.configItems = {};
          </script>
        </body>
      </html>
    );
  }
});
