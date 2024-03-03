import {React, useState, useEffect} from 'react';
import { RowSelection } from './components/RowSelection';
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  <Router>
     <Route exact path="/" component={Homepage}/>
   <Route exact path="/about" component={Aboutpage }/>
  </Router>

  //Array Destructuring
  const [repository, setRepository] = useState([]);
  //useState is a React Hook that lets you add a state variable to your component
  //useState(initialState)

  // let res;
  //useEffect is a React Hook that lets you synchronize a component with an external system,
  //fetching data with effects
  //useEffect(setup, dependencies?)
  useEffect(() => {
    //Axios is an HTTP client library that allows you to make requests to a given endpoint
    axios.get("/eml/rest/repository/getRepoList")
      .then(response => {
        const transformedRepository = response.data.map(repoData => {
        return {
          "repo_name": repoData.name,
          "display_name": repoData.displayName,
          "id": repoData.id,
          "description": repoData.description
        }
      }); 
      setRepository(transformedRepository);
    })
  }, [])
    
  return (
    <>
      <RowSelection items={repository}></RowSelection>
    </>
  );
}

export default App;
