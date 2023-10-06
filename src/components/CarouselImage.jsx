import Carousel from 'react-bootstrap/Carousel';
function CarouselImage() {
  return (
    <section id='home' className='hero-block'>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          src="https://localmedia.org/wp-content/uploads/2021/06/events-1.png"
          alt="First slide"
          style={{ width: "100%", height: "600px" }}
        />
        <Carousel.Caption>
          <h3>Connecting Beyond Borders</h3>
          <p>In the digital age, event organization transcends boundaries, connecting people from around the world with shared interests and passions.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          src="https://billetto.co.uk/blog/wp-content/uploads/2019/04/hanny-naibaho-388579-unsplash-e1554461063517.jpg"
          alt="Second slide"
          style={{ width: "100%", height: "600px" }}
        />
        <Carousel.Caption>
          <h3>Virtual Gatherings, Real Connections</h3>
          <p>Online events bring communities together virtually, making distance irrelevant and allowing us to celebrate, learn, and grow together.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://images.inc.com/uploaded_files/image/1024x576/getty_499517325_210661.jpg"
          alt="First slide"
          style={{ width: "100%", height: "600px" }}
        />
        <Carousel.Caption>
          <h3>Immersive Experiences in the Digital Realm</h3>
          <p>
          The power of online event organization lies in its ability to create immersive and engaging experiences, bringing people closer in a digital world.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
  );
}

export default CarouselImage;