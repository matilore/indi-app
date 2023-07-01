import { Home } from "./Home";
import { render } from "@testing-library/react";
import { MOCKED_RESPONSE } from "@/infrastructure/api/constants";

vi.mock("@/infrastructure/api/podcastRepositoryImpl");

describe("Home", () => {
  it("should display podcast cards", async () => {
    const { findAllByTestId } = render(<Home />);
    const podcastCards = await findAllByTestId("podcast-card");
    expect(podcastCards).toHaveLength(MOCKED_RESPONSE.length);
  });
});
