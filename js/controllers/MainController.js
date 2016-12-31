angular.module('portfolio', [])
    .controller('MainController', ['$scope', function($scope, $timeout) {

        var pageDefault = function() {
            $scope.showContact = true;
            $('#contact').addClass('active');
        };
        pageDefault();

        $scope.menuClick = function(event) {
            $scope.clearAll();
            $scope.activate(event.currentTarget.id);
            //fix this!!!
            if ($('html').width() < 700) {
                return navHeaders.toggle();
            }
        };
        $scope.clearAll = function() {
            $scope.showContact = false;
            $scope.showAbout = false;
            $scope.showPortfolio = false;
            $('#contact').removeClass('active');
            $('#about').removeClass('active');
            $('#portfolio').removeClass('active');
        };
        $scope.activate = function(id) {
            switch (id) {
                case 'contact':
                    $scope.showContact = true;
                    $('#contact').addClass('active');
                    break;
                case 'about':
                    $scope.showAbout = true;
                    $('#about').addClass('active');
                    break;
                case 'portfolio':
                    $scope.showPortfolio = true;
                    $('#portfolio').addClass('active');
                    break;
                default:
                    break;
            }
        };
        var mobileMenu = $('.mobileMenu');
        var navHeaders = $('nav h2, nav h3');
        mobileMenu.click(function() {
            navHeaders.toggle();
        });
        $scope.projects = [{
            icon: 'assets/portfolioPics/iceCreamShip.png',
            name: 'Ice Cream Shop',
            description: 'Show some flavors in an html table',
            link: '',
        }, {
            icon: 'assets/portfolioPics/blogLayout.png',
            name: 'Blog Layout',
            description: 'Use CSS to mimic TIY of Houston',
            link: 'https://github.com/SamPlifier/Blog-Layout-hw'
        }, {
            icon: 'assets/portfolioPics/timeline.png',
            name: 'Timeline',
            description: 'Sass, CSS transitions & responsiveness',
            link: 'https://github.com/SamPlifier/Timeline'
        }, {
            icon: 'assets/portfolioPics/tShirtShop.png',
            name: 'T-Shirt Shop',
            description: 'Sass, CSS transitions, responsiveness',
            link: 'https://github.com/SamPlifier/to-do/settings'
        }, {
            icon: 'assets/portfolioPics/asteroids.png',
            name: 'Asteroids',
            description: 'Used JavaScript to move the ship',
            link: 'https://github.com/SamPlifier/Asteroids',
        }, {
            icon: 'assets/portfolioPics/MovieRatings.png',
            name: 'MovieLens',
            description: 'Make AJAX requests to a movie database',
            link: 'https://github.com/rdhelms/movieRatings'
        }, {
            icon: 'assets/portfolioPics/nprApiMobile.png',
            name: 'NPR API',
            description: 'Used open API, Handlebars & Grunt',
            link: 'https://github.com/SamPlifier/NPRapi'
        }, {
            icon: 'assets/portfolioPics/planscape.png',
            name: 'Planscape',
            description: 'Front/Back-end project w/Angular & Ruby',
            link: 'https://github.com/donaldsonjulia/TIY-Planscape'
        }, {
            icon: 'assets/portfolioPics/nannydash.png',
            name: 'Nannydash',
            description: 'Final Project, multi-user dashboard',
            link: 'https://github.com/lburl01/nannydash',
        }];
    }]);
