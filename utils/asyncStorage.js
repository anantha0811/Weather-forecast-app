import  AsyncStorage  from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
    try{
        await AsyncStorage.setItem(key,value);
    }catch(error){
        console.log('Error storing:' ,error);
    }
};

export const getData = async(key) => {
    try{
        const value= await AsyncStorage.getItem(key);
        return value;
    }catch(error){
        console.log('Error getting value: ', error);
    }

};

// export const storeData = async (value) => {
//     try {
//       await AsyncStorage.setItem('my-key', value);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   export const getData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('my-key');
//     } catch (e) {
//      console.log(e);
//     }
//   };