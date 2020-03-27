const spySite = require('../../src/app/utils/spySite');

describe('Verify site', () => {
    it('should verify informations in site', async () => {
        const url = 'https://www.smartmei.com.br';

        const data = await spySite(url);

        expect(data.status).toBe('succeeded');
    });
});
