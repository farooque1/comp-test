import logo from "./logo.svg";
import "./App.css";
import DynamicLengthInput from "./DynamicLengthInput";
import Dynamicform from "./Dynamicform";
import ProgressSteps from "./Progressbar";
import Sample from "./Sample";
import Index from "./Component/Index";
import Sidebar from "./Component/sidebar/sidebar";
import Accordion from "./Component/CustomAccordion/Accordion";

function App() {

  const data = [
  {
    id: 1,
    placeholder: 'email',
    type: 'text',
    length: 12,
  },
  {
    id: 2,
    placeholder: 'password',
    type: 'password',
    length: 15,
  },
  {
    id: 3,
    placeholder: 'country',
    type: 'dropdown',
    options: ['USA', 'Canada', 'UK'],
  },
  {
    id: 4,
    placeholder: 'gender',
    type: 'radio',
    options: ['Male', 'Female', 'Other'],
  },
  {
    id: 5,
    placeholder: 'name',
    type: 'text',
    length: 15,
  },
  {
    id: 6,
    placeholder: 'State',
    type: 'dropdown',
    options: ['UP', 'MP', 'MH'],
  },
  {
    id: 6,
    placeholder: 'File',
    type: 'file',
    length: 15,
  },
];

  const dynamicLength = 10;

  return (
    <div className="App">
      {/* <Dynamicform formData={data} /> */}
      {/* <ProgressSteps /> */}
      {/* <Sample /> */}
      <Index />
      {/* <Accordion /> */}
      {/* <Sidebar /> */}
    </div>
  );
}

export default App;