///<reference path="..\..\common\const\ServerConst.ts"/>
///<reference path="..\..\common\const\NGConst.ts"/>
///<reference path="..\model\ZoneVO.ts"/>
module ind.zone.dao {
    'use strict';

    import ServerConst = ind.common.consts.ServerConst;
    import NGConst = ind.common.consts.NGConst;
    import IZoneVO = ind.zone.model.IZoneVO;
    import ZoneVO = ind.zone.model.ZoneVO;
    import IPromise = angular.IPromise;
    import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;

    export class ZoneDAO extends ind.common.dao.BaseResourceDAO {

        static NG_NAME: string = 'zoneDAO';
        private currentZone: ZoneVO;

        constructor($injector: ng.auto.IInjectorService) {
            super($injector);
            this.path = ServerConst.ZONE_PATH;
            this.currentZone = new ZoneVO();
        }

        private setCurrentZone = (response: IHttpPromiseCallbackArg<IZoneVO>): ZoneVO => {
            this.currentZone.parseData(response.data);
            return this.currentZone;
        };

        private returnZone = (response: IHttpPromiseCallbackArg<IZoneVO>): ZoneVO => {
            return new ZoneVO(response.data);
        };

        private returnZones = (response: IHttpPromiseCallbackArg<IZoneVO[]>): ZoneVO[] => {
            return response.data.map(v => {
                return new ZoneVO(v);
            });
        };

        getCurrentZone(id ?: number): ZoneVO {
            if (id) {
                if (this.currentZone.id !== id) {
                    this.currentZone.invalidateData();
                }
                this.currentZone.id = id;
                this.getOne(id, this.setCurrentZone);
            }
            return this.currentZone;
        }

        getZone(id): IPromise < ZoneVO > {
            return this.getOne(id, this.returnZone);
        }

        createZone(zone: ZoneVO): IPromise < ZoneVO > {
            return this.create(zone, this.returnZone);
        }

        updateZone(zone: ZoneVO): IPromise < ZoneVO > {
            return this.update(zone, this.returnZone);
        }

        deleteZone(id: number): IPromise < void> {
            return this.remove(id);
        }

        getZones(): IPromise < ZoneVO[]> {
            return this.getAll(null, this.returnZones);
        }
    }
}