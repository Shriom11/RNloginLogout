
import Request,{uploadImage,Submit} from './request'
const live_url_point =  "http://api.vapp.134.209.97.167.sslip.io/";
const url_point =  "https://stage-api.propertyagency.app/";
export default class Service {
    static Get(Urls,data) {
        return Request.get(url_point+Urls,data)
    }
    static Post(Urls,data) {
        return Request.post(url_point+Urls,data)
    }
    static Put(Urls,data) {
        return Request.put(url_point+Urls,data)
    }
    static Delete(Urls,data) {
        return Request.delete(url_point+Urls,data)
    }

    static userUpdateProfile(Urls, params) {
        console.log('params==>', params);
        console.log('api==>', Urls);
        return uploadImage(url_point+Urls,params);
    };
    
    static formSubmit(Urls, params) {
        console.log('params==>', params);
        console.log('api==>', Urls);
        return Submit(url_point+Urls,params);
    };
}
