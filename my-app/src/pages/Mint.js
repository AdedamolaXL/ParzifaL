import React from 'react'
import Minter from './minter.js'

class Mint extends React.Component {
  render(){
    return(
    
          <div dangerouslySetInnerHTML={{ __html: Minter }} />
     
    );
  }
}
export default Mint