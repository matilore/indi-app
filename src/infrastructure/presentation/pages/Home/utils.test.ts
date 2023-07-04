import {
  getLocalStorageData,
  checkDataExpiration,
  setLocalStorageData,
  handleFilterPodcasts,
} from "./utils";
import { MOCKED_RESPONSE } from "@/infrastructure/api/constants";
import { LOCAL_STORAGE_ITEM_NAME } from "./constants";

const MOCKED_ADAPTED_RESPONSE = [
  {
    img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
    title: "The Joe Budden Podcast",
    author: "The Joe Budden Network",
  },
  {
    img: "https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/1f/ad/c7/1fadc7d4-1e22-beaa-720a-2e2988dc1521/mza_16091018887573148747.jpg/170x170bb.png",
    title: "Drink Champs",
    author: "Interval Presents",
  },
  {
    img: "https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/30/1c/1f/301c1f05-639c-bb22-cfdd-4c71aca5761e/mza_3479668065976336868.png/170x170bb.png",
    title: "Song Exploder",
    author: "Hrishikesh Hirway",
  },
  {
    img: "https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/170x170bb.png",
    title: "This Little Light",
    author: "Cadence13 and Parallel",
  },
  {
    img: "https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/5b/88/a1/5b88a186-ce6a-5268-cc49-8e896c737729/mza_7354436562524572096.jpg/170x170bb.png",
    title: "Friday Night Karaoke",
    author: "Friday Night Karaoke",
  },
  {
    img: "https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/170x170bb.png",
    title: "Million Dollaz Worth Of Game",
    author: "Barstool Sports",
  },
  {
    img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/170x170bb.png",
    title: "60 Songs That Explain the '90s",
    author: "The Ringer",
  },
  {
    img: "https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/92/65/c6/9265c6dd-7db1-8160-c97c-bef564d23610/mza_16535014723154009651.jpg/170x170bb.png",
    title: "New Rory & MAL",
    author: 'Rory Farrell & Jamil "Mal" Clay',
  },
  {
    img: "https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/e0/b0/b9/e0b0b99b-30bd-842b-aa50-60aa9d4f2614/mza_7275470718539560059.jpg/170x170bb.png",
    title: "Being Black- The '80s",
    author: "theGrio",
  },
  {
    img: "https://is3-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/170x170bb.png",
    title: "A History of Rock Music in 500 Songs",
    author: "Andrew Hickey",
  },
  {
    img: "https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/9b/56/5c/9b565c54-ffd7-be9d-ff96-be60e36ae59a/mza_14743797108223744429.jpeg/170x170bb.png",
    title: "DISGRACELAND",
    author: "Double Elvis",
  },
  {
    img: "https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/58/4f/37/584f37f7-76e3-36f1-38c0-dffafa2f8842/mza_12816512326735075256.jpg/170x170bb.png",
    title: "Frosted Tips with Lance Bass",
    author: "iHeartPodcasts",
  },
  {
    img: "https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/7b/12/d5/7b12d5ec-7264-6693-8a8e-e6b414a783c3/mza_10388338206053029687.jpg/170x170bb.png",
    title:
      "Broken Record with Rick Rubin, Malcolm Gladwell, Bruce Headlam and Justin Richmond",
    author: "Pushkin Industries",
  },
  {
    img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/2f/6e/cf/2f6ecf54-c735-97f2-d871-d46e2e909f5f/mza_11130508551645291638.jpg/170x170bb.png",
    title: "Caresha Please",
    author: "REVOLT",
  },
  {
    img: "https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/8a/c9/23/8ac923d6-32e1-eb00-f331-6fe92226fc58/mza_10801963060470306103.jpg/170x170bb.png",
    title: "Questlove Supreme",
    author: "iHeartPodcasts",
  },
  {
    img: "https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/b8/9f/1a/b89f1a6c-1e99-4ca9-6c00-00306ff7cfde/mza_17202491009372242583.jpeg/170x170bb.png",
    title: "Rolling Stone Music Now",
    author: "Rolling Stone | Cumulus Podcast Network",
  },
  {
    img: "https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/09/06/a1/0906a180-54ee-b3d2-cb8d-6af937bac3c3/mza_13508384772581914892.jpg/170x170bb.png",
    title: "Dolly Parton's America",
    author: "WNYC Studios & OSM Audio",
  },
  {
    img: "https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/34/0d/b0/340db0b8-66c0-a59f-4f5d-b27cfc694cc3/mza_9675733032314229158.jpg/170x170bb.png",
    title: "All Songs Considered",
    author: "NPR",
  },
  {
    img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/170x170bb.png",
    title: "No Jumper",
    author: "No Jumper",
  },
  {
    img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/9f/fb/91/9ffb916a-af0d-0fb8-3646-57eeda5314c3/mza_945735870779170317.jpeg/170x170bb.png",
    title: '"See, The Thing Is..."',
    author: "All The Things Productions",
  },
  {
    img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/b6/40/6c/b6406c4c-c0c4-c137-7134-e401b9bf7785/mza_13270719876335733767.jpg/170x170bb.png",
    title: "CLUBLIFE",
    author: "Tiësto",
  },
  {
    img: "https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/be/41/b6/be41b6fa-0d77-2a72-57d6-506e09d8bb69/mza_14544752427345926888.jpg/170x170bb.png",
    title: "Here's The Thing with Alec Baldwin",
    author: "iHeartPodcasts",
  },
  {
    img: "https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/c6/1c/7c/c61c7c13-a82d-68f9-2a32-d7a70fd7e78f/mza_2400450415291571632.jpg/170x170bb.png",
    title: "Bandsplain",
    author: "The Ringer",
  },
  {
    img: "https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/11/1b/9f/111b9f79-e69d-a1e9-4846-12edd7bdc91e/mza_16560460372813821719.jpg/170x170bb.png",
    title: "Every Single Album",
    author: "The Ringer",
  },
  {
    img: "https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/c2/7e/31/c27e3183-c893-8592-71e5-1fe12f9c7a1b/mza_4571331444040512573.jpg/170x170bb.png",
    title: "Hit Parade | Music History and Music Trivia",
    author: "Slate Podcasts",
  },
  {
    img: "https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/36/4e/67/364e6744-ef39-2bef-d07c-5cd4340eb6ae/mza_17670679045660297136.jpg/170x170bb.png",
    title: "Way Up With Angela Yee",
    author: "iHeartPodcasts",
  },
  {
    img: "https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/f9/17/1d/f9171d1f-17f5-f738-6bcb-e474a642ce6f/mza_15427398202374447947.jpg/170x170bb.png",
    title: "Tiny Desk Concerts - Audio",
    author: "NPR",
  },
  {
    img: "https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/0f/95/2b/0f952b75-2da3-a1a4-55ee-5e24eb34a2ed/mza_16604615367747989507.jpg/170x170bb.png",
    title: "Ebro in the Morning Podcast",
    author: "HOT 97's Ebro in the Morning",
  },
  {
    img: "https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/26/84/a4/2684a463-8835-1816-0544-d39a9f8e4dc9/mza_2392300578690130687.jpg/170x170bb.png",
    title: "Two Friends Big Bootie Mixes",
    author: "Two Friends",
  },
  {
    img: "https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/6e/7c/17/6e7c170e-ecd6-a572-a851-6b0a02a168c5/mza_7324103647670443393.jpeg/170x170bb.png",
    title: "Switched on Pop",
    author: "Vulture",
  },
  {
    img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/6f/09/cd/6f09cdee-5661-c355-f264-6a50bef31017/mza_3165672186355740494.jpeg/170x170bb.png",
    title: "Zach Sang Show",
    author: "Sangasong, LLC",
  },
  {
    img: "https://is2-ssl.mzstatic.com/image/thumb/Podcasts115/v4/0d/00/3d/0d003d69-71dc-54ac-2e49-71344d581ebc/mza_17414366298101550888.jpeg/170x170bb.png",
    title: "Popcast",
    author: "The New York Times",
  },
  {
    img: "https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/41/10/7c/41107c15-030c-c70b-786f-b7f978a728dc/mza_3228597433083288230.jpg/170x170bb.png",
    title: "Angie Martinez IRL",
    author: "iHeartPodcasts",
  },
  {
    img: "https://is4-ssl.mzstatic.com/image/thumb/Podcasts114/v4/79/c8/d2/79c8d2b2-5d5a-365c-a067-8bcefc01d2db/mza_16543696634515633376.jpg/170x170bb.png",
    title: "13: A Taylor Swift Fan Podcast",
    author: "KiddNation",
  },
  {
    img: "https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/06/72/c9/0672c949-e262-23b2-8c29-3db1def67d20/mza_4917860291183321531.jpg/170x170bb.png",
    title: "R&B Money",
    author: "The Black Effect and iHeartPodcasts",
  },
  {
    img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/0c/33/37/0c33378b-7294-5931-e10e-100270daa2e9/mza_15317762576301889675.jpg/170x170bb.png",
    title: "Sound Opinions",
    author: "Sound Opinions",
  },
  {
    img: "https://is4-ssl.mzstatic.com/image/thumb/Podcasts125/v4/58/60/74/58607414-6263-9fa9-4fad-d5879c071643/mza_11208751241845350981.jpeg/170x170bb.png",
    title: "Sticky Notes: The Classical Music Podcast",
    author: "Joshua Weilerstein",
  },
];

