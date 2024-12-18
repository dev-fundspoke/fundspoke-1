import { useState, useEffect } from 'react';
import { collection, query, getDocs, QueryConstraint } from 'firebase/firestore';
import { getFirestoreDb } from '../lib/firebase';
import { logError } from '../utils/logger';

export function useFirestoreData<T>(
  collectionName: string,
  queryConstraints: QueryConstraint[] = []
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestoreDb();
        const q = query(collection(db, collectionName), ...queryConstraints);
        const querySnapshot = await getDocs(q);
        const results = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as T[];
        setData(results);
      } catch (err) {
        const error = err as Error;
        setError(error);
        logError(error, {
          componentName: 'useFirestoreData',
          fileName: 'useFirestoreData.ts',
          additionalInfo: { collection: collectionName }
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName]);

  return { data, loading, error };
}