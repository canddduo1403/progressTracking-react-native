import LocalStorage from './LocalStorage';
import Service from './Service';
import { Keys, ServiceUrlNew, ServiceUrl, ServiceGetTime } from './Utils';

const getData = function (data, callback) {

    var filter = {
        "start": [data], "end": [data + "xff"],
        "limit": -1, "include_doc": true
    }
    Service.query('pp5summarynotification', 'hostid', filter, callback)
}

const getWeekdata = function (data, callback) {

    var filter = {
        "start": [data], "end": [data + "xff"],
        "limit": -1, "include_doc": true
    }

    Service.query('pp5summary', 'hostid', filter, callback)
}

const getWeekDoc = function (data, start, end, callback) {

    var filter = {
        "start": [start, data], "end": [end, data + "xff"],
        "limit": -1, "include_doc": true
    }

    Service.query('pp5summary', 'week_hostid', filter, callback)
}

module.exports = {
    getData: getData,
    getWeekdata: getWeekdata,
    getWeekDoc: getWeekDoc
}