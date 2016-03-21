module ind.zone.model {

    import BeaconVO = ind.beacon.model.BeaconVO;

    export interface IZoneVO {
        id: number;
        name: string;
        description: string;
        beacon: BeaconVO;
        size: string; //can't use enum, because it's a string
    }

    export class ZoneVO implements IZoneVO {

        id: number;
        name: string;
        description: string;
        beacon: BeaconVO;
        size: string;

        constructor(data ?: IZoneVO) {
            this.parseData(data);
            if (!data) {
                this.beacon = new BeaconVO();
            }
        }

        parseData(data: IZoneVO): void {
            if (!data) return;
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.size = data.size;
            this.beacon = new BeaconVO(data.beacon);
        }

        invalidateData(): void {
            this.id = null;
            this.name = null;
            this.description = null;
            this.size = null;
            this.beacon = null;
        }
    }
}