module ind.common.consts {
    export class ServerConst {

        static API: string = 'api/';

        static DEFAULT_CONFIG = {
            timeout: 60000
        };

        static ZONE_PATH: string = ServerConst.API + 'zone/';
        static BEACON_PATH: string = ServerConst.API + 'beacon/';
    }
}