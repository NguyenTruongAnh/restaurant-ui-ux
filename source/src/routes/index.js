const siteRouter = require('./public-site')
const privateSiteRouter = require('./private-site')
const staffRouter = require('./staff')
const memberRouter = require('./member')
const billRouter = require('./bill')
const supplierRouter = require('./supplier')
const receivedNoteRouter = require('./received-note')
const foodRouter = require('./food')
const materialRouter = require('./material')
const scheduleRouter = require('./schedule')

function route(app) {
    app.use('/comnha/staffs', staffRouter)

    app.use('/comnha/members', memberRouter)

    app.use('/comnha/foods', foodRouter)

    app.use('/comnha/bills', billRouter)

    app.use('/comnha/schedules', scheduleRouter)

    app.use('/comnha/materials', materialRouter)

    app.use('/comnha/received-notes', receivedNoteRouter)

    app.use('/comnha/suppliers', supplierRouter)

    app.use('/comnha', privateSiteRouter)

    app.use('/', siteRouter)

    app.use((req, res) => {
        res.render('404')
    })
    
    app.use((err, req, res, next) => {
        console.log(err.message)
        res.status(500)
        res.render('500')
    })
}

module.exports = route;
