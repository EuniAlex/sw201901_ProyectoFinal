import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import axios from 'axios';





function searchForm (props) {
    return(
      <Input
        action={{ icon: 'search', color: 'teal' }}
        
        placeholder='Busqueda de producto...' />


    )
}



export default searchForm;
