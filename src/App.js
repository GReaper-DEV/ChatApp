import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";


const App = () => {



  return (
    <ChatEngine
      projectID="50a1e689-d81a-4c00-8fb1-97e10a89b737"
      userName="Greaper"
      userSecret="123123"
      height="100vh"
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} /> }
    />
  );
};

export default App;
