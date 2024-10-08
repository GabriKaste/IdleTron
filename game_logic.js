let totalCoins = 999;
let coinsPerSecond = 0;
let producers = [{
        name: "Hacker Laptop",
        amount: 0,
        revenue: 1,
        delay: 1000,
        cost: 4,
        baseRevenue: 1,
        coefficient: 1.15,
        managerCost: 1000,
        managerActive: false,
        amountId: "hackerAmount",
        costId: "hackerCost",
        revenueId: "hackerRevenue"
    },
    {
        name: "PC Miner",
        amount: 0,
        revenue: 20,
        delay: 3000,
        cost: 60,
        baseRevenue: 20,
        coefficient: 1.15,
        managerCost: 15000,
        managerActive: false,
        amountId: "pcAmount",
        costId: "pcCost",
        revenueId: "pcRevenue"
    },
    {
        name: "GPU Setup",
        amount: 0,
        revenue: 90,
        delay: 6000,
        cost: 720,
        baseRevenue: 90,
        coefficient: 1.15,
        managerCost: 100000,
        managerActive: false,
        amountId: "gpuAmount",
        costId: "gpuCost",
        revenueId: "gpuRevenue"
    },
    {
        name: "Cloud Mining",
        amount: 0,
        revenue: 250,
        delay: 10000,
        cost: 5000,
        baseRevenue: 250,
        coefficient: 1.15,
        managerCost: 500000,
        managerActive: false,
        amountId: "cloudMiningAmount",
        costId: "cloudMiningCost",
        revenueId: "cloudMiningRevenue"
    },
    {
        name: "Warehouse",
        amount: 0,
        revenue: 1000,
        delay: 30000,
        cost: 20000,
        baseRevenue: 1000,
        coefficient: 1.15,
        managerCost: 2000000,
        managerActive: false,
        amountId: "warehouseAmount",
        costId: "warehouseCost",
        revenueId: "warehouseRevenue"
    },
    {
        name: "AI Trader",
        amount: 0,
        revenue: 5000,
        delay: 60000,
        cost: 100000,
        baseRevenue: 5000,
        coefficient: 1.15,
        managerCost: 10000000,
        managerActive: false,
        amountId: "aiTraderAmount",
        costId: "aiTraderCost",
        revenueId: "aiTraderRevenue"
    },
    {
        name: "Facility",
        amount: 0,
        revenue: 25000,
        delay: 120000,
        cost: 500000,
        baseRevenue: 25000,
        coefficient: 1.15,
        managerCost: 50000000,
        managerActive: false,
        amountId: "facilityAmount",
        costId: "facilityCost",
        revenueId: "facilityRevenue"
    },
    {
        name: "Metaverse",
        amount: 0,
        revenue: 50000,
        delay: 300000,
        cost: 1000000,
        baseRevenue: 50000,
        coefficient: 1.15,
        managerCost: 200000000,
        managerActive: false,
        amountId: "metaverseAmount",
        costId: "metaverseCost",
        revenueId: "metaverseRevenue"
    },
    {
        name: "VR Station",
        amount: 0,
        revenue: 250000,
        delay: 600000,
        cost: 5000000,
        baseRevenue: 250000,
        coefficient: 1.15,
        managerCost: 1000000000,
        managerActive: false,
        amountId: "vrStationAmount",
        costId: "vrStationCost",
        revenueId: "vrStationRevenue"
    },
    {
        name: "Quantum Miner",
        amount: 0,
        revenue: 500000,
        delay: 1200000,
        cost: 10000000,
        baseRevenue: 500000,
        coefficient: 1.15,
        managerCost: 5000000000,
        managerActive: false,
        amountId: "quantumMinerAmount",
        costId: "quantumMinerCost",
        revenueId: "quantumMinerRevenue"
    }
];