const MOCKED_EXPECTED_FILTERED_RESPONSE = [
  {
    img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
    title: "The Joe Budden Podcast",
    author: "The Joe Budden Network",
  },
  {
    img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/170x170bb.png",
    title: "60 Songs That Explain the '90s",
    author: "The Ringer",
  },
  {
    img: "https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/e0/b0/b9/e0b0b99b-30bd-842b-aa50-60aa9d4f2614/mza_7275470718539560059.jpg/170x170bb.png",
    title: "Being Black- The '80s",
    author: "theGrio",
  },
  {
    img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/9f/fb/91/9ffb916a-af0d-0fb8-3646-57eeda5314c3/mza_945735870779170317.jpeg/170x170bb.png",
    title: '"See, The Thing Is..."',
    author: "All The Things Productions",
  },
  {
    img: "https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/be/41/b6/be41b6fa-0d77-2a72-57d6-506e09d8bb69/mza_14544752427345926888.jpg/170x170bb.png",
    title: "Here's The Thing with Alec Baldwin",
    author: "iHeartPodcasts",
  },
  {
    img: "https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/c6/1c/7c/c61c7c13-a82d-68f9-2a32-d7a70fd7e78f/mza_2400450415291571632.jpg/170x170bb.png",
    title: "Bandsplain",
    author: "The Ringer",
  },
  {
    img: "https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/11/1b/9f/111b9f79-e69d-a1e9-4846-12edd7bdc91e/mza_16560460372813821719.jpg/170x170bb.png",
    title: "Every Single Album",
    author: "The Ringer",
  },
  {
    img: "https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/0f/95/2b/0f952b75-2da3-a1a4-55ee-5e24eb34a2ed/mza_16604615367747989507.jpg/170x170bb.png",
    title: "Ebro in the Morning Podcast",
    author: "HOT 97's Ebro in the Morning",
  },
  {
    img: "https://is2-ssl.mzstatic.com/image/thumb/Podcasts115/v4/0d/00/3d/0d003d69-71dc-54ac-2e49-71344d581ebc/mza_17414366298101550888.jpeg/170x170bb.png",
    title: "Popcast",
    author: "The New York Times",
  },
  {
    img: "https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/06/72/c9/0672c949-e262-23b2-8c29-3db1def67d20/mza_4917860291183321531.jpg/170x170bb.png",
    title: "R&B Money",
    author: "The Black Effect and iHeartPodcasts",
  },
  {
    img: "https://is4-ssl.mzstatic.com/image/thumb/Podcasts125/v4/58/60/74/58607414-6263-9fa9-4fad-d5879c071643/mza_11208751241845350981.jpeg/170x170bb.png",
    title: "Sticky Notes: The Classical Music Podcast",
    author: "Joshua Weilerstein",
  },
];

