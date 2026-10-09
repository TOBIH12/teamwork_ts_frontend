export interface User {
  token: string;
  userId: number;
  firstName: string;
  lastName: string;
  jobRole: string;
  userImg: string | null;
}

export interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isLoading?: boolean;
  error: string;
}

export interface LoginUserInput {
  email: string;
  password: string;
}
