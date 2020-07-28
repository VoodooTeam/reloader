const Reloader = require('../index')

describe('Realoader', () => {
    describe('get()', () => {
        afterEach(() => {
            jest.clearAllMocks()
        })

        it('should launch interval to retrieve config', async () => {
            const reloader = new Reloader(200)
            const mockRetrieveConf = jest.spyOn(reloader, 'retrieve')
            let counter = 0
            reloader.addFunction('test', () => { return new Promise(resolve => resolve(++counter)) })
            await reloader.init()

            let res = await reloader.get('test')
            expect(res).toEqual(1)
            expect(mockRetrieveConf.mock.calls.length).toEqual(1)

            await new Promise(resolve => setTimeout(resolve, 200))
            res = await reloader.get('test')
            expect(res).toEqual(2)
            expect(mockRetrieveConf.mock.calls.length).toEqual(2)

            await new Promise(resolve => setTimeout(resolve, 200))

            expect(mockRetrieveConf.mock.calls.length).toEqual(3)
            res = await reloader.get('test')
            expect(res).toEqual(2)

            const secondInit = await reloader.init()
            expect(secondInit.test).toEqual(2)

            const all = reloader.getAll()
            expect(all.test).toEqual(2)
        })
    })
})
