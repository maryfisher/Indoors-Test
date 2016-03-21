module ind.common.consts {
    export class RouteConst {

        static HOME: string = 'HOME';
        static HOME_PATH: string = '/';

        static zoneId: string = '/:zoneId';
        static beaconId: string = '/:beaconId';

        static ZONE: string = 'ZONE';
        static ZONE_BASE_PATH: string = '/zone';
        static ZONE_PATH: string = RouteConst.ZONE_BASE_PATH + RouteConst.zoneId;

        static ZONE_EDIT: string = 'ZONE_EDIT';
        static ZONE_EDIT_PATH: string = '/zone/edit' + RouteConst.zoneId;

        static BEACON_LIST: string = 'BEACON_LIST';
        static BEACON_LIST_PATH: string = '/beacon';

        static BEACON: string = 'BEACON';
        static BEACON_PATH: string = RouteConst.BEACON_LIST_PATH + RouteConst.beaconId;

        static BEACON_DETAIL: string = 'BEACON_DETAIL';
        static BEACON_DETAIL_PATH: string = '';

        static BEACON_EDIT: string = 'BEACON_EDIT';
        static BEACON_EDIT_PATH: string = '/edit';

    }
}