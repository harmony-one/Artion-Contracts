async function main() {
  const [deployer] = await ethers.getSigners();
  const deployerAddress = await deployer.getAddress();
  console.log('Deploying nft with address:', deployerAddress);

  const FNFT = await ethers.getContractFactory('MockERC721');
  const contract = await FNFT.deploy(50);

  await contract.deployed();

  console.log('MockERC721 deployed at', contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
