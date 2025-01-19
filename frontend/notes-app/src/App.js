// src/App.js
import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { getNotes, createNote, deleteNote, updateNote } from './service/noteService';
import './App.css';

function App() {
    const [notes, setNotes] = useState([]);
    const [error, setError] = useState(null);
    const [editingNote, setEditingNote] = useState(null);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const response = await getNotes();
            setNotes(response.data);
        } catch (err) {
            setError('Failed to fetch notes');
            console.error('Error fetching notes:', err);
        }
    };

    const handleNoteCreate = async (newNote) => {
        try {
            await createNote(newNote);
            fetchNotes();
            setError(null);
        } catch (err) {
            setError('Failed to create note');
            console.error('Error creating note:', err);
        }
    };

    const handleNoteUpdate = async (id, updatedNote) => {
        try {
            await updateNote(id, updatedNote);
            fetchNotes();
            setEditingNote(null);
            setError(null);
        } catch (err) {
            setError('Failed to update note');
            console.error('Error updating note:', err);
        }
    };

    const handleNoteDelete = async (id) => {
        try {
            await deleteNote(id);
            fetchNotes(); // Refresh the notes list
        } catch (err) {
            setError('Failed to delete note');
            console.error('Error deleting note:', err);
        }
    };

    const handleEditClick = (note) => {
        setEditingNote(note);
    };

    return (
        <>
            <div className="header-background"></div>
            <div className="App">
                <header className="App-header">
                    <h1>Notes App</h1>
                </header>
                {error && <div className="error-message">{error}</div>}
                <div className="app-container">
                    <div className="form-section">
                        <NoteForm 
                            onNoteCreate={handleNoteCreate}
                            onNoteUpdate={handleNoteUpdate}
                            editingNote={editingNote}
                        />
                    </div>
                    <div className="notes-section">
                        <NoteList 
                            notes={notes} 
                            onDelete={handleNoteDelete}
                            onEdit={handleEditClick}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;