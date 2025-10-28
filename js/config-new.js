// Minimal config (cleaned)

// Contract addresses (supports dynamic IAM address via localStorage)
const DEFAULT_IAM_ADDRESS = '0x2D3923A5ba62B2bec13b9181B1E9AE0ea2C8118D';
let IAM_ADDRESS = (() => {
    try {
        const saved = localStorage.getItem('iam_selected_address');
        return (saved && typeof saved === 'string' && saved.length > 0) ? saved : DEFAULT_IAM_ADDRESS;
    } catch {
        return DEFAULT_IAM_ADDRESS;
    }
})();
const DAI_ADDRESS = '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063';
// Optional: second preset IAM address
const SECOND_IAM_ADDRESS = '0xa4C37107AbaeD664978e5f6db79249Ad08Fe0dBf';

// Expose to window
window.IAM_ADDRESS = IAM_ADDRESS;
window.DAI_ADDRESS = DAI_ADDRESS;
window.DEFAULT_IAM_ADDRESS = DEFAULT_IAM_ADDRESS;
window.SECOND_IAM_ADDRESS = SECOND_IAM_ADDRESS;

// Basic config placeholder for other scripts
window.contractConfig = {
    IAM_ADDRESS,
    DAI_ADDRESS,
};

// Complete ABI for IAM contract (Latest Contract ABI)
const MIN_IAM_ABI = [
{
	"inputs": [
		{
			"internalType": "address",
			"name": "spender",
			"type": "address"
		},
		{
			"internalType": "uint256",
			"name": "value",
			"type": "uint256"
		}
	],
	"name": "approve",
	"outputs": [
		{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}
	],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "uint256",
			"name": "daiAmount",
			"type": "uint256"
		}
	],
	"name": "buyTokens",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"stateMutability": "nonpayable",
	"type": "constructor"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "spender",
			"type": "address"
		},
		{
			"internalType": "uint256",
			"name": "allowance",
			"type": "uint256"
		},
		{
			"internalType": "uint256",
			"name": "needed",
			"type": "uint256"
		}
	],
	"name": "ERC20InsufficientAllowance",
	"type": "error"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "sender",
			"type": "address"
		},
		{
			"internalType": "uint256",
			"name": "balance",
			"type": "uint256"
		},
		{
			"internalType": "uint256",
			"name": "needed",
			"type": "uint256"
		}
	],
	"name": "ERC20InsufficientBalance",
	"type": "error"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "approver",
			"type": "address"
		}
	],
	"name": "ERC20InvalidApprover",
	"type": "error"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "receiver",
			"type": "address"
		}
	],
	"name": "ERC20InvalidReceiver",
	"type": "error"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "sender",
			"type": "address"
		}
	],
	"name": "ERC20InvalidSender",
	"type": "error"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "spender",
			"type": "address"
		}
	],
	"name": "ERC20InvalidSpender",
	"type": "error"
},
{
	"anonymous": false,
	"inputs": [
		{
			"indexed": true,
			"internalType": "address",
			"name": "user",
			"type": "address"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "amountIAM",
			"type": "uint256"
		}
	],
	"name": "Activated",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
		{
			"indexed": true,
			"internalType": "address",
			"name": "owner",
			"type": "address"
		},
		{
			"indexed": true,
			"internalType": "address",
			"name": "spender",
			"type": "address"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "value",
			"type": "uint256"
		}
	],
	"name": "Approval",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
		{
			"indexed": true,
			"internalType": "address",
			"name": "user",
			"type": "address"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "points",
			"type": "uint256"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "reward",
			"type": "uint256"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "timestamp",
			"type": "uint256"
		}
	],
	"name": "BinaryPointsClaimed",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
		{
			"indexed": true,
			"internalType": "address",
			"name": "user",
			"type": "address"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "newPoints",
			"type": "uint256"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "newCap",
			"type": "uint256"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "timestamp",
			"type": "uint256"
		}
	],
	"name": "BinaryPointsUpdated",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "newPoolSize",
			"type": "uint256"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "timestamp",
			"type": "uint256"
		}
	],
	"name": "BinaryPoolUpdated",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
		{
			"indexed": true,
			"internalType": "address",
			"name": "claimer",
			"type": "address"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "totalDistributed",
			"type": "uint256"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "claimerReward",
			"type": "uint256"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "timestamp",
			"type": "uint256"
		}
	],
	"name": "BinaryRewardDistributed",
	"type": "event"
},
{
	"inputs": [],
	"name": "claim",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [
		{
			"indexed": true,
			"internalType": "address",
			"name": "previousOwner",
			"type": "address"
		},
		{
			"indexed": true,
			"internalType": "address",
			"name": "newOwner",
			"type": "address"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "num",
			"type": "uint256"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "timestamp",
			"type": "uint256"
		}
	],
	"name": "OwnershipTransferred",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
		{
			"indexed": true,
			"internalType": "address",
			"name": "user",
			"type": "address"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "penaltyAmount",
			"type": "uint256"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "penaltyPercentage",
			"type": "uint256"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "timestamp",
			"type": "uint256"
		}
	],
	"name": "PenaltyApplied",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "newPointValue",
			"type": "uint256"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "totalClaimablePoints",
			"type": "uint256"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "contractTokenBalance",
			"type": "uint256"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "timestamp",
			"type": "uint256"
		}
	],
	"name": "PointValueUpdated",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
		{
			"indexed": true,
			"internalType": "address",
			"name": "executor",
			"type": "address"
		},
		{
			"indexed": true,
			"internalType": "address",
			"name": "target",
			"type": "address"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "reward",
			"type": "uint256"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "timestamp",
			"type": "uint256"
		}
	],
	"name": "ProxyClaimExecuted",
	"type": "event"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "targetUser",
			"type": "address"
		}
	],
	"name": "proxyClaimForDownline",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "uint256",
			"name": "amountIAM",
			"type": "uint256"
		},
		{
			"internalType": "uint256",
			"name": "payout",
			"type": "uint256"
		},
		{
			"internalType": "address",
			"name": "seller",
			"type": "address"
		}
	],
	"name": "purchase",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [
		{
			"indexed": true,
			"internalType": "address",
			"name": "user",
			"type": "address"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "amountIAM",
			"type": "uint256"
		}
	],
	"name": "PurchaseKind",
	"type": "event"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "referrer",
			"type": "address"
		},
		{
			"internalType": "address",
			"name": "upper",
			"type": "address"
		},
		{
			"internalType": "address",
			"name": "newUser",
			"type": "address"
		}
	],
	"name": "registerAndActivate",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "uint256",
			"name": "tokenAmount",
			"type": "uint256"
		}
	],
	"name": "sellTokens",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "newPrice",
			"type": "uint256"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "daiBalance",
			"type": "uint256"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "tokenSupply",
			"type": "uint256"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "timestamp",
			"type": "uint256"
		}
	],
	"name": "TokenPriceUpdated",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
		{
			"indexed": true,
			"internalType": "address",
			"name": "buyer",
			"type": "address"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "daiAmount",
			"type": "uint256"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "tokenAmount",
			"type": "uint256"
		}
	],
	"name": "TokensBought",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
		{
			"indexed": true,
			"internalType": "address",
			"name": "seller",
			"type": "address"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "tokenAmount",
			"type": "uint256"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "daiAmount",
			"type": "uint256"
		}
	],
	"name": "TokensSold",
	"type": "event"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "to",
			"type": "address"
		},
		{
			"internalType": "uint256",
			"name": "value",
			"type": "uint256"
		}
	],
	"name": "transfer",
	"outputs": [
		{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}
	],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [
		{
			"indexed": true,
			"internalType": "address",
			"name": "from",
			"type": "address"
		},
		{
			"indexed": true,
			"internalType": "address",
			"name": "to",
			"type": "address"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "value",
			"type": "uint256"
		}
	],
	"name": "Transfer",
	"type": "event"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "from",
			"type": "address"
		},
		{
			"internalType": "address",
			"name": "to",
			"type": "address"
		},
		{
			"internalType": "uint256",
			"name": "value",
			"type": "uint256"
		}
	],
	"name": "transferFrom",
	"outputs": [
		{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}
	],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "newOwner",
			"type": "address"
		}
	],
	"name": "transferIndexOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "user",
			"type": "address"
		},
		{
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		}
	],
	"name": "transferToUser",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [
		{
			"indexed": true,
			"internalType": "address",
			"name": "user",
			"type": "address"
		},
		{
			"indexed": true,
			"internalType": "address",
			"name": "referrer",
			"type": "address"
		},
		{
			"indexed": true,
			"internalType": "address",
			"name": "upper",
			"type": "address"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "index",
			"type": "uint256"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "timestamp",
			"type": "uint256"
		}
	],
	"name": "UserRegistered",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
		{
			"indexed": true,
			"internalType": "address",
			"name": "voter",
			"type": "address"
		},
		{
			"indexed": true,
			"internalType": "address",
			"name": "target",
			"type": "address"
		},
		{
			"indexed": false,
			"internalType": "bool",
			"name": "isLike",
			"type": "bool"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "timestamp",
			"type": "uint256"
		}
	],
	"name": "VoteSubmitted",
	"type": "event"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "target",
			"type": "address"
		},
		{
			"internalType": "bool",
			"name": "isLike",
			"type": "bool"
		}
	],
	"name": "voteUser",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "owner",
			"type": "address"
		},
		{
			"internalType": "address",
			"name": "spender",
			"type": "address"
		}
	],
	"name": "allowance",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "account",
			"type": "address"
		}
	],
	"name": "balanceOf",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "contractTotalSupply",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "daiToken",
	"outputs": [
		{
			"internalType": "contract IERC20",
			"name": "",
			"type": "address"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "uint256",
			"name": "daiAmount",
			"type": "uint256"
		}
	],
	"name": "daiToTokens",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "decimals",
	"outputs": [
		{
			"internalType": "uint8",
			"name": "",
			"type": "uint8"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "",
			"type": "address"
		}
	],
	"name": "dislikeCount",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "uint256",
			"name": "daiAmount",
			"type": "uint256"
		}
	],
	"name": "estimateBuy",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "uint256",
			"name": "tokenAmount",
			"type": "uint256"
		}
	],
	"name": "estimateSell",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "uint256",
			"name": "userNumber",
			"type": "uint256"
		}
	],
	"name": "getAddressByNumber",
	"outputs": [
		{
			"internalType": "address",
			"name": "",
			"type": "address"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "user",
			"type": "address"
		}
	],
	"name": "getAncestors",
	"outputs": [
		{
			"internalType": "address[]",
			"name": "",
			"type": "address[]"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "user",
			"type": "address"
		}
	],
	"name": "getChildrenCount",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "getContractdaiBalance",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "getContractTokenBalance",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "executor",
			"type": "address"
		}
	],
	"name": "getDownlineUsers",
	"outputs": [
		{
			"internalType": "address[]",
			"name": "",
			"type": "address[]"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "user",
			"type": "address"
		}
	],
	"name": "getEstimatedReward",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		},
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		},
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "user",
			"type": "address"
		}
	],
	"name": "getLeftChild",
	"outputs": [
		{
			"internalType": "address",
			"name": "",
			"type": "address"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "user",
			"type": "address"
		}
	],
	"name": "getLevel",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "getMyTokenBalance",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "user",
			"type": "address"
		}
	],
	"name": "getParent",
	"outputs": [
		{
			"internalType": "address",
			"name": "",
			"type": "address"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "user",
			"type": "address"
		}
	],
	"name": "getPenaltyPercentage",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "user",
			"type": "address"
		}
	],
	"name": "getPointUpgradeCost",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "getPointValue",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "getRegPrice",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "user",
			"type": "address"
		}
	],
	"name": "getRightChild",
	"outputs": [
		{
			"internalType": "address",
			"name": "",
			"type": "address"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "getTokenPrice",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "user",
			"type": "address"
		}
	],
	"name": "getUserLastClaimTime",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "user",
			"type": "address"
		}
	],
	"name": "getUserNumber",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "user",
			"type": "address"
		}
	],
	"name": "getUserTokenBalance",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "user",
			"type": "address"
		}
	],
	"name": "getUserTree",
	"outputs": [
		{
			"internalType": "address",
			"name": "left",
			"type": "address"
		},
		{
			"internalType": "address",
			"name": "right",
			"type": "address"
		},
		{
			"internalType": "uint256",
			"name": "binaryPoints",
			"type": "uint256"
		},
		{
			"internalType": "uint256",
			"name": "binaryPointCap",
			"type": "uint256"
		},
		{
			"internalType": "uint256",
			"name": "refclimed",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "user",
			"type": "address"
		}
	],
	"name": "getVoteStatus",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "totalLikes",
			"type": "uint256"
		},
		{
			"internalType": "uint256",
			"name": "totalDislikes",
			"type": "uint256"
		},
		{
			"internalType": "uint8",
			"name": "userVoteStatus",
			"type": "uint8"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "user",
			"type": "address"
		}
	],
	"name": "hasBothChildrenEmpty",
	"outputs": [
		{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "ancestor",
			"type": "address"
		},
		{
			"internalType": "address",
			"name": "descendant",
			"type": "address"
		}
	],
	"name": "isAncestor",
	"outputs": [
		{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "ancestor",
			"type": "address"
		},
		{
			"internalType": "address",
			"name": "descendant",
			"type": "address"
		}
	],
	"name": "isInDownline",
	"outputs": [
		{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "",
			"type": "address"
		}
	],
	"name": "likeCount",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "MAX_BINARY_POINT_CAP",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "name",
	"outputs": [
		{
			"internalType": "string",
			"name": "",
			"type": "string"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"name": "numToAddress",
	"outputs": [
		{
			"internalType": "address",
			"name": "",
			"type": "address"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "symbol",
	"outputs": [
		{
			"internalType": "string",
			"name": "",
			"type": "string"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "uint256",
			"name": "tokenAmount",
			"type": "uint256"
		}
	],
	"name": "tokensTodai",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "totalClaimableBinaryPoints",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "totalClaimablePoints",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "totalSupply",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "",
			"type": "address"
		}
	],
	"name": "users",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "num",
			"type": "uint256"
		},
		{
			"internalType": "address",
			"name": "parent",
			"type": "address"
		},
		{
			"internalType": "address",
			"name": "leftChild",
			"type": "address"
		},
		{
			"internalType": "address",
			"name": "rightChild",
			"type": "address"
		},
		{
			"internalType": "uint256",
			"name": "binaryPoints",
			"type": "uint256"
		},
		{
			"internalType": "uint256",
			"name": "binaryPointCap",
			"type": "uint256"
		},
		{
			"internalType": "uint256",
			"name": "binaryPointsClaimed",
			"type": "uint256"
		},
		{
			"internalType": "uint256",
			"name": "totalPurchasedKind",
			"type": "uint256"
		},
		{
			"internalType": "uint256",
			"name": "upgradeTime",
			"type": "uint256"
		},
		{
			"internalType": "uint256",
			"name": "lastClaimTime",
			"type": "uint256"
		},
		{
			"internalType": "uint256",
			"name": "leftPoints",
			"type": "uint256"
		},
		{
			"internalType": "uint256",
			"name": "rightPoints",
			"type": "uint256"
		},
		{
			"internalType": "uint256",
			"name": "refclimed",
			"type": "uint256"
		},
		{
			"internalType": "uint256",
			"name": "registrationDate",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
		{
			"internalType": "address",
			"name": "",
			"type": "address"
		},
		{
			"internalType": "address",
			"name": "",
			"type": "address"
		}
	],
	"name": "userVotes",
	"outputs": [
		{
			"internalType": "uint8",
			"name": "",
			"type": "uint8"
		}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "wallets",
	"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
}
];

