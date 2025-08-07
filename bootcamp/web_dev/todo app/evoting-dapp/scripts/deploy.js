const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying CR Voting Contract...");
  
  // Get the contract factory
  const CRVoting = await ethers.getContractFactory("CRVoting");
  
  // Deploy the contract
  const className = "Computer Science - Section A";
  const subject = "Blockchain Development";
  const crVoting = await CRVoting.deploy(className, subject);
  
  await crVoting.waitForDeployment();
  const contractAddress = await crVoting.getAddress();
  
  console.log(`CRVoting contract deployed to: ${contractAddress}`);
  
  // Get signers for testing
  const [teacher, student1, student2, student3, student4, student5] = await ethers.getSigners();
  
  console.log("Teacher address:", teacher.address);
  console.log("Setting up candidates and students...");
  
  // Add CR candidates with realistic details
  await crVoting.addCandidate(
    "Rahul Sharma", 
    "CS21B001", 
    "Leadership through Innovation!"
  );
  
  await crVoting.addCandidate(
    "Priya Patel", 
    "CS21B015", 
    "Your Voice, Our Class!"
  );
  
  await crVoting.addCandidate(
    "Arjun Singh", 
    "CS21B032", 
    "Unity and Progress!"
  );
  
  await crVoting.addCandidate(
    "Sneha Gupta", 
    "CS21B047", 
    "Empowering Every Student!"
  );
  
  console.log("CR Candidates added successfully");
  
  // Register students with roll numbers
  const studentsToRegister = [
    student1.address,
    student2.address, 
    student3.address,
    student4.address,
    student5.address
  ];
  
  const rollNumbers = [
    "CS21B101",
    "CS21B102", 
    "CS21B103",
    "CS21B104",
    "CS21B105"
  ];
  
  await crVoting.registerMultipleStudents(studentsToRegister, rollNumbers);
  console.log("Students registered:", studentsToRegister.length);
  
  // Transfer teacher role to your address
  const yourTeacherAddress = "0x9d3998a702345b117b7a8a1439d330aec582fd7a";
  await crVoting.transferTeacher(yourTeacherAddress);
  console.log(`Teacher role transferred to: ${yourTeacherAddress}`);
  
  // Start voting (Note: This will now fail because only the new teacher can start voting)
  // await crVoting.startVoting();
  console.log("Contract deployed and teacher transferred. You can now start voting from the frontend.");
  
  // Display deployment info
  console.log("\n=== CR ELECTION DEPLOYMENT SUMMARY ===");
  console.log(`Contract Address: ${contractAddress}`);
  console.log(`Class: ${className}`);
  console.log(`Subject: ${subject}`);
  console.log(`Teacher: ${teacher.address}`);
  console.log(`Registered Students: ${studentsToRegister.length}`);
  console.log("CR Candidates:");
  console.log("  1. Rahul Sharma (CS21B001) - 'Leadership through Innovation!'");
  console.log("  2. Priya Patel (CS21B015) - 'Your Voice, Our Class!'");
  console.log("  3. Arjun Singh (CS21B032) - 'Unity and Progress!'");
  console.log("  4. Sneha Gupta (CS21B047) - 'Empowering Every Student!'");
  
  console.log("\n=== TEST ACCOUNTS ===");
  console.log(`Teacher: ${teacher.address}`);
  console.log(`Student 1 (CS21B101): ${student1.address}`);
  console.log(`Student 2 (CS21B102): ${student2.address}`);
  console.log(`Student 3 (CS21B103): ${student3.address}`);
  console.log(`Student 4 (CS21B104): ${student4.address}`);
  console.log(`Student 5 (CS21B105): ${student5.address}`);
  
  // Save deployment info
  const fs = require('fs');
  const deployInfo = {
    contractAddress: contractAddress,
    className: className,
    subject: subject,
    teacher: yourTeacherAddress, // Use your teacher address
    testAccounts: {
      teacher: yourTeacherAddress, // Use your teacher address
      student1: student1.address,
      student2: student2.address,
      student3: student3.address,
      student4: student4.address,
      student5: student5.address
    },
    candidates: [
      {
        name: "Rahul Sharma",
        rollNumber: "CS21B001",
        slogan: "Leadership through Innovation!"
      },
      {
        name: "Priya Patel", 
        rollNumber: "CS21B015",
        slogan: "Your Voice, Our Class!"
      },
      {
        name: "Arjun Singh",
        rollNumber: "CS21B032", 
        slogan: "Unity and Progress!"
      },
      {
        name: "Sneha Gupta",
        rollNumber: "CS21B047",
        slogan: "Empowering Every Student!"
      }
    ]
  };
  
  fs.writeFileSync('./frontend/deployInfo.json', JSON.stringify(deployInfo, null, 2));
  console.log("\nDeployment info saved to frontend/deployInfo.json");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });