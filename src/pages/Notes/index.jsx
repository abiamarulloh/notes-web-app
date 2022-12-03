import { Component } from "react";
import { Form } from "../../components/molecules/Form";
import { Card } from "../../components/organisms/Card";
import { Footer } from "../../parts/Footer";
import { Header } from "../../parts/Header";
import { getInitialData } from "../../utils";

export class Notes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            notesTemp: getInitialData()
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onMoveToHandler = this.onMoveToHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.inputOnChangeHandler = this.inputOnChangeHandler.bind(this);
    }

    onSubmitHandler(props) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title: props.title,
                        body: props.body,
                        archived: false,
                        createdAt: new Date()
                    }
                ],
                notesTemp: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title: props.title,
                        body: props.body,
                        archived: false,
                        createdAt: new Date()
                    }
                ]
            }
        })
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes: notes, notesTemp: notes  });
    }

    onMoveToHandler(id, archived) {
        for(let note of this.state.notes) {
            if(note.id === id && note.archived === archived) {
                note.archived = !note.archived
            }
        }
        this.setState({ notes: this.state.notes, notesTemp: this.state.notes });
    }

    inputOnChangeHandler(event) {
        let searchText, result
        if (!this.state.notes) {
            this.setState(() => {
                return {
                    notes: []
                }
            });
        }

        searchText = event.target.value
        if (!searchText) {
            this.setState(() => {
                return {
                    notes: this.state.notesTemp
                }
            });
        }

        if (searchText.length > 0) {
            searchText = searchText.toLowerCase()
            result = this.state.notes.filter((it) => it['title'].toLowerCase().includes(searchText))
            if (result && result.length > 0) {
                this.setState(() => {
                    return {
                        notes: result
                    }
                });
            }  else {
                this.setState(() => {
                    return {
                        notes: [],
                    }
                });
            }
        }
    }

    render() {
        return <>
            <Header inputOnChange={this.inputOnChangeHandler} />
            <Form onSubmitForm={this.onSubmitHandler} />
            <Card cardTitle="Catatan Aktif" cardData={this.state.notes} onDelete={this.onDeleteHandler} onMoveTo={this.onMoveToHandler} />
            <br />
            <Card cardTitle="Arsip" cardData={this.state.notes} isArchived={true} onDelete={this.onDeleteHandler} onMoveTo={this.onMoveToHandler} />
            <Footer />
        </>
    }
}