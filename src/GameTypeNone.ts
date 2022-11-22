import GameType from "./Games";
import * as HTMLUtilities from "./HTMLUtilities";

export default class GameTypeNone implements GameType {
  public readonly name = "game-none";
  public readonly label = "None";

  public bookElement: HTMLIFrameElement;

  public start(): void {
    const rootElement = document.documentElement;

    HTMLUtilities.setAttr(rootElement, "data-game-type", "none");
  }

  public stop(): void {
    const rootElement = document.documentElement;

    HTMLUtilities.removeAttr(rootElement, "data-game-type");
  }
}
