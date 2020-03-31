const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should generate an unique ', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    })
});