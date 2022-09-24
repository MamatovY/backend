import React from "react"
import { render } from 'react-dom'
import Menu from "./components/Menu.js"
import data from '../data/recipes.json'


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <Menu recipes={data} />
//     </React.StrictMode>
// );



render(<Menu recipes={data} />, document.getElementById("root"));