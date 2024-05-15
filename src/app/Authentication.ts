export interface AuthenticationResponse {
  user: User;
  jwtToken: string;
}

export class User {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  img: Uint8Array;
  userRole: UserRole;

  constructor(
    id: number,
    name: string,
    surname: string,
    email: string,
    password: string,
    img: Uint8Array,
    userRole: UserRole
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.img = img;
    this.userRole = userRole;
  }
}

export enum UserRole {
    ADMIN = 'ADMIN',
    CUSTOMER = 'CUSTOMER'
}
