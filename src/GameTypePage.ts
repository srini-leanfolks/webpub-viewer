import GameType from "./Games";
import * as HTMLUtilities from "./HTMLUtilities";

export default class GameTypePage implements GameType {
  public readonly name = "game-page";
  public readonly label = "Page";

  public bookElement: HTMLIFrameElement;

  public start(): void {
    const rootElement = document.documentElement;

    HTMLUtilities.setAttr(rootElement, "data-game-type", "page");
  }

  public stop(): void {
    const rootElement = document.documentElement;

    HTMLUtilities.removeAttr(rootElement, "data-game-type");
  }
}
