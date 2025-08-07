// Contract ABI that matches CRVoting.sol
const CONTRACT_ABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_className",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_subject",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "candidateId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "rollNumber",
                "type": "string"
            }
        ],
        "name": "CandidateAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "candidateId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "votes",
                "type": "uint256"
            }
        ],
        "name": "CRElected",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "student",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "rollNumber",
                "type": "string"
            }
        ],
        "name": "StudentRegistered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "voter",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "candidateId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "voterRoll",
                "type": "string"
            }
        ],
        "name": "VoteCast",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "VotingStarted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "VotingStopped",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_rollNumber",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_slogan",
                "type": "string"
            }
        ],
        "name": "addCandidate",
        "outputs": [],
        "stateMutability": "nonpayable",
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
        "name": "candidateIds",
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
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "candidates",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "rollNumber",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "slogan",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "voteCount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "candidatesCount",
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
        "name": "className",
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
        "inputs": [],
        "name": "getAllCandidates",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            },
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            },
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_candidateId",
                "type": "uint256"
            }
        ],
        "name": "getCandidate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
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
        "inputs": [],
        "name": "getElectionInfo",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
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
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
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
        "name": "getRegisteredStudents",
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
        "inputs": [],
        "name": "getResults",
        "outputs": [
            {
                "internalType": "string",
                "name": "winnerName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "winnerRoll",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "winnerVotes",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalVotesCount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "voterTurnout",
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
                "name": "_student",
                "type": "address"
            }
        ],
        "name": "getStudentInfo",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
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
        "inputs": [],
        "name": "getWinner",
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
                "name": "_student",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_rollNumber",
                "type": "string"
            }
        ],
        "name": "registerStudent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "_students",
                "type": "address[]"
            },
            {
                "internalType": "string[]",
                "name": "_rollNumbers",
                "type": "string[]"
            }
        ],
        "name": "registerMultipleStudents",
        "outputs": [],
        "stateMutability": "nonpayable",
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
        "name": "registeredStudents",
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
        "name": "startVoting",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "stopVoting",
        "outputs": [],
        "stateMutability": "nonpayable",
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
        "name": "students",
        "outputs": [
            {
                "internalType": "bool",
                "name": "isRegistered",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "hasVoted",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "votedCandidateId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "rollNumber",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "subject",
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
        "inputs": [],
        "name": "teacher",
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
        "name": "totalStudents",
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
        "name": "totalVotes",
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
                "name": "_candidateId",
                "type": "uint256"
            }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_newTeacher",
                "type": "address"
            }
        ],
        "name": "transferTeacher",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "votingActive",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

let CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// Global variables
let provider;
let signer;
let contract;
let userAccount;
let selectedCandidateId = null;

// Initialize the app
window.addEventListener('load', async () => {
    console.log('App loading...');
    await loadDeploymentInfo();
    setupEventListeners();
    await initializeWeb3();
});

async function loadDeploymentInfo() {
    try {
        const response = await fetch('./deployInfo.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const deployInfo = await response.json();
        CONTRACT_ADDRESS = deployInfo.contractAddress;
        console.log('Loaded contract address:', CONTRACT_ADDRESS);
        
        // Load class information
        document.getElementById('className').textContent = deployInfo.className || 'Class Election';
        document.getElementById('subjectName').textContent = deployInfo.subject || 'Blockchain Voting';
        
    } catch (error) {
        console.error('Could not load deployment info:', error);
        showError('Could not load contract deployment information. Please make sure the contract is deployed and deployInfo.json exists.');
    }
}

function setupEventListeners() {
    document.getElementById('connectWallet').addEventListener('click', connectWallet);
    document.getElementById('voteButton').addEventListener('click', castVote);
    document.getElementById('refreshResults').addEventListener('click', loadResults);
    document.getElementById('startVoting').addEventListener('click', startVoting);
    document.getElementById('stopVoting').addEventListener('click', stopVoting);
    document.getElementById('downloadResults').addEventListener('click', downloadResults);
    
    // Add network change listener
    if (window.ethereum) {
        window.ethereum.on('chainChanged', handleChainChanged);
        window.ethereum.on('accountsChanged', handleAccountsChanged);
    }
}

async function initializeWeb3() {
    console.log('Initializing Web3...');
    
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask detected');
        
        try {
            provider = new ethers.BrowserProvider(window.ethereum);
            
            // Check if already connected
            const accounts = await window.ethereum.request({ 
                method: 'eth_accounts' 
            });
            
            if (accounts.length > 0) {
                console.log('Already connected to accounts:', accounts);
                await connectWallet();
            } else {
                console.log('No accounts connected');
            }
        } catch (error) {
            console.error('Error initializing Web3:', error);
            showError('Error initializing Web3: ' + error.message);
        }
    } else {
        showError('MetaMask is not installed. Please install MetaMask extension to use this DApp.');
        console.error('MetaMask not found');
    }
}

