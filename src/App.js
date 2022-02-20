import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
      {/* we can warp the components with AuthContextProvider outside or inside of ThemeContextProvider. It won't make any difference */}
    </div>
  );
}
// To keep context re-rendering fast, React needs to make each context consumer a separate node in the tree.
export default App;