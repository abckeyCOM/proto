import Json from './0x53c1.json'
import Messages from './Messages'

export default class P53c1 {
  static json = Json
  static conf = {
    enumname: 'MessageType',
    prefix: 'MessageType_',
    headString: '?',
    flagString: '##'
  }
  static device = [
    {
      vendorId: 0x1209,
      productId: 0x53C0
    },
    {
      vendorId: 0x1209,
      productId: 0x53C1
    }
  ]
  static messages = () => new Messages(P53c1.json, P53c1.conf)
}
