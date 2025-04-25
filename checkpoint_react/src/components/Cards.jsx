import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCards(props) {
  return (
    <Card style={{ fontFamily: 'script MJ', fontSize: '18px', width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title> {props.title} </Card.Title>
        <Card.Text> {props.text} </Card.Text>
        <Button style={{backgroundColor: '#faedcd', color:'black', borderColor:'black'}}>Passez à la commande</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCards;