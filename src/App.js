import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/Homescreen";
import { PlaygroundScreen } from "./screens/PlaygroundScreen";
import { PlaygroundProvider } from "./Providers/PlaygroundProvider";
import { ModalProvider } from "./Providers/ModalProvider";
// import { CreatePlaygroundModal } from "./Providers/Modals/CreatePlayground";

function App() {
  return (
    <PlaygroundProvider>
    <ModalProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Playground/:fileId/:folderId" element={<PlaygroundScreen />} />
        </Routes>
      </BrowserRouter>
    </ModalProvider>
    </PlaygroundProvider>
  );
}

export default App;
