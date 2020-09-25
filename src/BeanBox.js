import React from 'react';
import "./BeanBox.css";
import { Avatar, Button } from "@material-ui/core";

const BeanBox = () => {

  const [file, setFile] = useState(null);

  const types = ['image/png']

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);

    if (selected) {
      setFile(selected);
    }
  }
  return (
    <form className="beanBox">
      <form>
        <div className="beanBox__input">
          <Avatar />
          <input placeholder="Bean of the day"
          type="text"/>
          <input type="file" onChange={changeHandler} />
        </div>
        <input 
        placeholder="Optional:Project Detail"
        type="text" />
        <Button className="add__coolBean">Publish</Button>
      </form>
    </form>
  )
}

export default BeanBox
