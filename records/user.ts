export class User {
  private _loggedIn = false;
  private _email: string | null = null;
  private _password: string | null = null;

  get loggedIn(): boolean {
    return this._loggedIn;
  }

  get email(): string | null {
    return this._email;
  }

  login(_email: string | null, _password: string | null): boolean {
    return _password === '1234' ? true : false;
  }
}
