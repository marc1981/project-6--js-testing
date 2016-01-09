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
                        return { pass: $(actual).hasClass(className) };
                    }
                };
            },

            toHaveCss: function () {
                return {
                  compare: function (actual, css) {
                    var stripCharsRegex = /[\s;\"\']/g;         
                    for (var prop in css) {
                        var value = css[prop];
                        if ((value === 'auto') && ($(actual).get(0).style[prop] === 'auto')) { continue; }
                            var actualStripped = $(actual).css(prop).replace(stripCharsRegex, '');
                            var valueStripped = value.replace(stripCharsRegex, '');
                        if (actualStripped !== valueStripped) return { pass: false };
                        }
                    return { pass: true };
                    }
                };
            }
            
        }); 

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
        var screenshot = $('.pop');
        var imageSelect = $('.imagePop');

        it('pop up image on click', function(){
            //click the image-icon to show the larger image
            imageSelect.trigger('click');
            //check if it is visible
            expect(screenshot).toHaveCss({"display":"block"});
            //click the icon again
            imageSelect.trigger('click');
            //check if it is hidden
            expect(screenshot).toHaveCss({"display":"none"});
        });

    });

    /* A test suite named "Initial Entries" */
    describe('Initial Entries', function(){

        beforeEach(function(done){
            loadFeed(0, done);
        });

        //Ensures that each feed has at least one element.
        it('has at least one entry within feed', function(done){
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });

    });

    /* A test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
     /* A test that ensures when a new feed is loaded
      * by the loadFeed function that the content actually changes.
     */

        var header, entry;

        beforeEach(function(done) { 
            loadFeed(0, function() {
                header = $('h1.header-title').text();
                entry = $('.feed .entry h2').text();
                loadFeed(1, function() {
                    done();
                });
            });
        });

        //Checks that header updates.
        it('updates header title', function() {
            expect($('h1.header-title').text()).not.toBe(header);
        });

        //Checks that post title updates.
        it('updates entry', function() {
            expect($('.feed .entry h2').text()).not.toBe(entry);    
        });
    });

}());
