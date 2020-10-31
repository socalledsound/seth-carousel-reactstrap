import React from 'react';
import WithForm from './components/withForm.component';
import MyCarousel from './components/carousel';


class App extends React.Component {

  render(){
    return (
      <div className="App">
        {/* <WithForm /> */}
        <MyCarousel />
      </div>
    );
  }

}

export default App;
