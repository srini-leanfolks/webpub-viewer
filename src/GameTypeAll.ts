import GameType from "./Games";
import * as HTMLUtilities from "./HTMLUtilities";

export default class GameTypeAll implements GameType {
  public readonly name = "game-all";
  public readonly label = "All";

  public bookElement: HTMLIFrameElement;

  public start(): void {
    const rootElement = document.documentElement;

    HTMLUtilities.setAttr(rootElement, "data-game-type", "all");
  }

  public stop(): void {
    const rootElement = document.documentElement;

    HTMLUtilities.removeAttr(rootElement, "data-game-type");
  }
}
