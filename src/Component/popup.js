import React from "react";
import Popup from "reactjs-popup";
import './popup.css'
import {Link} from "react-router-dom"
const ToolTipPositions = (props) => (
  <div className="example-warper">
    <Popup
      className="popup-content"
      trigger={props.img}
      position="bottom right"
      on="hover"
    >

    <div style={{color:"black"}}>
        {props.value.map((val,i)=>
            <table style={{display:'flex'}}>
              <tr>
                <th><img src={val.image} width='50' height='60' /></th>
                <th style = {{fontSize:"16px",width:"90px"}}>{val.name}</th> 
                <th style = {{fontSize:"16px",width:"90px"}}>{val.about}</th>
                <th style = {{fontSize:"16px",width:"90px"}}>{val.quantity}</th>
              </tr> 
                

                
            </table>
          
          
          )}
          <h5 style = {{color:"blue"}}> <Link to="viewCart">View Cart</Link> </h5>
    </div>
    </Popup>
    
  </div>
  
);
export default ToolTipPositions;