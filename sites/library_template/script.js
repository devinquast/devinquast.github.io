var app = angular.module('app', ['ngAnimate'])

app.controller('mainCtrl', function($scope) {
	$scope.boxes = [{
		name: '',
		image: 'https://images.squarespace-cdn.com/content/v1/5cafa1786e94560001e08fa5/1555115522439-EQ768UZLLBPW8Z2U028C/ke17ZwdGBToddI8pDm48kHeN-3lxkr-kEOtcijtVINxZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIxDFKE9MjhJF9s9qm2nDZwoBKmsCv7em8klEJdRbhj_EKMshLAGzx4R3EDFOm1kBS/18_DANCING.png?format=1500w',
		text: "First Image"
	},{
		name: '',
		image: 'https://images.squarespace-cdn.com/content/v1/5cafa1786e94560001e08fa5/1561481355583-P4KMJLPG9EM9NDJWSMV0/ke17ZwdGBToddI8pDm48kOIsK0oGjUDSfNnLrw65wjJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdqnzFwFzuj0rb6vWn_u4071zVBgCJCQ8-G3JDGHvWC2MW9u6oXQZQicHHG1WEE6fg/Screen+Shot+2019-06-25+at+11.47.36+AM.png?format=2500w'
	},{
		name: 'Explore',
		image: 'https://source.unsplash.com/7BjmDICVloE/900x900'
	}, {
		name: 'Vast',
		image: 'https://source.unsplash.com/WLUHO9A_xik/900x900'
	}, {
		name: 'Playful',
		image: 'https://source.unsplash.com/b2-fBVrfx0o/900x900'
	}, {
		name: 'Grand',
		image: 'https://source.unsplash.com/Ixp4YhCKZkI/900x900'
	}, {
		name: 'Mist',
		image: 'https://source.unsplash.com/8BmNurlVR6M/900x900'
	}, {
		name: 'Sea',
		image: 'https://source.unsplash.com/6YqpFWWQsno/900x900'
	}, {
		name: 'Reach',
		image: 'https://source.unsplash.com/zFnk_bTLApo/900x900'
	}, {
		name: 'Awe',
		image: 'https://source.unsplash.com/j4PaE7E2_Ws/900x900'
	}, {
		name: 'Surf',
		image: 'https://source.unsplash.com/uohGiEVhWiQ/900x900'
	}, {
		name: 'Thrill',
		image: 'https://source.unsplash.com/ssrbaKvxaos/900x900'
	}, ];

	$scope.selected = [];
	$scope.selectBox = function(item, position) {
		$scope.selected = [{
			item: item,
			position: position
		}];
		$scope.$apply();
	}
	$scope.clearSelection = function() {
		$scope.selected = [];
	}
})

app.directive('box', function() {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {
			onSelect: "=",
			item: "="
		},
		controllerAs: 'box',
		controller: function() {
			var box = this;

			box.goFullscreen = function(e) {
				box.onSelect(box.item, e.target.getBoundingClientRect())
			}
		},
		link: function(scope, element) {
			element.bind('click', scope.box.goFullscreen)
			element.css({
				'background-image': 'url(' + scope.box.item.image + ')'
			})
			

		}
	}
})

app.directive('bigBox', function($timeout) {
	return {
		restrict: 'AE',
		scope: {},
		bindToController: {
			position: "=",
			selected: "=",
			onSelect: "="
		},
		controllerAs: 'box',
		controller: function() {
			var box = this;
		},
		link: function(scope, element) {
			var css = {}
			for (var key in scope.box.position) {
				css[key] = scope.box.position[key] + 'px';
			}
			
			element.css(css);

			$timeout(function() {
				element.css({
					top: '70%',
					left: '17.5%'
				})
				element.addClass('image-out');
			}, 200)

			$timeout(function() {
				element.css({
					width: '65%',
					height: '30%'
				})
				
			}, 500)
			
			$timeout(function(){
				element.addClass('show');
				(function(){
					document.getElementById('alterText').innerHTML = "Building on Target’s legacy of transforming and impactful Branding work, this was the fist effort done in nearly five years. The goal was to make sure no one felt that gap while creating something entirely new. It has become a major campaign as concept stores, in-store, out of home, digital, social and even new Target shopping bags. Starting with a complete deconstruction of the Bullseye, yet keeping life squarely in the center, it remains immediately recognizable as Target, often without a logo at all. Maintaining the spirit and aspirations of the Brand but in an entirely new way. The result is a collection of images that embody the lively aspirations of the Target Brand. It’s living and breathing. Recognized by Clio, Communication Arts. Graphis and How Magazine. Expect to see it for a while.";
				})();
			}, 800)
		}
	}
})