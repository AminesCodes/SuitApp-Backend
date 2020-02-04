const db = require('../db');

const getAllEventsByEventId = async () => {
    try {
        const requestQuery = `
            SELECT *
            FROM events
            ORDER BY events.id ASC`
        return await db.any(requestQuery)
    } catch (err) {
        throw err
    }
}

module.exports = {
    getAllEventsByEventId
}