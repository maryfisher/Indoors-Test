module ind.beacon.ui.ctrl {

    import NGConst = ind.common.consts.NGConst;
    import BeaconDAO = ind.beacon.dao.BeaconDAO;
    import BeaconVO = ind.beacon.model.BeaconVO;

    export class BeaconDetailController {

        static NG_NAME: string = 'BeaconDetailController';
        static $inject: string[] = [NGConst.$SCOPE, BeaconDAO.NG_NAME, NGConst.$STATE_PARAMS];

        beacon: BeaconVO;

        constructor(private $scope: ng.IScope, private beaconDAO: BeaconDAO,
                    private $stateParams: angular.ui.IStateParamsService) {
            beaconDAO.getBeacon($stateParams['beaconId']).then(this.setBeacon);
        }

        setBeacon = (data: BeaconVO) => {
            this.beacon = data;
        };
    }
}
