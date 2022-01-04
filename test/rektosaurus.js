const { expect } = require("chai");
const { BN } = require('@openzeppelin/test-helpers')

const BASE_URL = "https://rex.rektosaurus.io/";

describe("Rektosaurus", () => {

  before('setup', async () => {
    this.RektosaurusFactory = await hre.ethers.getContractFactory("Rektosaurus");
  })

  beforeEach('deploy', async () => {
    this.rektosaurus = await this.RektosaurusFactory.deploy();
  })

  it("Should return correct name and symbol", async () => {
    expect(await this.rektosaurus.name()).to.equal("Rektosaurus Rex");
    expect(await this.rektosaurus.symbol()).to.equal("REKT");
  });

  it("Querying tokenId 1 should return remote URL", async () => {
    expect(await this.rektosaurus.tokenURI(1)).to.equal(BASE_URL + "1.json");
  });

});