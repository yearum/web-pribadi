import { Provider } from 'react-redux'
import store from './store'
import Counter from './componen/counter'
import User from './componen/User'


function App() {
  return (
    <Provider store={store}>
    
      <div>
      <h1>Iki Webku</h1>
      <Counter />
      <hr />
      <User />
    </div>
    </Provider>
  )
}

export default App
