import React, { Component } from 'react';
import {Input, IconGroup} from 'semantic-ui-react';



const searchForm = (props) => (
    <div Class="ProductList">
        <Input
          action={{ icon: 'search', color: 'teal',
          onClick: props.clicked}}
          onChange ={props.Changed}
          placeholder='Busqueda de producto...' />
    </div>  
);

export default searchForm;
