import Cards from "./components/Cards"
import Navbar from "./components/Navbar"
import New from "./components/New"


function App() {

  return (
    <>
    <main className="mx-auto mobile:w-full md:w-[95%] mobile:px-2 p-11 flex-col overflow-hidden">
      <Navbar/>
      <New/>
      <Cards/>
    </main>
    </>
  )
}

export default App
