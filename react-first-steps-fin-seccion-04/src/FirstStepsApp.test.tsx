import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

//! creacion de MOCK del componente ItemCounter
vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: () => <div data-testid="ItemCounter">Mock ItemCounter</div>,
}));

describe("MyAwesomeApp", () => {
  test("Should match snapshot", () => {
    const { container } = render(<FirstStepsApp />);

    expect(container).toMatchSnapshot();
  });

  test("should render the correct number of ItemCounter components", () => {
    render(<FirstStepsApp />);

    const itemCounters = screen.getAllByTestId("ItemCounter").length;
    console.log("👉 Numero de mocks: ", itemCounters);

    expect(itemCounters).toBe(3);
    screen.debug();
  });
});

/**
 * Dentro de nuestro componente FirtsStepsApp, tenemos un array de objetos que representan los items en nuestro carro de compras.
 * Estos objetos tienen dos propiedades: productName y quantity.
 * No podemos testear el componente con la lista que esta mapeando, ya que no sabemos cuantos items hay en el array.
 * Para este test podemos usar un componente MOCK que nos permita controlar los items que se estan renderizando. Y asi corroborar que el componente se esta renderizando correctamente la lista de items.
 */
