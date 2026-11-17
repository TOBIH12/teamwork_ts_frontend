export interface User {
  token: string;
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  jobRole: string;
  userImg: string | null;
  expiresAt: number;
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

export interface RegisterUserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  jobRole: string;
  department: string;
  address: string;
}
