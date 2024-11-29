import React from "react";
import "./App.css";
import Accordeon from "./components/Accordeon/Accordeon";
import Raiting from "./components/Raiting/Raiting";


function App() {
  console.log("app rener");

  return (
    <div>
      <PageTitle  title = {'This is App component'}/>
      <PageTitle  title = {'My friends'}/>
      Article 1
      <Raiting  value = {3}/>
      <Accordeon titleValue = {'Menu'} collapsed = {false}/>
      <Accordeon titleValue = {'Users'} collapsed = {false}/>
      <Accordeon titleValue = {'News'} collapsed = {true}/>
      Article 1
      <Raiting value = {0} />
      <Raiting value = {1} />
      <Raiting value = {2} />
      <Raiting value = {3} />
      <Raiting value = {4} />
      <Raiting value = {5} />
    </div>
  );
}

type PageTitlePropsType = {
  title : string
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>;
}

export default App;
