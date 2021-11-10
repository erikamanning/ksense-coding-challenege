import './App.css';
import 'bulma/css/bulma.min.css';
import UserList  from './Components/Users/UserList';


/* 

you will display each 'USER' in a table. 
When the user selects a 'USER' in the table, 
it will display all of the 'POSTS' that were 
created by that 'USER'.

*/

function App() {


  const users = ['Tom', 'Mary', 'Paul'];

  return (
    <div className="App section">

    
      <UserList users={users}/>



      
    </div>
  );
}

export default App;
