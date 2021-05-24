import React, {useState} from 'react';


const Selection = (props) =>{
  let [component, updateSelectionStyle] = useState({background:''});
  const {applyColor} = props;
  return(
    <div className="fix-box" onClick={()=>applyColor(updateSelectionStyle)} style={{background: component.background}}>
    <h2 className="subheadingS">Selection</h2>
    </div>
  );
}
export default Selection;
