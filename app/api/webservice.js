//import liraries
import { NetInfo} from 'react-native';
let url = "Please Provide server URl for API call";

//make this component available to the app
export default class WebServiceHandler {

    //=================================================//
    //     function for Post-Methods                //
    //=================================================//
    static Post(parameter,apiName){
        return new Promise(function(success, failed){
            NetInfo.isConnected.fetch().done((isConnected) => {
                if(isConnected) {
                    fetch(url+apiName, {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        }, body:parameter,
                    }).then(function(response) {
                        return response.json();
                    }).then(function(jsonResponse) {
                        return success(jsonResponse);
                    }).catch(function(err) {
                            return  failed(err)
                    });
                }else {
                    return failed({name:'503',message:"No Internet connection"});
                }
            });
        });
    };

    //=================================================//
    //     function for Get-Methods                    //
    //=================================================//
    static Get(apiName){
        return new Promise(function(success, failed){
            NetInfo.isConnected.fetch().done((isConnected) => {
                if(isConnected) {
                    fetch(url+apiName, {
                        method: 'GET',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                    }).then(function(response) {
                        return response.json();
                    }).then(function(jsonResponse) {
                        return success(jsonResponse);
                    }).catch(function(err) {
                        return  failed(err)
                    });
                }else {
                    return({name:'503',message:"No Internet connection"});
                }
            });
        });
    };
}

