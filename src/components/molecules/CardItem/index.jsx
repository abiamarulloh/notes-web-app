import { showFormattedDate } from "../../../utils";
import { Button } from "../../atoms/Button";
import { Title } from "../../atoms/Title";
import './index.css';

export function CardItem({ data }) {
    return (
        <div className="card-item">
            <Title size="14px" title={data.title} />
            <Title size="10px" title={showFormattedDate(data.createdAt)} />
            <p className="card-body">
                {data.body}
            </p>

            <div className="card-footer">
                <Button type="button" color="#e84118" title="Delete" />
                <Button type="button" color="#fbc531" title={ data.archived ?  'Pindahkan' : 'Arsipkan'} />
            </div>
        </div>
    );
}