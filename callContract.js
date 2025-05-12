const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");

require('dotenv').config();

// 1. ABI 가져오기
const artifactPath = path.join(__dirname, "artifacts", "contracts", "BicycleTracker.sol", "BicycleTracker.json");
const contractJson = JSON.parse(fs.readFileSync(artifactPath, "utf8"));

// 2. Hardhat 로컬 노드 연결
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

// 3. 테스트용 계정 (Hardhat 실행 시 나오는 private key 중 하나)
const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey, provider);

// 4. 배포된 컨트랙트 주소
const contractAddress = process.env.CONTRACT_ADDRESS;
 // 예: "0xAbC123..."

const contract = new ethers.Contract(contractAddress, contractJson.abi, wallet);

// 5. 호출 함수
async function registerBicycle() {
  try {
    console.log("🚲 자전거 등록 시도 중...");

    const tx = await contract.registerBicycle("대여 가능", "37.5665", "126.9780");
    console.log("⏳ 트랜잭션 전송됨, 대기 중...");
    await tx.wait();

    console.log("✅ 자전거 등록 완료!");
  } catch (error) {
    console.error("❌ 오류 발생:", error);
  }
}

async function getBicycle(id) {
    try {
      console.log(`🔍 자전거 ID ${id} 조회 중...`);
  
      const bicycle = await contract.getBicycle(id);
  
      console.log("✅ 조회 결과:");
      console.log({
        id: Number(bicycle.id),
        owner: bicycle.owner,
        status: bicycle.status,
        latitude: bicycle.latitude,
        longitude: bicycle.longitude,
        timestamp: new Date(Number(bicycle.timestamp) * 1000).toISOString(),
      });
    } catch (error) {
      console.error("❌ 조회 중 오류:", error);
    }
  }
  

// registerBicycle();
getBicycle(0);
