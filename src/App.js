import React, { Component } from  'react';
import { HousesList } from './Components/HousesList';
import Header from './Components/Header';

class App extends Component {
    render () {
        return (
            <div>
                <Header /> <br/>
                <HousesList />
            </div>
        )
    }
}

export default App;