import {Header} from "./components/Header.tsx";
import {MainBlock} from "./components/MainBlock.tsx";
import {GuideBlock} from "./components/GuideBlock.tsx";
import {Footer} from "./components/Footer.tsx";

function App() {

  return (
    <>
        <Header/>
        <main>
            <MainBlock/>
            <GuideBlock/>
        </main>
        <Footer/>
    </>
  )
}

export default App
