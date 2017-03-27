angular.module('directory.list.pagination', [])
.component('paginator', {
  templateUrl:  'app/directory/list/pagination/pagination.tmpl.html',
           
  controller: paginationController,
  controllerAs: 'ctrl',   
  bindings: {
    pages: '<',
    total: '<',
    limit: '<'
  }
})

function paginationController() {
  var ctrl = this;
    ctrl.range = function(min, max, step){
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) input.push(i);
        return input;
    };
  this.$onChanges = function(changesObj) {
      if (changesObj.total.previousValue != changesObj.total.currentValue){
          ctrl.pages = Math.ceil( changesObj.total.currentValue /changesObj.limit.currentValue)-1;
      }
  }

}