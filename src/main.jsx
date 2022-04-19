import { render } from "preact";
import "the-new-css-reset/css/reset.css";
import 'rsuite/dist/rsuite.min.css';
import "./style/main.scss";

import {Calc} from "./section/calc"

function App() {
  return (
      <Calc/>
  )
}

render(<App />, document.body);
