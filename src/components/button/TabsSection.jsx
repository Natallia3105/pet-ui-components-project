import {isTSIntersectionType} from "eslint-plugin-react/lib/util/ast.js";
import Button from "./Button.jsx";

export default function TabsSection({active, onChange}) {
    return (
        <section style={{marginBottom: '1rem'}}>
            <Button isActive={active === 'main'} onClick={() => onChange('main')}>Головна</Button>
            <Button isActive={active === 'feedback'} onClick={() => onChange('feedback')}>Зворотній звʼязок</Button>
            <Button isActive={active === 'effect'} onClick={() => onChange('effect')}>Effect</Button>

        </section>
    )
}
