export class User {
  public static numberBeginBalls = 50;
  public static numberBallsForIdea = 20;
  static of(obj: any): User {
    return new User(
      obj.email ?? '',
      obj.password ?? '',
      obj.lastname ?? '',
      obj.firstname ?? '',
      obj.residency ?? '',
      obj.ideas ?? 0,
      obj.balls ?? 0,
      obj.url ?? '',
      obj.id ?? 0
    );
  }
  clone(): User {
    return new User(
      this.email,
      this.password,
      this.lastname,
      this.firstname,
      this.residency,
      this.ideas,
      this.balls,
      this.url,
      this.id
    );
  }
  constructor(
    public email: string,
    public password: string,
    public lastname: string,
    public firstname: string,
    public residency: string,
    public ideas: number,
    public balls: number,
    public url?: string,
    public id?: number
  ) {}
}
