import './index.css'

export function Title({title, size, align, color}) {
    return (
       <h1 style={{fontSize: size, textAlign: align, color: color }}>{title}</h1>
    );
}