interface IUserRequest {
  name: string;
  email: string;
  phone: number;
  password: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  phone: number;
  created_at: Date;
}

interface IUserUpdate {
  name: string;
  email: string;
  phone: number;
}

interface IUserLogin {
  email: string;
  password: string;
}

export { IUser, IUserRequest, IUserUpdate, IUserLogin };
