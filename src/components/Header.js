import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
    return (
    <>
    <header>

    
        <Navbar key="md" expand="md" className="">
            <Container fluid>
            <Navbar.Brand href="#">
                <span className='logo-text fs-1 mx-5'>Apple Cinnamon</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
            <Navbar.Offcanvas
                id="offcanvasNavbar-expand-md"
                aria-labelledby="offcanvasNavbarLabel-expand-md"
                placement="end"
            >
                <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                    Offcanvas
                </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-1">
                    <Nav.Item>
                        <Nav.Link href="#" active>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Portfolio</Nav.Link>
                    </Nav.Item>
                    
                </Nav>
                
                </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Container>
        </Navbar>
        
    </header>
    </>
    );
}

export default Header;
