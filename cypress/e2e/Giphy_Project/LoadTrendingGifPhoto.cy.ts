describe('Loads trending gif photos', ()=> {

    it('Loads trending gif photos through API', ()=> {
        // Provide API Key to proceed or get access
    const apiKey = 'hKd8RAuyG9yTm72kRFWoMZ7TrD4smRQk'

    cy.request({
        method: 'GET',
        url: 'https://api.giphy.com/v1/gifs/trending',
        qs: {
            apiKey,
            limit: 15,
          },
    }).then((response)=> {
        // Verifying success response
        expect(response.status).to.eq(200);

        // Verify data limit is 15
        expect(response.body.data).to.have.lengthOf(15);

        response.body.data.forEach((gif: APIResponse) => {
       
            expect(gif.url).to.be.a('string');
            gif.url.includes('giphy.com/')
       
            console.log(gif.title)
            console.log(gif.url)
            expect(gif.title).to.be.a('string');
        })
    })
    })
});
    // Define interface to save giphy response to iterate over
interface GetTitleandimgUrl {
    data: APIResponse[];
  }
   
  interface APIResponse {
      url: string,
    title: string
  }
