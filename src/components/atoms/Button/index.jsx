import './index.css';

export function Button({ title, type }) {
    return (
        <button  type={type}>{title}</button>
    );
}