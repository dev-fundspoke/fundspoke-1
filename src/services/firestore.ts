import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDoc, 
  getDocs, 
  query, 
  where 
} from 'firebase/firestore';
import { getFirestoreDb } from '../lib/firebase';

export const createDocument = async (collectionName: string, data: any) => {
  const db = getFirestoreDb();
  return await addDoc(collection(db, collectionName), data);
};

export const updateDocument = async (collectionName: string, id: string, data: any) => {
  const db = getFirestoreDb();
  const docRef = doc(db, collectionName, id);
  return await updateDoc(docRef, data);
};

export const deleteDocument = async (collectionName: string, id: string) => {
  const db = getFirestoreDb();
  const docRef = doc(db, collectionName, id);
  return await deleteDoc(docRef);
};