const contractABI = [{
    "inputs": [],
    "name": "loadProgress",
    "outputs": [{
            "internalType": "uint256",
            "name": "totalCoins",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "coinsPerSecond",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "users",
    "outputs": [{
            "internalType": "uint256",
            "name": "totalCoins",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "coinsPerSecond",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
}
];

const contractAddress = '0x9e1225C9920cd29036Cd451A5B687beC96176124';
let web3;
let contractInstance;
let userAddress;
const BTTC_SCAN_API = "https://api.bttcscan.com/api";
const API_KEY = "YourApiKeyToken";

async function initializeWeb3() {
if (typeof window.ethereum !== 'undefined') {
    web3 = new Web3(window.ethereum);
    const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
    });
    userAddress = accounts[0];
    contractInstance = new web3.eth.Contract(contractABI, contractAddress);

    document.getElementById("user-address").innerText = `Connected Address: ${userAddress}`;

    fetchRegisteredAddresses();
} else {
    alert("Please install MetaMask to view the leaderboard.");
}
}

async function fetchRegisteredAddresses() {
try {
    const response = await fetch(`${BTTC_SCAN_API}?module=account&action=txlist&address=${contractAddress}&sort=asc&apikey=${API_KEY}`);
    const data = await response.json();

    if (data.status !== "1") {
        console.error("Error fetching addresses:", data.message);
        return;
    }

    const uniqueAddresses = [...new Set(data.result.map(tx => tx.from))];
    loadLeaderboard(uniqueAddresses);
} catch (error) {
    console.error("Error loading addresses:", error);
}
}

async function loadLeaderboard(userAddresses) {
try {
    const playersData = [];

    for (let address of userAddresses) {
        const userData = await contractInstance.methods.users(address).call();
        playersData.push({
            address: address,
            totalCoins: parseInt(userData.totalCoins),
            coinsPerSecond: parseInt(userData.coinsPerSecond)
        });
    }

    playersData.sort((a, b) => b.totalCoins - a.totalCoins);

    const leaderboardBody = document.getElementById("leaderboard-body");
    leaderboardBody.innerHTML = "";

    playersData.forEach((player, index) => {
        const row = document.createElement("tr");

        if (player.address.toLowerCase() === userAddress.toLowerCase()) {
            row.classList.add("highlighted-row");
        }

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.address}</td>
            <td>${player.totalCoins.toLocaleString()}</td>
            <td>${player.coinsPerSecond.toLocaleString()}/s</td>
        `;

        leaderboardBody.appendChild(row);
    });
} catch (error) {
    console.error("Error loading leaderboard:", error);
}
}

window.addEventListener("load", function() {
document.body.classList.add("loaded");
});

window.onload = initializeWeb3;