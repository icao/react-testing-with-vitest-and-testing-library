import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";
import { fireEvent, render, screen } from "@testing-library/react";

// Testeando los valores por defecto de nuestro componente, principalmente las propiedades que se usan.
describe("ItemCounter", () => {
  test("should be render default values", () => {
    const name = "Item Name";
    render(<ItemCounter name={name} />);

    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();
  });

  test("should  render whith custom quantity", () => {
    const name = "Item Name";
    const quantity = 5;
    render(<ItemCounter name={name} quantity={quantity} />);

    expect(screen.getByText(quantity)).toBeDefined();
  });

  //! Testeando eventos
  test("should increase count when +1 button is pressed", () => {
    render(<ItemCounter name={"Test Item"} quantity={1} />);

    //Buscamos el boton por el role
    const [buttonAdd] = screen.getAllByRole("button");
    // Ejecutamos un evento con fireEvent
    fireEvent.click(buttonAdd);
    // Hacemos la asersion
    expect(screen.getByText("2")).toBeDefined(); // Esta manera es muy volatil porque puede que exista otro elemento con el texto 2
  });

  test("should decrease count when -1 button is pressed", () => {
    render(<ItemCounter name={"Test Item"} quantity={5} />);
    const [, buttonSubtract] = screen.getAllByRole("button");

    fireEvent.click(buttonSubtract);
    screen.debug();
    expect(screen.getByText("4")).toBeDefined();
  });

  test("should not decrease count when -1 button is pressed and quantity is 1", () => {
    render(<ItemCounter name={"Test Item"} quantity={1} />);

    const [, buttonSubtract] = screen.getAllByRole("button");

    fireEvent.click(buttonSubtract);
    screen.debug();
    expect(screen.getByText("1")).toBeDefined();
  });

  //! Testeando estilos css
  test("should change to red when count is 1", () => {
    const name = "Test Item";
    const quantity = 1;

    render(<ItemCounter name={name} quantity={quantity} />);

    //! Preparamos el elemento, en este caso es el span con los estilos del nombre
    const itemText = screen.getByText(name);
    console.log("itemText", itemText.style.color);

    expect(itemText.style.color).toBe("red"); //toBe( porque evaluamos un tipo de dato primitivo)
  });
  test("should change to black when count is greater than 1", () => {
    const name = "Test Item";
    const quantity = 2;

    render(<ItemCounter name={name} quantity={quantity} />);

    const itemText = screen.getByText(name);
    console.log("itemText", itemText.style.color);

    expect(itemText.style.color).toBe("black");
  });

  //!NOTA: Esta es una de las formas en las cuales podemos hacer uso de testear los estilos, no es la unica forma pero es una manera sencilla de hacerlo.
});
