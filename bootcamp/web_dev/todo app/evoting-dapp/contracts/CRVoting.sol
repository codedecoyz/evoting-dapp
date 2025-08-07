// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract CRVoting {
    struct Candidate {
        uint256 id;
        string name;
        string rollNumber;
        string slogan;
        uint256 voteCount;
    }
    
    struct Student {
        bool isRegistered;
        bool hasVoted;
        uint256 votedCandidateId;
        string rollNumber;
    }
    
    address public teacher; // Class teacher who manages the election
    string public className;
    string public subject;
    bool public votingActive;
    
    mapping(uint256 => Candidate) public candidates;
    mapping(address => Student) public students;
    
    uint256[] public candidateIds;
    address[] public registeredStudents;
    
    uint256 public candidatesCount;
    uint256 public totalVotes;
    uint256 public totalStudents;
    
    event StudentRegistered(address student, string rollNumber);
    event CandidateAdded(uint256 candidateId, string name, string rollNumber);
    event VoteCast(address voter, uint256 candidateId, string voterRoll);
    event VotingStarted();
    event VotingStopped();
    event CRElected(uint256 candidateId, string name, uint256 votes);
    event TeacherChanged(address oldTeacher, address newTeacher);
    
    modifier onlyTeacher() {
        require(msg.sender == teacher, "Only teacher can perform this action");
        _;
    }
    
    modifier onlyRegisteredStudent() {
        require(students[msg.sender].isRegistered, "You are not registered for this class");
        _;
    }
    
    modifier votingIsActive() {
        require(votingActive, "Voting is not active");
        _;
    }
    
    modifier hasNotVoted() {
        require(!students[msg.sender].hasVoted, "You have already voted");
        _;
    }
    
    constructor(string memory _className, string memory _subject) {
        teacher = msg.sender;
        className = _className;
        subject = _subject;
        votingActive = false;
        candidatesCount = 0;
        totalVotes = 0;
        totalStudents = 0;
    }
    
    function addCandidate(
        string memory _name, 
        string memory _rollNumber, 
        string memory _slogan
    ) public onlyTeacher {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(
            candidatesCount, 
            _name, 
            _rollNumber, 
            _slogan, 
            0
        );
        candidateIds.push(candidatesCount);
        emit CandidateAdded(candidatesCount, _name, _rollNumber);
    }
    
    function registerStudent(address _student, string memory _rollNumber) public onlyTeacher {
        require(!students[_student].isRegistered, "Student already registered");
        students[_student].isRegistered = true;
        students[_student].hasVoted = false;
        students[_student].rollNumber = _rollNumber;
        registeredStudents.push(_student);
        totalStudents++;
        emit StudentRegistered(_student, _rollNumber);
    }
    
    function registerMultipleStudents(
        address[] memory _students, 
        string[] memory _rollNumbers
    ) public onlyTeacher {
        require(_students.length == _rollNumbers.length, "Arrays length mismatch");
        
        for (uint256 i = 0; i < _students.length; i++) {
            if (!students[_students[i]].isRegistered) {
                students[_students[i]].isRegistered = true;
                students[_students[i]].hasVoted = false;
                students[_students[i]].rollNumber = _rollNumbers[i];
                registeredStudents.push(_students[i]);
                totalStudents++;
                emit StudentRegistered(_students[i], _rollNumbers[i]);
            }
        }
    }
    
    function startVoting() public onlyTeacher {
        require(candidatesCount > 0, "No candidates available");
        require(totalStudents > 0, "No students registered");
        votingActive = true;
        emit VotingStarted();
    }
    
    function stopVoting() public onlyTeacher {
        votingActive = false;
        emit VotingStopped();
        
        // Announce winner
        uint256 winnerId = getWinner();
        if (winnerId > 0) {
            Candidate memory winner = candidates[winnerId];
            emit CRElected(winnerId, winner.name, winner.voteCount);
        }
    }
    
    function transferTeacher(address _newTeacher) public onlyTeacher {
        require(_newTeacher != address(0), "Invalid teacher address");
        require(_newTeacher != teacher, "Teacher is already set to this address");
        address oldTeacher = teacher;
        teacher = _newTeacher;
        emit TeacherChanged(oldTeacher, _newTeacher);
    }
    
    function vote(uint256 _candidateId) public onlyRegisteredStudent votingIsActive hasNotVoted {
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate");
        
        students[msg.sender].hasVoted = true;
        students[msg.sender].votedCandidateId = _candidateId;
        candidates[_candidateId].voteCount++;
        totalVotes++;
        
        emit VoteCast(msg.sender, _candidateId, students[msg.sender].rollNumber);
    }
    
    function getCandidate(uint256 _candidateId) public view returns (
        uint256, string memory, string memory, string memory, uint256
    ) {
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate");
        Candidate memory candidate = candidates[_candidateId];
        return (
            candidate.id, 
            candidate.name, 
            candidate.rollNumber, 
            candidate.slogan, 
            candidate.voteCount
        );
    }
    
    function getAllCandidates() public view returns (
        uint256[] memory, 
        string[] memory, 
        string[] memory, 
        string[] memory, 
        uint256[] memory
    ) {
        uint256[] memory ids = new uint256[](candidatesCount);
        string[] memory names = new string[](candidatesCount);
        string[] memory rollNumbers = new string[](candidatesCount);
        string[] memory slogans = new string[](candidatesCount);
        uint256[] memory voteCounts = new uint256[](candidatesCount);
        
        for (uint256 i = 0; i < candidatesCount; i++) {
            uint256 candidateId = candidateIds[i];
            ids[i] = candidates[candidateId].id;
            names[i] = candidates[candidateId].name;
            rollNumbers[i] = candidates[candidateId].rollNumber;
            slogans[i] = candidates[candidateId].slogan;
            voteCounts[i] = candidates[candidateId].voteCount;
        }
        
        return (ids, names, rollNumbers, slogans, voteCounts);
    }
    
    function getStudentInfo(address _student) public view returns (
        bool, bool, uint256, string memory
    ) {
        Student memory student = students[_student];
        return (
            student.isRegistered, 
            student.hasVoted, 
            student.votedCandidateId,
            student.rollNumber
        );
    }
    
    function getElectionInfo() public view returns (
        string memory, string memory, bool, uint256, uint256, uint256, address
    ) {
        return (
            className, 
            subject, 
            votingActive, 
            candidatesCount, 
            totalVotes, 
            totalStudents, 
            teacher
        );
    }
    
    function getWinner() public view returns (uint256) {
        uint256 winnerId = 0;
        uint256 maxVotes = 0;
        
        for (uint256 i = 1; i <= candidatesCount; i++) {
            if (candidates[i].voteCount > maxVotes) {
                maxVotes = candidates[i].voteCount;
                winnerId = i;
            }
        }
        
        return winnerId;
    }
    
    function getResults() public view returns (
        string memory winnerName,
        string memory winnerRoll,
        uint256 winnerVotes,
        uint256 totalVotesCount,
        uint256 voterTurnout
    ) {
        uint256 winnerId = getWinner();
        if (winnerId > 0) {
            Candidate memory winner = candidates[winnerId];
            uint256 turnout = totalStudents > 0 ? (totalVotes * 100) / totalStudents : 0;
            return (
                winner.name,
                winner.rollNumber,
                winner.voteCount,
                totalVotes,
                turnout
            );
        }
        return ("No winner yet", "", 0, totalVotes, 0);
    }
    
    function getRegisteredStudents() public view returns (address[] memory) {
        return registeredStudents;
    }
}