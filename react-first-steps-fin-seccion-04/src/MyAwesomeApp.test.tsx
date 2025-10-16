import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("Should render the first name and lastname", () => {
    // container solo sirve para mostrar el contenido de la pagina inicial. Pero si se ejecuta un evento que modifica el estado de la pagina, el contenido no se actualiza.
    const { container } = render(<MyAwesomeApp />);
    // console.log(screen.debug());
    const h1 = container.querySelector("h1");
    const h3 = container.querySelector("h3");

    expect(h1?.innerHTML).toContain("Cesar");
    expect(h3?.innerHTML).toContain("Aparicio");
  });

  test("Should render the first name and lastname - screen", () => {
    // screen.debug() sirve para mostrar el contenido de la pagina inicial y si se ejecuta un evento que modifica el estado de la pagina, el contenido se actualiza.
    render(<MyAwesomeApp />);
    screen.debug();

    // const h1 = screen.getByRole('heading', { level: 1 }) // Encuentra todas las coincidencias, no es especifico

    const h1 = screen.getByTestId("first-name-title"); // Encuentra el elemento especifico pero se debe usar el atributo data, no es lo recomendable aunque es mas limpio.

    console.log("👉", h1.innerHTML);

    expect(h1.innerHTML).toContain("Cesar");
  });
});
