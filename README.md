# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

=================================================================

```shell
git clone https://github.com/arenran02/bike_tracker && cd bike-tracker
npm install
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install --save-dev @nomicfoundation/hardhat-toolbox
npm install dotenv
npx hardhat node
npx hardhat compile
npx hardhat run scripts/deploy.js --network localhost
node callContract.js
```

node.js 설치
