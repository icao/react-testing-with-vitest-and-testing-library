import { describe, expect, test } from "vitest";
import { add, divide, multiply, subtract } from "./Math.helpers";

describe("Add", () => {
  test("Should add two positive numbers", () => {
    //!Arrange
    const a = 1;
    const b = 1;
    //!Act
    const result = add(a, b);

    //!Assert
    expect(result).toBe(2);
  });

  test("Shoul add two negative numbers", () => {
    //!Arrange
    const a = -1;
    const b = -1;
    //!Act
    const result = add(a, b);

    //!Assert
    expect(result).toBe(-2);
  });
});

describe("Subtract", () => {
  test("Should subtract two positive numbers", () => {
    //!Arrange
    const a = 2;
    const b = 1;

    //!Act
    const result = subtract(a, b);

    //!Assert
    expect(result).toBe(1);
  });

  test("Should subtract two negative numbers", () => {
    //!Arrange
    const a = -2;
    const b = -1;

    //!Act
    const result = subtract(a, b);
    //!Assert
    expect(result).toBe(-1);
  });
});

describe("Multiply", () => {
  test("Should multiply two positive numbers", () => {
    //!Arrange
    const a = 2;
    const b = 2;
    //!Act
    const result = multiply(a, b);

    //!Assert
    expect(result).toBe(4);
  });

  test("Should multiply with 0", () => {
    //!Arange
    const a = 0;
    const b = 2;

    //!Act
    const result = multiply(a, b);

    //!Assert
    expect(result).toBe(0);
  });
});

describe("Divide", () => {
  test("Should dive two positive numbers", () => {
    //!Arrange
    const a = 2;
    const b = 2;
    //!Act
    const result = divide(a, b);

    //!Assert
    // expect(result).toBe(1);
    expect(result).toBe(a / b); // Otra forma de hacer la asersion mas dinamica
  });

  
});


/**
 * test()
 *
 * test('DESCRIPCION_DEL_TEST', function() { // código del test})
 *
 * Es el método principal que nos permitira hacer las pruebas de nuestro código.
 * Recibe un argumento que será un texto para describir que se va a probar, y una función(anónima) donde se hará el test.
 *
 */

/**
 * expect()
 *
 * La funcion se utiliza cada vez que se deasea probar un valor, recibe un parametro que es el VALOR A TESTEAR
 *
 * expect(VALOR_A_EVALUAR).toBe(VALOR_ESPERADO)
 *
 * Donde:
 * VALOR_A_EVALUAR  -> Valor que se desea evaluar en el test(el que se ingresa)
 * VALOR_ESPERADO -> Valor que se espera que sea el valor evaluado en expect
 */

/**
 * toBe()
 *
 * Se usa para COMPARAR VALORES PRIMITIVOS o para comparar la IDENTIDAD REFERENCIAL DE LAS INSTANCIAS DE OBJETOS(Solo los valores de los parametros y la referencia del objeto).
 */

/**
 * describe()
 *
 * Se usa para AGRUPAR varios tests que tengan una misma característica en común.
 */
