import React from 'react';
import "./BeanBox.css"
import { Avatar, Button } from "@material-ui/core"
function BeanBox() {
  return (
    <div className="beanBox">
      <form>
        <div className="beanBox__input">
          <Avatar />
          <input placeholder="What you learned today?"></input>
          <input placeholder="Enter an img URL"></input>
        </div>
        <Button>CoolBeans</Button>
      </form>
    </div>
  )
}

export default BeanBox
