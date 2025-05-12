const hre = require("hardhat");

async function main() {
  const Tracker = await hre.ethers.getContractFactory("BicycleTracker");
  const tracker = await Tracker.deploy();
  await tracker.waitForDeployment(); // ✅ 최신 hardhat-ethers에서는 이걸 사용
  console.log(`Deployed to: ${tracker.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
