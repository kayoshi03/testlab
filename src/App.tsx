import {Header} from "./components/Header.tsx";
import {MainBlock} from "./components/MainBlock.tsx";
import {GuideBlock} from "./components/GuideBlock.tsx";
import {Footer} from "./components/Footer.tsx";
import {ThridBlock} from "./components/ThridBlock.tsx";
import {SliderBlock} from "./components/SliderBlock.tsx";
import {AccardionBlock} from "./components/AccardionBlock.tsx";
import {ReviewsBlock} from "./components/ReviewsBlock.tsx";
import {FormBlock} from "./components/FormBlock.tsx";

function App() {

  return (
    <>
        <Header/>
        <main>
            <MainBlock/>
            <GuideBlock/>
            <ThridBlock/>
            <SliderBlock/>
            <AccardionBlock/>
            <ReviewsBlock/>
            <FormBlock/>
        </main>
        <Footer/>
    </>
  )
}

export default App
