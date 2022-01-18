const { expect } = require("chai");

describe("Escrow contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const Escrow = await ethers.getContractFactory("Escrow");

    const hardhatEscrow = await Escrow.deploy();

    const ownerBalance = await hardhatEscrow.balanceOf(owner.address);
    expect(await hardhatEscrow.totalSupply()).to.equal(ownerBalance);
  });
});