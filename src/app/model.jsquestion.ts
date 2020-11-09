export class JSQuestion {
  constructor(
    public id: number,
    public question: string,
    public answers: Answers[]
  ) {}
}

export class Answers {
  constructor(public answer: string, public iscorrect: string) {}
}
