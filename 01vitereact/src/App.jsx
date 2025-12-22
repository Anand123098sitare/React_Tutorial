


import Chai from './chai.jsx';

function App() {
  const username="Vite React"

  return (
    <>
    <Chai/>
    <h1>This is App Component{username}</h1>
    <p>This is a paragraph</p>
    </>
  )
}

export default App

// we can only return one element from a component
// to return multiple elements we can use a div or a Fragment
// Fragment syntax: <> </>