describe('Giphy App: Infinite scroll test', () => {
 
  // Verify Gif elements
  it('Scroll down to the last gif', () => {
 
    cy.visit('https://giphy-app-nu.vercel.app/')
    
    // Start scrolling down
    cy.get('[data-cy="gifItem"]').should('be.visible').then(() => {
      scrollDownToBottom();
    })

    const scrollDownToBottom = () => {
      cy.scrollTo('bottom')
      cy.document().then((doc) => {

        const scrolledToBottom = doc.documentElement.scrollHeight - window.innerHeight <= window.scrollY;
        if (!scrolledToBottom) {
          debugger
          scrollDownToBottom()
        } else {
          cy.log('End of the page')
        }
      });
    };
  })
})