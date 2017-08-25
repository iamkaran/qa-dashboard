var JiraClient = require('jira-connector');

exports.releaseBlockers = function (req, res) {
    var issueId = [];
    var jira = new JiraClient({
        host: 'jira.dev.lithium.com',
        basic_auth: {
            username: 'karan.shah',
            password: 'xxx'
        }
    });

    jira.search.search({
        jql: 'Project = "Lithium InterActive" AND fixVersion = 17.8 AND status not in (Closed, Done) ORDER BY cf[12561] ASC, status DESC, assignee DESC, key ASC'
    }, function (error, releaseBlockers) {
        if (!error) {

            res.send(releaseBlockers);
        }
        else {
            console.log(error);
        }
    });

};