const contractABI = [{
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalCoins",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256[10]",
                "name": "producerAmounts",
                "type": "uint256[10]"
            },
            {
                "indexed": false,
                "internalType": "uint256[10]",
                "name": "producerCosts",
                "type": "uint256[10]"
            },
            {
                "indexed": false,
                "internalType": "uint256[10]",
                "name": "producerRevenues",
                "type": "uint256[10]"
            },
            {
                "indexed": false,
                "internalType": "bool[10]",
                "name": "managerStatuses",
                "type": "bool[10]"
            }
        ],
        "name": "UserProgressUpdated",
        "type": "event"
    },
    {
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
            },
            {
                "internalType": "uint256[10]",
                "name": "producerAmounts",
                "type": "uint256[10]"
            },
            {
                "internalType": "uint256[10]",
                "name": "producerCosts",
                "type": "uint256[10]"
            },
            {
                "internalType": "uint256[10]",
                "name": "producerRevenues",
                "type": "uint256[10]"
            },
            {
                "internalType": "bool[10]",
                "name": "managerStatuses",
                "type": "bool[10]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "_totalCoins",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_coinsPerSecond",
                "type": "uint256"
            },
            {
                "internalType": "uint256[10]",
                "name": "_producerAmounts",
                "type": "uint256[10]"
            },
            {
                "internalType": "uint256[10]",
                "name": "_producerCosts",
                "type": "uint256[10]"
            },
            {
                "internalType": "uint256[10]",
                "name": "_producerRevenues",
                "type": "uint256[10]"
            },
            {
                "internalType": "bool[10]",
                "name": "_managerStatuses",
                "type": "bool[10]"
            }
        ],
        "name": "saveProgress",
        "outputs": [],
        "stateMutability": "nonpayable",
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

function formatNumber(num) {
    if (num >= 1e30) return (num / 1e30).toFixed(2) + 'N';
    if (num >= 1e27) return (num / 1e27).toFixed(2) + 'O';
    if (num >= 1e24) return (num / 1e24).toFixed(2) + 'Y';
    if (num >= 1e21) return (num / 1e21).toFixed(2) + 'Z';
    if (num >= 1e18) return (num / 1e18).toFixed(2) + 'E';
    if (num >= 1e15) return (num / 1e15).toFixed(2) + 'P';
    if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'k';
    return num.toFixed(2);
}

const totalCoinsElement = document.getElementById('totalCoins');
const coinsPerSecondElement = document.getElementById('coinsPerSecond');
let userAddress = null;
let web3;
let contractInstance;
let boostContractInstance;
let boostProducerInstance;

const boostContractABI = [{
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "boostDuration",
                "type": "uint256"
            }
        ],
        "name": "BoostActivated",
        "type": "event"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "durationInSeconds",
            "type": "uint256"
        }],
        "name": "activateBoost",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const boostContractAddress = '0x75c4E8aa2A360cb1Acef3F2302359E07cB01b87C';

const boostProducerABI = [{
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "producerIndex",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "boostAmount",
                "type": "uint256"
            }
        ],
        "name": "ProducerBoosted",
        "type": "event"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "producerIndex",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "boostAmount",
                "type": "uint256"
            }
        ],
        "name": "boostProducer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const boostProducerAddress = '0xB9CbFdc75E644b0dCaBd68F26519167d3e0299Aa';

const productionIntervals = [];

document.getElementById('connectMetaMaskButton').addEventListener('click', connectMetaMask);

async function connectMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            userAddress = accounts[0];
            document.getElementById('userAddressDisplay').innerText = `Account: ${userAddress}`;
            document.getElementById('gameContent').style.display = 'block';
            document.querySelector('.start-game').style.display = 'none';
            web3 = new Web3(window.ethereum);

            contractInstance = new web3.eth.Contract(contractABI, contractAddress);
            console.log("Contract Instance:", contractInstance);

            boostContractInstance = new web3.eth.Contract(boostContractABI, boostContractAddress);
            console.log("Boost Contract Instance:", boostContractInstance);

            boostProducerInstance = new web3.eth.Contract(boostProducerABI, boostProducerAddress);
            console.log("Boost Contract Instance:", boostProducerInstance);

            await loadUserProgress();
            document.getElementById('saveProgressButton').disabled = false;
        } catch (error) {
            console.error("User rejected the request or no accounts found", error);
        }
    } else {
        alert("MetaMask not detected. Please install MetaMask.");
    }
}

