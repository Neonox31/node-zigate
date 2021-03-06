import { ZGMessage, ZGMessageCode } from '../message'
import debug from '../debug'

export interface ActiveEndpointPayload {
  shortAddress: string
}

const fromBuffer = (payload: Buffer): ActiveEndpointPayload => {
  return {
    shortAddress: payload.readUInt16BE(0).toString(16)
  }
}

export class ZGActiveEndpointMessage implements ZGMessage {
  code: ZGMessageCode
  label = 'active-endpoint'
  payload: ActiveEndpointPayload

  constructor(code: ZGMessageCode, payload: Buffer) {
    this.code = code
    this.payload = fromBuffer(payload)
    debug(`message:${this.getLabel()}`)(this.payload)
  }

  getCode(): ZGMessageCode {
    return this.code
  }

  getLabel(): string {
    return this.label
  }

  getPayload(): ActiveEndpointPayload {
    return this.payload
  }
}
