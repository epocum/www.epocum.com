var Web3 = require('web3');
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider("https://ropsten.infura.io/KWdoko3z2LEwyjnvEAoW"));

var EPM_ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_disable","type":"bool"}],"name":"disableTransfers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_amount","type":"uint256"}],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transfersEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_token","type":"address"}],"name":"NewSmartToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Issuance","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Destruction","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_prevOwner","type":"address"},{"indexed":false,"name":"_newOwner","type":"address"}],"name":"OwnerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}];
var EPM_contract = '0xAbC7Ea7892bFEaE4f6e9210454256040C484c504';
var ABI = [{"constant":false,"inputs":[{"name":"inWebAddr","type":"address"}],"name":"unCertifyDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"delegate","type":"address"}],"name":"getEpmBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"smarthash","type":"bytes32"},{"name":"addr","type":"address[]"},{"name":"visits","type":"uint256[]"}],"name":"pay","outputs":[{"name":"status","type":"bool"},{"name":"costForVisit","type":"uint256"},{"name":"fee","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_dLink","type":"string"}],"name":"getProposalHash","outputs":[{"name":"smartHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"webservice","type":"string"}],"name":"addDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_smartHash","type":"bytes32"},{"name":"_dLink","type":"string"}],"name":"Accept","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"nodes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"checkDelegation","outputs":[{"name":"inProgress","type":"bool"},{"name":"cert","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isAlreadyDelegate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getProposalByID","outputs":[{"name":"smartOwner","type":"address"},{"name":"smartHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"},{"name":"y","type":"uint256"}],"name":"getAcceptance","outputs":[{"name":"dLink","type":"string"},{"name":"smartHash","type":"bytes32"},{"name":"others","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"inWebAddr","type":"address"}],"name":"CertifyDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"hash","type":"bytes32"}],"name":"getProposalByHash","outputs":[{"name":"smartOwner","type":"address"},{"name":"smartWebsite","type":"string"},{"name":"smartHash","type":"bytes32"},{"name":"target","type":"uint256"},{"name":"duration","type":"uint256"},{"name":"tags","type":"string"},{"name":"ipfs","type":"string"},{"name":"numAcc","type":"uint256"},{"name":"others","type":"string"},{"name":"amount","type":"uint256"},{"name":"finalized","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"smarthash","type":"bytes32"}],"name":"isProposalEnded","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"epm","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isActiveDelegate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getNumAcceptance","outputs":[{"name":"num","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"epocum","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"hash","type":"bytes32"},{"name":"x","type":"uint256"}],"name":"getAdvertisers","outputs":[{"name":"adv","type":"address"},{"name":"dLink","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"countAllProposals","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposal_n","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"d","type":"uint256"}],"name":"getDelegate","outputs":[{"name":"webservice","type":"string"},{"name":"wallet","type":"address"},{"name":"amount","type":"uint256"},{"name":"cert","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_website","type":"string"},{"name":"_target","type":"uint256"},{"name":"duration","type":"uint256"},{"name":"tags","type":"string"},{"name":"others","type":"string"}],"name":"New","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
var contract = '0xb150345B69190B038e267053ff9ee9645a36bFd2';
var walletAddress = readCookie('epocumAddress');
var localPrivateAES  = readCookie('epocumPrivateKeyAES');

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function newProposal(website,target,amount,duration,tags,img,desc,password) {

	var epocum = web3.eth.contract(ABI).at(contract);
	var amountshare = 0;

    if (website != '') {

				var epocum = web3.eth.contract(ABI).at(contract);

				gasPrice = web3.eth.gasPrice;
				gasPriceHex = web3.toHex(gasPrice);
				gasLimitHex = web3.toHex(4000000);

				console.log('Current gasPrice: ' + gasPrice + ' OR ' + gasPriceHex);

				nonce =  web3.eth.getTransactionCount(walletAddress);
				nonceHex = web3.toHex(nonce);

				var others = img + '#!#' + desc;
				
				var rowData = epocum.New.getData(website,target,duration.value,tags,others);

				var decrypted = CryptoJS.AES.decrypt(localPrivateAES, password);
		    	var privateKeyClear = CryptoJS.enc.Utf8.stringify(decrypted);
				console.log('P: '+privateKeyClear);
				
				var rawTx = {

					nonce: nonceHex,
				    gasLimit: gasLimitHex,
				    gasPrice: gasPriceHex,
				    to: contract,
				    from:walletAddress,
				    value: amount*10**18,
				    data: rowData

				}

				try {

					var privateBuffer = new Buffer(privateKeyClear, 'hex')
					console.log(privateBuffer);

					const tx = new EthJS.Tx(rawTx)
					tx.sign(privateBuffer)
					const sTx= tx.serialize('hex')

					web3.eth.sendRawTransaction('0x' + sTx.toString('hex'), (err, hash) => {
							if (err) {

							console.log(err);
							return;
							}else {

								console.log('generating ...');
							}
						});

				}
					catch (errorMessage) {
					console.error("Password error: " + errorMessage);
				}
		}

}