async function loadUserProgress() {
    try {
        const userData = await contractInstance.methods.loadProgress().call({
            from: userAddress
        });

        totalCoins = Number(userData.totalCoins);
        if (totalCoins == 0) {
            totalCoins = 999;
            updateTotalCoinsDisplay();
        }

        coinsPerSecond = Number(userData.coinsPerSecond);
        const producerAmounts = userData.producerAmounts;
        const producerCosts = userData.producerCosts;
        const producerRevenues = userData.producerRevenues;
        const managerStatuses = userData.managerStatuses;

        for (let i = 0; i < producers.length; i++) {
            producers[i].amount = Number(producerAmounts[i]);
            producers[i].cost = Number(producerCosts[i]) || producers[i].cost;
            producers[i].revenue = Number(producerRevenues[i]) || producers[i].revenue;
            producers[i].managerActive = managerStatuses[i];

            document.getElementById(producers[i].amountId).innerText = producers[i].amount;
            document.getElementById(producers[i].costId).innerText = producers[i].cost.toFixed(2);
            document.getElementById(producers[i].revenueId).innerText = producers[i].revenue.toFixed(2);
        }

        document.querySelectorAll('.buyManager').forEach((button, index) => {
            if (producers[index].managerActive) {
                button.disabled = true;
            }
        });

        updateTotalCoinsDisplay();
        updateCoinsPerSecond();
    } catch (error) {
        console.error("Error loading user progress:", error);
    }
}

document.querySelectorAll('.producer-image').forEach((image, index) => {
    image.addEventListener('click', () => {
        const producer = producers[index];
        const imageElement = image;

        if (!producer.managerActive && producer.amount > 0) {
            totalCoins += producer.revenue;
            updateTotalCoinsDisplay();

            imageElement.classList.add('cooldown');
            imageElement.style.pointerEvents = 'none';

            setTimeout(() => {
                imageElement.classList.remove('cooldown');
                imageElement.style.pointerEvents = 'auto';
            }, producer.delay);
        }
    });
});

document.querySelectorAll('.buyProducer').forEach(button => {
    button.onclick = function() {
        const cost = parseFloat(this.getAttribute('data-cost'));
        const index = parseInt(this.getAttribute('data-index'));
        const producer = producers[index];

        if (totalCoins >= cost) {
            totalCoins -= cost;
            updateTotalCoinsDisplay();

            producer.amount++;
            document.getElementById(producer.amountId).innerText = producer.amount;

            producer.cost *= producer.coefficient;
            producer.revenue = producer.baseRevenue * producer.amount;
            document.getElementById(producer.costId).innerText = producer.cost.toFixed(2);
            document.getElementById(producer.revenueId).innerText = producer.revenue.toFixed(2);

            this.setAttribute('data-cost', producer.cost.toFixed(2));

            updateCoinsPerSecond();

            const producerImage = document.getElementById(`producerImage${index}`);
            if (producerImage) {
                producerImage.style.pointerEvents = 'auto';
            } else {
                console.error(`Element with ID producerImage${index} not found.`);
            }
        } else {
            alert("Not enough coins!");
        }
    };
});

document.querySelectorAll('.buyManager').forEach((button, index) => {
    button.addEventListener('click', async () => {
        const managerCost = parseFloat(button.getAttribute('data-cost'));
        const producer = producers[index];

        if (totalCoins >= managerCost && producer.amount > 0) {
            totalCoins -= managerCost;
            producer.managerActive = true;
            updateTotalCoinsDisplay();
            updateCoinsPerSecond();

            button.disabled = true;

            const producerImage = document.getElementById(`producerImage${index}`);
            producerImage.classList.add('disabled');
            producerImage.style.pointerEvents = 'none';

            if (index === 0) {
                document.querySelectorAll('.producer-image').forEach((image) => {
                    image.style.pointerEvents = 'none';
                });
            }

            autoProduction(producer, index);
        } else {
            alert("Not enough coins or no producers to activate the manager.");
        }
    });
});

function autoProduction(producer, index) {

    if (!productionIntervals[index]) {

        productionIntervals[index] = setInterval(() => {
            if (producer.managerActive) {
                totalCoins += producer.revenue;
                updateTotalCoinsDisplay();
            }
        }, 1000);
    }
}

function updateTotalCoinsDisplay() {
    totalCoinsElement.innerText = formatNumber(totalCoins);
}

