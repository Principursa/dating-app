import {Web3Provider} from '@ethersproject/providers'

function getLibrary(provider, connector){
    
    return new Web3Provider(provider) 
  }
 
  
export default getLibrary;  