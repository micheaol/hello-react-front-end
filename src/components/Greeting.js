import React, {useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchGreetings } from '../redux/thunk/api'

export default function Greeting() {

const greets = useSelector(state => state.message)
const dispatch = useDispatch()
useEffect(() => {
    dispatch(fetchGreetings())

}, [dispatch]);

 //Convert OBJ to arrary 
 const greet = Object.values(greets)

  return (
    <div>
        <h1>{greet[1]}</h1>
        <h1>{greet[2]}</h1>
    </div>
  )
}
