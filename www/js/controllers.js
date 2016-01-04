/* global angular, document, window */
'use strict';

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };

})

.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
})

.controller('FriendsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ProfileCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('LiveLineEquipmentCtrl', function($http, $scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $http.get("json/max-voltage-color-codes.json").success(function (results) {
        $scope.maxVoltageColorCodes=results;
    });

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
})


.controller('ActivityCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('GalleryCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

})

.controller('ToolsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

})

.controller('PocketGuideCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
  $scope.$parent.showHeader();
  $scope.$parent.clearFabs();
  $scope.isExpanded = false;
  $scope.$parent.setExpanded(false);
  $scope.$parent.setHeaderFab(false);

  // Set Motion
  $timeout(function() {
      ionicMaterialMotion.slideUp({
          selector: '.slide-up'
      });
  }, 300);

  $timeout(function() {
      ionicMaterialMotion.fadeSlideInRight({
          startVelocity: 3000
      });
  }, 700);

  // Activate ink for controller
  ionicMaterialInk.displayEffect();

})

.controller('ConductorsCtrl', function($http, $scope, $stateParams, $timeout, $ionicModal, ionicMaterialInk, ionicMaterialMotion) {
  $scope.$parent.showHeader();
  $scope.$parent.clearFabs();
  $scope.isExpanded = false;
  $scope.$parent.setExpanded(false);
  $scope.$parent.setHeaderFab(false);

  $http.get("json/wire-sizes.json").success(function (results) {
      $scope.wires=results;
  });

  $scope.selectedWire = {"awg" : "Select One"};

  $ionicModal.fromTemplateUrl('conductors-modal.html', function(modal) {
    $scope.modalCtrl = modal;
    }, {
    scope: $scope,
    animation: 'slide-in-up',
    focusFirstInput: true
  });

  $scope.openModal = function() {
    $scope.modalCtrl.show();
  };

  $scope.hideModal = function() {
    $scope.modalCtrl.hide();
  };

  $scope.selectWire = function(wire) {
    $scope.selectedWire = wire;
    $scope.modalCtrl.hide();
  };

  // Set Motion
  $timeout(function() {
      ionicMaterialMotion.slideUp({
          selector: '.slide-up'
      });
  }, 300);

  $timeout(function() {
      ionicMaterialMotion.fadeSlideInRight({
          startVelocity: 3000
      });
  }, 700);

  // Activate ink for controller
  ionicMaterialInk.displayEffect();

})

.controller('FormulasCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
  $scope.$parent.showHeader();
  $scope.$parent.clearFabs();
  $scope.isExpanded = false;
  $scope.$parent.setExpanded(false);
  $scope.$parent.setHeaderFab(false);

  // Set Motion
  $timeout(function() {
      ionicMaterialMotion.slideUp({
          selector: '.slide-up'
      });
  }, 300);

  $timeout(function() {
      ionicMaterialMotion.fadeSlideInRight({
          startVelocity: 3000
      });
  }, 700);

  // Activate ink for controller
  ionicMaterialInk.displayEffect();

})

.controller('PoleWeightsCtrl', function($http, $scope, $stateParams, $timeout, $ionicModal, ionicMaterialInk, ionicMaterialMotion) {
  $scope.$parent.showHeader();
  $scope.$parent.clearFabs();
  $scope.isExpanded = false;
  $scope.$parent.setExpanded(false);
  $scope.$parent.setHeaderFab(false);

  $http.get("json/pole-weights.json").success(function (results) {
      $scope.poles=results;
  });

  $scope.selectedPole = {"length" : "Select One"};

  $ionicModal.fromTemplateUrl('pole-weights-modal.html', function(modal) {
    $scope.modalCtrl = modal;
    }, {
    scope: $scope,
    animation: 'slide-in-up',
    focusFirstInput: true
  });

  $scope.openPoleWeightsModal = function() {
    $scope.modalCtrl.show();
  };

  $scope.hidePoleWeightsModal = function() {
    $scope.modalCtrl.hide();
  };

  $scope.selectPole = function(pole) {
    $scope.selectedPole = pole;
    $scope.weights = [];
    for(var keyName in $scope.selectedPole.fir){
      var weight = {};
      weight.length = keyName;
      weight.fir = $scope.selectedPole.fir[keyName];
      weight.pine = $scope.selectedPole.pine[keyName];
      weight.cedar = $scope.selectedPole.cedar[keyName];
      $scope.weights.push(weight);
    }
    $scope.modalCtrl.hide();
  };

  // Set Motion
  $timeout(function() {
      ionicMaterialMotion.slideUp({
          selector: '.slide-up'
      });
  }, 300);

  $timeout(function() {
      ionicMaterialMotion.fadeSlideInRight({
          startVelocity: 3000
      });
  }, 700);

  // Activate ink for controller
  ionicMaterialInk.displayEffect();

})

.controller('DistributionTransformersCtrl', function($scope, $http, $stateParams, $ionicModal, $timeout, ionicMaterialInk, ionicMaterialMotion) {
  $scope.$parent.showHeader();
  $scope.$parent.clearFabs();
  $scope.isExpanded = false;
  $scope.$parent.setExpanded(false);
  $scope.$parent.setHeaderFab(false);

  $http.get("json/single-phase-distribution-transformers.json").success(function (results) {
      $scope.singlePhaseDistributionTransformers=results;
  });
  $http.get("json/three-phase-distribution-transformers.json").success(function (results) {
      $scope.threePhaseDistributionTransformers=results;
  });

  $ionicModal.fromTemplateUrl('power-rating-modal.html', function(modal) {
    $scope.modalCtrl = modal;
    }, {
    scope: $scope,
    animation: 'slide-in-up',
    focusFirstInput: true
  });

  $scope.openPowerRatingModal = function() {
    $scope.modalCtrl.show();
  };

  $scope.hidePowerRatingModal = function() {
    $scope.modalCtrl.hide();
  };

  $scope.selectPowerRating = function(kVA) {
    console.log('------->' + $scope.singlePhase);
    $scope.singlePhaseKVA = singlePhaseKVA;
    $scope.modalCtrl.hide();
  };

  $ionicModal.fromTemplateUrl('circuit-voltage-modal.html', function(modal) {
    $scope.modalCtrl = modal;
    }, {
    scope: $scope,
    animation: 'slide-in-up',
    focusFirstInput: true
  });

  $scope.openCircuitVoltageModal = function() {
    $scope.modalCtrl.show();
  };

  $scope.hideCircuitVoltageModal = function() {
    $scope.modalCtrl.hide();
  };

  $scope.selectCircuitVoltage = function(circuitVoltage) {
    console.log('------->' + $scope.singlePhase);
    $scope.singlePhaseCircuitVoltage = circuitVoltage;
    $scope.modalCtrl.hide();
  };

  // Activate ink for controller
  ionicMaterialInk.displayEffect();

})

.controller('WiringDiagramsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
  $scope.$parent.showHeader();
  $scope.$parent.clearFabs();
  $scope.isExpanded = false;
  $scope.$parent.setExpanded(false);
  $scope.$parent.setHeaderFab(false);

  // Set Motion
  $timeout(function() {
      ionicMaterialMotion.slideUp({
          selector: '.slide-up'
      });
  }, 300);

  $timeout(function() {
      ionicMaterialMotion.fadeSlideInRight({
          startVelocity: 3000
      });
  }, 700);

  // Activate ink for controller
  ionicMaterialInk.displayEffect();

})

;