function newAcceptance(hash,dlink) {

	var epocum = web3.eth.contract(ABI).at(contract);
	var amountshare = 0;

    if (web != '') {

				var epocum = web3.eth.contract(ABI).at(contract);

				gasPrice = web3.eth.gasPrice;
				gasPriceHex = web3.toHex(gasPrice);
				gasLimitHex = web3.toHex(2500000);

				console.log('Current gasPrice: ' + gasPrice + ' OR ' + gasPriceHex);

				nonce =  web3.eth.getTransactionCount(walletAddress);
				nonceHex = web3.toHex(nonce);

				var password =	document.getElementById('passwdAcceptance').value;

				var rowData = epocum.Accept.getData(hash,dlink);

				var decrypted = CryptoJS.AES.decrypt(localPrivateAES, password);
		    	var privateKeyClear = CryptoJS.enc.Utf8.stringify(decrypted);

				var rawTx = {

					nonce: nonceHex,
				    gasLimit: gasLimitHex,
				    gasPrice: gasPriceHex,
				    to: contract,
				    from:walletAddress,
				    value: 0*10**18,
				    data: rowData

				}

				try {

					var privateBuffer = new Buffer(privateKeyClear, 'hex')
					console.log(privateBuffer);

					const tx = new EthJS.Tx(rawTx)
					tx.sign(privateBuffer)
					const sTx= tx.serialize('hex')

					web3.eth.sendRawTransaction('0x' + sTx.toString('hex'), (err, hash) => {
							if (err) {

							console.log(err);
							return;
							}else {

								console.log('referral ok...');
								success('Acceptance','A new acceptance has been submitted.');
							}
						});

				}
					catch (errorMessage) {
					console.error("Password error: " + errorMessage);
				}

		}
}

function init_Proposal(web,target,amount,password) {
									genIpfsPage = '';

									genIpfsPage += '<html>';
									genIpfsPage += '<head>';
												
									var webNew = web.replace(/[/]/g, "+");
									//console.log("https://www.epocum.com:88/getMeta/" + webNew);
															
								  	var srcMeta = httpGet("https://www.epocum.com:88/getMeta/" + webNew);

									var metaField = srcMeta.split('#!#');
									
									var desc = metaField[0];
									var img = metaField[1];
									var url = metaField[2];
									
									console.log(url);
									console.log(desc);
									console.log(img);
									
									var url0 = url.replace("https://", "");
									var url1 = url0.replace("http://", "");

									if (srcMeta == 'undefined#!#undefined#!#undefined') {
										genIpfsPage += '<meta property="og:url" content="'+ web +'" />';
										genIpfsPage += '<meta property="og:type" content="'+ web +'" />';
										genIpfsPage += '<meta name="twitter:card" content="summary">';
										genIpfsPage += '<meta name="twitter:title" content="'+ web +'">';
									}else{
										
										genIpfsPage += '<meta property="og:url" content="'+ web +'" />';
										genIpfsPage += '<meta property="og:description" content="'+ desc +'" />';
										genIpfsPage += '<meta property="og:image" content="' + img +'">';
									
									}

									newProposal(web,target,amount,'1','tags',img,desc,password);
						
									return false;
}

function encryptAES(seed,password) {

			var enc = CryptoJS.AES.encrypt(seed,password);
			console.log(enc.toString());
	return  enc;
}

