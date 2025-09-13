// Init Materialize
$(document).ready(function() {
    $('.carousel.carousel-slider').carousel({ fullWidth: true, indicators: true });
    $('.tabs').tabs();
    $('.collapsible').collapsible();
});

// AngularJS App
angular.module('learningApp', [])
    .controller('LearningController', function($scope, $timeout) {

        // Sync tabs -> carousel
        $scope.goToSlide = function(index) {
            var instance = M.Carousel.getInstance(document.querySelector('.carousel'));
            instance.set(index);
        };

        // Lessons Data
        $scope.cssLessons = [
            { icon: "palette", title: "Introduction to CSS", text: "Learn basics of styling, colors, and text." },
            { icon: "layers", title: "CSS Layouts", text: "Master flexbox and grid layouts." },
            { icon: "color_lens", title: "Advanced CSS", text: "Animations, transitions, and effects." },
            { icon: "palette", title: "Introduction to CSS", text: "Learn basics of styling, colors, and text." },
            { icon: "layers", title: "CSS Layouts", text: "Master flexbox and grid layouts." },
            { icon: "color_lens", title: "Advanced CSS", text: "Animations, transitions, and effects." }
        ];

        $scope.htmlLessons = [
            { icon: "code", title: "HTML Basics", text: "Understand tags, attributes, and structure." },
            { icon: "dashboard", title: "HTML5 Features", text: "Learn semantic elements, audio & video." },
            { icon: "web", title: "Forms & Inputs", text: "Build interactive forms with HTML5." }
        ];

        $scope.jsLessons = [
            { icon: "extension", title: "JS Basics", text: "Variables, functions, and operators." },
            { icon: "event", title: "DOM Manipulation", text: "Handle events and update HTML dynamically." },
            { icon: "storage", title: "Advanced JS", text: "Async, promises, and ES6 features." }
        ];

        $scope.phpLessons = [
            { icon: "storage", title: "Intro to PHP", text: "Learn basics of backend development." },
            { icon: "dns", title: "Database Integration", text: "Work with MySQL using PHP." },
            { icon: "security", title: "Secure PHP", text: "Best practices for secure backend coding." }
        ];

        // Re-init collapsibles after Angular renders
        $timeout(function() {
            $('.collapsible').collapsible();
        }, 0);
    });