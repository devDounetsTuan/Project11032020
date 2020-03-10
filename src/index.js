import ReactDOM from "react-dom";
import React from 'react';


const wrapper = document.getElementById("hot_slide");
wrapper ? ReactDOM.render(<RandomList/>, wrapper) : false;
