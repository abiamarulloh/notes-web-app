import { Title } from "../../atoms/Title";
import { CardItem } from "../../molecules/CardItem";
import './index.css';

export function Card({ cardTitle, cardData, isArchived = false }) {
    function CardItemCondition() {
        const isAnyData = cardData.length > 0;
        if (isAnyData) {
            return (
                <div className="cards">
                    {
                        cardData.map((data, key) => {
                            if(isArchived === data.archived) {
                                return <CardItem data={data} key={key} />
                            }
                            return true;
                        }) 
                    }
                </div>
            )
        }
        return <Title title="Tidak ada catatan" size="14px" align="center" color="grey" />;
    }

    return (
        <div className="container">
            <Title title={cardTitle} size="20px" />
            { CardItemCondition() }
        </div>
    );
}