import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "http://192.168.1.12:8080/auth",
    realm: "dtech",
    clientId: "app-dtech-ui",
});

export default keycloak;
