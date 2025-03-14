//import { BasicFuntions } from './typescript/BasicFuntions';
//import { BasicTypes } from './typescript/BasicTypes';
//import { ObjectLiterals } from './typescript/ObjectLiterals';
//import { Counter } from "./components/Counter";

import { AuthProvider } from "./context/AuthContext";
import { FormsPage } from "./components/FormsPage";

function App() {

  return (
    <AuthProvider>
      <div className='flex flex-col justify-center items-center h-svh'>
        <h1 className="text-4xl mb-5" >React + TS</h1>

        <FormsPage />
        {/*<UserPage />
        <LoginPage />
        <BasicTypes />,
      <ObjectLiterals />
      <BasicFuntions />
      <Counter />*/}

      </div>
    </AuthProvider>
  )
}

export default App;
