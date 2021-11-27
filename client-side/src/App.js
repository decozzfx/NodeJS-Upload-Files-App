import {BrowserRouter, Routes , Route} from 'react-router-dom'
import SingleUpload from './components/SingleUpload'
import MultipleUploads from './components/MultipleUploads'
function App() {
  return (
     <BrowserRouter>
          <Routes>
            <Route path='/single' element={<SingleUpload/>}/>
            <Route path='/multiple' element={<MultipleUploads/>}/>
          </Routes>
    </BrowserRouter>

  );
}

export default App;
