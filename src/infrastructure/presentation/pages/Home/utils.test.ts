import {
  getLocalStorageData,
  checkDataExpiration,
  setLocalStorageData,
} from "./utils";
import { MOCKED_RESPONSE } from "@/infrastructure/api/constants";
import { LOCAL_STORAGE_ITEM_NAME } from "./constants";

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
});
