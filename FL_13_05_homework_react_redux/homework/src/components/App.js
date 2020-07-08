import React from 'react';
import '../App.css';
import Header from './Header'
import Footer from './Footer'
import { store } from '../store'
import { Provider } from 'react-redux'
import ContentComponent from './ContentComponent'


class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <Header />
        <section className="main-section">
          <ContentComponent />
        </section>
        <Footer />
        </div>
      </Provider>
    );
  }
}


export default App;
