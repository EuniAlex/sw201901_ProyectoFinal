import React from 'react'
import { Input } from 'semantic-ui-react'




function searchForm (props) {
    return(
      <Input
        action={{ icon: 'search', color: 'teal' }}
        placeholder='Busqueda de producto...' />
    )
}



export default searchForm;
