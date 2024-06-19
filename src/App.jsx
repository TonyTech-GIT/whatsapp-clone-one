import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Welcome, Home, Chat } from "./sections";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route path="/home" element={<Home />} />

        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default App;
