// src/components/NoteForm.js
import React, { useState, useEffect } from 'react';

const NoteForm = ({ onNoteCreate, onNoteUpdate, editingNote }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (editingNote) {
            setTitle(editingNote.title);
            setContent(editingNote.content);
        }
    }, [editingNote]);

    const handleSubmit = (e) => {
        // Prevent the form from refreshing the page
        e.preventDefault();
        
        if (editingNote) {
            onNoteUpdate(editingNote.id, { title, content });
        } else {
            onNoteCreate({ title, content });
        }
        
        // Clear the form
        setTitle('');
        setContent('');
    };

    return (
        <div>
            <h2>{editingNote ? 'Edit Note' : 'Add New Note'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">
                    {editingNote ? 'Update Note' : 'Create Note'}
                </button>
                {editingNote && (
                    <button 
                        type="button" 
                        onClick={() => {
                            setTitle('');
                            setContent('');
                            onNoteUpdate(null);
                        }}
                    >
                        Cancel
                    </button>
                )}
            </form>
        </div>
    );
};

export default NoteForm;