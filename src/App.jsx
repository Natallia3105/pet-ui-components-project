import Header from "./components/header/Header.jsx";
 import TeachingSection from "./components/TeachingSection.jsx";
import DifferencesSection from "./components/DifferencesSection.jsx";
import IntroSection from "./components/IntroSection.jsx";
import TabsSection from "./components/button/TabsSection.jsx";
import FeedBackSection from "./components/FeedBackSection.jsx";
import {useState} from "react";
import EffectSection from "./components/EffectSection.jsx";

function  App() {
    const [visible, setVisible] = useState(true)
    const[tab, setTab] = useState('effect')

    // setTimeout(() => {
    //   setVisible(false)
    // }, 3000)
    return (
        <>
            {visible && <Header />}
            <main>
                <IntroSection />
                <TabsSection active={tab} onChange={(current) => setTab(current)} />
                {tab === 'main' && (
                    <>
                        <TeachingSection />
                        <DifferencesSection />
                    </>
                )}

                {tab === 'feedback' &&  <FeedBackSection />}
                {tab === 'effect' &&  <EffectSection />}
            </main>
        </>
    )
}

// function App() {
//   const [count, setCount] = useState(0)
//     const [disabled, setDisabled] = useState(true)
//     const [value, setValue] = useState('')
//
//     function test() {
//       setDisabled(!disabled)
//     }
//
//   return (
//     <>
//       <div className="card">
//         <button disabled={disabled}>
//           count is {count}
//         </button>
//
//           <button onClick={() => {
//              test()
//           }}>
//
//           </button>
//
//           <input type="text" onChange={(e) => {
//               setValue(e.target.value)
//           }}/>
//       </div>
//         <div>
//             <p>
//                 {value}
//             </p>
//         </div>
//     </>
//   )
// }

export default App
