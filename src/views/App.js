import logo from './logo.svg';
import './App.scss';
// import MyComponent from './example/MyComponent';
import MyForm from './example/MyForm';

// #15 : Split Components - Chia cắt Components Trong React.JS
const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Lean React HoiDanIT!</p>
                {/* <MyComponent /> */}
                <MyForm />
            </header>
        </div>
    );
};

export default App;
