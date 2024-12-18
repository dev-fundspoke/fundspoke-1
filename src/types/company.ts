export interface Company {
  id: string;
  name: string;
  description: string;
  logo?: string;
  addresses: {
    main: string;
    billing?: string;
  };
  documents: {
    id: string;
    name: string;
    url: string;
    type: string;
  }[];
  personnel: {
    id: string;
    name: string;
    role: string;
    email: string;
    phone?: string;
  }[];
  ipPortfolio: {
    patents: string[];
    trademarks: string[];
    copyrights: string[];
  };
  technology: {
    description: string;
    category: string;
    readinessLevel: number;
  };
  financials: {
    revenue: number;
    expenses: number;
    profit: number;
    fiscalYear: string;
  };
  investment: {
    totalRaised: number;
    rounds: {
      id: string;
      type: string;
      amount: number;
      date: string;
      investors: string[];
    }[];
  };
  debt: {
    totalDebt: number;
    loans: {
      id: string;
      type: string;
      amount: number;
      interestRate: number;
      maturityDate: string;
    }[];
  };
  projections: {
    year: string;
    revenue: number;
    expenses: number;
    profit: number;
  }[];
  createdAt: Date;
  updatedAt: Date;
}