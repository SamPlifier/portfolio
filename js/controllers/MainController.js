angular.module('portfolio', [])
    .controller('MainController', ['$scope', function($scope) {

        var pageDefault = function() {
            window.location.hash = 'contact';
            $scope.showContact = true;
            $('#contact').addClass('active');
        };
        var mobileMenu = $('.mobileMenu');
        var navHeaders = $('nav h2, nav h3');
        var navh2 = $('#contact, #about, #portfolio');
        pageDefault();
        $scope.menuClick = function(event) {
            console.log(event.currentTarget.id);
            window.location.hash = event.currentTarget.id;
            $scope.clearAll();
            $scope.activate(event.currentTarget.id);
            if ($(window).width() < 755) {
                navHeaders.toggle();
            }
        };
        mobileMenu.click(function() {
            return navHeaders.toggle();
        });
        $(window).resize(function() {
            if ($(window).width() >= 755) {
                mobileMenu.css('display', 'none');
                navh2.css('display', 'block');
            } else {
                mobileMenu.css('display', 'flex');
                navh2.css('display', 'none');
            }
        });
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
        $scope.projects = [
            {
                icon: 'assets/portfolioPics/goodThoughts.png',
                name: 'Good Thoughts',
                description: 'Non-profit site update',
                link: 'http://www.goodthoughts.us',
                siteLocation:'Live Site'
            },
            {
                icon: 'assets/portfolioPics/flightSightAviation.png',
                name: 'FlightSight Aviation',
                description: 'Angular & UI-Bootstrap',
                link: 'http://flightsightaviation.com/#/',
                siteLocation:'Live Site'
            },
            {
                icon: 'assets/portfolioPics/nannydash.png',
                name: 'Nannydash',
                description: 'Dashboard web app w/Angular and RoR',
                link: 'https://github.com/lburl01/nannydash',
                siteLocation:'GitHub'
            },
            {
                icon: 'assets/portfolioPics/planscape.png',
                name: 'Planscape',
                description: 'Angular, RoR, Google Maps API',
                link: 'https://github.com/donaldsonjulia/TIY-Planscape',
                siteLocation:'GitHub'
            },
            {
                icon: 'assets/portfolioPics/nprApiMobile.png',
                name: 'NPR API',
                description: 'Used open API, Handlebars & Grunt',
                link: 'https://github.com/SamPlifier/NPRapi',
                siteLocation:'GitHub'
            },
            {
                icon: 'assets/portfolioPics/toDoList.png',
                name: 'To-Do List',
                description: 'JavaScript and SASS',
                link: 'https://samplifier.github.io/to-do/',
                siteLocation:'Live Example'
            },
            {
                icon: 'assets/portfolioPics/chromesthesia.png',
                name: 'Chromesthesia',
                description: 'Paired notes & colors w/React',
                link: 'https://samplifier.github.io/Chromesthesia/',
                siteLocation:'Live Site'
            },
            {
                icon: 'assets/portfolioPics/calculator.png',
                name: 'Calculator',
                description: '4 function calculator w/JavaScript',
                link: 'https://samplifier.github.io/fee-calculator/',
                siteLocation:'Live Site'
            }
        ];
    }]);
