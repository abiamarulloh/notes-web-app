import { Form } from "../../components/molecules/Form";
import { Card } from "../../components/organisms/Card";
import { Footer } from "../../parts/Footer";
import { Header } from "../../parts/Header";
import { getInitialData } from "../../utils";

export function Notes() {
    return <>
        <Header />
        <Form />
        <Card cardTitle="Catatan Aktif" cardData={getInitialData()}  />
        <br />
        <Card cardTitle="Arsip" cardData={getInitialData()} isArchived={true} />
        <Footer />
    </>
}