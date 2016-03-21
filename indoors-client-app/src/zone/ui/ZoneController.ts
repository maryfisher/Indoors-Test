module ind.zone.ui.ctrl {
    'use strict';

    import NGConst = ind.common.consts.NGConst;
    import RouteConst = ind.common.consts.RouteConst;
    import RouteUtil = ind.common.util.RouteUtil;
    import ZoneDAO = ind.zone.dao.ZoneDAO;
    import ZoneVO = ind.zone.model.ZoneVO;

    export class ZoneController {

        static NG_NAME: string = 'ZoneController';

        static $inject: string[] = [NGConst.$SCOPE, ZoneDAO.NG_NAME, NGConst.$STATE_PARAMS, RouteUtil.NG_NAME];

        zones: ZoneVO[];
        private selectedZone: ZoneVO;

        constructor(private $scope: ng.IScope, zoneDAO: ZoneDAO, private $stateParams: angular.ui.IStateParamsService,
                    private routeUtil: RouteUtil) {
            zoneDAO.getZones().then(this.getZonesSuccess);
        }

        getZonesSuccess = (zones: ZoneVO[]) => {
            this.zones = zones;

            if (this.$stateParams['zoneId']) {
                this.zones.map(v => {
                    if (v.id == this.$stateParams['zoneId']) {
                        this.selectedZone = v;
                    }
                })
            }
        };

        setSelected = (zone: ZoneVO) => {
            var o: ng.ui.IStateOptions = {notify: false, reload: false};
            if (this.selectedZone === zone) {
                this.selectedZone = null;
                this.routeUtil.redirectTo(RouteConst.ZONE, {
                    zoneId: ''
                }, o);
            } else {
                this.selectedZone = zone;
                this.routeUtil.redirectTo(RouteConst.ZONE, {
                    zoneId: zone.id
                }, o);
            }
        };

        isSelected = (id: number): boolean => {
            return this.selectedZone && this.selectedZone.id === id;
        };

        onDeleted = (zone: ZoneVO) => {
            this.zones.splice(this.zones.indexOf(zone), 1);
        }
    }
}
