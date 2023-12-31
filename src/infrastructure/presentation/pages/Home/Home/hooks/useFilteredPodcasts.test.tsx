import { renderHook } from "@testing-library/react";
import { useSearchParams as mockUseSearchParams } from "react-router-dom";
import { useFilteredPodcasts } from "./useFilteredPodcasts";
import * as utils from "../../utils";

const searchParams: { [key: string]: string } = { s: "the" };

vi.mock("react-router-dom", () => ({
  ...(vi.importActual("react-router-dom") as object),
  useSearchParams: vi.fn().mockImplementation(() => [
    {
      get: vi.fn().mockImplementation((param: string) => searchParams[param]),
    },
  ]),
}));

const MOCKED_FETCHED_RESPONSE = [
  {
    id: "1535809341",
    author: "The Joe Budden Network",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
    title: "The Joe Budden Podcast",
  },
];

describe("useFilteredPodcasts", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should call useSearchParams to check existing search params", () => {
    renderHook(() => useFilteredPodcasts(MOCKED_FETCHED_RESPONSE));
    expect(mockUseSearchParams).toHaveBeenCalled();
  });

  it("should call handleFilterPodcasts with the proper search term", () => {
    const spied = vi.spyOn(utils, "handleFilterPodcasts");
    renderHook(() => useFilteredPodcasts(MOCKED_FETCHED_RESPONSE));
    expect(spied).toHaveBeenCalledWith("the", MOCKED_FETCHED_RESPONSE);
  });

  it("should return an array as podcast", () => {
    const { result } = renderHook(() =>
      useFilteredPodcasts(MOCKED_FETCHED_RESPONSE)
    );
    expect(Array.isArray(result.current.filteredPodcasts)).toBeTruthy();
  });
});
