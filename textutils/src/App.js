import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <div className="container my-4">
        <h1>Welcome to TextUtils</h1>
        <p>
          TextUtils is a text manipulation utility that helps you count words, count characters,
          convert case, and format text quickly and easily.
        </p>
      </div>
    </>
  );
}

export default App;
