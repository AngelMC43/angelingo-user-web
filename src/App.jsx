import AppLayout from "./layout/AppLayout";
import RoutesComponent from "./routes/RoutesComponent";
import "./App.css";
import { LoginContextProvider } from "./context/LoginContext";

function App() {
  return (
    <>
      <LoginContextProvider>
        <AppLayout>
          <RoutesComponent />
        </AppLayout>
      </LoginContextProvider>
    </>
  );
}

export default App;
