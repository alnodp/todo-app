import { Injectable } from '@angular/core';
import {TodoNoteModel} from '../../models/todo-note.model';
import {AngularFirestore} from '@angular/fire/firestore';

const FIREBASE_COLLECTION_NAME = 'todo-list';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public todoItem: TodoNoteModel;

  constructor(private firestore: AngularFirestore) { }

  getNoteList() {
    return this.firestore.collection(FIREBASE_COLLECTION_NAME).snapshotChanges();
  }

  addNote(note: TodoNoteModel) {
    return this.firestore.collection(FIREBASE_COLLECTION_NAME).add(note);
  }

  updateNote(note: TodoNoteModel) {
    return this.firestore.doc(`${FIREBASE_COLLECTION_NAME}/${note.id}`).update(note);
  }

  deleteNote(id: string) {
    this.firestore.doc(`${FIREBASE_COLLECTION_NAME}/${id}`).delete();
  }

}