// Ensure ABI is available globally from config
if (!window.IAM_ABI || !Array.isArray(window.IAM_ABI) || window.IAM_ABI.length === 0) {
    window.IAM_ABI = MIN_IAM_ABI;
}

// Helpers to access ABI and split functions
window.getCurrentAbi = function() {
    return Array.isArray(window.IAM_ABI) && window.IAM_ABI.length ? window.IAM_ABI : MIN_IAM_ABI;
};
window.getAbiFunctions = function() {
    const abi = window.getCurrentAbi();
    const read = abi.filter(x => x.type === 'function' && (x.stateMutability === 'view' || x.stateMutability === 'pure'));
    const write = abi.filter(x => x.type === 'function' && !(x.stateMutability === 'view' || x.stateMutability === 'pure'));
    return { read, write };
};

// Getter for current IAM address
window.getIAMAddress = function() {
    return IAM_ADDRESS;
};

// Setter to change IAM address at runtime and persist it
window.setIAMAddress = async function(newAddress) {
    try {
        if (!newAddress || typeof newAddress !== 'string') throw new Error('آدرس نامعتبر است');
        if (window.ethers && typeof ethers.isAddress === 'function') {
            if (!ethers.isAddress(newAddress)) throw new Error('فرمت آدرس صحیح نیست');
        }
        IAM_ADDRESS = newAddress;
        window.IAM_ADDRESS = IAM_ADDRESS;
        try { localStorage.setItem('iam_selected_address', IAM_ADDRESS); } catch {}
        if (window.contractConfig && window.contractConfig.signer) {
            const abiToUse = (window.IAM_ABI && Array.isArray(window.IAM_ABI)) ? window.IAM_ABI : MIN_IAM_ABI;
            const { signer } = window.contractConfig;
            const contract = new ethers.Contract(IAM_ADDRESS, abiToUse, signer);
            window.contractConfig.IAM_ADDRESS = IAM_ADDRESS;
            window.contractConfig.contract = contract;
            // Optionally refresh meta, but keep it light unless needed
            try {
                if (!window.SKIP_META) {
                    const meta = await loadContractVariables(contract);
                    window.contractConfig.meta = meta;
                }
            } catch {}
        }
        return IAM_ADDRESS;
    } catch (e) {
        throw e;
    }
};

