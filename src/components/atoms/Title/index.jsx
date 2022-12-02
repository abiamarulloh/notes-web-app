import './index.css'

export function Title({title, size}) {
    return (
       <h1 style={{fontSize: size}}>{title}</h1>
    );
}