module ind.beacon.model {

    export interface IGeoLocation {
        lat: number,
        lng: number
    }

    export interface IBeaconVO {
        id: number;
        name: string;
        description: string;
        vendor: string;
        major: number;
        minor: number;
        txPower: number;
        uuid: string;
        installationDate: string|Date;
        geoLocation: IGeoLocation;
    }

    export class BeaconVO implements IBeaconVO {

        id: number;
        name: string;
        description: string;
        vendor: string;
        major: number;
        minor: number;
        txPower: number;
        uuid: string;
        installationDate: string|Date;
        geoLocation: IGeoLocation;

        constructor(data ?: IBeaconVO) {
            this.parseData(data);
        }

        parseData(data: IBeaconVO): void {
            if (!data) {
                return;
            }
            Object.keys(data).forEach(v => {
                    if (data.hasOwnProperty(v)) {
                        this[v] = data[v];
                    }
                }
            );
            this.installationDate = new Date(<string>data.installationDate);
        }
    }
}
