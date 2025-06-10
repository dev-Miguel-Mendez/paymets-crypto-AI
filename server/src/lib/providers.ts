
import {WebSocketProvider} from 'ethers'
import { WEBSOCKET_RPC_URL } from 'src/boostrap-env.js'

export const webSocketProvider = new WebSocketProvider(WEBSOCKET_RPC_URL)