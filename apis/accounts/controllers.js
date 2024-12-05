const accounts = require("../../accounts");

exports.accountList = (req, res) => {
  res.json(accounts);
};



function fetchesAllAccounts(){
  return accounts;
}


exports.getAccounts =  (req, res) => {
  console.log(req.id)
    const accounts = fetchesAllAccounts(); 
    res.json(accounts);
  }


  
function createsANewaccount (newAccountData) {
    console.log("Creating new account", newAccountData)
    const newId = accounts.length + 1
    const newAccount = Object.assign({ id: newId }, newAccountData)
    console.log("My new account is: ", newAccount)
    return newAccount
}
 exports.createANewaccount= (req, res) => {
    const newaccount = createsANewaccount(req.body);
    res.status(201).json(newaccount);
  }
  




  const deleteAccount1 = (accountIdToBeDeleted) => {
    const newAccounts = accounts.filter((account) => account.id != accountIdToBeDeleted)
    console.log("My new accounts are: ", newAccounts)
}


exports.deleteAccount=(req, res) => {
  const { accountId } = req.params;
  const foundAccount = accounts.find((x) => x.id == accountId);
  if (foundAccount) {
    deleteAccount1(accountId);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Account not found" });
  }
}




   

  const updatesAnExistingAccount = (currentAccount, newData) => {
    const myUpdatedAccount = Object.assign(currentAccount, newData)
    return myUpdatedAccount
}

exports.updatesAnAccount =(req, res) => {
  const { accountId } = req.params;
  const foundAccount = accounts.find((x) => x.id == accountId); //x is the current record
  if (foundAccount) {
    const updatedAccount = updatesAnExistingAccount(foundAccount,req.body);
    res.status(200).json(updatedAccount); //status is range of number 
  } else {
    res.status(404).json({ message: "Account not found" });
  }
}

 


exports.getAccount =(req, res) => {
  const username = req.params.username;
  const funds = req.query.currency;
  console.log("username", username)
  console.log("currency", funds)
  let result = accounts
  if (username) {
      result = accounts.find((account) => account.username==username)
  }
  if(funds) {
    result = accounts.find((account) => account.funds==funds)
  }
  console.log(result)
  res.json(result)
}




