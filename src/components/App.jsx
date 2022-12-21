import React from "react";
import Header from "./Header";
import Note from './Note'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Header />
      <div className="noteContainer">
        <Note title="Title1" content="Content1" />
        <Note title="Title2" content="Content2" />
        <Note title="Title3" content="Content3" />
      </div>
      <Footer />
    </div>
  );
}

export default App;

