import {checkDataExpiration} from './utils'


describe('checkDataExpiration', () => {
    it('should check if local storage data lifespam is expired', () => {

       const  isExpire = checkDataExpiration({localStorageExpiration: 9, currentTime: Date.now()})
       expect(isExpire).toBeTruthy()
    })
})