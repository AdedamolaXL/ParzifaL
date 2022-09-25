import React from 'react'
import Minter from './Minter';

class Mint extends React.Component {
  render(){
    return(
    
          <div dangerouslySetInnerHTML={{ __html: Minter }} />
     
    );
  }
}
export default Mint