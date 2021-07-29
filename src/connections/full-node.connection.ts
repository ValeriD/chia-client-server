import { FullNode } from "chia-client";
import Logger from "jet-logger";
import { Server } from "../config/config";


export class FullNodeConnection{
    private static _instance: FullNodeConnection;
    private fullNode: FullNode;

    private constructor(){
        this.fullNode = new FullNode({
            protocol: 'https',
            hostname: Server.host,
            port: 8855
        });
    }

    public static getInstance(){
        return this._instance  || (this._instance = new this());
    }

    public getFullNode() : FullNode{
        return this.fullNode;
    }
}