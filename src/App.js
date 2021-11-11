import './App.css';
import 'bulma/css/bulma.min.css';
import { Outlet, Link } from 'react-router-dom';

/* 

you will display each 'USER' in a table. 
When the user selects a 'USER' in the table, 
it will display all of the 'POSTS' that were 
created by that 'USER'.

*/

function App() {

  return (
    <div className="App section">

  <h1>Demo</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/users">Users</Link> |{' '}
      </nav>
      <Outlet />

    </div>
  );
}

export default App;
