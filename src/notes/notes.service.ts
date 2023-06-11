import { Injectable } from '@nestjs/common';
// import * as admin from 'firebase-admin';
import { firestore } from '../../firebase.config';
import { CreateNoteDto, UpdateNoteDto } from './dto/notes.dto';
import {
  doc,
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

@Injectable()
export class NotesService {
  private notesCollection = collection(firestore, 'notes');
  async create(createNoteDto: CreateNoteDto): Promise<any> {
    //const db = admin.firestore();
    //const note = await db.collection('notes').add(createNoteDto);
    // return { id: note.id };
    // this.notes.push(createNoteDto);
    // return { id: 'sushmit' };
    // const newNoteRef =  addDoc(collection(firestore, "notes")),{
    //     createNoteDto
    // }
    // const newNote = { ...createNoteDto, id: newNoteRef.id };
    // await newNoteRef.set(newNote);
    // return newNote;
    const newNoteRef = await addDoc(
      collection(firestore, 'notes'),
      createNoteDto,
    );
    const newNote = { ...createNoteDto, id: newNoteRef.id };
    return newNote;
  }

  async findAll(): Promise<any[]> {
    // const db = admin.firestore();
    // const snapshot = await db.collection('notes').get();
    // return snapshot.docs.map((doc) => ({
    //   id: doc.id,
    //   ...doc.data(),
    // }));
    //return [{ id: 'ram' }];
    // return this.notes;
    const querySnapshot = await getDocs(collection(firestore, 'notes'));
    const notes = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return notes;
  }

  async findOne(id: string): Promise<any> {
    // const db = admin.firestore();
    // console.log(db);
    // const doc = await db.collection('notes').doc(id).get();
    // if (doc.exists) {
    //   return { id: doc.id, ...doc.data() };
    // }
    const noteRef = doc(firestore, 'notes', id);
    const noteSnapshot = await getDoc(noteRef);

    if (noteSnapshot.exists()) {
      return { id: noteSnapshot.id, ...noteSnapshot.data() };
    }

    return null;
  }

  async update(id: string, updateNoteDto: UpdateNoteDto): Promise<any> {
    // const db = admin.firestore();
    // await db
    //   .collection('notes')
    //   .doc(id)
    //   .update({ ...updateNoteDto });
    const noteRef = doc(firestore, 'notes', id);
    await updateDoc(noteRef, {
      ...updateNoteDto,
    });
  }

  async remove(id: string): Promise<any> {
    // const db = admin.firestore();
    // await db.collection('notes').doc(id).delete();
    const noteRef = doc(firestore, 'notes', id);
    await deleteDoc(noteRef);
    return { id };
  }
}
