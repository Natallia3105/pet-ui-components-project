import {ways} from "../data.js";
import WayToTeach from "./WayToTeach.jsx";

export  default function TeachingSection() {
    return (
        <section>
            <h3>Our learning</h3>
            <ul>
                {ways.map((way) => (
                    <WayToTeach key={way.title} {...way} />
                ))}
            </ul>
        </section>
    )
}
