import React, { Component } from 'react';

import { Input} from 'semantic-ui-react';




class searchForm extends Component {

  render() {

    return( 
      <Input
        action={{ icon: 'search', color: 'teal' }}
        
        placeholder='Busqueda de producto...' />

    )
    
  }
  
}

export default searchForm;
