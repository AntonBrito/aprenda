import React from 'react';
import "./BeanBox.css"
import { Avatar, Button } from "@material-ui/core"
function BeanBox() {
  return (
    <div className="beanBox">
      <form>
        <div className="beanBox__input">
          <Avatar />
          <input placeholder="Bean of the day?"></input>
          <input placeholder="Add an img"></input>
        </div>
        <Button className="addBean">AddBeans</Button>
      </form>
    </div>
  )
}

export default BeanBox
