import { useState, useEffect } from 'react';
import { useFirestoreData } from '../../../hooks/useFirestoreData';
import { FIREBASE_COLLECTIONS } from '../../../constants';

interface Metrics {
  totalApplications: number;
  activeCompanies: number;
  teamMembers: number;
  pendingClaims: number;
}

export const useMetrics = () => {
  const [metrics, setMetrics] = useState<Metrics>({
    totalApplications: 0,
    activeCompanies: 0,
    teamMembers: 0,
    pendingClaims: 0
  });

  const { data: applications } = useFirestoreData(FIREBASE_COLLECTIONS.APPLICATIONS);
  const { data: companies } = useFirestoreData(FIREBASE_COLLECTIONS.COMPANIES);
  const { data: users } = useFirestoreData(FIREBASE_COLLECTIONS.USERS);

  useEffect(() => {
    setMetrics({
      totalApplications: applications.length,
      activeCompanies: companies.length,
      teamMembers: users.length,
      pendingClaims: applications.filter(app => app.status === 'pending').length
    });
  }, [applications, companies, users]);

  return metrics;
};