function makePassword() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 16; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function createWallet() {

				//var password = makePassword();
				var seed = lightwallet.keystore.generateRandomSeed();
				console.log(seed);
				lightwallet.keystore.createVault({
				    password: '',
					seedPhrase: seed,
					hdPathString: "m/44'/60'/0'/0"
				}, function (err, ks) {

				    ks.keyFromPassword('', function (err, pwDerivedKey) {
				        if (!ks.isDerivedKeyCorrect(pwDerivedKey)) {
				            throw new Error("Incorrect derived key!");
				        }

				        try {
				            ks.generateNewAddress(pwDerivedKey, 1);
				        } catch (err) {
				            console.log(err);
				            console.trace();
				        }

				        var address = ks.getAddresses()[0];
				        var prv_key = ks.exportPrivateKey(address, pwDerivedKey);

								 var wallet = {
								      address: address,
								      pKey: prv_key,
								      mnemonic: seed
								    }
								
						var jsonWallet = JSON.stringify(wallet);

				        console.log(jsonWallet);
						createCookie('epocumAddress', address, 30000);
						createCookie('epocumJson', jsonWallet, 30000);
						document.getElementById('walletAddress').value = address;
						//var encSeed = encryptAES(seed,password);
						//var encPrivateKey = encryptAES(prv_key,password);
						//createCookie('epocumSeedAES', encSeed, 30000);
						//createCookie('epocumPrivateKeyAES', encPrivateKey, 30000);

				    });
				});

return false;
}

function getLocalWallet() {

	var address = readCookie('epocumAddress');
	console.log(address);
	document.getElementById('walletAddress').value = address;

	return false;
}

function checkBalance() {

	if (JSON.parse(web3.eth.getBalance(walletAddress)) == '0') {
		console.log('charge wallet');
		overlay();
	}
}

function getBalance() {
	document.getElementById('eth').innerHTML = JSON.parse(web3.eth.getBalance(walletAddress)/10**18).toFixed(2);
}

function dwn() {

		var walletENC = readCookie('epocumJsonENC');
		password = document.getElementById('localPass').value;
		try {
		var decrypted = CryptoJS.AES.decrypt(walletENC, password);
		var wallet = CryptoJS.enc.Utf8.stringify(decrypted);
		if (wallet !== '') {
			download(wallet, 'wallet.epm', 'text/plain');
		}
		}catch(e){
			console.log('password errata');
		}
			
}

function destroyLocal() {

	try {

 		eraseCookie('epocumAddress')
  		eraseCookie('epocumJsonENC')

		location.replace("/");
		
	} catch (err) {

		location.replace("/profile");
	
	}
}

function normal_link() {
	var normal_post = '';
	
	normal_post += '<li class="mix"><a href="#" target="_blank">';
	normal_post += '		<div class="card card--article not-visible" >'
	normal_post += '			<div class="card-body"><div class="card-circle card-circle--article" style="background-image: url("./images/avatars/margaret.jpg")"></div>'
	normal_post += '				<div class="card-title">Title</div>'
	normal_post += '				<div class="card-description card-description--clamp-3">Description</div>'
	normal_post += '			</div>'
	normal_post += '			<div class="card-hero">'
	normal_post += '				<div class="card-image" style="background-image: url(./images/able-allowed-should-navigating-modern-tech-ethics.png);">'
	normal_post += '				</div>'
	normal_post += '			</div>'
	normal_post += '		<div class="card-footer">'
	normal_post += '			<div class="card-footer-wrapper" layout="row bottom-left">'
	normal_post += '			 <div class="card-type is-notShownIfHover">1 ETH</div>'
	normal_post += '			 <div class="card-tag is-notShownIfHover">Accept</div>'
	normal_post += '			<div class="card-tag is-shownIfHover">Read Margaret Gould Stewart s article</div>'
	normal_post += '			<div class="card-medium is-shownIfHover" self="right"></div>'
	normal_post += '			</div>'
	normal_post += '		</div>'
	normal_post += '	</div>'
	normal_post += '	</a></li>'
}

function offer_link() {
	var offer_post = '';
	
	offer_post += '<li class="mix">';
	offer_post += '		<a href="ios11.html">'
	offer_post += '			<div class="card card--resource not-visible" >'
	offer_post += '				<div class="card-hero" style="background-image: url(./images/ios11-card.png)">'
	offer_post += '				</div>'
	offer_post += '				<div class="card-body">'
	offer_post += '					<div class="card-title">iOS 11 iPhone GUI</div>'
	offer_post += '					<p class="card-description">Origami, Sketch, Framer, and Photoshop templates of GUI elements found in the public release of iOS 11.</p>'
	offer_post += '				</div>'
	offer_post += '			<div class="card-footer">'
	offer_post += '				<div class="card-footer-wrapper" layout="row bottom-left">'
	offer_post += '				<div class="card-type is-notShownIfHover">1 ETH</div>'
	offer_post += '				<div class="card-tag is-notShownIfHover">BUY</div>'
	offer_post += '				<div class="card-tag is-shownIfHover" self="left">View more</div>'
	offer_post += '				</div>'
	offer_post += '			</div>'
	offer_post += '		</div>'
	offer_post += '		</a></li>'

}