const { expect } = require("chai");

describe("DegenToken", function () {
    let DegenToken;
    let degenToken;
    let owner;
    let addr1;

    beforeEach(async function () {
        DegenToken = await ethers.getContractFactory("DegenToken");
        [owner, addr1] = await ethers.getSigners();
        degenToken = await DegenToken.deploy();
        await degenToken.deployed();
    });

    it("Should have the correct name and symbol", async function () {
        expect(await degenToken.name()).to.equal("Degen");
        expect(await degenToken.symbol()).to.equal("DGN");
    });

    it("Should mint tokens correctly", async function () {
        await degenToken.mint(addr1.address, 100);
        expect(await degenToken.balanceOf(addr1.address)).to.equal(100);
    });

    it("Should only allow the owner to mint tokens", async function () {
        await expect(degenToken.connect(addr1).mint(addr1.address, 100)).to.be.revertedWith("Ownable: caller is not the owner");
    });
});