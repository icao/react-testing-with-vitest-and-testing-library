import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

//! creacion de MOCK del componente ItemCounter
// vi.mock("./shopping-cart/ItemCounter", () => ({
//   ItemCounter: (props: unknown) => <div data-testid="ItemCounter"
//     name={props.name}
//     qunatity={props.quantity}
//   >Mock ItemCounter</div>,
// }));

//!Alternativa de MOCK con la funcion fn de vitest
const mockItemCounter = vi.fn((props: unknown) => {
  return <div data-testid="ItemCounter">Mock ItemCounter</div>;
});

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

describe("MyAwesomeApp", () => {
  //!IMPORTANTE: afterEach() se ejecuta despues de cada test, y se ejecuta una vez para cada test. Asi pocuramos que el mock sea llamado una vez por cada test.

  afterEach(() => {
    vi.clearAllMocks(); // vi.clearAllMocks() hace que el mock se borre
  });

  test("Should match snapshot", () => {
    const { container } = render(<FirstStepsApp />);

    expect(container).toMatchSnapshot();
  });

  test("should render the correct number of ItemCounter components", () => {
    render(<FirstStepsApp />);

    const itemCounters = screen.getAllByTestId("ItemCounter").length;
    console.log("👉 Numero de mocks: ", itemCounters);

    expect(itemCounters).toBe(3);
    // screen.debug();
  });

  test("should render ItemCounter with correct props", () => {
    //! En este ejemplo testeamos usando el mock como una funcion
    render(<FirstStepsApp />);
    //! Verificamos que el mock haya sido llamado con las props correctas usando el mock creado con la funcion vi.fn
    expect(mockItemCounter).toHaveBeenCalledTimes(3); //El metodo toHaveBeenCalledTimes necesita como parametro el numero de veces que se llama al mock

    //!Ahora verificamos que el mock se llame con los props pasados al componente, uno por uno. Debe hacer match con lo que tiene el snapshot
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Nintendo Switch 2",
      quantity: 1,
    });

    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Pro Controller",
      quantity: 2,
    });

    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Super Smash",
      quantity: 5,
    });

    screen.debug();
  });
});

/**
 * Dentro de nuestro componente FirtsStepsApp, tenemos un array de objetos que representan los items en nuestro carro de compras.
 * Estos objetos tienen dos propiedades: productName y quantity.
 * No podemos testear el componente con la lista que esta mapeando, ya que nuestro componente podria estar haciendo peticiones o teniendo mas componentes hijos.
 * Para este test podemos usar un componente MOCK que nos permita controlar los items que se estan renderizando. Y asi corroborar que el componente se esta renderizando correctamente la lista de items.
 *
 * Con el mock nos aseguramos que el componente ItemCounter no tenga ninguna logica interna que pueda afectar el test. Y nos enfocamos en probar que el componente FirstStepsApp renderiza la cantidad correcta de componentes ItemCounter.
 */
