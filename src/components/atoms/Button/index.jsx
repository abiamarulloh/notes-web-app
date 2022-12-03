import './index.css';

export function Button({ title, type, color }) {
    return (
        <button style={{ color: color }} type={type}>{title}</button>
    );
}