// Allow replacing ABI at runtime
window.setIAMAbi = function(newAbiArray) {
    if (Array.isArray(newAbiArray) && newAbiArray.length > 0) {
        window.IAM_ABI = newAbiArray;
    }
};

// Helper: load common contract variables via ABI (best-effort)
async function loadContractVariables(contract) {
    const meta = {};
    const tryCall = async (name, fn, transform) => {
        try {
            if (typeof contract[fn] === 'function') {
                const v = await contract[fn]();
                meta[name] = transform ? transform(v) : v;
            }
        } catch {}
    };
    await tryCall('name', 'name');
    await tryCall('symbol', 'symbol');
    await tryCall('decimals', 'decimals', v => (typeof v === 'bigint' ? Number(v) : Number(v)));
    await tryCall('totalSupply', 'totalSupply', v => (window.ethers && ethers.formatUnits ? ethers.formatUnits(v, 18) : String(v)));
    await tryCall('owner', 'owner');
    await tryCall('deployer', 'deployer');
    // total users (various common names)
    await tryCall('totalUsers', 'totalUsers', v => v.toString());
    if (meta.totalUsers === undefined) await tryCall('totalUsers', 'getTotalUsers', v => v.toString());
    if (meta.totalUsers === undefined) await tryCall('totalUsers', 'usersCount', v => v.toString());
    // Try to detect DAI address if exposed by contract
    await tryCall('daiAddress', 'dai');
    if (meta.daiAddress === undefined) await tryCall('daiAddress', 'daiAddress');
    return meta;
}

