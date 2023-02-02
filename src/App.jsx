import { BookTrip, Destinations, Footer, Hero, Logos, Navbar, Services, Subscribe, Testimonials } from './containers';



function App() {
  return (
    <div className="">

      <div className="">
        <Navbar />
      </div>

      <div className="">
        <Hero/>
      </div>

      <div className="">
         <Services/>
         <Destinations/>
         <BookTrip/>
         <Testimonials/>
         <Logos/>
         <Subscribe/>
         <Footer/>
      </div>
    </div>
  )
}

export default App
