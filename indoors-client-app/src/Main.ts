module ind {
    'use strict';

    import IInjectorService = ng.auto.IInjectorService;

    export class Main {

        private ind: ng.IModule;
        private zone: ng.IModule;
        private beacon: ng.IModule;

        constructor() {
            this.initModules();
            this.initController();
            this.initDAOs();
            this.initDirectives();
            this.initConfig();
        }

        initModules() {
            this.ind = angular.module('ind', [
                'zone',
                'beacon',
                'ui.bootstrap',
                'ui.router'
            ]);

            this.zone = angular.module('zone', []);
            this.beacon = angular.module('beacon', []);

            this.addFactory(ind.common.util.RouteUtil);
        }

        initController() {
            this.zone.controller(ind.zone.ui.ctrl);
            this.beacon.controller(ind.beacon.ui.ctrl);
        }

        initDAOs() {
            this.addFactory(ind.zone.dao.ZoneDAO);
            this.addFactory(ind.beacon.dao.BeaconDAO);
        }

        initDirectives() {
            this.addDirective(ind.zone.ui.ZoneListItemDirect);
            this.addDirective(ind.beacon.ui.BeaconEditFormDirect);
            this.addDirective(ind.beacon.ui.BeaconListItemDirect);
        }

        initConfig() {
            this.ind.config(this.getFactory(ind.config.RouterConfig));
        }

        addFactory(classType: any) {
            this.ind.factory(classType.NG_NAME, this.getFactory(classType));
        }

        addDirective(className: any) {
            this.ind.directive(className.NG_NAME, this.getFactory(className));
        }

        getFactory < T > (classType: {
            new($injector: IInjectorService): T
        }): any {

            var factory = ($injector: IInjectorService): T => {
                return new classType($injector);
            };
            factory.$inject = ['$injector'];
            return factory;
        }
    }

    new Main();
}