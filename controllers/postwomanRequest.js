var postwomanRequest = require("../models/postwomanRequest.js");
var axios = require('axios');

exports.execRequest = function(req, res) {
    var method = req.body.methodRequest;

    if(method == 'POST')    execPost(req, res);
    else if(method == 'GET')    execGet(req, res);
    else if(method == 'PUT')    execPut(req, res);
    else if(method == 'DELETE')    execDelete(req, res);
}

function execDelete(req, res)   {
    axios.delete(req.body.urlRequest, JSON.parse(req.body.bodyRequest))
    .then(response => {
        res.render('index', { 
            response: JSON.stringify(response.data),
            request: req.body.bodyRequest,
            url: req.body.urlRequest
        });
    })
    .catch(e => {
        res.render('error', { 
            error: e
        });
    });
}

function execPost(req, res) {
    axios.post(req.body.urlRequest, JSON.parse(req.body.bodyRequest), getAuth(req.body.userRequest, req.body.passwordRequest))
    .then(response => {
        res.render('index', { 
            response: JSON.stringify(response.data),
            request: req.body.bodyRequest,
            url: req.body.urlRequest
        });
    })
    .catch(e => {
        res.render('error', { 
            error: e
        });
    });
}

function execPut(req, res)  {
    axios.put(req.body.urlRequest, JSON.parse(req.body.bodyRequest))
    .then(response => {
        res.render('index', { 
            response: JSON.stringify(response.data),
            request: req.body.bodyRequest,
            url: req.body.urlRequest
        });
    })
    .catch(e => {
        res.render('error', { 
            error: e
        });
    });
}

function execGet(req, res)  {
    axios.get(req.body.urlRequest)
    .then(response => {
        res.render('index', { 
            response: response.data,
            request: req.body.bodyRequest,
            url: req.body.urlRequest
        });
    })
    .catch(e => {
        res.render('error', { 
            error: e
        });
    });
}

function getAuth(usr, pw) {
    var jsonResponse = null;

    if (usr != "") {
        jsonResponse = {
            user: usr,
            password: pw
        }
    }
    return jsonResponse;
}