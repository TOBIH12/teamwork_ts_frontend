export interface User {
  token: string;
  userId: number;
  firstName: string;
  lastName: string;
  jobRole: string;
}

export interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isLoading?: boolean;
}