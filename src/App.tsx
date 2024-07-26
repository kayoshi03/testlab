import {Header} from "./components/Header.tsx";
import {MainBlock} from "./components/MainBlock.tsx";
import {GuideBlock} from "./components/GuideBlock.tsx";
import {Footer} from "./components/Footer.tsx";
import {ThridBlock} from "./components/ThridBlock.tsx";
import {SliderBlock} from "./components/SliderBlock.tsx";

function App() {

  return (
    <>
        <Header/>
        <main>
            <MainBlock/>
            <GuideBlock/>
            <ThridBlock/>
            <SliderBlock/>
        </main>
        <Footer/>
    </>
  )
}

export default App
