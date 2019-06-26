//import liraries and files
import { createAppContainer } from 'react-navigation';
import {AppNavigator} from "components/route/route"
//make this AppNavigator available to the app
const App = createAppContainer(AppNavigator);
export default App;
  