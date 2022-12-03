import './index.css';

export function Button({ title, type, color, onClick }) {
    return (
        <button style={{ color: color }} type={type} onClick={onClick}>{title}</button>
    );
}