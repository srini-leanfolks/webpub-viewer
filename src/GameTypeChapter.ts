import GameType from "./Games";
import * as HTMLUtilities from "./HTMLUtilities";

export default class GameTypeChapter implements GameType {
  public readonly name = "game-chapter";
  public readonly label = "Chapter";

  public bookElement: HTMLIFrameElement;

  public start(): void {
    const rootElement = document.documentElement;

    HTMLUtilities.setAttr(rootElement, "data-game-type", "chapter");
  }

  public stop(): void {
    const rootElement = document.documentElement;

    HTMLUtilities.removeAttr(rootElement, "data-game-type");
  }
}
