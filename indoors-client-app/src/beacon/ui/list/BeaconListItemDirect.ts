module ind.beacon.ui {

    export class BeaconListItemDirect implements ng.IDirective {

        static NG_NAME: string = 'indBeaconListItem';

        restrict: string = 'E';
        replace: boolean = true;
        templateUrl: any = 'beacon/ui/list/beaconListItem.tpl.html';
        scope: any = {
            beacon: '='
        };

        constructor($injector: ng.auto.IInjectorService) {

        }
    }
}