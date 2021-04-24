import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import Homescreen from './screens/Homescreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Productscreen from './screens/Productscreen';
import Cartscreen from './screens/Cartscreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/product/:id' component={Productscreen} />
          <Route path='/cart/:id?' component={Cartscreen} />
          <Route path='/' component={Homescreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}
export default App;
