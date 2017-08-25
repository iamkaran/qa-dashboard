var Client = require('node-rest-client').Client;

exports.backPorts = function (req, res) {
    'use strict';
    let backPorts = [];
    var client = new Client();
    client.get("https://fisheye.dev.lithium.com/rest-service-fe/revisionData-v1/changesetList/svn?path=branches/release/17.7", function (allIds, response) {
        for (let i = 0; i < allIds.changesetIdList.csid.length; i++) {
            client.get("https://fisheye.dev.lithium.com/rest-service-fe/revisionData-v1/changeset/svn/" + allIds.changesetIdList.csid[i], function (backPortDetails, response1) {
                backPorts.push(backPortDetails.changeset.comment);
                console.log(backPorts);
            })
        }
    });

};


