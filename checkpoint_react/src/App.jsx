import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Mynavbar from './components/Navbar';
import MyCards from './components/Cards';

function App() {

  return (
    <>

    <Mynavbar/>
    <div className="cards">
      <MyCards 
      title='Tarte au citron' 
      text='Une pâte sablée croustillante garnie d’une crème citron acidulée et fondante.'
      img='https://wordpress.potagercity.fr/wp-content/uploads/2019/04/tarte_citron_meringuee.jpg'/>

      <MyCards 
      title='Brownies au chocolat' 
      text='Un gâteau fondant et riche en chocolat, avec une texture moelleuse et intense.'
      img='https://www.hervecuisine.com/wp-content/uploads/2015/10/brownies.jpg'/>

      <MyCards 
      title='Fraisier' 
      text='Un dessert frais et léger composé de génoise, de crème mousseline et de fraises juteuses.'
      img='https://liliebakery.fr/wp-content/uploads/2024/04/fraisier-lilie-bakery-500x500.jpg'/>

    </div>
    </>
  )
}

export default App