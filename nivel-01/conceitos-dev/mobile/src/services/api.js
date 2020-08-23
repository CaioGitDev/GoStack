import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.6:3333',
});

export default api;

/**
 * ios com emulador: localhost
ios/android com fisico: ip da maquina
android com emulador: localhost -> adb reverse tcp: 3333 tcp:3333,
ou 10.0.2.2 (android studio)
Endereço IPv6 de local de ligação:	fe80::9c66:8117:894d:afed%7
Endereço IPv4:	192.168.1.6
Servidores DNS IPv4:	192.168.1.1
Sufixo DNS primário:	home
Fabricante:	Realtek
Descrição:	Realtek PCIe GbE Family Controller
Versão do controlador:	10.34.307.2019
Endereço físico (MAC):	40-B0-76-46-9C-D6

 */
