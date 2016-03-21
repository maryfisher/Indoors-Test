module ind.beacon.ui.ctrl {

    import NGConst = ind.common.consts.NGConst;
    import BeaconDAO = ind.beacon.dao.BeaconDAO;
    import BeaconVO = ind.beacon.model.BeaconVO;

    export class BeaconListController {

        static NG_NAME: string = 'BeaconListController';

        static $inject = [NGConst.$SCOPE, BeaconDAO.NG_NAME];

        beacons: BeaconVO[];

        constructor(private $scope: ng.IScope, private beaconDAO: BeaconDAO) {
            beaconDAO.getBeacons().then(this.getBeaconsSuccess);
        }

        getBeaconsSuccess = (data: BeaconVO[]) => {
            this.beacons = data;
        };
    }
}