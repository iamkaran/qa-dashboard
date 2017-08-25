var JiraClient = require('jira-connector');

exports.infoSec = function (req, res) {
    var issueId = [];
    var jira = new JiraClient({
        host: 'jira.dev.lithium.com',
        basic_auth: {
            username: 'karan.shah',
            password: 'xxx'
        }
    });

    jira.filter.getFilter({
        filterId: '25922'
    }, function (error, filterResults) {
        if (!error) {
            jira.search.search({

                jql: filterResults.jql

            }, function (error, infoSecTicket) {
                if (!error) {

                    res.send(infoSecTicket.issues[0].fields.status.name+"    "+ infoSecTicket.issues[0].fields.resolution.name+"  "+ infoSecTicket.issues[0].key);

                }
                else {
                    console.log(error);
                }
            });

        }
        else {
            console.log(error);
        }
    });

};
