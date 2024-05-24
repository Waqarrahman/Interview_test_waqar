Unit Tests for Giphy App

Guide to setup the envoirnment
Pre-requisits
Node js should be installed
Repo should be cloned 
Open Folder in VS Code and go to Terminal
Type command npm install to get missing files or dependencies
To run the code open Cypress through command npx cypress open
Consider Giphy_Project folder to run relevant unit tests

First Unit Test(LoadTrendingGifPhotos):
It will load trending gif photos from given API
By default it will load 15 photos 
The result will contain Image along with Title
Click the file to run

Second Unit Test (ScrolltoBottom):
This test will check the scroll bar and will navigate to bottom till it meets the end of the page
Click the file to run

Third Unit Test (Searchgifunittest):

App feature: Provides a search box to search gif photos from https://api.giphy.com/v1/gifs/search  
Click the file to run once program loaded into cypress selected browser
 
Reasoning Behind the Approach Taken:
The test verifies API response including image url and title
Also make sure all the images are loading for which function is added from the internet.
The test validates search for GIFs according to user input.

Assumptions
API Endpoint: The test assumes that the endpoint 'https://api.giphy.com/v1/gifs/trending' will always return trending GIFs. It does not account for scenarios where the endpoint may be unavailable or return unexpected data.

Note (Blocker):
Feedback feature seems missing in the given url for which wasn't able to write e2e test cases.

It took little more time than suggested that is 7 hrs approximately
