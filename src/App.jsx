import AppLayout from "./layout/AppLayout";
import "./App.css";
import { LoginContextProvider } from "./context/LoginContext";
import RoutesComponent from "./views/advancedGames/RoutesComponent";

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