// Provide a single source of truth for wallet connection from config
window.connectWallet = async function() {
    if (!window.ethereum) {
        throw new Error('MetaMask/ethereum provider در دسترس نیست');
    }

    // Return cached connection if valid
    if (window.contractConfig && window.contractConfig.contract && window.contractConfig.signer && window.contractConfig.address) {
        try {
            const currentAddress = await window.contractConfig.signer.getAddress();
            if (currentAddress && currentAddress.toLowerCase() === window.contractConfig.address.toLowerCase()) {
                return window.contractConfig;
            }
        } catch {}
    }

    // Request accounts and build connection
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const address = accounts && accounts[0] ? accounts[0] : null;
    if (!address) throw new Error('هیچ آدرسی از کیف پول دریافت نشد');

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    // Build contract with minimal ABI
    const contract = new ethers.Contract(IAM_ADDRESS, MIN_IAM_ABI, signer);
    // Optionally skip metadata reads to avoid noisy RPC errors on pages that don't need them
    let meta = {};
    if (!window.SKIP_META) {
        try { meta = await loadContractVariables(contract); } catch { meta = {}; }
    }

    window.contractConfig = {
        IAM_ADDRESS,
        DAI_ADDRESS: meta.daiAddress || DAI_ADDRESS,
        provider,
        signer,
        contract,
		address,
        meta,
    };

    return window.contractConfig;
};

