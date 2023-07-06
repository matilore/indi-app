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
    id: "1535809341",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
    title: "The Joe Budden Podcast",
    author: "The Joe Budden Network",
  },
  {
    id: "1096830182",
    img: "https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/1f/ad/c7/1fadc7d4-1e22-beaa-720a-2e2988dc1521/mza_16091018887573148747.jpg/170x170bb.png",
    title: "Drink Champs",
    author: "Interval Presents",
  },
  {
    id: "1460157002",
    img: "https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/170x170bb.png",
    title: "Million Dollaz Worth Of Game",
    author: "Barstool Sports",
  },
];

const MOCKED_EXPECTED_FILTERED_RESPONSE = [
  {
    id: "1535809341",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
    title: "The Joe Budden Podcast",
    author: "The Joe Budden Network",
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
