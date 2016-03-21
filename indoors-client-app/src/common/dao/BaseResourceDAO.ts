module ind.common.dao {

    import IPromise = ng.IPromise;
    import IHttpPromiseCallbackArg = ng.IHttpPromiseCallbackArg;

    export interface IIdObject {
        id: number;
    }

    export class BaseResourceDAO extends BaseHttpDAO {

        path: string;

        constructor($injector: ng.auto.IInjectorService) {
            super($injector);
        }

        getId = (id: number): string => {
            return this.path + id;
        };

        getOne<T>(id: number, successCallback: (response: IHttpPromiseCallbackArg<T>) => T): IPromise<T> {
            return this.makeCall(this.get, this.getId(id), null, successCallback);
        }

        getAll<T>(data: Object, successCallback: (response: IHttpPromiseCallbackArg<T>) => T): IPromise<T> {
            return this.makeCall(this.get, this.path, data, successCallback);
        }

        create<T>(data: Object, successCallback: (response: IHttpPromiseCallbackArg<T>) => T, queryParams ?: Object): IPromise<T> {
            return this.makeCall(this.post, this.getQueryParams(this.path, queryParams), data, successCallback);
        }

        update<T>(data: IIdObject, successCallback: (response: IHttpPromiseCallbackArg<T>) => T): IPromise<T> {
            return this.makeCall(this.post, this.getId(data.id), data, successCallback);
        }

        remove(id: number, successCallback ?: (response: IHttpPromiseCallbackArg<any>) => void): IPromise<any> {
            return this.makeCall(this.del, this.getId(id), null, successCallback);
        }
    }
}
