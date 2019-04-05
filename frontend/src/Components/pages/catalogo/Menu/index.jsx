import React, { Component } from 'react'
import { Segment, Input } from 'semantic-ui-react'
import SearchForm from '../SearchForm'
import Titulo from '../titulo/titulo'
import '../Menu/style.css';


class Navigation extends Component {

  render() {

    return( 
      <div className='busque'> 
      <Segment>
      <div className='titulo'><Titulo/></div>
      <SearchForm/>
        <br/>
        </Segment>>
    </div>
    )
    
  }
  
}

export default Navigation;
