appli.directive('ngComment', function(){
  return {
    restrict: 'E',
    templateUrl: 'partials/_comment.html'
  };
});

appli.directive('datepicker', function(){
  return {
    restrict: 'C',
    link: function(scope, element, attrs){
      $(element).pickadate();
    }
  };
});

appli.directive('time', function(dateFilter, $interval){
  return {
    restrict: 'E',
    template: '{{time}}',
    scope: {},
    link: function(scope, element, attrs){
      scope.time = dateFilter(new Date(), 'hh:mm:ss');

      element.on('$destroy', function(){
        $interval.cancel(interval);
      });

      interval = $interval(function(){
        scope.time = dateFilter(new Date(), 'hh:mm:ss');
        console.log('time changed')
      }, 1000);
    }
  };
});
