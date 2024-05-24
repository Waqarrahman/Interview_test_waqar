const apiKey = 'hKd8RAuyG9yTm72kRFWoMZ7TrD4smRQk'; // Replace with your actual API key
const gifsPerPage = 15;
const searchTerm = 'happy'; // Replace with the search term you want to test
 
describe('Trending GIFs API Test', () => {
  it('Loads trending GIF photos from Giphy API', () => {
    // API key to use
    const apiKey = 'hKd8RAuyG9yTm72kRFWoMZ7TrD4smRQk';
 
    cy.request({
      method: 'GET',
      url: `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=${gifsPerPage}`,
    }).then((response) => {
 
      //console.log();
      // Ensure the API call is successful
      expect(response.status).to.eq(200);
 
      // Verify length is 15 
      expect(response.body.data).to.have.lengthOf(15);
     
      // Verify Image and Title
      response.body.data.forEach((gif: APIResponse) => {
       
        expect(gif.url).to.be.a('string');
        gif.url.includes('giphy.com/')
        //console.log(gif.title)
        //console.log(gif.url)
        expect(gif.title).to.be.a('string');
      });
 
    });
  });
});
 
//Define interface for the Giphy API response structure
interface GetTitleandimgUrl {
  data: APIResponse[];
}
 
interface APIResponse {
    url: string,
  title: string
}