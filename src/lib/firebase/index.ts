import {
  collection,
  doc,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  DocumentData,
  QueryConstraint,
  Timestamp
} from 'firebase/firestore';

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';

import { initializeFirebase, getFirestoreDb, getFirebaseAuth } from './config';

export {
  // Firebase instances
  initializeFirebase,
  getFirestoreDb,
  getFirebaseAuth,
  
  // Firestore functions
  collection,
  doc,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  
  // Auth functions
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};

// Types
export type {
  DocumentData,
  QueryConstraint,
  Timestamp,
  User,
};