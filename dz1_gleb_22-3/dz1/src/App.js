
import './App.css';
import Header from "./components/Header/Header";
import './components/Header/header.module.css';
import Button from "./components/Button/Button";
import './components/Button/button.module.css';
import Text from "./components/Text/Text";
import './components/Text/text.module.css';
import Footer from "./components/Footer/Footer";
import './components/Footer/footer.module.css';
import Content from "./components/Content/Content";
import './components/Content/content.module.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Text />
        <Content title={'content'}/>
      <Button />
      <Footer />
    </div>
  );
}

export default App;
