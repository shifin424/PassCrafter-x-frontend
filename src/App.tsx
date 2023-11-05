import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Router from "./routes/Router";
import Background from "./Components/Theme/Background";

function App() {
    return (
        <>
            <div>
                <Background />
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<Router />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
