import 'bulma/css/bulma.min.css';
import Navigation from './Navigation'
import TopInfoBar from './TopInfoBar'


/* 

you will display each 'USER' in a table. 
When the user selects a 'USER' in the table, 
it will display all of the 'POSTS' that were 
created by that 'USER'.

*/

function App() {

  return (
    <div className="App section">

    <TopInfoBar/>
    <Navigation />

    </div>
  );
}

export default App;
