import './index.css'

export function Input({ type, value, placeholder }) {
    return (
        <input type={type} value={value} placeholder={placeholder} />
    );
}