import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function IndividualIntervalsExample() {
    return (
    <Carousel fade>
        <Carousel.Item interval={5000}>
        {/* <ExampleCarouselImage text="First slide" /> */}
            <img src='/images/banner/leaf.webp' alt='banner leaf'/>
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item interval={5000}>
            <img src='/images/banner/nature.jpg' alt='banner nature'/>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
            <img src='/images/banner/fog.jpg' alt='banner fog'/>
        </Carousel.Item>
    </Carousel>
    );
}

export default IndividualIntervalsExample;