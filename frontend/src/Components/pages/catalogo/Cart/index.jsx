import React, { Component } from 'react'
import { Feed } from 'semantic-ui-react'


function Cart(props){
  return(
    <Feed>
      <Feed.Event>
        {/* <Feed.Label image={props.img} /> */}
        <Feed.Content>
          <Feed.Date content={props.name} />
          <Feed.Summary> 
            Lps {props.total} (products)
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  )
}

export default Cart;
