var Client = require('node-rest-client').Client;


exports.jenkinsRegression = function (req, res) {

    var client = new Client();
    client.get("http://jenkins.dev.lithium.com/view/LIA%20-%20Releases/job/LIA_PACKAGE_JAVA8_BUILD_17.7/lastCompletedBuild/testReport/api/json", function (data, response) {

        res.send(data.passCount+"  "+data.failCount+"  "+data.skipCount);

    });

};

exports.dbRollBack = function (req, res) {

    var client = new Client();
    client.get("http://jenkins.dev.lithium.com/view/qa-lia-mineraloil/job/qa-lia-db-rollback-testing/lastBuild/api/json", function (data, response) {

        res.send(data.result);

    });

};

