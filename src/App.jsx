import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage"
import CoursePage from "./components/CoursePage/CoursePage"



export default function App() {
   return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/course/:id" element={<CoursePage/>}/>
        </Routes>
      </Router>
   )
}