function updateCoinsPerSecond() {
    coinsPerSecond = producers.reduce((total, producer) => {
        return total + (producer.managerActive ? (producer.revenue) / (producer.delay / 1000) : 0);
    }, 0);
    coinsPerSecondElement.innerText = formatNumber(coinsPerSecond);
}

setInterval(() => {
    totalCoins += coinsPerSecond;
    updateTotalCoinsDisplay();
}, 1000);

async function saveUserProgress() {
    try {
        if (userAddress && contractInstance) {
            const producerAmounts = producers.map(producer => Math.round(producer.amount));
            const producerCosts = producers.map(producer => Math.round(producer.cost));
            const producerRevenues = producers.map(producer => Math.round(producer.revenue));
            const managerStatuses = producers.map(producer => producer.managerActive);

            const totalCoinsInteger = Math.round(totalCoins);
            const coinsPerSecondInteger = Math.round(coinsPerSecond);

            const estimatedGas = await contractInstance.methods.saveProgress(
                totalCoinsInteger,
                coinsPerSecondInteger,
                producerAmounts,
                producerCosts,
                producerRevenues,
                managerStatuses
            ).estimateGas({
                from: userAddress
            });

            const gasPrice = await web3.eth.getGasPrice();

            const response = await contractInstance.methods.saveProgress(
                totalCoinsInteger,
                coinsPerSecondInteger,
                producerAmounts,
                producerCosts,
                producerRevenues,
                managerStatuses
            ).send({
                from: userAddress,
                gas: estimatedGas,
                gasPrice: gasPrice
            });

            console.log("Progress saved:", response);
        }
    } catch (error) {
        console.error("Error saving user progress:", error);
    }
}

document.querySelectorAll('.upgrade-item-time').forEach((item) => {
    item.addEventListener('click', async () => {
        let boostDuration;

        if (item.children[0].alt.includes("1 Hour")) {
            boostDuration = 3600;
        } else if (item.children[0].alt.includes("4 Hour")) {
            boostDuration = 14400;
        } else if (item.children[0].alt.includes("1 Day")) {
            boostDuration = 86400;
        } else {
            console.error("Unknown boost type.");
            return;
        }

        try {
            const estimatedGas = await boostContractInstance.methods.activateBoost(boostDuration).estimateGas({
                from: userAddress
            });
            const gasPrice = await web3.eth.getGasPrice();

            const response = await boostContractInstance.methods.activateBoost(boostDuration).send({
                from: userAddress,
                gas: estimatedGas,
                gasPrice: gasPrice
            });

            console.log("Boost activated:", response);

            totalCoins += coinsPerSecond * boostDuration;
            updateTotalCoinsDisplay();
        } catch (error) {
            console.error("Error activating boost:", error);
        }
    });
});

document.querySelectorAll('.upgrade-item_increment').forEach((item, index) => {
    item.addEventListener('click', async () => {
        let boostAmount = parseInt(item.querySelector('p').innerText);
        let producerIndex = Math.floor(index / 3);

        try {

            const estimatedGas = await boostProducerInstance.methods.boostProducer(producerIndex, boostAmount).estimateGas({
                from: userAddress
            });

            const gasPrice = await web3.eth.getGasPrice();

            const response = await boostProducerInstance.methods.boostProducer(producerIndex, boostAmount).send({
                from: userAddress,
                gas: estimatedGas,
                gasPrice: gasPrice
            });

            console.log("Boost activated:", response);

            producers[producerIndex].amount += boostAmount;
            producers[producerIndex].cost *= producers[producerIndex].coefficient;
            producers[producerIndex].revenue = producers[producerIndex].baseRevenue * producers[producerIndex].amount;

            document.getElementById(producers[producerIndex].amountId).innerText = producers[producerIndex].amount;
            document.getElementById(producers[producerIndex].costId).innerText = producers[producerIndex].cost.toFixed(2);
            document.getElementById(producers[producerIndex].revenueId).innerText = producers[producerIndex].revenue.toFixed(2);

            updateTotalCoinsDisplay();
            updateCoinsPerSecond();
        } catch (error) {
            console.error("Error activating boost:", error);
        }
    });
});

document.getElementById('saveProgressButton').addEventListener('click', saveUserProgress);