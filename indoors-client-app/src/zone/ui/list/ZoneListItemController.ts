module ind.zone.ui.ctrl {

    import ZoneVO = ind.zone.model.ZoneVO;
    import ZoneDAO = ind.zone.dao.ZoneDAO;
    import NGConst = ind.common.consts.NGConst;
    import IModalService = angular.ui.bootstrap.IModalService;
    import IModalSettings = angular.ui.bootstrap.IModalSettings;
    import IModalServiceInstance = angular.ui.bootstrap.IModalServiceInstance;

    export interface IZoneListItemScope extends ng.IScope {
        setSelected(param: IZoneParams);
        isSelected(param: IIsSelectedParams);
        onDeleted(param: IZoneParams);
        zone: ZoneVO;
    }

    export interface IZoneParams {
        zone: ZoneVO;
    }

    export interface IIsSelectedParams {
        id: number;
    }

    export class ZoneListItemController {

        static NG_NAME: string = 'ZoneListItemController';
        static $inject: string[] = [NGConst.$SCOPE, NGConst.$MODAL, ZoneDAO.NG_NAME];

        private $modalInstance: IModalServiceInstance;

        constructor(private scope: IZoneListItemScope, private $uibModal: IModalService,
                    private zoneDAO: ZoneDAO) {
        }

        setSelected = (z: ZoneVO) => {
            this.scope.setSelected({'zone': z});
        };

        isSelected = (id: number): boolean => {
            return this.scope.isSelected({'id': id});
        };

        onDelete = () => {

            var modalObj: IModalSettings = {
                templateUrl: 'zone/ui/list/deleteZone.tpl.html',
                scope: this.scope,
                animation: true
            };

            this.$modalInstance = this.$uibModal.open(modalObj);
        };

        close = () => {
            this.$modalInstance.close();
        };

        delete = () => {
            this.zoneDAO.deleteZone(this.scope.zone.id);
            this.scope.onDeleted({'zone': this.scope.zone});
            this.close();
        }
    }
}
