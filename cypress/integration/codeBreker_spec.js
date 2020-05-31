//secret to test = 9136
describe('my codebraker app test' , () =>{
    it('get tipy element and check',()=>{
        cy.visit('/');
        
    });
    it('Button exists', () => {
        cy.get('button');
     });
     
     it('Input exists', () => {
         cy.get('input');
      });
     
      it('Input 1234', () => {
         cy.get('.guess-number').type('1234');
      });
     
      
     
      it('Button 1 clicks', () => {
         cy.get('.btn-guess-number').click();
      });
     
      it('Button 2 clicks', () => {
         cy.get('.btn-start-game').click();
      });
     
      it('Label exists', () => {
         cy.get('h4');
      });
     
     
      it('label shows _', () => {
         cy.get('.guess-number').clear();
         cy.get('.guess-number').type('4321');
         cy.get('.btn-guess-number').click();
         cy.get('h4').contains('_');
      });
     
      it('label shows ___', () => {
         cy.get('.guess-number').clear();
         cy.get('.guess-number').type('6319');
         cy.get('.btn-guess-number').click();
         cy.get('h4').contains('___');
      });
     
      it('label shows XX__', () => {
        cy.get('.guess-number').clear();
        cy.get('.guess-number').type('1936');
        cy.get('.btn-guess-number').click();
        cy.get('h4').contains('XX__');
      });
     
      it('label shows XXX', () => {
        cy.get('.guess-number').clear();
        cy.get('.guess-number').type('9236');
        cy.get('.btn-guess-number').click();
        cy.get('h4').contains('XXX');
      });
          
      it('label shows __', () => {
        cy.get('.guess-number').clear();
        cy.get('.guess-number').type('3654');
        cy.get('.btn-guess-number').click();
        cy.get('h4').contains('__');
      });
      
      it('label shows ___', () => {
        cy.get('.guess-number').clear();
        cy.get('.guess-number').type('6317');
        cy.get('.btn-guess-number').click();
        cy.get('h4').contains('___');
      });
      
    
      
      it('label shows ERROR if has less than 4 digits', () => {
        cy.get('.guess-number').clear();
        cy.get('.guess-number').type('631');
        cy.get('.btn-guess-number').click();
        
         cy.get('h4').contains('ERROR');
      });
     
      it('label shows ERROR if has more than 4 digits', () => {
        cy.get('.guess-number').clear();
        cy.get('.guess-number').type('63194');
        cy.get('.btn-guess-number').click();
        
         cy.get('h4').contains('ERROR');
      });
     
      it('label shows ERROR if has a letter', () => {
         cy.get('.guess-number').clear();
         cy.get('.guess-number').type('34a5');
         cy.get('.btn-guess-number').click();
         cy.get('h4').contains('ERROR');
      });
     
      it('label shows XXXX', () => {
        cy.get('.guess-number').clear();
        cy.get('.guess-number').type('9136');
        cy.get('.btn-guess-number').click();
        cy.get('h4').contains('XXXX');
      });
      
});

