import Meshy, { MeshyProtocolHandler, ProtocolHandlerLocator } from 'meshy';

export class IPv4 implements MeshyProtocolHandler {
  protocol = 0x0800;
  addresses: { address: Buffer, subnet: Buffer }[] = [];

  get locators(): ProtocolHandlerLocator[] {
    return this.addresses.map(address => ({ value: address.address, expiry: 3600000n }));
  }

  async onmessage(meshy: Meshy, path: Buffer, payload: Buffer): Promise<any> {

  }

  async onclose(meshy: Meshy): Promise<any> {

  }

};
