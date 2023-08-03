import Message from './Message';

function App(){
  return (
    <div>
      <Message/>
    </div>
  );
}

export default App;

/*
    >importing the Message.tsx file into this file under the name "Message" it can be given any name
    >Creating a new function under the name "App"
    >The fucntion will return a HTMl <div> element witch contains the retruned component on the <Message> funtion that was imported
    >Exporting the App function to be used in a different TSX file. (main.tsx)_
*/