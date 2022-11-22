import GameType from "./Games";
import * as HTMLUtilities from "./HTMLUtilities";

export default class GameTypeParagraph implements GameType {
  public readonly name = "game-paragraph";
  public readonly label = "Paragraph";

  public bookElement: HTMLIFrameElement;

  public start(): void {
    const rootElement = document.documentElement;

    HTMLUtilities.setAttr(rootElement, "data-game-type", "paragraph");
  }

  public stop(): void {
    const rootElement = document.documentElement;

    HTMLUtilities.removeAttr(rootElement, "data-game-type");
  }
}
