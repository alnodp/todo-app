import { Injectable } from '@angular/core';
import {TodoNoteModel} from '../../models/todo-note.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {UserService} from '../user/user.service';

const FIREBASE_COLLECTION_NAME = 'todo-list';
const AUTHOR_EMAIL_KEY = 'authorEmail';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public todoItem: TodoNoteModel;

  constructor(private firestore: AngularFirestore, private userService: UserService) { }

  getNoteList() {
    return this.firestore.collection(FIREBASE_COLLECTION_NAME,
        ref => ref.where(AUTHOR_EMAIL_KEY, '==', this.userService.userEmail)).snapshotChanges();
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
