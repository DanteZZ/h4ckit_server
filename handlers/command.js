import { auth } from "../actions/auth";
import { getServerInfo } from "../actions/get_server_info";
import { register } from "../actions/register";
import { CMD_GETSRVINFO, CMD_REGISTER, CMD_AUTH } from "../modules/consts";

const onCommand = (client,command,payload,response=()=>{}) => {
    switch (command) {
        case CMD_GETSRVINFO: getServerInfo(client,payload,response); break;
        case CMD_REGISTER: register(client,payload,response); break;
        case CMD_AUTH: auth(client,payload,response); break;
    }
};

export default onCommand;