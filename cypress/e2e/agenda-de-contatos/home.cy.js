/// <reference types="cypress" />

describe("Teste na home da agenda de contatos", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("deve renderizar os títulos no header", () => {
    cy.get("h1").contains("Agenda de contatos");
  });

  it("Deve adicionar um contato novo", () => {
    cy.get('input[type="text"]').type("Lucas");
    cy.get('input[type="email"]').type("lucasb@test.com");
    cy.get('input[type="tel"]').type("22 99932435566");
    cy.get(".adicionar").click();
  });

  it("Deve editar um contato", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
    cy.get('input[type="tel"]').clear().type("00 00000000");
    cy.get(".alterar").click();
  });

  it("Deve deletar um contato", () => {
    cy.get(":nth-child(5) > .sc-gueYoa > .delete").click();
  });
});
