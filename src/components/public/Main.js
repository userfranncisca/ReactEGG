import React, { Component } from 'react'
import Cards from './Cards';

export  default class Main extends Component {
 
 
      constructor(props){
         super(props);
         this.state = { mascotas : [] };
      }

        render() {

         return (
            <main>
            <Cards/>            
          </main>
       )
    }
}


