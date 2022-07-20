export class Idea {
  constructor(
    public name: string,
    public date: number,
    public description: string,
    public userId?: number,
    public imgUrl?: string,
    public user?: any,
    public id?: number
  ) {}
}
