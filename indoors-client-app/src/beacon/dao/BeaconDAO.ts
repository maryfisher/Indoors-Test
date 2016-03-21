///<reference path="..\..\common\const\ServerConst.ts"/>
///<reference path="..\..\common\const\NGConst.ts"/>
///<reference path="..\model\BeaconVO.ts"/>
module ind.beacon.dao {
    'use strict';

    import ServerConst = ind.common.consts.ServerConst;
    import NGConst = ind.common.consts.NGConst;
    import IBeaconVO = ind.beacon.model.IBeaconVO;
    import BeaconVO = ind.beacon.model.BeaconVO;
    import IPromise = angular.IPromise;
    import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;

    export class BeaconDAO extends ind.common.dao.BaseResourceDAO {

        static NG_NAME: string = 'beaconDAO';
        private currentBeacon: BeaconVO;

        constructor($injector: ng.auto.IInjectorService) {
            super($injector);
            this.path = ServerConst.BEACON_PATH;
            this.currentBeacon = new BeaconVO();
        }

        private returnBeacon = (response: IHttpPromiseCallbackArg<IBeaconVO>): BeaconVO => {
            return new BeaconVO(response.data);
        };

        private returnBeacons = (response: IHttpPromiseCallbackArg<IBeaconVO[]>): BeaconVO[] => {
            return response.data.map(v => {
                return new BeaconVO(v);
            });
        };

        getBeacon(id: number): IPromise < BeaconVO > {
            return this.getOne(id, this.returnBeacon);
        }

        createBeacon(beacon: BeaconVO, zoneId: number): IPromise < BeaconVO > {
            return this.create(beacon, this.returnBeacon, {'zoneId': zoneId});
        }

        updateBeacon(beacon: BeaconVO): IPromise < BeaconVO > {
            return this.update(beacon, this.returnBeacon);
        }

        deleteBeacon(beacon: BeaconVO): IPromise < void > {
            return this.remove(beacon.id, null);
        }

        getBeacons(): IPromise < BeaconVO[]> {
            return this.getAll(null, this.returnBeacons);
        }
    }
}