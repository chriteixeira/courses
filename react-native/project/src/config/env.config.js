import { INTEGRATION_SERVER, TEST_USER, TEST_PASSWORD } from 'react-native-dotenv'

//Added the env var retrieval to this file to make updates/refresh easier
function getValue(variable) {
    return (variable && variable != 'null') ? variable : null;
}

exports.getIntegrationServer = function () {
    return getValue(INTEGRATION_SERVER);
}

exports.getTestUser = function () {
    return getValue(TEST_USER);
}

exports.getTestPassword = function () {
    return getValue(TEST_PASSWORD);
}
 