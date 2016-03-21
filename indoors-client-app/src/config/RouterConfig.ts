///<reference path="..\common\const\RouteConst.ts"/>
///<reference path="..\common\const\NGConst.ts"/>
module ind.config {

    import IStateProvider = angular.ui.IStateProvider;
    import IUrlRouterProvider = angular.ui.IUrlRouterProvider;
    import ILocationProvider = angular.ILocationProvider;
    import RouteConst = ind.common.consts.RouteConst;
    import NGConst = ind.common.consts.NGConst;

    export class RouterConfig {

        private $stateProvider: IStateProvider;
        private $urlRouterProvider: IUrlRouterProvider;
        private $locationProvider: ILocationProvider;

        constructor($injector: ng.auto.IInjectorService) {
            this.$stateProvider = $injector.get < IStateProvider >(NGConst.$STATE_PROVIDER);
            this.$urlRouterProvider = $injector.get < IUrlRouterProvider >(NGConst.$URL_ROUTER_PROVIDER);
            this.$locationProvider = $injector.get < ILocationProvider >(NGConst.$LOCATION_PROVIDER);
            this.execute();
        }

        execute() {

            this.$urlRouterProvider.otherwise(RouteConst.ZONE_BASE_PATH + '/');
            this.$stateProvider
                .state(RouteConst.ZONE, {
                    url: RouteConst.ZONE_PATH,
                    templateUrl: 'zone/ui/zone.tpl.html',
                    controller: ind.zone.ui.ctrl.ZoneController.NG_NAME,
                    controllerAs: NGConst.CTRL
                })
                .state(RouteConst.ZONE_EDIT, {
                    url: RouteConst.ZONE_EDIT_PATH,
                    templateUrl: 'zone/ui/edit/zoneEdit.tpl.html',
                    controller: ind.zone.ui.ctrl.ZoneEditController.NG_NAME,
                    controllerAs: NGConst.CTRL
                });

            this.$stateProvider
                .state(RouteConst.BEACON_LIST, {
                    url: RouteConst.BEACON_LIST_PATH,
                    templateUrl: 'beacon/ui/beaconList.tpl.html',
                    controller: ind.beacon.ui.ctrl.BeaconListController.NG_NAME,
                    controllerAs: NGConst.CTRL
                })
                .state(RouteConst.BEACON, {
                    abstract: true,
                    url: RouteConst.BEACON_PATH,
                    templateUrl: 'beacon/ui/beacon.tpl.html',
                    controller: ind.beacon.ui.ctrl.BeaconController.NG_NAME,
                    controllerAs: NGConst.CTRL
                })
                .state(RouteConst.BEACON_DETAIL, {
                    parent: RouteConst.BEACON,
                    url: RouteConst.BEACON_DETAIL_PATH,
                    templateUrl: 'beacon/ui/detail/beaconDetail.tpl.html',
                    controller: ind.beacon.ui.ctrl.BeaconDetailController.NG_NAME,
                    controllerAs: NGConst.CTRL
                })
                .state(RouteConst.BEACON_EDIT, {
                    parent: RouteConst.BEACON,
                    url: RouteConst.BEACON_EDIT_PATH,
                    templateUrl: 'beacon/ui/edit/beaconEdit.tpl.html',
                    controller: ind.beacon.ui.ctrl.BeaconEditController.NG_NAME,
                    controllerAs: NGConst.CTRL
                });
        }
    }
}