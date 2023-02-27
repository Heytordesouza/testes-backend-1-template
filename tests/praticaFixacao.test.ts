import { praticaFixacao } from "../src/fixacao"

describe("praticaFixacao", () => {
    test("Recebe string como parametro e retorna um array de string com letras separadas", () => {
        const result = praticaFixacao("dev")

        expect(result).toEqual(["d", "e", "v"])
    })
})

// pratica 3 ("dev") = ["d", "e", ]