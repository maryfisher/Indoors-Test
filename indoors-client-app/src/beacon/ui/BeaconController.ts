module ind.beacon.ui.ctrl {

    import NGConst = ind.common.consts.NGConst;

    export class BeaconController {

        static NG_NAME: string = 'BeaconController';

        static $inject = [NGConst.$SCOPE];

        constructor(private $scope: ng.IScope) {

        }
    }
}
