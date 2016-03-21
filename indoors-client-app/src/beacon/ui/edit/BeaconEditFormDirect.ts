module ind.beacon.ui {

    export interface IBeaconEditFormScope {
        isDateOpen: boolean;
        openDatePicker($event);
        beacon: ind.beacon.model.BeaconVO;
    }

    export class BeaconEditFormDirect implements ng.IDirective {

        static NG_NAME: string = 'indBeaconEditForm';

        restrict: string = 'E';
        replace: boolean = true;
        templateUrl: any = 'beacon/ui/edit/beaconEditForm.tpl.html';
        scope: any = {
            beacon: '='
        };
        link = ($scope: IBeaconEditFormScope) => {
            $scope.openDatePicker = ($event) => {
                $scope.isDateOpen = true;
            };
        }
    }
}