(function() {
	'use strict';
	var $asm = {};
	global.TurnRPG = global.TurnRPG || {};
	global.TurnRPG.Client = global.TurnRPG.Client || {};
	global.TurnRPG.Client.Controllers = global.TurnRPG.Client.Controllers || {};
	global.TurnRPG.Client.Directives = global.TurnRPG.Client.Directives || {};
	global.TurnRPG.Client.Filters = global.TurnRPG.Client.Filters || {};
	global.TurnRPG.Client.Scope = global.TurnRPG.Client.Scope || {};
	global.TurnRPG.Client.Scope.Controller = global.TurnRPG.Client.Scope.Controller || {};
	global.TurnRPG.Client.Scope.Directive = global.TurnRPG.Client.Scope.Directive || {};
	global.TurnRPG.Client.Scope.Directive.Canvas = global.TurnRPG.Client.Scope.Directive.Canvas || {};
	global.TurnRPG.Client.Services = global.TurnRPG.Client.Services || {};
	global.TurnRPG.Client.Utils = global.TurnRPG.Client.Utils || {};
	ss.initAssembly($asm, 'TurnRPG.Client');
	////////////////////////////////////////////////////////////////////////////////
	// LevelModel
	var $LevelModel = function() {
	};
	$LevelModel.__typeName = 'LevelModel';
	$LevelModel.createInstance = function() {
		return $LevelModel.$ctor();
	};
	$LevelModel.$ctor = function() {
		var $this = {};
		return $this;
	};
	global.LevelModel = $LevelModel;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Controllers.LevelController.GridHexagon
	var $TurnRPG_$Client_Controllers_$LevelController$GridHexagon = function() {
		this.$x = 0;
		this.$y = 0;
		this.$hexagon = null;
	};
	$TurnRPG_$Client_Controllers_$LevelController$GridHexagon.__typeName = 'TurnRPG.$Client.Controllers.$LevelController$GridHexagon';
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Controllers.LevelController.Hexagon
	var $TurnRPG_$Client_Controllers_$LevelController$Hexagon = function() {
		this.$color = null;
		this.$enabled = false;
		this.$height = 0;
	};
	$TurnRPG_$Client_Controllers_$LevelController$Hexagon.__typeName = 'TurnRPG.$Client.Controllers.$LevelController$Hexagon';
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.BuildAngular
	var $TurnRPG_Client_BuildAngular = function() {
	};
	$TurnRPG_Client_BuildAngular.__typeName = 'TurnRPG.Client.BuildAngular';
	$TurnRPG_Client_BuildAngular.setup = function() {
		var stats = new xStats();
		document.body.appendChild(stats.element);
		var module = angular.module('TurnRPG', ['ui.utils', 'ui.bootstrap']).config(['$httpProvider', $TurnRPG_Client_BuildAngular.$buildHttpProvider]).controller($TurnRPG_Client_Controllers_$LevelController.$name, [$TurnRPG_Client_BuildAngular.$scopeName, function(scope) {
			return new $TurnRPG_Client_Controllers_$LevelController(scope);
		}]).service($TurnRPG_Client_Services_CreateUIService.name$1, [$TurnRPG_Client_BuildAngular.$compileName, $TurnRPG_Client_BuildAngular.$rootScopeName, function(compileService, rootScopeService) {
			return new $TurnRPG_Client_Services_CreateUIService(compileService, rootScopeService);
		}]).directive($TurnRPG_Client_Directives_FancyListDirective.name$1, [function() {
			return new $TurnRPG_Client_Directives_FancyListDirective();
		}]).directive($TurnRPG_Client_Directives_FancyListIndexDirective.name$1, [function() {
			return new $TurnRPG_Client_Directives_FancyListIndexDirective();
		}]).directive($TurnRPG_Client_Directives_FancyHorizontalListDirective.name$1, [function() {
			return new $TurnRPG_Client_Directives_FancyHorizontalListDirective();
		}]).directive($TurnRPG_Client_Directives_FancyHorizontalListIndexDirective.name$1, [function() {
			return new $TurnRPG_Client_Directives_FancyHorizontalListIndexDirective();
		}]).directive($TurnRPG_Client_Directives_DraggableDirective.name$1, [function() {
			return new $TurnRPG_Client_Directives_DraggableDirective();
		}]).directive($TurnRPG_Client_Directives_FloatingWindowDirective.name$1, [function() {
			return new $TurnRPG_Client_Directives_FloatingWindowDirective();
		}]).directive($TurnRPG_Client_Directives_ForNextDirective.name$1, [function() {
			return new $TurnRPG_Client_Directives_ForNextDirective();
		}]).filter($TurnRPG_Client_Filters_RoundFilter.name$1, [function() {
			var $t1 = new $TurnRPG_Client_Filters_RoundFilter();
			return ss.mkdel($t1, $t1.filter);
		}]).filter($TurnRPG_Client_Filters_SwitchFilter.name$1, [function() {
			var $t2 = new $TurnRPG_Client_Filters_SwitchFilter();
			return ss.mkdel($t2, $t2.filter);
		}]).run([$TurnRPG_Client_BuildAngular.$http, $TurnRPG_Client_BuildAngular.$templateCache, $TurnRPG_Client_Services_CreateUIService.name$1, function(http, templateCache, createUIService) {
			$TurnRPG_Client_BuildAngular.$buildCache(http, templateCache);
			createUIService.create($TurnRPG_Client_Controllers_$LevelController.$view);
		}]);
		//            MinimizeController.Register(module);
		angular.bootstrap(window.document, ['TurnRPG']);
	};
	$TurnRPG_Client_BuildAngular.$buildCache = function(http, templateCache) {
		var uis = [];
		for (var index = 0; index < uis.length; index++) {
			var ui = { $: ss.formatString('{1}partials/UIs/{0}.html', uis[index], $TurnRPG_Client_Utils_Constants.contentAddress) };
			http.get(ui.$, null).success(ss.mkdel({ ui: ui }, function(a) {
				return templateCache.put(this.ui.$, a);
			}));
		}
	};
	$TurnRPG_Client_BuildAngular.$buildHttpProvider = function(httpProvider) {
		httpProvider.defaults.useXDomain = true;
		delete httpProvider.defaults.headers.common['X-Requested-With'];
	};
	global.TurnRPG.Client.BuildAngular = $TurnRPG_Client_BuildAngular;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Controllers.LevelController
	var $TurnRPG_Client_Controllers_$LevelController = function(scope) {
		this.$scope = null;
		this.$context = null;
		this.$canvas = null;
		this.$width = 0;
		this.$height = 0;
		this.$blockHeight = 0;
		this.$grid = null;
		this.$image = null;
		this.$scope = scope;
		this.$scope.model = $TurnRPG_Client_Scope_Controller_LevelScopeModel.$ctor();
		this.$scope.callback = $TurnRPG_Client_Scope_Controller_LevelScopeCallback.$ctor();
		this.$width = 260;
		this.$height = Math.sqrt(3) / 2 * this.$width * 0.55;
		this.$blockHeight = this.$height / 3;
		this.$init();
		window.setInterval(ss.mkdel(this, this.$drawBoard), 16);
	};
	$TurnRPG_Client_Controllers_$LevelController.__typeName = 'TurnRPG.Client.Controllers.$LevelController';
	$TurnRPG_Client_Controllers_$LevelController.$transformHeight = function(y, height) {
		return height;
	};
	$TurnRPG_Client_Controllers_$LevelController.$drawCircle = function(context) {
		context.beginPath();
		context.arc(0, 0, 5, 0, 2 * Math.PI, false);
		context.fillStyle = 'black';
		context.fill();
		context.lineWidth = 5;
		context.stroke();
	};
	$TurnRPG_Client_Controllers_$LevelController.$gridToGridHexagons = function(hexagons) {
		var gridHexagons = [];
		for (var y = 0; y < ss.arrayLength(hexagons, 0); y++) {
			for (var x = 0; x < ss.arrayLength(hexagons, 1); x++) {
				var $t1 = new $TurnRPG_$Client_Controllers_$LevelController$GridHexagon();
				$t1.$x = x;
				$t1.$y = y;
				$t1.$hexagon = ss.arrayGet(hexagons, y, x);
				gridHexagons.push($t1);
			}
		}
		return gridHexagons;
	};
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Controllers.EnumerableExtensions
	var $TurnRPG_Client_Controllers_EnumerableExtensions = function() {
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.__typeName = 'TurnRPG.Client.Controllers.EnumerableExtensions';
	$TurnRPG_Client_Controllers_EnumerableExtensions.indexOfFast = function(items, ind) {
		for (var index = 0; index < items.length; index++) {
			var item = items[index];
			if (item === ind) {
				return index;
			}
		}
		return -1;
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.indexOfFast$1 = function(items, ind) {
		for (var index = 0; index < items.length; index++) {
			var item = items[index];
			if (item === ind) {
				return index;
			}
		}
		return -1;
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.where$1 = function(T) {
		return function(items, clause) {
			var items2 = [];
			for (var $t1 = 0; $t1 < items.length; $t1++) {
				var item = items[$t1];
				if (clause(item)) {
					items2.push(item);
				}
			}
			return Array.prototype.slice.call(items2);
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.first$2 = function(T) {
		return function(items, clause) {
			for (var $t1 = 0; $t1 < items.length; $t1++) {
				var item = items[$t1];
				if (clause(item)) {
					return item;
				}
			}
			return ss.getDefaultValue(T);
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.all$1 = function(T) {
		return function(items, clause) {
			for (var $t1 = 0; $t1 < items.length; $t1++) {
				var item = items[$t1];
				if (!clause(item)) {
					return false;
				}
			}
			return true;
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.first$1 = function(T) {
		return function(items, clause) {
			var $t1 = ss.getEnumerator(items);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					if (clause(item)) {
						return item;
					}
				}
			}
			finally {
				$t1.dispose();
			}
			return ss.getDefaultValue(T);
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.all = function(T) {
		return function(items, clause) {
			for (var $t1 = 0; $t1 < items.length; $t1++) {
				var item = items[$t1];
				if (!clause(item)) {
					return false;
				}
			}
			return true;
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.any = function(T) {
		return function(items, clause) {
			var $t1 = ss.getEnumerator(items);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					if (clause(item)) {
						return true;
					}
				}
			}
			finally {
				$t1.dispose();
			}
			return false;
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.any$1 = function(T) {
		return function(items, clause) {
			for (var $t1 = 0; $t1 < items.length; $t1++) {
				var item = items[$t1];
				if (clause(item)) {
					return true;
				}
			}
			return false;
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.orderBy$3 = function(T) {
		return function(items, clause) {
			var j = ss.arrayClone(items);
			j.sort(function(a, b) {
				return ss.compare(clause(a), clause(b));
			});
			return j;
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.orderBy = function(T) {
		return function(items, clause) {
			var j = ss.arrayClone($TurnRPG_Client_Controllers_EnumerableExtensions.toArray(T).call(null, items));
			j.sort(function(a, b) {
				return ss.compare(clause(a), clause(b));
			});
			return j;
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.orderBy$4 = function(T) {
		return function(items, clause) {
			var j = ss.arrayClone(items);
			j.sort(function(a, b) {
				return ss.compare(clause(a), clause(b));
			});
			return j;
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.orderBy$1 = function(T) {
		return function(items, clause) {
			var j = ss.arrayClone($TurnRPG_Client_Controllers_EnumerableExtensions.toArray(T).call(null, items));
			j.sort(function(a, b) {
				return ss.compare(clause(a), clause(b));
			});
			return j;
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.orderBy$5 = function(T) {
		return function(items, clause) {
			var j = ss.arrayClone(items);
			j.sort(function(a, b) {
				return ss.compare(clause(a), clause(b));
			});
			return j;
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.orderBy$2 = function(T) {
		return function(items, clause) {
			var j = ss.arrayClone($TurnRPG_Client_Controllers_EnumerableExtensions.toArray(T).call(null, items));
			j.sort(function(a, b) {
				return ss.compare(clause(a), clause(b));
			});
			return j;
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.toArray = function(T) {
		return function(items) {
			var ts = [];
			var $t1 = ss.getEnumerator(items);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					ts.push(item);
				}
			}
			finally {
				$t1.dispose();
			}
			return Array.prototype.slice.call(ts);
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.select$1 = function(T, T2) {
		return function(items, clause) {
			var items2 = [];
			for (var $t1 = 0; $t1 < items.length; $t1++) {
				var item = items[$t1];
				items2.push(clause(item));
			}
			return Array.prototype.slice.call(items2);
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.where = function(T) {
		return function(items, clause) {
			var items2 = [];
			var $t1 = ss.getEnumerator(items);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					if (clause(item)) {
						items2.push(item);
					}
				}
			}
			finally {
				$t1.dispose();
			}
			return Array.prototype.slice.call(items2);
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.select = function(T, T2) {
		return function(items, clause) {
			var items2 = [];
			for (var $t1 = 0; $t1 < items.length; $t1++) {
				var item = items[$t1];
				items2.push(clause(item));
			}
			return Array.prototype.slice.call(items2);
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.last = function(T) {
		return function(items) {
			var last = ss.getDefaultValue(T);
			var $t1 = ss.getEnumerator(items);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					last = item;
				}
			}
			finally {
				$t1.dispose();
			}
			return last;
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.first = function(T) {
		return function(items) {
			var $t1 = ss.getEnumerator(items);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					return item;
				}
			}
			finally {
				$t1.dispose();
			}
			return ss.getDefaultValue(T);
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.groupBy = function(T, T2) {
		return function(items, predicate) {
			var ts = new (ss.makeGenericType(ss.Dictionary$2, [T2, Array]))();
			var $t1 = ss.getEnumerator(items);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					var j = predicate(item);
					if (!ts.containsKey(j)) {
						ts.add(j, []);
					}
					ts.get_item(j).push(item);
				}
			}
			finally {
				$t1.dispose();
			}
			var ritems = [];
			var $t2 = ts.getEnumerator();
			try {
				while ($t2.moveNext()) {
					var t = $t2.current();
					ritems.push(new (ss.makeGenericType($TurnRPG_Client_Controllers_GroupByItem$2, [T, T2]))(t.key, t.value));
				}
			}
			finally {
				$t2.dispose();
			}
			return ritems;
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.selectMany = function(T, T2) {
		return function(items, clause) {
			var items2 = [];
			for (var $t1 = 0; $t1 < items.length; $t1++) {
				var item = items[$t1];
				ss.arrayAddRange(items2, clause(item));
			}
			return items2;
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.count = function(T) {
		return function(items, clause) {
			var j = 0;
			for (var $t1 = 0; $t1 < items.length; $t1++) {
				var item = items[$t1];
				if (clause(item)) {
					j++;
				}
			}
			return j;
		};
	};
	$TurnRPG_Client_Controllers_EnumerableExtensions.elementAt = function(T) {
		return function(items, index) {
			var i = 0;
			var $t1 = ss.getEnumerator(items);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					if (i === index) {
						return item;
					}
					i++;
				}
			}
			finally {
				$t1.dispose();
			}
			return ss.getDefaultValue(T);
		};
	};
	global.TurnRPG.Client.Controllers.EnumerableExtensions = $TurnRPG_Client_Controllers_EnumerableExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Controllers.GroupByItem
	var $TurnRPG_Client_Controllers_GroupByItem$2 = function(T, T2) {
		var $type = function(key, values) {
			this.$1$KeyField = ss.getDefaultValue(T2);
			this.$1$ValuesField = null;
			this.set_key(key);
			this.set_values(values);
		};
		ss.registerGenericClassInstance($type, $TurnRPG_Client_Controllers_GroupByItem$2, [T, T2], {
			get_key: function() {
				return this.$1$KeyField;
			},
			set_key: function(value) {
				this.$1$KeyField = value;
			},
			get_values: function() {
				return this.$1$ValuesField;
			},
			set_values: function(value) {
				this.$1$ValuesField = value;
			},
			getEnumerator: function() {
				return ss.getEnumerator(this.get_values());
			}
		}, function() {
			return null;
		}, function() {
			return [ss.IEnumerable, ss.IEnumerable];
		});
		return $type;
	};
	$TurnRPG_Client_Controllers_GroupByItem$2.__typeName = 'TurnRPG.Client.Controllers.GroupByItem$2';
	ss.initGenericClass($TurnRPG_Client_Controllers_GroupByItem$2, $asm, 2);
	global.TurnRPG.Client.Controllers.GroupByItem$2 = $TurnRPG_Client_Controllers_GroupByItem$2;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Directives.DraggableDirective
	var $TurnRPG_Client_Directives_DraggableDirective = function() {
		this.link = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$TurnRPG_Client_Directives_DraggableDirective.__typeName = 'TurnRPG.Client.Directives.DraggableDirective';
	global.TurnRPG.Client.Directives.DraggableDirective = $TurnRPG_Client_Directives_DraggableDirective;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Directives.FancyHorizontalListDirective
	var $TurnRPG_Client_Directives_FancyHorizontalListDirective = function() {
		this.link = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.templateUrl = null;
		this.transclude = false;
		this.restrict = 'EA';
		this.templateUrl = ss.formatString('{0}partials/fancyHorizontalList.html', $TurnRPG_Client_Utils_Constants.contentAddress);
		this.replace = true;
		this.transclude = true;
		this.scope = { items: '=', bind: '=' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$TurnRPG_Client_Directives_FancyHorizontalListDirective.__typeName = 'TurnRPG.Client.Directives.FancyHorizontalListDirective';
	global.TurnRPG.Client.Directives.FancyHorizontalListDirective = $TurnRPG_Client_Directives_FancyHorizontalListDirective;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Directives.FancyHorizontalListIndexDirective
	var $TurnRPG_Client_Directives_FancyHorizontalListIndexDirective = function() {
		this.link = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.templateUrl = null;
		this.transclude = false;
		this.restrict = 'EA';
		this.templateUrl = ss.formatString('{0}partials/fancyHorizontalListIndex.html', $TurnRPG_Client_Utils_Constants.contentAddress);
		this.replace = true;
		this.transclude = true;
		this.scope = { items: '=', bindIndex: '=' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$TurnRPG_Client_Directives_FancyHorizontalListIndexDirective.__typeName = 'TurnRPG.Client.Directives.FancyHorizontalListIndexDirective';
	global.TurnRPG.Client.Directives.FancyHorizontalListIndexDirective = $TurnRPG_Client_Directives_FancyHorizontalListIndexDirective;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Directives.FancyListDirective
	var $TurnRPG_Client_Directives_FancyListDirective = function() {
		this.link = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.templateUrl = null;
		this.transclude = false;
		this.restrict = 'EA';
		this.templateUrl = ss.formatString('{0}partials/fancyList.html', $TurnRPG_Client_Utils_Constants.contentAddress);
		this.replace = true;
		this.transclude = true;
		this.scope = { items: '=', bind: '=' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$TurnRPG_Client_Directives_FancyListDirective.__typeName = 'TurnRPG.Client.Directives.FancyListDirective';
	global.TurnRPG.Client.Directives.FancyListDirective = $TurnRPG_Client_Directives_FancyListDirective;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Directives.FancyListIndexDirective
	var $TurnRPG_Client_Directives_FancyListIndexDirective = function() {
		this.link = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.templateUrl = null;
		this.transclude = false;
		this.restrict = 'EA';
		this.templateUrl = ss.formatString('{0}partials/fancyListIndex.html', $TurnRPG_Client_Utils_Constants.contentAddress);
		this.replace = true;
		this.transclude = true;
		this.scope = { items: '=', bindIndex: '=' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$TurnRPG_Client_Directives_FancyListIndexDirective.__typeName = 'TurnRPG.Client.Directives.FancyListIndexDirective';
	global.TurnRPG.Client.Directives.FancyListIndexDirective = $TurnRPG_Client_Directives_FancyListIndexDirective;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Directives.FloatingWindowDirective
	var $TurnRPG_Client_Directives_FloatingWindowDirective = function() {
		this.link = null;
		this.$myElement = null;
		this.$myScope = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.templateUrl = null;
		this.transclude = false;
		//            myUIManagerService = uiManagerService;
		this.restrict = 'EA';
		this.templateUrl = ss.formatString('{0}partials/floatingWindow.html', $TurnRPG_Client_Utils_Constants.contentAddress);
		this.replace = true;
		this.transclude = true;
		this.scope = { width: '=', height: '=', left: '=', top: '=', windowTitle: '=', visible: '=', onclose: '&' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$TurnRPG_Client_Directives_FloatingWindowDirective.__typeName = 'TurnRPG.Client.Directives.FloatingWindowDirective';
	global.TurnRPG.Client.Directives.FloatingWindowDirective = $TurnRPG_Client_Directives_FloatingWindowDirective;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Directives.ForNextDirective
	var $TurnRPG_Client_Directives_ForNextDirective = function() {
		this.link = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$TurnRPG_Client_Directives_ForNextDirective.__typeName = 'TurnRPG.Client.Directives.ForNextDirective';
	global.TurnRPG.Client.Directives.ForNextDirective = $TurnRPG_Client_Directives_ForNextDirective;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Filters.RoundFilter
	var $TurnRPG_Client_Filters_RoundFilter = function() {
	};
	$TurnRPG_Client_Filters_RoundFilter.__typeName = 'TurnRPG.Client.Filters.RoundFilter';
	global.TurnRPG.Client.Filters.RoundFilter = $TurnRPG_Client_Filters_RoundFilter;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Filters.SwitchFilter
	var $TurnRPG_Client_Filters_SwitchFilter = function() {
	};
	$TurnRPG_Client_Filters_SwitchFilter.__typeName = 'TurnRPG.Client.Filters.SwitchFilter';
	global.TurnRPG.Client.Filters.SwitchFilter = $TurnRPG_Client_Filters_SwitchFilter;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Scope._KeepBaseScopeAlive
	var $TurnRPG_Client_Scope__KeepBaseScopeAlive = function() {
	};
	$TurnRPG_Client_Scope__KeepBaseScopeAlive.__typeName = 'TurnRPG.Client.Scope._KeepBaseScopeAlive';
	global.TurnRPG.Client.Scope._KeepBaseScopeAlive = $TurnRPG_Client_Scope__KeepBaseScopeAlive;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Scope.Controller.LevelScope
	var $TurnRPG_Client_Scope_Controller_LevelScope = function() {
		this.model = null;
		this.callback = null;
		TurnRPG.Client.Scope.BaseScope.call(this);
	};
	$TurnRPG_Client_Scope_Controller_LevelScope.__typeName = 'TurnRPG.Client.Scope.Controller.LevelScope';
	global.TurnRPG.Client.Scope.Controller.LevelScope = $TurnRPG_Client_Scope_Controller_LevelScope;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Scope.Controller.LevelScopeCallback
	var $TurnRPG_Client_Scope_Controller_LevelScopeCallback = function() {
	};
	$TurnRPG_Client_Scope_Controller_LevelScopeCallback.__typeName = 'TurnRPG.Client.Scope.Controller.LevelScopeCallback';
	$TurnRPG_Client_Scope_Controller_LevelScopeCallback.createInstance = function() {
		return $TurnRPG_Client_Scope_Controller_LevelScopeCallback.$ctor();
	};
	$TurnRPG_Client_Scope_Controller_LevelScopeCallback.$ctor = function() {
		var $this = {};
		return $this;
	};
	global.TurnRPG.Client.Scope.Controller.LevelScopeCallback = $TurnRPG_Client_Scope_Controller_LevelScopeCallback;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Scope.Controller.LevelScopeModel
	var $TurnRPG_Client_Scope_Controller_LevelScopeModel = function() {
	};
	$TurnRPG_Client_Scope_Controller_LevelScopeModel.__typeName = 'TurnRPG.Client.Scope.Controller.LevelScopeModel';
	$TurnRPG_Client_Scope_Controller_LevelScopeModel.createInstance = function() {
		return $TurnRPG_Client_Scope_Controller_LevelScopeModel.$ctor();
	};
	$TurnRPG_Client_Scope_Controller_LevelScopeModel.$ctor = function() {
		var $this = {};
		return $this;
	};
	global.TurnRPG.Client.Scope.Controller.LevelScopeModel = $TurnRPG_Client_Scope_Controller_LevelScopeModel;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Scope.Directive.FloatingWindowBaseScope
	var $TurnRPG_Client_Scope_Directive_FloatingWindowBaseScope = function() {
		this.swingAway = null;
		this.swingBack = null;
		this.minimize = null;
		this.visible = false;
		this.minimized = false;
		this.onClose = null;
		this.onReady = null;
		this.destroyWindow = null;
		$TurnRPG_Client_Services_ManagedScope.call(this);
	};
	$TurnRPG_Client_Scope_Directive_FloatingWindowBaseScope.__typeName = 'TurnRPG.Client.Scope.Directive.FloatingWindowBaseScope';
	global.TurnRPG.Client.Scope.Directive.FloatingWindowBaseScope = $TurnRPG_Client_Scope_Directive_FloatingWindowBaseScope;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Scope.Directive.FloatingWindowPosition
	var $TurnRPG_Client_Scope_Directive_FloatingWindowPosition = function() {
	};
	$TurnRPG_Client_Scope_Directive_FloatingWindowPosition.__typeName = 'TurnRPG.Client.Scope.Directive.FloatingWindowPosition';
	$TurnRPG_Client_Scope_Directive_FloatingWindowPosition.createInstance = function() {
		return $TurnRPG_Client_Scope_Directive_FloatingWindowPosition.$ctor();
	};
	$TurnRPG_Client_Scope_Directive_FloatingWindowPosition.$ctor = function() {
		var $this = {};
		$this.display = null;
		$this.left = null;
		$this.top = null;
		$this.marginLeft = null;
		$this.marginTop = null;
		$this.zIndex = 0;
		return $this;
	};
	global.TurnRPG.Client.Scope.Directive.FloatingWindowPosition = $TurnRPG_Client_Scope_Directive_FloatingWindowPosition;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Scope.Directive.FloatingWindowScope
	var $TurnRPG_Client_Scope_Directive_FloatingWindowScope = function() {
		this.$parent = null;
		this.visible = false;
		this.width = null;
		this.height = null;
		this.left = null;
		this.top = null;
		this.sizeStyle = null;
		this.lastSizeStyle = null;
		this.positionStyles = null;
		this.lastPositionStyles = null;
		this.windowTitle = null;
		this.onclose = null;
		this.close = null;
		this.minimize = null;
		this.maximize = null;
		this.restore = null;
		this.isMaximized = false;
		TurnRPG.Client.Scope.BaseScope.call(this);
	};
	$TurnRPG_Client_Scope_Directive_FloatingWindowScope.__typeName = 'TurnRPG.Client.Scope.Directive.FloatingWindowScope';
	global.TurnRPG.Client.Scope.Directive.FloatingWindowScope = $TurnRPG_Client_Scope_Directive_FloatingWindowScope;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Scope.Directive.Size
	var $TurnRPG_Client_Scope_Directive_Size = function() {
	};
	$TurnRPG_Client_Scope_Directive_Size.__typeName = 'TurnRPG.Client.Scope.Directive.Size';
	$TurnRPG_Client_Scope_Directive_Size.createInstance = function() {
		return $TurnRPG_Client_Scope_Directive_Size.$ctor();
	};
	$TurnRPG_Client_Scope_Directive_Size.$ctor = function() {
		var $this = {};
		$this.width = null;
		$this.height = null;
		return $this;
	};
	global.TurnRPG.Client.Scope.Directive.Size = $TurnRPG_Client_Scope_Directive_Size;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Scope.Directive.SwingDirection
	var $TurnRPG_Client_Scope_Directive_SwingDirection = function() {
	};
	$TurnRPG_Client_Scope_Directive_SwingDirection.__typeName = 'TurnRPG.Client.Scope.Directive.SwingDirection';
	global.TurnRPG.Client.Scope.Directive.SwingDirection = $TurnRPG_Client_Scope_Directive_SwingDirection;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Scope.Directive.Canvas.CanvasAssetFrameScope
	var $TurnRPG_Client_Scope_Directive_Canvas_CanvasAssetFrameScope = function() {
		this.inline = false;
		this.width = 0;
		this.height = 0;
		$TurnRPG_Client_Services_ManagedScope.call(this);
	};
	$TurnRPG_Client_Scope_Directive_Canvas_CanvasAssetFrameScope.__typeName = 'TurnRPG.Client.Scope.Directive.Canvas.CanvasAssetFrameScope';
	global.TurnRPG.Client.Scope.Directive.Canvas.CanvasAssetFrameScope = $TurnRPG_Client_Scope_Directive_Canvas_CanvasAssetFrameScope;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Services.CreatedUI
	var $TurnRPG_Client_Services_CreatedUI$1 = function(T) {
		var $type = function(scope, element) {
			this.scope = null;
			this.element = null;
			this.scope = scope;
			this.element = element;
		};
		ss.registerGenericClassInstance($type, $TurnRPG_Client_Services_CreatedUI$1, [T], {
			destroy: function() {
				if (!ss.staticEquals(this.scope.onDestroy, null)) {
					this.scope.onDestroy();
				}
				this.scope.$destroy();
				this.element.remove();
			}
		}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$TurnRPG_Client_Services_CreatedUI$1.__typeName = 'TurnRPG.Client.Services.CreatedUI$1';
	ss.initGenericClass($TurnRPG_Client_Services_CreatedUI$1, $asm, 1);
	global.TurnRPG.Client.Services.CreatedUI$1 = $TurnRPG_Client_Services_CreatedUI$1;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Services.CreateUIService
	var $TurnRPG_Client_Services_CreateUIService = function(compileService, rootScopeService) {
		this.$myCompileService = null;
		this.$myRootScopeService = null;
		this.$singltons = {};
		this.$myCompileService = compileService;
		this.$myRootScopeService = rootScopeService;
	};
	$TurnRPG_Client_Services_CreateUIService.__typeName = 'TurnRPG.Client.Services.CreateUIService';
	global.TurnRPG.Client.Services.CreateUIService = $TurnRPG_Client_Services_CreateUIService;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Services.ManagedScope
	var $TurnRPG_Client_Services_ManagedScope = function() {
		this.onDestroy = null;
		TurnRPG.Client.Scope.BaseScope.call(this);
	};
	$TurnRPG_Client_Services_ManagedScope.__typeName = 'TurnRPG.Client.Services.ManagedScope';
	global.TurnRPG.Client.Services.ManagedScope = $TurnRPG_Client_Services_ManagedScope;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Utils.CanvasInformation
	var $TurnRPG_Client_Utils_CanvasInformation = function(context, domCanvas) {
		this.context = null;
		this.domCanvas = null;
		this.canvas = null;
		this.context = context;
		this.domCanvas = domCanvas;
		var $t1 = domCanvas[0];
		this.canvas = ss.cast($t1, ss.isValue($t1) && (ss.isInstanceOfType($t1, Element) && $t1.tagName === 'CANVAS'));
	};
	$TurnRPG_Client_Utils_CanvasInformation.__typeName = 'TurnRPG.Client.Utils.CanvasInformation';
	$TurnRPG_Client_Utils_CanvasInformation.get_blackPixel = function() {
		if (ss.isNullOrUndefined($TurnRPG_Client_Utils_CanvasInformation.$blackPixel)) {
			var m = $TurnRPG_Client_Utils_CanvasInformation.create(0, 0);
			m.context.fillStyle = 'black';
			m.context.fillRect(0, 0, 1, 1);
			$TurnRPG_Client_Utils_CanvasInformation.$blackPixel = m.canvas;
		}
		return $TurnRPG_Client_Utils_CanvasInformation.$blackPixel;
	};
	$TurnRPG_Client_Utils_CanvasInformation.create = function(w, h) {
		var $t1 = document.createElement('canvas');
		var canvas = ss.cast($t1, ss.isValue($t1) && (ss.isInstanceOfType($t1, Element) && $t1.tagName === 'CANVAS'));
		return $TurnRPG_Client_Utils_CanvasInformation.create$1(canvas, w, h);
	};
	$TurnRPG_Client_Utils_CanvasInformation.create$1 = function(canvas, w, h) {
		if (w === 0) {
			w = 1;
		}
		if (h === 0) {
			h = 1;
		}
		canvas.width = w;
		canvas.height = h;
		var ctx = ss.cast(canvas.getContext('2d'), CanvasRenderingContext2D);
		return new $TurnRPG_Client_Utils_CanvasInformation(ctx, $(canvas));
	};
	global.TurnRPG.Client.Utils.CanvasInformation = $TurnRPG_Client_Utils_CanvasInformation;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Utils.Constants
	var $TurnRPG_Client_Utils_Constants = function() {
	};
	$TurnRPG_Client_Utils_Constants.__typeName = 'TurnRPG.Client.Utils.Constants';
	global.TurnRPG.Client.Utils.Constants = $TurnRPG_Client_Utils_Constants;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Utils.Extensions
	var $TurnRPG_Client_Utils_Extensions = function() {
	};
	$TurnRPG_Client_Utils_Extensions.__typeName = 'TurnRPG.Client.Utils.Extensions';
	$TurnRPG_Client_Utils_Extensions.addEvent = function(element, eventName, listener) {
		if (!!ss.isValue(element.addEventListener)) {
			element.addEventListener(eventName, listener, false);
		}
		else {
			element.AttachEvent(eventName, listener);
		}
	};
	$TurnRPG_Client_Utils_Extensions.takeRandom = function(T) {
		return function(items) {
			var ls = ss.arrayClone(items);
			var currentIndex = ls.length, randomIndex;
			var temporaryValue;
			// While there remain elements to shuffle...
			while (currentIndex !== 0) {
				// Pick a remaining element...
				randomIndex = ss.Int32.trunc(Math.floor(Math.random() * currentIndex));
				currentIndex -= 1;
				// And swap it with the current element.
				temporaryValue = ls[currentIndex];
				ls[currentIndex] = ls[randomIndex];
				ls[randomIndex] = temporaryValue;
			}
			return ls;
		};
	};
	$TurnRPG_Client_Utils_Extensions.percent$1 = function(num) {
		return num + '%';
	};
	$TurnRPG_Client_Utils_Extensions.percent = function(num) {
		return num + '%';
	};
	global.TurnRPG.Client.Utils.Extensions = $TurnRPG_Client_Utils_Extensions;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Utils.Help
	var $TurnRPG_Client_Utils_Help = function() {
	};
	$TurnRPG_Client_Utils_Help.__typeName = 'TurnRPG.Client.Utils.Help';
	$TurnRPG_Client_Utils_Help.getColor = function(_start, _end, _percent) {
		if (ss.isNullOrUndefined(_start)) {
			_start = '#FFFFFF';
		}
		var hex2Dec = function(_hex) {
			return parseInt(_hex, 16);
		};
		var dec2Hex = function(_dec) {
			return ((_dec < 16) ? '0' : '') + _dec.toString(16);
		};
		_start = _start.substr(1, 7);
		_end = _end.substr(1, 7);
		var r1 = hex2Dec(_start.substr(0, 2));
		var g1 = hex2Dec(_start.substr(2, 2));
		var b1 = hex2Dec(_start.substr(4, 2));
		var r2 = hex2Dec(_end.substr(0, 2));
		var g2 = hex2Dec(_end.substr(2, 2));
		var b2 = hex2Dec(_end.substr(4, 2));
		var pc = _percent / 100;
		var r = ss.Int32.trunc(Math.floor(r1 + pc * (r2 - r1) + 0.5));
		var g = ss.Int32.trunc(Math.floor(g1 + pc * (g2 - g1) + 0.5));
		var b = ss.Int32.trunc(Math.floor(b1 + pc * (b2 - b1) + 0.5));
		return '#' + dec2Hex(r) + dec2Hex(g) + dec2Hex(b);
	};
	$TurnRPG_Client_Utils_Help.getCursorPosition = function(ev) {
		if (!!(ev.originalEvent && ev.originalEvent.targetTouches && ev.originalEvent.targetTouches.length > 0)) {
			ev = ss.cast(ev.originalEvent.targetTouches[0], Event);
		}
		return $TurnRPG_Client_Utils_Pointer.$ctor(0, 0, ss.unbox(ss.cast((!!ev.wheelDelta ? (ev.wheelDelta / 40) : (!!ev.detail ? -ev.detail : 0)), ss.Int32)), !!ss.referenceEquals(ev.button, 2));
	};
	$TurnRPG_Client_Utils_Help.getRandomColor = function() {
		return $TurnRPG_Client_Utils_Help.colors[ss.Int32.trunc(Math.random() * $TurnRPG_Client_Utils_Help.colors.length)];
	};
	$TurnRPG_Client_Utils_Help.log = function(_cont) {
		var console = $('#txtConsole');
		var text = console.val();
		console.val(text + _cont + '\n');
		console.scrollTop(console[0].scrollHeight - console.height());
	};
	global.TurnRPG.Client.Utils.Help = $TurnRPG_Client_Utils_Help;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Utils.Point
	var $TurnRPG_Client_Utils_Point = function() {
	};
	$TurnRPG_Client_Utils_Point.__typeName = 'TurnRPG.Client.Utils.Point';
	$TurnRPG_Client_Utils_Point.$ctor = function(x, y) {
		var $this = {};
		$this.x = 0;
		$this.y = 0;
		$this.x = x;
		$this.y = y;
		return $this;
	};
	global.TurnRPG.Client.Utils.Point = $TurnRPG_Client_Utils_Point;
	////////////////////////////////////////////////////////////////////////////////
	// TurnRPG.Client.Utils.Pointer
	var $TurnRPG_Client_Utils_Pointer = function() {
	};
	$TurnRPG_Client_Utils_Pointer.__typeName = 'TurnRPG.Client.Utils.Pointer';
	$TurnRPG_Client_Utils_Pointer.$ctor = function(x, y, delta, right) {
		var $this = $TurnRPG_Client_Utils_Point.$ctor(x, y);
		$this.delta = 0;
		$this.right = false;
		$this.delta = delta;
		$this.right = right;
		return $this;
	};
	global.TurnRPG.Client.Utils.Pointer = $TurnRPG_Client_Utils_Pointer;
	ss.initClass($LevelModel, $asm, {});
	ss.initClass($TurnRPG_$Client_Controllers_$LevelController$GridHexagon, $asm, {});
	ss.initClass($TurnRPG_$Client_Controllers_$LevelController$Hexagon, $asm, {});
	ss.initClass($TurnRPG_Client_BuildAngular, $asm, {});
	ss.initClass($TurnRPG_Client_Controllers_$LevelController, $asm, {
		$init: function() {
			this.$image = new Image();
			this.$image.src = '/images/sheepHex.png';
			var $t1 = document.getElementById('levelCanvas');
			this.$canvas = ss.cast($t1, ss.isValue($t1) && (ss.isInstanceOfType($t1, Element) && $t1.tagName === 'CANVAS'));
			this.$canvas.width = document.body.clientWidth;
			this.$canvas.height = document.body.clientHeight;
			this.$context = ss.cast(this.$canvas.getContext('2d'), CanvasRenderingContext2D);
			this.$grid = ss.multidimArray(null, 10, 10);
			for (var y = 0; y < 10; y++) {
				for (var x = 0; x < 10; x++) {
					var randomColor = '#' + ss.Int32.trunc(Math.floor(Math.random() * 8388607 + 8388607)).toString(16);
					var $t3 = this.$grid;
					var $t2 = new $TurnRPG_$Client_Controllers_$LevelController$Hexagon();
					$t2.$color = $TurnRPG_Client_Utils_Help.getRandomColor();
					$t2.$enabled = Math.random() * 100 > 40;
					$t2.$height = 0;
					ss.arraySet($t3, y, x, $t2);
					if (Math.random() * 100 < 10) {
						ss.arrayGet(this.$grid, y, x).$height = 1;
					}
					if (Math.random() * 100 < 5) {
						ss.arrayGet(this.$grid, y, x).$height = 2;
					}
				}
			}
		},
		$drawBoard: function() {
			this.$canvas.width = this.$canvas.width;
			this.$context.save();
			var gridHexagons = $TurnRPG_Client_Controllers_$LevelController.$gridToGridHexagons(this.$grid);
			var hexs = $TurnRPG_Client_Controllers_EnumerableExtensions.orderBy$2($TurnRPG_$Client_Controllers_$LevelController$GridHexagon).call(null, gridHexagons, function(m) {
				return m.$y * 1000 + m.$x % 2 * -200 + m.$hexagon.$height;
			});
			this.$context.translate(200, 200);
			for (var $t1 = 0; $t1 < hexs.length; $t1++) {
				var gridHexagon = hexs[$t1];
				this.$drawHexagon(gridHexagon);
			}
			this.$context.restore();
		},
		$drawHexagon: function(gridHexagon) {
			this.$context.save();
			var x = this.$width * 3 / 4 * gridHexagon.$x;
			var myHeight = $TurnRPG_Client_Controllers_$LevelController.$transformHeight(gridHexagon.$y, this.$height);
			var y = gridHexagon.$y * this.$height + ((gridHexagon.$x % 2 === 1) ? (-myHeight / 2) : 0);
			this.$context.lineWidth = 3;
			this.$context.translate(x, y);
			this.$drawBlockHeight(this.$context, gridHexagon);
			this.$drawHex(this.$context, gridHexagon);
			this.$context.restore();
		},
		$drawHex: function(context, gh) {
			var hexagon = gh.$hexagon;
			if (!hexagon.$enabled) {
				return;
			}
			var myHeight = $TurnRPG_Client_Controllers_$LevelController.$transformHeight(gh.$y, this.$height);
			context.save();
			context.beginPath();
			context.translate(0, -hexagon.$height * this.$blockHeight);
			context.moveTo(0, 0);
			context.translate(this.$width / 4, -myHeight / 2);
			context.lineTo(0, 0);
			context.translate(this.$width / 2, 0);
			context.lineTo(0, 0);
			context.translate(this.$width / 4, myHeight / 2);
			context.lineTo(0, 0);
			context.translate(-this.$width / 4, myHeight / 2);
			context.lineTo(0, 0);
			context.translate(-this.$width / 2, 0);
			context.lineTo(0, 0);
			context.translate(-this.$width / 4, -myHeight / 2);
			context.lineTo(0, 0);
			//            context.Stroke();
			//            context.Clip();
			//            context.DrawImage(image, 0, -myHeight / 2);
			context.fillStyle = hexagon.$color;
			context.fill();
			context.restore();
		},
		$drawBlockHeight: function(context, gh) {
			var hexagon = gh.$hexagon;
			if (!hexagon.$enabled) {
				return;
			}
			context.save();
			context.translate(0, -hexagon.$height * this.$blockHeight);
			var myBlockHeight = (hexagon.$height + 1) * this.$blockHeight;
			var myHeight = $TurnRPG_Client_Controllers_$LevelController.$transformHeight(gh.$y, this.$height);
			context.save();
			context.beginPath();
			context.moveTo(0, 0);
			context.translate(0, myBlockHeight);
			context.lineTo(0, 0);
			context.translate(this.$width / 4, myHeight / 2);
			context.lineTo(0, 0);
			context.translate(0, -myBlockHeight);
			context.lineTo(0, 0);
			context.translate(-this.$width / 4, -myHeight / 2);
			context.lineTo(0, 0);
			//            context.Stroke();
			context.fillStyle = this.$colorLuminance(hexagon.$color, -0.3);
			context.fill();
			context.restore();
			context.save();
			context.beginPath();
			context.translate(this.$width / 4, myHeight / 2);
			context.moveTo(0, 0);
			context.translate(0, myBlockHeight);
			context.lineTo(0, 0);
			context.translate(this.$width / 2, 0);
			context.lineTo(0, 0);
			context.translate(0, -myBlockHeight);
			context.lineTo(0, 0);
			context.translate(-this.$width / 2, 0);
			context.lineTo(0, 0);
			//            context.Stroke();
			context.fillStyle = this.$colorLuminance(hexagon.$color, -0.4);
			context.fill();
			context.restore();
			context.save();
			context.beginPath();
			context.translate(this.$width * 3 / 4, myHeight / 2);
			context.moveTo(0, 0);
			context.translate(0, myBlockHeight);
			context.lineTo(0, 0);
			context.translate(this.$width / 4, -myHeight / 2);
			context.lineTo(0, 0);
			context.translate(0, -myBlockHeight);
			context.lineTo(0, 0);
			context.translate(-this.$width / 4, myHeight / 2);
			context.lineTo(0, 0);
			//            context.Stroke();
			context.fillStyle = this.$colorLuminance(hexagon.$color, -0.5);
			context.fill();
			context.restore();
			context.restore();
		},
		$colorLuminance: function(hex, lum) {
			// validate hex string
			hex = hex.replace(new RegExp('[^0-9a-f]', 'gi'), '');
			// convert to decimal and change luminosity
			var rgb = '#';
			for (var i = 0; i < 3; i++) {
				var c = parseInt(hex.substr(i * 2, 2), 16);
				var cs = ss.Int32.trunc(ss.round(Math.min(Math.max(0, c + c * lum), 255))).toString(16);
				rgb += ('00' + cs).substr(cs.length);
			}
			return rgb;
		}
	});
	ss.initClass($TurnRPG_Client_Controllers_EnumerableExtensions, $asm, {});
	ss.initClass($TurnRPG_Client_Directives_DraggableDirective, $asm, {
		$linkFn: function(scope, element, attrs) {
			element.draggable({ cancel: '.window .inner-window' });
		}
	});
	ss.initClass($TurnRPG_Client_Directives_FancyHorizontalListDirective, $asm, {
		$linkFn: function(scope, element, attr) {
			scope.itemClick = function(item) {
				scope.bind = item;
			};
			scope.currentClass = function(item1) {
				return (!!ss.referenceEquals(item1, scope.bind) ? 'fancy-horizontal-list-item fancy-horizontal-list-item-selected' : 'fancy-horizontal-list-item ');
			};
			scope.parentScope = scope['$parent']['$parent']['$parent'];
		}
	});
	ss.initClass($TurnRPG_Client_Directives_FancyHorizontalListIndexDirective, $asm, {
		$linkFn: function(scope, element, attr) {
			scope.itemClick = function(index) {
				scope.bindIndex = index;
			};
			scope.currentClass = function(index1) {
				return (!!ss.referenceEquals(index1, scope.bindIndex) ? 'fancy-horizontal-list-item fancy-horizontal-list-item-selected' : 'fancy-horizontal-list-item ');
			};
			scope.parentScope = scope['$parent']['$parent']['$parent'];
		}
	});
	ss.initClass($TurnRPG_Client_Directives_FancyListDirective, $asm, {
		$linkFn: function(scope, element, attr) {
			scope.itemClick = function(item) {
				scope.bind = item;
			};
			scope.currentClass = function(item1) {
				return (!!ss.referenceEquals(item1, scope.bind) ? 'fancy-list-item fancy-list-item-selected' : 'fancy-list-item ');
			};
			scope.parentScope = scope['$parent']['$parent']['$parent'];
		}
	});
	ss.initClass($TurnRPG_Client_Directives_FancyListIndexDirective, $asm, {
		$linkFn: function(scope, element, attr) {
			scope.itemClick = function(index) {
				scope.bindIndex = index;
			};
			scope.currentClass = function(index1) {
				return (!!ss.referenceEquals(index1, scope.bindIndex) ? 'fancy-list-item fancy-list-item-selected' : 'fancy-list-item ');
			};
			scope.parentScope = scope['$parent']['$parent']['$parent'];
		}
	});
	ss.initClass($TurnRPG_Client_Directives_FloatingWindowDirective, $asm, {
		$linkFn: function(scope, element, attr) {
			this.$myElement = element;
			this.$myScope = scope;
			$TurnRPG_Client_Directives_FloatingWindowDirective.$items.add(element, scope);
			element.click(ss.thisFix(ss.mkdel(this, function(elem, event) {
				this.$focus();
			})));
			scope.$parent.swingAway = ss.mkdel(this, function(a, b, c) {
				this.swingAway(a, b, element, c);
			});
			scope.$parent.swingBack = ss.mkdel(this, function(c1) {
				this.swingBack(scope, element, c1);
			});
			scope.$parent.minimize = function() {
				scope.$parent.minimized = true;
				scope.minimize();
			};
			scope.$parent.destroyWindow = function() {
				scope.$destroy();
				element.remove();
			};
			var $t1 = $TurnRPG_Client_Scope_Directive_FloatingWindowPosition.$ctor();
			$t1.left = scope.left;
			$t1.top = scope.top;
			$t1.display = 'block';
			scope.positionStyles = $t1;
			scope.positionStyles.zIndex = 10000;
			if (scope.left.indexOf('%') !== -1) {
				scope.positionStyles.marginLeft = -ss.Int32.div(parseInt(ss.replaceAllString(scope.width, 'px', '')), 2) + 'px';
			}
			if (scope.top.indexOf('%') !== -1) {
				scope.positionStyles.marginTop = -ss.Int32.div(parseInt(ss.replaceAllString(scope.height, 'px', '')), 2) + 'px';
			}
			var $t2 = $TurnRPG_Client_Scope_Directive_Size.$ctor();
			$t2.width = scope.width;
			$t2.height = scope.height;
			scope.sizeStyle = $t2;
			scope.maximize = function() {
				if (!scope.isMaximized) {
					scope.lastPositionStyles = scope.positionStyles;
					scope.lastSizeStyle = scope.sizeStyle;
					var $t3 = $TurnRPG_Client_Scope_Directive_FloatingWindowPosition.$ctor();
					$t3.left = '0';
					$t3.top = '0';
					$t3.display = 'block';
					scope.positionStyles = $t3;
					var $t4 = $TurnRPG_Client_Scope_Directive_Size.$ctor();
					$t4.width = '100%';
					$t4.height = '100%';
					scope.sizeStyle = $t4;
				}
				else {
					scope.positionStyles = scope.lastPositionStyles;
					scope.sizeStyle = scope.lastSizeStyle;
					scope.lastPositionStyles = null;
					scope.lastSizeStyle = null;
				}
				scope.isMaximized = !scope.isMaximized;
			};
			scope.close = function() {
				if (!ss.staticEquals(scope.onclose, null)) {
					scope.onclose();
				}
				if (!ss.staticEquals(scope.$parent.onClose, null)) {
					scope.$parent.onClose();
				}
				//todo destroy
				scope.positionStyles.display = 'none';
			};
			scope.minimize = function() {
				//                myUIManagerService.OnMinimize(scope);
				scope.$parent.swingAway(5, false, function() {
					scope.positionStyles.display = 'none';
				});
			};
			scope.restore = function() {
				scope.$parent.swingBack(null);
				scope.positionStyles.display = 'block';
			};
			this.$focus();
			if (!ss.staticEquals(scope.$parent.onReady, null)) {
				scope.$parent.onReady();
			}
		},
		$focus: function() {
			var $t1 = $TurnRPG_Client_Directives_FloatingWindowDirective.$items.getEnumerator();
			try {
				while ($t1.moveNext()) {
					var floatingWindowScope = $t1.current();
					floatingWindowScope.value.positionStyles.zIndex = 10000;
				}
			}
			finally {
				$t1.dispose();
			}
			if ($TurnRPG_Client_Directives_FloatingWindowDirective.$items.containsKey(this.$myElement)) {
				$TurnRPG_Client_Directives_FloatingWindowDirective.$items.get_item(this.$myElement).positionStyles.zIndex = 10001;
				if (ss.isNullOrUndefined(this.$myScope.$root.$$phase)) {
					this.$myScope.$apply();
				}
			}
		},
		swingBack: function(scope, element, callback) {
			window.setTimeout(function() {
				var js = {};
				js['left'] = scope.left;
				js['top'] = scope.top;
				element.css('display', 'block');
				element.animate(js, 'fast', 'swing', callback);
			}, 1);
		},
		swingAway: function(direction, simulate, element, callback) {
			var js = {};
			var distance = '3000';
			switch (direction) {
				case 0: {
					js['left'] = '-' + distance + 'px';
					js['top'] = '-' + distance + 'px';
					break;
				}
				case 1: {
					js['top'] = '-' + distance + 'px';
					break;
				}
				case 2: {
					js['left'] = distance + 'px';
					js['top'] = '-' + distance + 'px';
					break;
				}
				case 3: {
					js['left'] = distance + 'px';
					break;
				}
				case 4: {
					js['left'] = distance + 'px';
					js['top'] = distance + 'px';
					break;
				}
				case 5: {
					js['top'] = distance + 'px';
					break;
				}
				case 6: {
					js['left'] = '-' + distance + 'px';
					js['top'] = distance + 'px';
					break;
				}
				case 7: {
					js['left'] = distance + 'px';
					break;
				}
			}
			if (simulate) {
				element.css(js);
				element.css('display', 'none');
				if (!ss.staticEquals(callback, null)) {
					callback();
				}
			}
			else {
				element.animate(js, 'slow', 'swing', function() {
					element.css('display', 'none');
					if (!ss.staticEquals(callback, null)) {
						callback();
					}
				});
			}
		}
	});
	ss.initClass($TurnRPG_Client_Directives_ForNextDirective, $asm, {
		$linkFn: function(scope, element, attrs) {
			$TurnRPG_Client_Directives_ForNextDirective.$forCounter++;
			var next = element.next();
			var id = next.attr('id');
			if (ss.isNullOrUndefined(id)) {
				id = 'forLink' + $TurnRPG_Client_Directives_ForNextDirective.$forCounter;
				next.attr('id', id);
			}
			element.attr('for', id);
		}
	});
	ss.initClass($TurnRPG_Client_Filters_RoundFilter, $asm, {
		filter: function(input) {
			return parseInt(input.toString());
		}
	});
	ss.initClass($TurnRPG_Client_Filters_SwitchFilter, $asm, {
		filter: function(val, on, off) {
			return (val ? on : off);
		}
	});
	ss.initClass($TurnRPG_Client_Scope__KeepBaseScopeAlive, $asm, {});
	ss.initClass($TurnRPG_Client_Scope_Controller_LevelScope, $asm, {}, TurnRPG.Client.Scope.BaseScope);
	ss.initClass($TurnRPG_Client_Scope_Controller_LevelScopeCallback, $asm, {});
	ss.initClass($TurnRPG_Client_Scope_Controller_LevelScopeModel, $asm, {});
	ss.initClass($TurnRPG_Client_Services_ManagedScope, $asm, {}, TurnRPG.Client.Scope.BaseScope);
	ss.initClass($TurnRPG_Client_Scope_Directive_FloatingWindowBaseScope, $asm, {}, $TurnRPG_Client_Services_ManagedScope);
	ss.initClass($TurnRPG_Client_Scope_Directive_FloatingWindowPosition, $asm, {});
	ss.initClass($TurnRPG_Client_Scope_Directive_FloatingWindowScope, $asm, {}, TurnRPG.Client.Scope.BaseScope);
	ss.initClass($TurnRPG_Client_Scope_Directive_Size, $asm, {});
	ss.initEnum($TurnRPG_Client_Scope_Directive_SwingDirection, $asm, { topLeft: 0, top: 1, topRight: 2, right: 3, bottomRight: 4, bottom: 5, bottomLeft: 6, left: 7 });
	ss.initClass($TurnRPG_Client_Scope_Directive_Canvas_CanvasAssetFrameScope, $asm, {}, $TurnRPG_Client_Services_ManagedScope);
	ss.initClass($TurnRPG_Client_Services_CreateUIService, $asm, {
		create$1: function(T) {
			return function(ui) {
				return this.create$2(T).call(this, ui, function(a, b) {
				});
			};
		},
		create$2: function(T) {
			return function(ui, populateScope) {
				var scope = this.$myRootScopeService.$new();
				var html = $(ss.formatString('<div ng-include src="\'{1}partials/UIs/{0}.html\'"></div>', ui, $TurnRPG_Client_Utils_Constants.contentAddress));
				populateScope(scope, html);
				var item = this.$myCompileService(html)(scope);
				item.appendTo(window.document.body);
				if (ss.isNullOrUndefined(scope.$$phase)) {
					scope.$apply();
				}
				scope = angular.element(item.children()[0]).scope() || scope;
				return new (ss.makeGenericType($TurnRPG_Client_Services_CreatedUI$1, [T]))(scope, item);
			};
		},
		createSingleton: function(ui) {
			return this.createSingleton$1($TurnRPG_Client_Services_ManagedScope).call(this, ui);
		},
		createSingleton$1: function(T) {
			return function(ui) {
				return this.createSingleton$2(T).call(this, ui, function(a, b) {
				});
			};
		},
		createSingleton$2: function(T) {
			return function(ui, populateScope) {
				var scope;
				if (ss.keyExists(this.$singltons, ui)) {
					var html = this.$singltons[ui];
					if (html.parent().length === 0) {
						delete this.$singltons[ui];
					}
				}
				if (ss.keyExists(this.$singltons, ui)) {
					var html1 = this.$singltons[ui];
					if (html1[0].nodeType === 8) {
						this.$singltons[ui] = html1 = html1.next();
					}
					scope = this.$myRootScopeService.$new();
					populateScope(scope, html1);
					var item = this.$myCompileService(html1)(scope);
					if (ss.isNullOrUndefined(scope.$$phase)) {
						scope.$apply();
					}
					scope = angular.element(item.children()[0]).scope() || scope;
					return new (ss.makeGenericType($TurnRPG_Client_Services_CreatedUI$1, [T]))(scope, html1);
				}
				else {
					scope = this.$myRootScopeService.$new();
					var html2 = $(ss.formatString('<div ng-include src="\'{1}partials/UIs/{0}.html\'"></div>', ui, $TurnRPG_Client_Utils_Constants.contentAddress));
					populateScope(scope, html2);
					var item1 = this.$myCompileService(html2)(scope);
					item1.appendTo(window.document.body);
					if (ss.isNullOrUndefined(scope.$$phase)) {
						scope.$apply();
					}
					scope = angular.element(item1.children()[0]).scope() || scope;
					this.$singltons[ui] = item1;
					return new (ss.makeGenericType($TurnRPG_Client_Services_CreatedUI$1, [T]))(scope, item1);
				}
			};
		},
		create: function(ui) {
			var scope = this.$myRootScopeService.$new();
			var item = this.$myCompileService($(ss.formatString('<div ng-include src="\'{1}partials/UIs/{0}.html\'"></div>', ui, $TurnRPG_Client_Utils_Constants.contentAddress)))(scope);
			item.appendTo(window.document.body);
			if (ss.isNullOrUndefined(scope.$$phase)) {
				scope.$apply();
			}
			scope = angular.element(item.children()[0]).scope() || scope;
			return new (ss.makeGenericType($TurnRPG_Client_Services_CreatedUI$1, [$TurnRPG_Client_Services_ManagedScope]))(scope, item);
		},
		create$3: function(ui, scope) {
			var item = this.$myCompileService($(ss.formatString('<div ng-include src="\'{1}partials/UIs/{0}.html\'"></div>', ui, $TurnRPG_Client_Utils_Constants.contentAddress)))(scope);
			item.appendTo(window.document.body);
			if (ss.isNullOrUndefined(scope.$$phase)) {
				scope.$apply();
			}
			scope = angular.element(item.children()[0]).scope() || scope;
			return new (ss.makeGenericType($TurnRPG_Client_Services_CreatedUI$1, [$TurnRPG_Client_Services_ManagedScope]))(scope, item);
		}
	});
	ss.initClass($TurnRPG_Client_Utils_CanvasInformation, $asm, {});
	ss.initClass($TurnRPG_Client_Utils_Constants, $asm, {});
	ss.initClass($TurnRPG_Client_Utils_Extensions, $asm, {});
	ss.initClass($TurnRPG_Client_Utils_Help, $asm, {});
	ss.initClass($TurnRPG_Client_Utils_Point, $asm, {});
	ss.initClass($TurnRPG_Client_Utils_Pointer, $asm, {}, $TurnRPG_Client_Utils_Point);
	(function() {
		$TurnRPG_Client_Utils_Help.colors = ['#FF0000', '#00FF00', '#880088', '#888800', '#008888'];
	})();
	(function() {
		$TurnRPG_Client_Controllers_$LevelController.$name = 'LevelController';
		$TurnRPG_Client_Controllers_$LevelController.$view = 'Level';
	})();
	(function() {
		$TurnRPG_Client_Utils_Constants.contentAddress = '';
	})();
	(function() {
		$TurnRPG_Client_Services_CreateUIService.name$1 = 'CreateUIService';
	})();
	(function() {
		$TurnRPG_Client_Directives_FancyListDirective.name$1 = 'fancyList';
	})();
	(function() {
		$TurnRPG_Client_Directives_FancyListIndexDirective.name$1 = 'fancyListIndex';
	})();
	(function() {
		$TurnRPG_Client_Directives_FancyHorizontalListDirective.name$1 = 'fancyHorizontalList';
	})();
	(function() {
		$TurnRPG_Client_Directives_FancyHorizontalListIndexDirective.name$1 = 'fancyHorizontalListIndex';
	})();
	(function() {
		$TurnRPG_Client_Directives_DraggableDirective.name$1 = 'draggable';
	})();
	(function() {
		$TurnRPG_Client_Directives_FloatingWindowDirective.name$1 = 'floatingWindow';
		$TurnRPG_Client_Directives_FloatingWindowDirective.$items = new (ss.makeGenericType(ss.Dictionary$2, [Object, $TurnRPG_Client_Scope_Directive_FloatingWindowScope]))();
	})();
	(function() {
		$TurnRPG_Client_Directives_ForNextDirective.name$1 = 'forNext';
		$TurnRPG_Client_Directives_ForNextDirective.$forCounter = 0;
	})();
	(function() {
		$TurnRPG_Client_Filters_RoundFilter.name$1 = 'round';
	})();
	(function() {
		$TurnRPG_Client_Filters_SwitchFilter.name$1 = 'switch';
	})();
	(function() {
		$TurnRPG_Client_BuildAngular.$scopeName = '$scope';
		$TurnRPG_Client_BuildAngular.$rootScopeName = '$rootScope';
		$TurnRPG_Client_BuildAngular.$compileName = '$compile';
		$TurnRPG_Client_BuildAngular.$http = '$http';
		$TurnRPG_Client_BuildAngular.$templateCache = '$templateCache';
		$($TurnRPG_Client_BuildAngular.setup);
	})();
	(function() {
		$TurnRPG_Client_Utils_CanvasInformation.$blackPixel = null;
	})();
})();
