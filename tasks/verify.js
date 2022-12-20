task("verify", "Deploy the smart contracts", async(taskArgs, hre) => {
  await hre.run("verify:verify", {
    address: '0x702e73A8Df9277503cccC8f9601F449dA35ADb77',
    constructorArguments: [
      "0xC854835C7275B26E1D6003Ae1b7D354D1b989aC0",
      "0xcf664087a5bb0237a0bad6742852ec6c8d69a27a"
    ]
  })
})