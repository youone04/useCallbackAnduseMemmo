import logo from './logo.svg';
import './App.css';
import NoUseCallback from './useCallback/noUseCallback';
import UseCallback from './useCallback/useCallback';
import NoUseMemo from './useMemo/noUseMemo';
import UseMemo from './useMemo/UseMemo';

function App() {
  return (
    <>
    {/* <NoUseCallback/> */}
    {/* <UseCallback/> */}

    {/* <NoUseMemo/> */}
    <UseMemo/>
    </>
  );
}

export default App;
