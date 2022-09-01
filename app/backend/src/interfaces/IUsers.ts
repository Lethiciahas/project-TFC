export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  id?: number;
  email: string;
  username: string;
  role: string;
}