describe("utils", () => {
  describe("checkDataExpiration", () => {
    it("should check if local storage data lifespam is expired", () => {
      const isExpire = checkDataExpiration({
        localStorageExpiration: 9,
        currentTime: 10,
      });
      expect(isExpire).toBeTruthy();
    });
  });

  describe("getLocalStorageData", () => {
    it("should return a list of podcasts if data is present and not expired", () => {
      const fakeNotExpiredDate = Date.now() + 100000;
      const stringifiedData = `{"expirationDate": ${fakeNotExpiredDate}, "data": [{"key": "value"}]}`;
      localStorage.setItem(LOCAL_STORAGE_ITEM_NAME, stringifiedData);
      const podcasts = getLocalStorageData();
      expect(podcasts).toMatchObject([{ key: "value" }]);
    });

    it("should return null if localstorage item is expired", () => {
      const fakeExpiredDate = Date.now() - 100000;
      const stringifiedData = `{"expirationDate": ${fakeExpiredDate}, "data": [{"key": "value"}]}`;
      localStorage.setItem("podcasts", stringifiedData);
      const podcasts = getLocalStorageData();
      expect(podcasts).toBeNull();
    });

    it("should return null if localstorage item doesn't exist", () => {
      const podcasts = getLocalStorageData();
      expect(podcasts).toBeNull();
    });
  });

  describe("setLocalStorageData", () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
      localStorage.clear();
    });

    it("should store the podcasts data in local storage with the correct stringified object", () => {
      const spied = vi.spyOn(Storage.prototype, "setItem");

      const fakeCurrentDate = new Date(2000, 1, 1, 13);
      vi.setSystemTime(fakeCurrentDate);

      const fakeFutureExpiration = new Date().getTime() + 24 * 60 * 60 * 1000;
      setLocalStorageData(MOCKED_RESPONSE);

      expect(spied).toHaveBeenCalledWith(
        LOCAL_STORAGE_ITEM_NAME,
        JSON.stringify({
          expirationDate: fakeFutureExpiration,
          data: MOCKED_RESPONSE,
        })
      );
    });
  });

  describe("handleFilterPodcasts", () => {
    it("should correctly filter podcasts based on the search term", () => {
      const term = "the";

      const filteredPodcasts = handleFilterPodcasts(
        term,
        MOCKED_ADAPTED_RESPONSE
      );

      expect(filteredPodcasts).toMatchObject(MOCKED_EXPECTED_FILTERED_RESPONSE);
    });

    it("should correctly return an empty array if there is not match with search term", () => {
      const term = "the chumbawamba";

      const filteredPodcasts = handleFilterPodcasts(
        term,
        MOCKED_ADAPTED_RESPONSE
      );

      expect(filteredPodcasts).toMatchObject([]);
    });
  });
});
