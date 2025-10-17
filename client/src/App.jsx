// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppleVideo from "./components/AppleVideo/AppleVideo";
import { Route, Routes } from "react-router";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Main from "./pages/Home/Main";
import Iphone from "./pages/Iphone/Iphone";
import TV from "./pages/TV/TV";
import Music from "./pages/Music/Music";
import Support from "./pages/Support/Support";
import Ipad from "./pages/Ipad/Ipad";
import Watch from "./pages/Watch/Watch";
import Four04 from "./pages/Four04/Four04";
import Mac from "./pages/Mac/Mac";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="mac" element={<Mac />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="iphone/:id" element={<Product />} />
          <Route path="ipad" element={<Ipad />} />
          <Route path="watch" element={<Watch />} />
          <Route path="tv" element={<TV />} />
          <Route path="music" element={<Music />} />
          <Route path="support" element={<Support />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
