import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0xa5F6C4D1a120EF4aA4c22d40305B2d8F795D510b'
);

export default instance;