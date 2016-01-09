
# Project Overview

The purpose of this project was to become familiar with the Behavior-Driven Development (BDD) framework, [Jasmine](http://jasmine.github.io/). A web-based, RSS feed-reader was subjected to a series of pass-fail test suites in order to ensure its functionality. The tests evaluated the underlying business logic of the application as well as the event handling and DOM manipulation.

* To use, download or clone the repository then open `index.html` in browser. The page will load, and the tests automatically run. The results are displayed at the bottom of the page in a format that is standard to the Jasmine framework. 

* Alternatively, a live version of this application can be viewed here: [Project-6 Feed Reader](http://marc1981.github.io/project-6--js-testing)

# How was this project completed? - The following steps were taken in order to complete this project.

1. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
2. Review the functionality of the application within your browser.
3. Explore the application's HTML (*./index.html*), CSS (*./css/style.css*) and JavaScript (*./js/app.js*) to gain an understanding of how it works.
4. Explore the Jasmine spec file in *./jasmine/spec/feedreader.js*
5. Edit the allFeeds variable in *./js/app.js* to make the provided test fail and see how Jasmine visualizes this failure in your application.
6. Return the allFeeds variable to a passing state.
7. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
8. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
9. Write a new test suite named "The menu".
10. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
11. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
12. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.
13. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.
14. When complete - all of your tests should pass.

## Additional steps taken

1. Two matchers that were not available in the default Jasmine framework were created.
	* Additional Jasmine matchers `.toHaveClass` and `.toHaveCss` were added based off of code from: https://github.com/velesin/jasmine-jquery/blob/master/lib/jasmine-jquery.js
2. An additional test suite was added to check the functionality of a series of pop-up windows.
	* CSS-popup provided by: [Patrick Burt](http://www.pat-burt.com/web-development/how-to-do-a-css-popup-without-opening-a-new-window/)
3. As mentioned, pop-up windows were added to provide the user a screenshot of what happens when the app fails a particular test suite.
4. Using Bootstrap causes formating issues, so a modified grid system was created using unique class names.