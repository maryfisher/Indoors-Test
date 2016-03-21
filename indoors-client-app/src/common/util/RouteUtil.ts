/// <reference path="../const/RouteConst.ts" />
module ind.common.util {

    import IStateService = angular.ui.IStateService;
    import IStateOptions = angular.ui.IStateOptions;
    import IInjectorService = ng.auto.IInjectorService;
    import NGConst = ind.common.consts.NGConst;

    export class RouteUtil {

        static NG_NAME: string = 'routeUtil';

        private $state: IStateService;

        constructor($injector: IInjectorService) {
            this.$state = $injector.get < IStateService >(NGConst.$STATE);
        }

        redirectTo(state: string, params?: {}, options?: IStateOptions) {
            this.$state.go(state, params, options);
        }

        reload() {
            this.$state.go(this.$state.$current, null, {
                reload: true
            });
        }

        isCurrent(state: string): boolean {
            return this.$state.current.name === state;
        }
    }
}