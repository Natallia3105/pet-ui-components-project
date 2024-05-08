import Button from "./button/Button.jsx";
import {differences} from "../data.js";
import {useState} from "react";

export default function DifferencesSection() {
    const [contentType, setContentType] = useState(null)
    function handleClick(type) {
        setContentType(type)
    }

    return (
        <section>
            <h3>
                Different from other site
            </h3>
            <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>Підхід</Button>
            <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>Доступність</Button>
            <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>Концентрація</Button>

            {!contentType && <p>Нажми на кнопку</p>}
            {contentType && <p>{differences[contentType]}</p>}
        </section>
    )
}
