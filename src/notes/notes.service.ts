import { Injectable } from '@nestjs/common';
// import * as admin from 'firebase-admin';
import { CreateNoteDto, UpdateNoteDto } from './dto/notes.dto';

@Injectable()
export class NotesService {
  async create(createNoteDto: CreateNoteDto): Promise<any> {
    //const db = admin.firestore();
    //const note = await db.collection('notes').add(createNoteDto);
    // return { id: note.id };
    return { id: 'sushmit' };
  }

  async findAll(): Promise<any[]> {
    // const db = admin.firestore();
    // const snapshot = await db.collection('notes').get();
    // return snapshot.docs.map((doc) => ({
    //   id: doc.id,
    //   ...doc.data(),
    // }));
    return [{ id: 'ram' }];
  }

  async findOne(id: string): Promise<any> {
    // const db = admin.firestore();
    // console.log(db);
    // const doc = await db.collection('notes').doc(id).get();
    // if (doc.exists) {
    //   return { id: doc.id, ...doc.data() };
    // }
    return null;
  }

  async update(id: string, updateNoteDto: UpdateNoteDto): Promise<any> {
    // const db = admin.firestore();
    // await db
    //   .collection('notes')
    //   .doc(id)
    //   .update({ ...updateNoteDto });
    return { id };
  }

  async remove(id: string): Promise<any> {
    // const db = admin.firestore();
    // await db.collection('notes').doc(id).delete();
    return { id };
  }
}
