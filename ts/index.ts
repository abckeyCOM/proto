import Pabc1 from './0xabc1'
import P53c1 from './0x53c1'

export default class Protocol {
  static readonly pids = [
    ...Pabc1.device,
    ...P53c1.device,
  ]
  static pid(pid: number) {
    if (pid === 0x53c1 || pid === 0x53c0) return P53c1.messages()
    else if (pid === 0xabc1) return Pabc1.messages()
    else return Pabc1.messages()
  }
}
