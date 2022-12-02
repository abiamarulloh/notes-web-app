import { Input } from "../../components/atoms/Input";
import { Title } from "../../components/atoms/Title";
import './index.css';

export function Header() {
    return (
        <>
            <div className="header">
                <div className="header-item">
                    <Title title="Notes" />
                </div>
                <div className="header-item">
                    <Input type="text"  placeholder="Cari catatan..." />
                </div>
            </div>
            <hr />
        </>
    );
}