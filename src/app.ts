import LocalStorageStore from "./LocalStorageStore";
import ServiceWorkerCacher from "./ServiceWorkerCacher";
import IFrameNavigator from "./IFrameNavigator";
import PublisherFont from "./PublisherFont";
import SerifFont from "./SerifFont";
import SansFont from "./SansFont";
import DayTheme from "./DayTheme";
import SepiaTheme from "./SepiaTheme";
import NightTheme from "./NightTheme";
import ColumnsPaginatedBookView from "./ColumnsPaginatedBookView";
import ScrollingBookView from "./ScrollingBookView";
import BookSettings from "./BookSettings";
import LocalAnnotator from "./LocalAnnotator";
import GameTypeAll from './GameTypeAll';
import GameTypeChapter from './GameTypeChapter';
import GameTypeNone from './GameTypeNone';
import GameTypePage from './GameTypePage';
import GameTypeParagraph from './GameTypeParagraph';

const app = async (element: HTMLElement, manifestUrl: URL): Promise<IFrameNavigator> => {
    const bookStore = new LocalStorageStore({ prefix: manifestUrl.href });
    const cacher = new ServiceWorkerCacher({ store: bookStore, manifestUrl });
    const annotator = new LocalAnnotator({ store: bookStore });
    const publisher = new PublisherFont();
    const serif = new SerifFont();
    const sans = new SansFont();
    const fontSizes = [ 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32 ];
    const letterSpacings = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    const day = new DayTheme();
    const sepia = new SepiaTheme();
    const night = new NightTheme();
    const paginator = new ColumnsPaginatedBookView();
    const scroller = new ScrollingBookView();
    const settingsStore = new LocalStorageStore({ prefix: "cassis-reader" });
    const gameTypeAll = new GameTypeAll();
    const gameTypeChapter = new GameTypeChapter();
    const gameTypeNone = new GameTypeNone();
    const gameTypePage = new GameTypePage();
    const gameTypeParagraph = new GameTypeParagraph();
    const settings = await BookSettings.create({
        store: settingsStore,
        gameTypes: [
          gameTypeNone,
          gameTypeChapter,
          gameTypePage,
          gameTypeParagraph,
          gameTypeAll
        ],
        bookFonts: [publisher, serif, sans],
        fontSizesInPixels: fontSizes,
        letterSpacingInPixels: letterSpacings,
        defaultFontSizeInPixels: 20,
        defaultLetterSpacingInPixels: 0,
        bookThemes: [day, sepia, night],
        bookViews: [paginator, scroller]
    });
    return await IFrameNavigator.create({
        element,
        manifestUrl,
        gameTypeAll,
        gameTypeChapter,
        gameTypeNone,
        gameTypePage,
        gameTypeParagraph,
        store: bookStore,
        cacher,
        settings,
        annotator,
        publisher,
        serif,
        sans,
        day,
        sepia,
        night,
        paginator,
        scroller
    });
};

export default app;

