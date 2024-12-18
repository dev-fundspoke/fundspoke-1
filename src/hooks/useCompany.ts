import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { getFirestoreDb } from '../lib/firebase';
import { Company } from '../types/company';
import { FIREBASE_COLLECTIONS } from '../constants';

export const useCompany = (id: string) => {
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const db = getFirestoreDb();
        const docRef = doc(db, FIREBASE_COLLECTIONS.COMPANIES, id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setCompany({ id: docSnap.id, ...docSnap.data() } as Company);
        } else {
          throw new Error('Company not found');
        }
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCompany();
    }
  }, [id]);

  return { company, loading, error };
};