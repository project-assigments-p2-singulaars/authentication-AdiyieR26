export interface Login {
    email: string;
    password: string;
  }
  
  export interface User {
    name?: string;
    email: string;
    password?: string;
  }
  
  export interface LoginResponse{
    accessToken: string;
    user: User
  }