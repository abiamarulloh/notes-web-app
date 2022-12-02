import './index.css'

export function Textarea({ value, placeholder }) {
    return (
        <textarea cols="30" rows="10" placeholder={placeholder}>{value}</textarea>
    );
}