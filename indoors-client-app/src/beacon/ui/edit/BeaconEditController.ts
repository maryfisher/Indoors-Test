module ind.beacon.ui.ctrl {

    import NGConst = ind.common.consts.NGConst;
    import RouteConst = ind.common.consts.RouteConst;
    import RouteUtil = ind.common.util.RouteUtil;
    import BeaconDAO = ind.beacon.dao.BeaconDAO;
    import BeaconVO = ind.beacon.model.BeaconVO;

    export class BeaconEditController {

        static NG_NAME: string = 'BeaconEditController';
        static $inject: string[] = [NGConst.$SCOPE, BeaconDAO.NG_NAME, NGConst.$STATE_PARAMS, RouteUtil.NG_NAME];

        beacon: BeaconVO;

        constructor(private $scope: ng.IScope, private beaconDAO: BeaconDAO,
                    private $stateParams: angular.ui.IStateParamsService,
                    private routeUtil: RouteUtil) {
            beaconDAO.getBeacon($stateParams['beaconId']).then(this.setBeacon);
        }

        setBeacon = (data: BeaconVO) => {
            this.beacon = data;
        };

        cancel = () => {
            this.routeUtil.redirectTo(RouteConst.BEACON_DETAIL, {
                beaconId: this.$stateParams['beaconId']
            });
        };

        save = () => {
            this.beaconDAO.updateBeacon(this.beacon).then(this.cancel);
        };
    }
}
