import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
  // const providers = [
  //   AuthContext,
  //   ThemeContext]
  // static contextType = ThemeContext;
  // we could have added the above when there was only one context but since there are more than context we cannot add this line

  render() {
    return (
      <AuthContext.Consumer>{(authContext) => (
        <ThemeContext>{(themeContext) => {
        // Read that value within any component by using the context consumer
          const { isAuthenticated, toggleAuth } = authContext;
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <div onClick={() => toggleAuth()}>
                { isAuthenticated ? 'Logged in' : 'Logged out' }
              </div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          )
        }}</ThemeContext>
      )}</AuthContext.Consumer>
      // AuthContext, ThemeContext.Consumer expects a function
    );
  }
}
 
export default Navbar;