package com.example.notes_app.controller;

import com.example.notes_app.model.Note;
import com.example.notes_app.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "http://localhost:3000")
public class NoteController {

    @Autowired
    private NoteRepository noteRepository;

    @GetMapping
    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    @PostMapping
    public Note createNote(@RequestBody Note note) {
        return noteRepository.save(note);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Note> updateNote(@PathVariable Long id, @RequestBody Note noteDetails) {
        return noteRepository.findById(id)
                .map(existingNote -> {
                    existingNote.setTitle(noteDetails.getTitle());
                    existingNote.setContent(noteDetails.getContent());
                    Note updatedNote = noteRepository.save(existingNote);
                    return ResponseEntity.ok(updatedNote);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteNote(@PathVariable Long id) {
        return noteRepository.findById(id)
                .map(note -> {
                    noteRepository.delete(note);
                    return ResponseEntity.ok().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}