async function connectWallet() {
    try {
        console.log('Connecting wallet...');
        
        if (!window.ethereum) {
            throw new Error('MetaMask is not installed');
        }

        if (!provider) {
            provider = new ethers.BrowserProvider(window.ethereum);
        }

        // Request account access
        const accounts = await window.ethereum.request({ 
            method: 'eth_requestAccounts' 
        });
        
        if (accounts.length === 0) {
            throw new Error('No accounts returned from MetaMask');
        }

        console.log('Connected accounts:', accounts);
        
        signer = await provider.getSigner();
        userAccount = await signer.getAddress();
        console.log('User account:', userAccount);
        
        const network = await provider.getNetwork();
        console.log('Network:', network);
        
        // Check if we're on the correct network (Hardhat local network should have chainId 1337)
        if (network.chainId !== 1337n) {
            console.warn('Not connected to Hardhat network. Current chainId:', network.chainId);
            showError(`Please switch to Hardhat localhost network (Chain ID: 1337). Currently on Chain ID: ${network.chainId}`);
            return;
        }

        if (!CONTRACT_ADDRESS) {
            throw new Error('Contract address not loaded');
        }

        // Initialize contract
        contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
        console.log('Contract initialized:', contract);
        
        // Test contract connection
        try {
            const className = await contract.className();
            console.log('Contract test successful, class name:', className);
        } catch (contractError) {
            console.error('Contract connection test failed:', contractError);
            throw new Error(`Contract connection failed: ${contractError.message}`);
        }
        
        // Update UI
        document.getElementById('walletAddress').textContent = `${userAccount.slice(0, 6)}...${userAccount.slice(-4)}`;
        document.getElementById('networkName').textContent = network.name === 'unknown' ? `Hardhat (${network.chainId})` : network.name;
        document.getElementById('connectWallet').textContent = 'Connected';
        document.getElementById('connectWallet').disabled = true;
        document.getElementById('connectWallet').classList.add('btn-success');
        
        document.getElementById('walletInfo').classList.remove('hidden');
        document.getElementById('electionInfo').classList.remove('hidden');
        
        await loadElectionData();
        await loadResults();
        
        showSuccess('Wallet connected successfully!');
        
    } catch (error) {
        console.error('Error connecting wallet:', error);
        showError('Failed to connect wallet: ' + error.message);
    }
}

async function handleChainChanged(chainId) {
    console.log('Chain changed to:', chainId);
    // Reload the page to reset the state
    window.location.reload();
}

async function handleAccountsChanged(accounts) {
    console.log('Accounts changed:', accounts);
    if (accounts.length === 0) {
        // User disconnected wallet
        resetWalletState();
    } else if (accounts[0] !== userAccount) {
        // User switched accounts
        window.location.reload();
    }
}

function resetWalletState() {
    provider = null;
    signer = null;
    contract = null;
    userAccount = null;
    selectedCandidateId = null;
    
    document.getElementById('connectWallet').textContent = 'Connect MetaMask Wallet';
    document.getElementById('connectWallet').disabled = false;
    document.getElementById('connectWallet').classList.remove('btn-success');
    
    document.getElementById('walletInfo').classList.add('hidden');
    document.getElementById('electionInfo').classList.add('hidden');
    document.getElementById('votingSection').classList.add('hidden');
    document.getElementById('teacherSection').classList.add('hidden');
}

