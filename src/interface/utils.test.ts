import {getLocalStorageData, checkDataExpiration} from './utils'


describe('checkDataExpiration', () => {
    it('should check if local storage data lifespam is expired', () => {
       const isExpire = checkDataExpiration({localStorageExpiration: 9, currentTime: 10})
       expect(isExpire).toBeTruthy()
    })
})


describe('getLocalStorageData', () => {

    it('should return a list of podcasts if data is present and not expired', () => {

        const stringifiedData = '{expirationDate: 10, data: [{key: value}]}'
        localStorage.setItem('podcasts', stringifiedData)

        const podcasts = getLocalStorageData()

        expect(podcasts).toMatchObject({expirationDate: 10, data: [{key: value}]})

   
    })
})