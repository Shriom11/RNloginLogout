//import liraries
import { AsyncStorage } from 'react-native'

//make this component available to the app
export default class LocalStorage {

    // -------- function for get value from store ---------- //
    static async getItemWithKey(key, action) {
        try {
            const data = await AsyncStorage.getItem(key);
            const parsedData = JSON.parse(data);
            action(parsedData);
        } catch (error) {
            action(null);
        }
    }

    // -------- function for set value in store ---------- //  
    static async setItemWithKeyAndValue(key, value) {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            return false;
        }
    }
}
