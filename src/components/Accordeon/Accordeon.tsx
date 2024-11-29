import React from "react";

type AccordeonPropsType = {
  titleValue : string
  collapsed : boolean
}

function Accordeon(props: AccordeonPropsType) {
    console.log('Accordeon rener');
    if(props.collapsed === true){
      return (
        <div>
          <AccordeonTitle title = {props.titleValue}/>
        </div>
      );
    }
    return (
      <div>
        <AccordeonTitle title = {props.titleValue}/>
        <AccordeonBody/>
      </div>
    );
  }

type AccordeonTitlePropsType = {
  title : string
}

  function AccordeonTitle (props: AccordeonTitlePropsType) {
    console.log('AccordeonTitle rener');
    
      return (
        <h3>{props.title}</h3>
      )
    }

    function AccordeonBody () {
        console.log('AccordeonBody rener');
        return (
          <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
        )
      }

  export default Accordeon;