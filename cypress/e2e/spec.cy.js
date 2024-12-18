// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('Signup and Delete Account Test', () => {
  it('Completes the user signup and deletes the account', () => {
      // Step 1: Launch browser and navigate to URL
      cy.visit('http://automationexercise.com');

      // Step 3: Verify that home page is visible successfully
      cy.get('body').should('contain', 'Home');

      // Step 4: Click on 'Signup / Login' button
      cy.contains('Signup / Login').click();

      // Step 5: Verify 'New User Signup!' is visible
      cy.contains('New User Signup!').should('be.visible');

      // Step 6: Enter name and email address
      cy.get('input[name="name"]').type('Test User');
      cy.get('input[name="email"]').eq(1).type('kpfojydolfoittufzv@nbmbb.com');

      // Step 7: Click 'Signup' button
      cy.get('button[type="submit"]').contains('Signup').click();

      // Step 8: Verify that 'ENTER ACCOUNT INFORMATION' is visible
      cy.contains('Enter Account Information').should('be.visible');

      // Step 9: Fill details: Title, Name, Email, Password, Date of birth
      cy.get('#id_gender1').check(); // Select title 'Mr.'
      cy.get('input[name="password"]').type('password123');
      cy.get('select[name="days"]').select('1');
      cy.get('select[name="months"]').select('January');
      cy.get('select[name="years"]').select('1990');

      // Step 10: Select checkbox 'Sign up for our newsletter!'
      cy.get('#newsletter').check();

      // Step 11: Select checkbox 'Receive special offers from our partners!'
      cy.get('#optin').check();

      // Step 12: Fill additional details
      cy.get('input[name="first_name"]').type('Test');
      cy.get('input[name="last_name"]').type('User');
      cy.get('input[name="company"]').type('Test Company');
      cy.get('input[name="address1"]').type('123 Main Street');
      cy.get('input[name="address2"]').type('Suite 100');
      cy.get('select[name="country"]').select('United States');
      cy.get('input[name="state"]').type('California');
      cy.get('input[name="city"]').type('Los Angeles');
      cy.get('input[name="zipcode"]').type('90001');
      cy.get('input[name="mobile_number"]').type('1234567890');

      // Step 13: Click 'Create Account' button
      cy.get('button[type="submit"]').contains('Create Account').click();

      // Step 14: Verify that 'ACCOUNT CREATED!' is visible
      cy.contains('Account Created!').should('be.visible');

      // Step 15: Click 'Continue' button
      cy.contains('Continue').click();

      // Step 16: Verify that 'Logged in as username' is visible
      cy.contains('Logged in as Test User').should('be.visible');

      // Step 17: Click 'Delete Account' button
      cy.contains('Delete Account').click();

      // Step 18: Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
      cy.contains('Account Deleted!').should('be.visible');
      cy.contains('Continue').click();
  });
});


describe('Navigate to Test Cases Page', () => {
  it('Should verify navigation to Test Cases page', () => {
      // Step 1: Launch browser and navigate to URL
      cy.visit('http://automationexercise.com');

      // Step 2: Verify that the home page is visible successfully
      cy.get('#slider').should('be.visible');

      // Step 3: Click on 'Test Cases' button
      cy.contains('Test Cases').click();

      // Step 4: Verify user is navigated to the test cases page successfully
      cy.url().should('include', '/test_cases');
      cy.get('h2').should('contain', 'Test Cases'); // Adjust based on the actual header text on the Test Cases page
  });
});

describe('Verify all products and products detail page', () => {
  it('Should verify navigation to All Products page and product details', () => {
  // Step 1: Launch browser and navigate to URL
    cy.visit('http://automationexercise.com');

  // Step 2: Verify that the home page is visible successfully
    cy.get('#slider').should('be.visible');

  // Step 3: Click on 'Products' button
    cy.contains('Products').click();

  // Step 4: Verify user is navigated to ALL PRODUCTS page successfully
    cy.url().should('include', '/products');
    cy.get('h2').should('contain', 'All Products'); // Adjust based on the actual header text on the ALL PRODUCTS page

  // Step 5: Verify the products list is visible
    cy.get('.features_items').should('be.visible');

  // Step 6: Click on 'View Product' of the first product
    cy.get('.choose').first().contains('View Product').click();

  // Step 7: Verify user is landed to product detail page
    cy.url().should('include', '/product_details');

  // Step 8: Verify that product details are visible
    cy.get('.product-information').within(() => {
      cy.get('Blue Top').should('be.visible');
      cy.get('Category: Women > Tops').should('be.visible');
      cy.get('Rs. 500').should('be.visible');
      cy.get('Quantity:').should('be.visible');
      cy.get('Condition:').should('be.visible');
      cy.get('Brand:').should('be.visible');
    });
  });
});