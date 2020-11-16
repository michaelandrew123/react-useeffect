 //https://www.youtube.com/watch?v=0ZJgIjIuY7U
 import React, {useState, useEffect}from 'react'

function App() {
 

  //first example 
  const [resourceType, setResourceType] = useState('Posts');
  const [items, setItems] = useState([])
  useEffect(()=> {
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json)) 
  }, [resourceType])
//end of first example

//second example
const [windowWidth, setWindowWidth] = useState(window.innerWidth)

const handleResize = () =>{ 
  setWindowWidth(window.innerWidth)
}

 useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => { 
      window.removeEventListener('resize', handleResize)
    }
 }, [])
//useEffect should have return inside that function to remove the first running data then execute the second data
//to avoid to slow your apps
//return function inside the useEffect is a consider of your clean up

  return (
    <> 
       <h3>first example</h3>
      <div>
        <button onClick={() => setResourceType('Posts')}>Posts</button>
        <button onClick={() => setResourceType('Comments')}>Comments</button>
        <button onClick={() => setResourceType('Users')}>Users</button>
      </div>
      <h1>{resourceType}</h1>

      <div>
        {items.map(item => {
          return <pre>{JSON.stringify(item)}</pre>
        })}
      </div> 
        <h3>end of first example </h3>
 
        <h3>second example</h3>
        <div>
            {windowWidth}

        </div>
        <h3>end of second example </h3>

    </>
  );
}

export default App;
