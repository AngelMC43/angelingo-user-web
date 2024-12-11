import React from "react";
import AppLayout from "./layout/AppLayout";
import RoutesComponent from "./routes/RoutesComponent";
import "./App.css";
import { LoginContextProvider } from "./context/LoginContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <LoginContextProvider>
      <BrowserRouter>
        <AppLayout>
          <RoutesComponent />
        </AppLayout>
      </BrowserRouter>
    </LoginContextProvider>
  );
}

export default App;
