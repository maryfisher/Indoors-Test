///<reference path="..\..\..\common\const\NGConst.ts"/>
///<reference path="ZoneListItemController.ts"/>
module ind.zone.ui {

    import ZoneVO = ind.zone.model.ZoneVO;

    export class ZoneListItemDirect implements ng.IDirective {

        static NG_NAME: string = 'indZoneListItem';

        restrict: string = 'E';
        replace: boolean = true;
        templateUrl: any = 'zone/ui/list/zoneListItem.tpl.html';
        scope: any = {
            zone: '=',
            setSelected: '&',
            isSelected: '&',
            onDeleted: '&'
        };
        controller: string = ctrl.ZoneListItemController.NG_NAME;
        controllerAs: string = ind.common.consts.NGConst.CTRL;

        constructor($injector: ng.auto.IInjectorService) {

        }
    }
}