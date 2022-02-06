<<<<<<< HEAD
 
=======
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe("<button />", () => {
  it('should render the button with the text "Load More', () => {
    render(<Button text="Load More" />);
    expect.assertions(1);
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it("should call function on button click", () => {
    const fn = jest.fn();
    render(<Button text="Load More" onClick={fn} />);
    const button = screen.getByRole("button", { name: /load more/i });
    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  //it("shound be disabled when disabled is true", () => {    
  //  render(<Button text="Load more" disabled={true} />);
  //  const button = screen.getByRole("button", { name: /load more/i });
  //  expect(button).toBeEnabled();
  //});

  it("shound be enabled when disabled is false", () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />);
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeEnabled();
  });

  it("shound match snapshot", () => {
    const fn = jest.fn();
    const {container} = render(<Button text="Load more" disabled={false} onClick={fn} />);
    expect(container.firstChild).toBeEnabled();
  });

});

>>>>>>> 690d07f0ecaacf31bd3425b6caf92e5410511ec2
