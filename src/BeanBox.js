import React from 'react';
import "./BeanBox.css"
import { Avatar, Button } from "@material-ui/core"
function BeanBox() {
  return (
    <div className="beanBox">
      <form>
        <div className="beanBox__input">
          <Avatar />
          <input placeholder="Bean of the day"
          type="text"/>
        </div>
        <input 
        className="beanBox_inputImage"
        placeholder="Optional:Add an img"
        type="text" />
        <Button className="add__coolBean">AddBeans</Button>
      </form>
    </div>
  )
}

export default BeanBox
