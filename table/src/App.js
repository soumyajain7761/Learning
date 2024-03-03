import {ReactTable} from 'react-table';  
import {React, useState, useEffect} from 'react';
import { BasicTable } from './components/BasicTable';
import { SortingTable } from './components/SortingTable';
// import { FilteringTable} from './components/FilteringTable';
import { PaginationTable } from './components/PaginationTable';
import { RowSelection } from './components/RowSelection';
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Switch,Route, Redirect, Routes} from "react-router-dom";
import Home from './components/Home';
// import { Switch, Route, Link } from "react-router-dom";

function App() {
  const [repository, setRepository] = useState([]);

  // let res;
  useEffect(() => {
    axios.get("/eml/rest/repository/getRepoList",
    )
    .then(response => {
      // console.log(response.data);
      // console.log("-------------------------------------------");
      const transformedRepository = response.data.map(repoData => {
        // console.log(repoData);
        return {
          "repo_name": repoData.name,
          "display_name": repoData.displayName,
          "id": repoData.id,
          "description": repoData.description
        }
      }); 
      // console.log(transformedRepository);
      setRepository(transformedRepository);
    })
  }, [])
    
    return (
      <>
        <RowSelection items={repository}></RowSelection>
        <Routes>
          <Route exact path="/home" component={Home}></Route>
        </Routes>
      </>
    );
}

export default App;
