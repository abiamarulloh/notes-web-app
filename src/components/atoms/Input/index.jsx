import './index.css'

export function Input({ type, value, placeholder, onChange }) {
    return (
        <input type={type} value={value} placeholder={placeholder} onChange={onChange} />
    );
}