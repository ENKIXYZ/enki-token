import { ethers } from "hardhat";

async function main() {
    const EnkiFactory = await ethers.getContractFactory("ENKI");
    const enki = await EnkiFactory.deploy();
    const tx = enki.deploymentTransaction();
    console.log('tx:', tx?.hash);
    await tx?.wait();

    console.log(
        `ENKI deployed to ${enki.target}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
