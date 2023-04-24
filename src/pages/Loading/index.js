import React from 'react';
import logo from "../../assets/icon.svg"
import { Loader } from './style';

const Loading = () => {
  return (
    <>
    <Loader>
        <img src={logo} alt="Niyo group icon logo" />
    
    </Loader>
    </>
  )
}

export default Loading