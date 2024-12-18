import { createDocument } from './firestore';
import { FIREBASE_COLLECTIONS } from '../constants';
import { logError } from '../utils/logger';

export interface CompanyData {
  name: string;
  description?: string;
  logo?: string;
  addresses: {
    main: string;
    billing?: string;
  };
}

export const createCompany = async (data: CompanyData) => {
  try {
    return await createDocument(FIREBASE_COLLECTIONS.COMPANIES, {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  } catch (error) {
    logError(error as Error, {
      componentName: 'CompanyService',
      fileName: 'company.ts',
      additionalInfo: { companyData: data }
    });
    throw error; // Re-throw to handle in the component
  }
};