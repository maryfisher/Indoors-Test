module ind.zone.ui.ctrl {
    'use strict';

    import NGConst = ind.common.consts.NGConst;
    import RouteConst = ind.common.consts.RouteConst;
    import RouteUtil = ind.common.util.RouteUtil;
    import ZoneVO = ind.zone.model.ZoneVO;
    import ZoneDAO = ind.zone.dao.ZoneDAO;

    export class ZoneEditController {

        static NG_NAME: string = 'ZoneEditController';

        static $inject = [NGConst.$SCOPE, NGConst.$STATE_PARAMS, ZoneDAO.NG_NAME, RouteUtil.NG_NAME];

        hasZone: boolean;
        zone: ZoneVO;

        constructor(private $scope: ng.IScope, private $stateParams: angular.ui.IStateParamsService,
                    private zoneDAO: ZoneDAO,
                    private routeUtil: RouteUtil) {

            this.hasZone = (!!$stateParams['zoneId']);
            if (this.hasZone) {
                this.zone = zoneDAO.getCurrentZone($stateParams['zoneId']);
            } else {
                this.zone = new ZoneVO();
            }
        }

        cancel = () => {
            if (!this.hasZone) {
                this.routeUtil.redirectTo(RouteConst.ZONE);
            } else {
                this.routeUtil.redirectTo(RouteConst.ZONE, {
                    zoneId: this.$stateParams['zoneId']
                });
            }
        };

        save = () => {
            if (this.hasZone) {
                this.zoneDAO.updateZone(this.zone).then(this.cancel);
            } else {
                this.zoneDAO.createZone(this.zone).then(this.cancel);
            }
        };
    }
}
