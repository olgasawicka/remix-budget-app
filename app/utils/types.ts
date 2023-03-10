export type ValidationErrors = {
  username: string;
  email: string;
  password: string;
};

export class CustomError {
  name;
  statusCode;
  message;

  constructor(name: string, statusCode: number, message: string) {
    this.name = name;
    this.statusCode = statusCode;
    this.message = message;
  }
}
