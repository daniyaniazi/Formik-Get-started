import "./App.css";
import Regform from "./components/Regform";
import { useFormik } from "formik";

function App() {
  //takes an object
  //this hooks return an object that contain properties method
  const formik = useFormik({
    //object that contain initial values for our form state
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
  });
  return (
    <div className="App">
      <Regform />
    </div>
  );
}

export default App;
