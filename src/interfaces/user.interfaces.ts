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

interface IUserLogin {
  email: string;
  password: string;
}

export { IUser, IUserRequest, IUserLogin };
