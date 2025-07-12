
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/card'
function App() {

  return (
    <>
     <Navbar />
     {/* <main>
      This is my sites Main Content
     </main> */}
     <div className="cards">


      <Card time="4 Days ago" post="Post One" read="4" views="5000" cmmnts="32" image="https://miro.medium.com/v2/resize:fit:800/0*JUUIaKYvIBQq9p9y.jpg" />


      <Card time="3 Days ago" post="Post Two" read="10" views="6184" cmmnts="18" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0oDzre9jfSFyh-AdX_l_CGtAN2VM_CThsbYBtONVIOCLjOp5GIqQ0s831iFWEGHIhYg&usqp=CAU"/>


      <Card time="5 Days ago" post="Post Three"read="20" views="2355" cmmnts="55"  image="https://wallpaperswide.com/download/mountain_sunrise_2-wallpaper-3840x2400.jpg"/>
     </div>
     <Footer />
    </>
  )
}

export default App
