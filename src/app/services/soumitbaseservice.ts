export class SoumitBaseService {
  public OnPing(tickle: string): void {}
  public getRules(): any {}
  public insertData(
    uname: String,
    eventname: String,
    amount: number,
    when: Date | null
  ): void {}
}
