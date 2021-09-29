export class Todo {
  constructor(
    public user_id: number,
    public title: string,
    public text: string,
    public id?: number,
  ) {}
}
