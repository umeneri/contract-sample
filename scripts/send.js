NtacoTokenERC20.deployed().then(i=>instance=i)
web3.eth.getAccounts().then(a=>accounts=a)
instance.balanceOf(accounts[0]).then(b=>web3.utils.fromWei(b, "ether"))
instance.balanceOf(accounts[1]).then(b=>web3.utils.fromWei(b, "ether"))


instance.transfer(accounts[1], web3.utils.toWei("1", "ether"))
instance.balanceOf(accounts[0]).then(b=>web3.utils.fromWei(b, "ether"))
instance.balanceOf(accounts[1]).then(b=>web3.utils.fromWei(b, "ether"))

