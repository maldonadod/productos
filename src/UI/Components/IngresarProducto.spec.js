import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Labels from "../Labels";
import IngresarProducto from "./IngresarProducto";

describe("IngresarProducto", () => {
  it("debe informar que el nombre esta vacio", () => {
    const NOMBRE_VACIO = ""
    const utils = render(<IngresarProducto />)

    const input = utils.getByLabelText(Labels.IngresarProducto)
    fireEvent.change(input, { target: { value: NOMBRE_VACIO } })
    fireEvent.click(utils.getByText(Labels.GuardarProducto))

    utils.getByText("El nombre del producto no puede estar vacio")
  })
  it("debe limpiar mensaje cuando el usuario empieza a escribir", () => {
    const NOMBRE_VACIO = ""
    const utils = render(<IngresarProducto />)

    const input = utils.getByLabelText(Labels.IngresarProducto)
    fireEvent.change(input, { target: { value: NOMBRE_VACIO } })
    fireEvent.click(utils.getByText(Labels.GuardarProducto))

    utils.getByText("El nombre del producto no puede estar vacio")
    
    fireEvent.change(input, { target: { value: "a" } })
    
    const mensaje = utils.queryByText("El nombre del producto no puede estar vacio")

    expect(mensaje).toEqual(null)
  })
  it("debe delegar el registro del nombre al colaborador y limpiarse", () => {
    const NOMBRE = "1kg Papa"
    const registrarProducto = jest.fn().mockResolvedValue()
    const utils = render(<IngresarProducto registrarProducto={registrarProducto} />)

    const input = utils.getByLabelText(Labels.IngresarProducto)
    fireEvent.change(input, { target: { value: NOMBRE } })
    fireEvent.click(utils.getByText(Labels.GuardarProducto))

    expect(registrarProducto).toBeCalledWith(NOMBRE)
    expect(input.value).toEqual("")
  })
})