async function loadElectionData() {
    try {
        console.log('Loading election data...');
        
        const className = await contract.className();
        const votingActive = await contract.votingActive();
        const totalVotes = await contract.totalVotes();
        const teacher = await contract.teacher();
        const candidatesCount = await contract.candidatesCount();
        
        console.log('Election data loaded:', {
            className,
            votingActive,
            totalVotes: totalVotes.toString(),
            teacher,
            candidatesCount: candidatesCount.toString()
        });
        
        document.getElementById('className').textContent = className;
        document.getElementById('votingStatus').textContent = votingActive ? 'Active' : 'Inactive';
        document.getElementById('votingStatus').className = votingActive ? 'status active' : 'status inactive';
        document.getElementById('totalVotes').textContent = totalVotes.toString();
        
        // Check if current user is admin (teacher)
        if (userAccount && userAccount.toLowerCase() === teacher.toLowerCase()) {
            document.getElementById('teacherSection').classList.remove('hidden');
            console.log('User is admin/teacher');
        }
        
        // Get student info
        const [isRegistered, hasVoted, votedCandidateId, rollNumber] = await contract.getStudentInfo(userAccount);
        
        console.log('Student info:', {
            isRegistered,
            hasVoted,
            votedCandidateId: votedCandidateId.toString(),
            rollNumber
        });
        
        let statusText = '';
        
        if (!isRegistered) {
            statusText = 'Not Registered';
        } else if (hasVoted) {
            statusText = `Voted (Candidate #${votedCandidateId})`;
        } else {
            statusText = 'Eligible to Vote';
        }
        
        document.getElementById('studentStatus').textContent = statusText;
        document.getElementById('rollNumber').textContent = rollNumber || '-';
        
        // Calculate voter turnout
        try {
            const registeredStudents = await contract.getRegisteredStudents();
            const totalStudentsCount = registeredStudents.length;
            const turnout = totalStudentsCount > 0 ? ((Number(totalVotes) / totalStudentsCount) * 100).toFixed(1) : '0';
            
            document.getElementById('totalStudents').textContent = totalStudentsCount.toString();
            document.getElementById('voterTurnout').textContent = turnout + '%';
        } catch (error) {
            console.error('Error calculating turnout:', error);
            // Fallback to totalStudents from contract
            try {
                const totalStudentsFromContract = await contract.totalStudents();
                const turnout = Number(totalStudentsFromContract) > 0 ? ((Number(totalVotes) / Number(totalStudentsFromContract)) * 100).toFixed(1) : '0';
                document.getElementById('totalStudents').textContent = totalStudentsFromContract.toString();
                document.getElementById('voterTurnout').textContent = turnout + '%';
            } catch (fallbackError) {
                console.error('Error with fallback turnout calculation:', fallbackError);
                document.getElementById('totalStudents').textContent = '0';
                document.getElementById('voterTurnout').textContent = '0%';
            }
        }
        
        // Show voting section if eligible
        if (isRegistered && !hasVoted && votingActive) {
            await loadCandidates();
            document.getElementById('votingSection').classList.remove('hidden');
        }
        
    } catch (error) {
        console.error('Error loading election data:', error);
        showError('Failed to load election data: ' + error.message);
    }
}

async function loadCandidates() {
    try {
        console.log('Loading candidates...');
        
        const [ids, names, rollNumbers, slogans, voteCounts] = await contract.getAllCandidates();
        const candidatesList = document.getElementById('candidatesList');
        candidatesList.innerHTML = '';
        
        console.log('Candidates loaded:', {
            ids: ids.map(id => id.toString()),
            names,
            voteCounts: voteCounts.map(count => count.toString())
        });
        
        for (let i = 0; i < ids.length; i++) {
            const candidateDiv = document.createElement('div');
            candidateDiv.className = 'candidate-item';
            candidateDiv.innerHTML = `
                <input type="radio" name="candidate" value="${ids[i]}" id="candidate-${ids[i]}">
                <div class="candidate-info">
                    <div class="candidate-name">${names[i]}</div>
                    <div class="candidate-id">ID: ${ids[i]}</div>
                </div>
            `;
            
            candidateDiv.addEventListener('click', () => {
                document.getElementById(`candidate-${ids[i]}`).checked = true;
                selectedCandidateId = ids[i];
                
                // Update UI
                document.querySelectorAll('.candidate-item').forEach(item => {
                    item.classList.remove('selected');
                });
                candidateDiv.classList.add('selected');
                
                document.getElementById('voteButton').classList.remove('hidden');
            });
            
            candidatesList.appendChild(candidateDiv);
        }
    } catch (error) {
        console.error('Error loading candidates:', error);
        showError('Failed to load candidates: ' + error.message);
    }
}

async function loadResults() {
    try {
        console.log('Loading results...');
        
        const [ids, names, rollNumbers, slogans, voteCounts] = await contract.getAllCandidates();
        const totalVotes = await contract.totalVotes();
        const resultsContainer = document.getElementById('resultsContainer');
        resultsContainer.innerHTML = '';
        
        const totalVotesNum = Number(totalVotes);
        let maxVotes = 0;
        let winnerIndex = -1;
        
        for (let i = 0; i < ids.length; i++) {
            const voteCount = Number(voteCounts[i]);
            const percentage = totalVotesNum > 0 ? (voteCount / totalVotesNum * 100).toFixed(1) : 0;
            
            if (voteCount > maxVotes) {
                maxVotes = voteCount;
                winnerIndex = i;
            }
            
            const resultDiv = document.createElement('div');
            resultDiv.className = 'result-item';
            resultDiv.innerHTML = `
                <div class="result-info">
                    <div class="result-name">${names[i]}</div>
                    <div class="result-votes">${voteCount} votes</div>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${percentage}%">
                        ${percentage}%
                    </div>
                </div>
                <div class="vote-count">${voteCount}</div>
            `;
            
            resultsContainer.appendChild(resultDiv);
        }
        
        // Show winner if there are votes
        if (totalVotesNum > 0 && winnerIndex >= 0) {
            const winnerSection = document.getElementById('winnerSection');
            const winnerInfo = document.getElementById('winnerInfo');
            
            winnerInfo.innerHTML = `
                <div class="winner-details">
                    <h5>${names[winnerIndex]}</h5>
                    <p>${maxVotes} votes (${((maxVotes / totalVotesNum) * 100).toFixed(1)}%)</p>
                </div>
            `;
            
            winnerSection.classList.remove('hidden');
        }
        
    } catch (error) {
        console.error('Error loading results:', error);
        showError('Failed to load results: ' + error.message);
    }
}

