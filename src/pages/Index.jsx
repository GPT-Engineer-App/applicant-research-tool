import { useState } from "react";
import { Box, Button, Input, Text, VStack, useDisclosure, Collapse, Spinner } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [applicantName, setApplicantName] = useState("");
  const [loading, setLoading] = useState(false);
  const [researchData, setResearchData] = useState(null);
  const { isOpen, onToggle } = useDisclosure();

  const handleResearch = () => {
    if (!applicantName.trim()) return;
    setLoading(true);
    setResearchData(null);

    // Simulate API call with a timeout
    setTimeout(() => {
      // Simulated data received from API
      setResearchData({
        name: applicantName,
        position: "Software Developer",
        experience: "5 years",
        lastCompany: "Tech Innovations Inc.",
        skills: ["React", "Node.js", "Chakra UI"],
      });
      setLoading(false);
      onToggle(); // Open the information panel
    }, 10000); // 10 seconds delay
  };

  return (
    <VStack spacing={4} p={5}>
      <Text fontSize="2xl" fontWeight="bold">
        Applicant Research Tool
      </Text>
      <Box>
        <Input placeholder="Enter applicant's name" value={applicantName} onChange={(e) => setApplicantName(e.target.value)} size="md" />
        <Button leftIcon={<FaSearch />} colorScheme="blue" ml={2} onClick={handleResearch} isLoading={loading} loadingText="Researching">
          Research
        </Button>
      </Box>
      <Collapse in={isOpen} animateOpacity>
        {loading ? (
          <Spinner size="xl" />
        ) : (
          researchData && (
            <VStack bg="gray.100" p={4} borderRadius="md" borderWidth="1px">
              <Text fontSize="lg" fontWeight="bold">
                {researchData.name}
              </Text>
              <Text>Position: {researchData.position}</Text>
              <Text>Experience: {researchData.experience}</Text>
              <Text>Last Company: {researchData.lastCompany}</Text>
              <Text>Skills: {researchData.skills.join(", ")}</Text>
            </VStack>
          )
        )}
      </Collapse>
    </VStack>
  );
};

export default Index;
