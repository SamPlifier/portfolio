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
        $scope.projects = [{
            icon: 'assets/asteroids.png',
            name: 'Asteroids',
            description: 'Made ship move.',
            link: 'https://github.com/SamPlifier/Asteroids',
        }, {
            icon: 'assets/timeline.png',
            name: 'Timeline',
            description: 'CSS & media query practice',
            link: 'https://github.com/SamPlifier/Timeline'
        }, {
            icon: 'assets/toDoList.png',
            name: 'To-Do List',
            description: 'jQuery, JS, Handlebars templates',
            link: 'https://github.com/SamPlifier/to-do/settings'
        }, {
            icon: 'assets/tShirtShop.png',
            name: 'T-Shirt Shop',
            description: 'jQuery, JS, Handlebars templates',
            link: 'https://github.com/SamPlifier/to-do/settings'
        }, {
            icon: 'assets/asteroids.png',
            name: 'Asteroids',
            description: 'Made ship move.',
            link: 'https://github.com/SamPlifier/Asteroids',
        }, {
            icon: 'assets/timeline.png',
            name: 'Timeline',
            description: 'CSS & media query practice',
            link: 'https://github.com/SamPlifier/Timeline'
        }];
    }]);
