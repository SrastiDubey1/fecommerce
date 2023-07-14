import AllRoutes from './Components/Route/AllRoutes';
import { AuthContext } from './Components/context/context';
import './assets/css/style.css'
import data from './Components/Alldata/CardData.json'
function App() {
  return (
    <>
      <AuthContext.Provider value={{ data }}>
        <AllRoutes />
      </AuthContext.Provider>
    </>
  );
}

export default App;
