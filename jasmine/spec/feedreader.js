/* feedreader.js
    Comments updated to reflect changes made while completing project.
 */

$(function() {
        
        beforeEach(function () {
            jasmine.addMatchers({
                //Add Jasmine Matchers for Class and Css Styles.
                //Thanks to https://github.com/velesin/jasmine-jquery/blob/master/lib/jasmine-jquery.js
                toHaveClass: function () {
                    return {
                        compare: function (actual, className) {
                            return { pass: $(actual).hasClass(className) }
                        }
                    }
                },

                toHaveCss: function () {
                    return {
                      compare: function (actual, css) {
                        var stripCharsRegex = /[\s;\"\']/g
                        for (var prop in css) {
                            var value = css[prop];
                            if ((value === 'auto') && ($(actual).get(0).style[prop] === 'auto')) continue
                                var actualStripped = $(actual).css(prop).replace(stripCharsRegex, '')
                                var valueStripped = value.replace(stripCharsRegex, '')
                            if (actualStripped !== valueStripped) return { pass: false }
                        }
                        return { pass: true }
                      }
                    }
                }
            
            }) 

        });
    
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('defines url and is not empty', function(){
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
            /*
            *The following line states that the expectation
            *is that the url will be present and not be an empty string.
            */
                expect(allFeeds[i].url).not.toBe(0 || '');
            /*
            *The following line ensures that url has met the minimum requirements
            *for a functional feed, namely it contains 'http' and 'feed'. Not a
            *guarantee, but better than nothing.
            */
                expect(allFeeds[i].url).toContain('http' && 'feed');
            }
         });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('defines name and is not empty', function(){
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe(0 || '');
            }
         });
    });


    /* A test suite named "The Menu" */
    describe('The Menu', function(){ 
        /* A test that ensures the menu element is
         * hidden by default.
         */
        var menu = $('body');
        var menuSelect = $('.menu-icon-link');

        it('hides menu by default', function(){          
            expect(menu).toHaveClass("menu-hidden");
        });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes menu visibility when clicked', function(){
            //click the menu icon to show the menu
            menuSelect.trigger('click');
            //check if it is visible
            expect(menu).not.toHaveClass("menu-hidden");
            //click the icon again
            menuSelect.trigger('click');
            //check if it is hidden
            expect(menu).toHaveClass("menu-hidden");

        });

    });

    /*Test suite to make sure pop-up images respond to clicks*/
    describe('Screenshot row', function(){
        var screenshot1 = $('#popUpDiv');
        var screenshot2 = $('#popUpDiv2');
        var screenshot3 = $('#popUpDiv3');
        var screenshot4 = $('#popUpDiv4');
        var imageSelect = $('.imagePop');

        it('pop up image 1 on click', function(){
            //click the image-icon to show the larger image
            imageSelect.trigger('click');
            //check if it is visible
            expect(screenshot1).toHaveCss({"display":"block"});
            //click the icon again
            imageSelect.trigger('click');
            //check if it is hidden
            expect(screenshot1).toHaveCss({"display":"none"});
        });
        it('pop up image 2 on click', function(){
            //click the image-icon to show the larger image
            imageSelect.trigger('click');
            //check if it is visible
            expect(screenshot1).toHaveCss({"display":"block"});
            //click the icon again
            imageSelect.trigger('click');
            //check if it is hidden
            expect(screenshot1).toHaveCss({"display":"none"});
        });
        it('pop up image 3 on click', function(){
            //click the image-icon to show the larger image
            imageSelect.trigger('click');
            //check if it is visible
            expect(screenshot2).toHaveCss({"display":"block"});
            //click the icon again
            imageSelect.trigger('click');
            //check if it is hidden
            expect(screenshot3).toHaveCss({"display":"none"});
        });
        it('pop up image 4 on click', function(){
            //click the image-icon to show the larger image
            imageSelect.trigger('click');
            //check if it is visible
            expect(screenshot4).toHaveCss({"display":"block"});
            //click the icon again
            imageSelect.trigger('click');
            //check if it is hidden
            expect(screenshot4).toHaveCss({"display":"none"});
        });

    });

    /* A test suite named "Initial Entries" */
    // describe('Initial Entries', function(){
    //     /* TODO: Write a test that ensures when the loadFeed
    //      * function is called and completes its work, there is at least
    //      * a single .entry element within the .feed container.
    //      * Remember, loadFeed() is asynchronous so this test wil require
    //      * the use of Jasmine's beforeEach and asynchronous done() function.
    //      */
    //      it('calls loadfeed function and contains element', function(){

    //      });

    // });

    // /* A test suite named "New Feed Selection"*/
    // describe('New Feed Selection', function(){
    //     /* TODO: Write a test that ensures when a new feed is loaded
    //      * by the loadFeed function that the content actually changes.
    //      * Remember, loadFeed() is asynchronous.
    //      */
    //     it('loads new feed and changes content', function{

    //     });

    // });



}());
