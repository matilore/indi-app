import { getLocalStorageData, checkDataExpiration } from "./utils";

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
  afterEach(() => {
    localStorage.clear();
  });

  it("should return a list of podcasts if data is present and not expired", () => {
    const fakeExpiration = Date.now() + 100000;
    const stringifiedData = `{"expirationDate": ${fakeExpiration}, "data": [{"key": "value"}]}`;
    localStorage.setItem("podcasts", stringifiedData);
    const podcasts = getLocalStorageData();
    expect(podcasts).toMatchObject([{ key: "value" }]);
  });

  it("should return null if localstorage item is expired", () => {
    const fakeExpiration = Date.now() - 100000;
    const stringifiedData = `{"expirationDate": ${fakeExpiration}, "data": [{"key": "value"}]}`;
    localStorage.setItem("podcasts", stringifiedData);

    const podcasts = getLocalStorageData();
    expect(podcasts).toBeNull();
  });

  it("should return null if localstorage item doesn't exist", () => {
    const podcasts = getLocalStorageData();
    expect(podcasts).toBeNull();
  });
});
