import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function NavFooter() {
    return (

        <Card className="text-center footer-home">
            <Card.Header></Card.Header>
            <Card.Body className='emojis-nav-footer'>
                <Link to="/" class="material-symbols-outlined">
                    home
                </Link>
                <Link to="/register" class="material-symbols-outlined">
                    add
                </Link>

            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>

    )
}

export default NavFooter;