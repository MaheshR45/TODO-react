import logo from './logo.svg';
// bootstrap,reactstrap,obj use,refresh local storage,,card top border color
import './App.css';
import CreateToDolist from './components/createtask';
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './redux/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
       <Provider store={store}>
           <CreateToDolist />
       </Provider>
    </div>
  );
}

export default App;
