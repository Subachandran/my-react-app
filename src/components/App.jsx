import React    from "react";
import Header   from "./Header";
import Note     from './Note'
import Footer   from './Footer'
import allNotes from '../allNotes'

function noteCard(noteInfo, index) {
  return (
    <Note key={index} title={noteInfo.title} content={noteInfo.content} />
  )
}

function App() {
  return (
    <div>
      <Header />
      <div className="noteContainer">
        {allNotes.map(noteCard)}
      </div>
      <Footer />
    </div>
  );
}

export default App;

