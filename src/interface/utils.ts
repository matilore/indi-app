export const setExpirationLocalStorageItem = (hours: number) =>  new Date().getTime() + hours * 60 * 60 * 1000;

export const checkDataExpiration = () => {

}