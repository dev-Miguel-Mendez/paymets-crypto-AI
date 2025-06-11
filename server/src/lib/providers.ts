
import {WebSocketProvider} from 'ethers'
import { HTTP_RPC_URL, WEBSOCKET_RPC_URL } from 'src/boostrap-env.js'

export const webSocketProvider = new WebSocketProvider(WEBSOCKET_RPC_URL)

export const httpProvider = new WebSocketProvider(HTTP_RPC_URL)