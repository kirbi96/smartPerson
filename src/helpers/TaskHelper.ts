export class TaskHelper {
  static firstLevel = (index: number) => {
    return index % 9 === 0 ? '100%' : '30%';
  };
}
