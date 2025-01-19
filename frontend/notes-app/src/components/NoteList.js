import React from 'react';

const NoteList = ({ notes, onDelete, onEdit }) => {
    const formatDate = (dateString) => {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className="notes-list">
            <h2>My Notes</h2>
            {notes.map(note => (
                <div key={note.id} className="note-item">
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                    <div className="note-timestamp">
                        Created: {formatDate(note.createdAt)}
                    </div>
                    <div className="note-actions">
                        <button className="edit-btn" onClick={() => onEdit(note)}>
                            Edit
                        </button>
                        <button className="delete-btn" onClick={() => onDelete(note.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NoteList; 