// Reload contract instance if ABI changes or without reconnecting wallet
window.reloadContractWithAbi = function(newAbi) {
    if (Array.isArray(newAbi) && newAbi.length > 0) {
        window.IAM_ABI = newAbi;
    }
    const abiToUse = (window.IAM_ABI && Array.isArray(window.IAM_ABI)) ? window.IAM_ABI : MIN_IAM_ABI;
    if (!window.contractConfig || !window.contractConfig.signer) {
        throw new Error('ابتدا connectWallet را فراخوانی کنید');
    }
    const { signer } = window.contractConfig;
    const contract = new ethers.Contract(IAM_ADDRESS, abiToUse, signer);
    window.contractConfig.contract = contract;
    return contract;
};

// Generic read call helper
window.callRead = async function(functionName, ...args) {
    const cfg = window.contractConfig || {};
    const contract = cfg.contract;
    if (!contract) throw new Error('قرارداد در دسترس نیست. ابتدا connectWallet را اجرا کنید');
    if (typeof contract[functionName] !== 'function') throw new Error(`تابع ${functionName} در ABI یافت نشد`);
    return await contract[functionName](...args);
};

// Generic write call helper (waits for confirmation)
window.sendWrite = async function(functionName, ...args) {
    const cfg = window.contractConfig || {};
    const contract = cfg.contract;
    if (!contract) throw new Error('قرارداد در دسترس نیست. ابتدا connectWallet را اجرا کنید');
    if (typeof contract[functionName] !== 'function') throw new Error(`تابع ${functionName} در ABI یافت نشد`);
    const tx = await contract[functionName](...args);
    return await tx.wait();
};

// Read/write by full signature to support overloaded functions
window.callReadSignature = async function(signature, ...args) {
    const cfg = window.contractConfig || {};
    const contract = cfg.contract;
    if (!contract) throw new Error('قرارداد در دسترس نیست. ابتدا connectWallet را اجرا کنید');
    try {
        const fn = contract.getFunction(signature);
        return await fn(...args);
    } catch (e) {
        throw new Error(`فراخوانی خواندنی ${signature} ناموفق بود: ${e.message||e}`);
    }
};

window.sendWriteSignature = async function(signature, ...args) {
    const cfg = window.contractConfig || {};
    const contract = cfg.contract;
    if (!contract) throw new Error('قرارداد در دسترس نیست. ابتدا connectWallet را اجرا کنید');
    try {
        const fn = contract.getFunction(signature);
        const tx = await fn(...args);
        return await tx.wait();
    } catch (e) {
        throw new Error(`ارسال تراکنش ${signature} ناموفق بود: ${e.message||e}`);
    }
};

