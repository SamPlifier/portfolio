angular.module('portfolio', [])
    .controller('MainController', ['$scope', function($scope) {

        var pageDefault = function() {
            $scope.showContact = true;
            $('#contact').addClass('active');
        };
        var mobileMenu = $('.mobileMenu');
        var navHeaders = $('nav h2, nav h3');
        var navh2 = $('#contact, #about, #portfolio');
        pageDefault();
        $scope.menuClick = function(event) {
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
            icon: 'assets/portfolioPics/nannydash.png',
            name: 'Nannydash',
            description: 'Dashboard web app w/Angular and RoR',
            link: 'https://github.com/lburl01/nannydash',
          },
          {
            icon: 'assets/portfolioPics/planscape.png',
            name: 'Planscape',
            description: 'Front/Back-end project w/Angular & Ruby',
            link: 'https://github.com/donaldsonjulia/TIY-Planscape'
          },
          {
            icon: 'assets/portfolioPics/nprApiMobile.png',
            name: 'NPR API',
            description: 'Used open API, Handlebars & Grunt',
            link: 'https://github.com/SamPlifier/NPRapi'
          },
          {
            icon: 'assets/portfolioPics/toDoList.png',
            name: 'To-Do List',
            description: 'JavaScript and SASS',
            link: 'https://samplifier.github.io/to-do/'
          },
          {
            icon: 'assets/portfolioPics/chromesthesia.png',
            name: 'Chromesthesia',
            description: 'Paired notes & colors w/React',
            link: 'https://samplifier.github.io/Chromesthesia/',
          },
          {
          icon: 'assets/portfolioPics/calculator.png',
          name: 'Calculator',
          description: '4 function calculator w/JavaScript',
          link: 'https://samplifier.github.io/fee-calculator/',
        }];
    }]);
