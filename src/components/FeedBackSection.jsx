import Button from "./button/Button.jsx";
import {useState, useRef} from "react";
import {render} from "react-dom";

function  StateVsRef() {
    const input = useRef()
    const [show, setShow] = useState(false)

    function handleKeyDown(event){
        if (event.key === 'Enter') {
            setShow(true)
        }
    }
    return (
      <div>
          <h3>Input value: {show && input.current.value}</h3>
          <input
              ref={input}
              type="text"
              onKeyDown={handleKeyDown}
              className='control'
          />
      </div>
    )
}

export default function FeedBackSection() {
    const [form, setForm] =  useState({
        name: '',
        hasError: false,
        reason: 'help'
    })


    function handleNameChange(event) {
        // setName(event.target.value)
        // setHasError(event.target.value.trim().length === 0)
        setForm((prev) =>  ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,}))
    }

    // function toggleError(){
    //     // setHasError((prev) => !prev)
    // }

    return (
     <section>
         <h3>Зворотній звʼязок</h3>

         {/*<Button onClick={toggleError} >Toggle error</Button>*/}
         <form style={{marginBottom: '1rem'}}>
             <label htmlFor="name">Your name</label>
             <input type="text"
                    id='name'
                    className='control'
                    value={form.name}
                    style={{
                        border: form.hasError ? '1px solid red' : null
                    }}
                    onChange={handleNameChange}
                    />
             <label htmlFor="reason">Your message</label>
             <select id="reason"
                     className='control'
                     value={form.reason}
             onChange={(event) =>
                 setForm((prev) =>({...prev, reason: event.target.value}))
             }
             >
                 <option value="error">Error</option>
                 <option value="help">Needed help</option>
                 <option value="suggest">Propose</option>
             </select>

             <Button disabled={form.hasError} isActive={!form.hasError}>Send </Button>

             {/*<pre>*/}
             {/*   {JSON.stringify(form, null, 2)}*/}
             {/*</pre>*/}

         </form>
         <hr/>
         <StateVsRef />
     </section>
    )
}
