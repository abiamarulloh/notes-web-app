import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { Textarea } from "../../atoms/Textarea";
import { Title } from "../../atoms/Title";
import './index.css';

export function Form() {
    return (
        <div className="form">
            <Title title="Buat Catatan" size="20px" />
            <p>Sisa Karakter: 50</p>
            <Input type="text" placeholder="Tuliskan Judul disini..." />
            <Textarea placeholder="Tuliskan catatanmu disini.." />
            <Button title="Submit" type="submit" />
        </div>
    );
}