import { dataInfo } from "../Data/dataInfo";

export const GetRecords = () => {
    console.log('Get Records');
    return new Promise((resolve, reject) => {
        resolve(dataInfo);

    });
};