async function castVote() {
    if (!selectedCandidateId) {
        showError('Please select a candidate first');
        return;
    }
    
    try {
        showLoading(true);
        console.log('Casting vote for candidate:', selectedCandidateId.toString());
        
        const tx = await contract.vote(selectedCandidateId);
        console.log('Transaction sent:', tx.hash);
        
        const receipt = await tx.wait();
        console.log('Transaction confirmed:', receipt);
        
        showLoading(false);
        showSuccess('Vote cast successfully!');
        
        // Refresh data
        await loadElectionData();
        await loadResults();
        
        // Hide voting section
        document.getElementById('votingSection').classList.add('hidden');
        
    } catch (error) {
        showLoading(false);
        console.error('Error casting vote:', error);
        
        let errorMessage = 'Failed to cast vote: ';
        if (error.reason) {
            errorMessage += error.reason;
        } else if (error.message) {
            errorMessage += error.message;
        } else {
            errorMessage += 'Unknown error occurred';
        }
        
        showError(errorMessage);
    }
}

async function startVoting() {
    try {
        showLoading(true);
        console.log('Starting voting...');
        
        const tx = await contract.startVoting();
        console.log('Transaction sent:', tx.hash);
        
        await tx.wait();
        console.log('Voting started successfully');
        
        showLoading(false);
        showSuccess('Voting started successfully!');
        await loadElectionData();
    } catch (error) {
        showLoading(false);
        console.error('Error starting voting:', error);
        showError('Failed to start voting: ' + error.message);
    }
}

async function stopVoting() {
    try {
        showLoading(true);
        console.log('Stopping voting...');
        
        const tx = await contract.stopVoting();
        console.log('Transaction sent:', tx.hash);
        
        await tx.wait();
        console.log('Voting stopped successfully');
        
        showLoading(false);
        showSuccess('Voting stopped successfully!');
        await loadElectionData();
        document.getElementById('votingSection').classList.add('hidden');
    } catch (error) {
        showLoading(false);
        console.error('Error stopping voting:', error);
        showError('Failed to stop voting: ' + error.message);
    }
}

async function downloadResults() {
    try {
        const [ids, names, rollNumbers, slogans, voteCounts] = await contract.getAllCandidates();
        const totalVotes = await contract.totalVotes();
        const className = await contract.className();
        
        const results = {
            electionName: className,
            totalVotes: totalVotes.toString(),
            timestamp: new Date().toISOString(),
            candidates: []
        };
        
        for (let i = 0; i < ids.length; i++) {
            const voteCount = Number(voteCounts[i]);
            const percentage = Number(totalVotes) > 0 ? (voteCount / Number(totalVotes) * 100).toFixed(2) : 0;
            
            results.candidates.push({
                id: ids[i].toString(),
                name: names[i],
                votes: voteCount,
                percentage: percentage + '%'
            });
        }
        
        // Create and download JSON file
        const dataStr = JSON.stringify(results, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `election-results-${Date.now()}.json`;
        link.click();
        URL.revokeObjectURL(url);
        
        showSuccess('Results downloaded successfully!');
    } catch (error) {
        console.error('Error downloading results:', error);
        showError('Failed to download results: ' + error.message);
    }
}

function showError(message) {
    console.error('Error:', message);
    const errorDiv = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');
    errorText.textContent = message;
    errorDiv.classList.remove('hidden');
    
    setTimeout(() => {
        errorDiv.classList.add('hidden');
    }, 8000);
}

function showSuccess(message) {
    console.log('Success:', message);
    
    // Create a temporary success message
    const successDiv = document.createElement('div');
    successDiv.className = 'error-message';
    successDiv.style.background = '#27ae60';
    successDiv.innerHTML = `<p>${message}</p>`;
    
    document.querySelector('.container').insertBefore(successDiv, document.querySelector('.container').firstChild);
    
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

function showLoading(show) {
    const loadingDiv = document.getElementById('loading');
    if (show) {
        loadingDiv.classList.remove('hidden');
    } else {
        loadingDiv.classList.add('hidden');
    }
}