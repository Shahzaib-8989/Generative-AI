import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import Navbar from "../components/Navbar";
import { generateImage } from "../api";

const CreatePostContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing?.xl || "32px"};
  padding-top: calc(
    80px + ${({ theme }) => theme.spacing?.xl || "32px"}
  ); /* Account for navbar */
  max-width: 1400px;
  margin: 0 auto;
  gap: ${({ theme }) => theme.spacing?.xl || "32px"};
`;

const Header = styled.div`
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing?.lg || "24px"};
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text?.primary || "#ffffff"};
  margin-bottom: ${({ theme }) => theme.spacing?.sm || "8px"};

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.text?.secondary || "#b8b8d1"};
  font-size: 1rem;
  margin-bottom: ${({ theme }) => theme.spacing?.xl || "32px"};
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing?.xxl || "48px"};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing?.xl || "32px"};
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.lg || "24px"};
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.sm || "8px"};
`;

const Label = styled.label`
  color: ${({ theme }) => theme.text?.primary || "#ffffff"};
  font-weight: ${({ theme }) => theme.fontWeight?.medium || 500};
  font-size: ${({ theme }) => theme.fontSize?.md || "16px"};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing?.md || "16px"};
  margin-top: ${({ theme }) => theme.spacing?.lg || "24px"};

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PreviewSection = styled.div`
  background: ${({ theme }) => theme.background?.card || "#1e1e2e"};
  border: 2px dashed ${({ theme }) => theme.ui?.border || "#2a2a3e"};
  border-radius: ${({ theme }) => theme.borderRadius?.xl || "16px"};
  padding: ${({ theme }) => theme.spacing?.xxl || "48px"};
  text-align: center;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all
    ${({ theme }) => theme.transitions?.normal || "0.3s ease-in-out"};
  position: relative;

  &:hover {
    border-color: ${({ theme }) => theme.ui?.borderAccent || "#8b5cf6"};
    box-shadow: ${({ theme }) =>
      theme.ui?.glowShadow || "0 0 20px rgba(255, 107, 157, 0.3)"};
  }
`;

const PlaceholderText = styled.p`
  color: ${({ theme }) => theme.text?.tertiary || "#8b8ba7"};
  font-size: ${({ theme }) => theme.fontSize?.lg || "18px"};
  font-style: italic;
`;

const CreatePost = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [prompt, setPrompt] = useState(location.state?.prompt || "");
  const [name, setName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);



  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);

    try {
      const response = await generateImage(prompt);
      console.log("Generated image:", response.data);
      // Here you would handle the generated image
      // For example: setGeneratedImage(response.data.photo);
      setIsGenerating(false);
    } catch (error) {
      console.error("Error generating image:", error);
      setIsGenerating(false);
    }
  };

  const handleShare = () => {
    // Handle sharing functionality
    console.log("Sharing post:", { name, prompt });
  };

  return (
    <>
      <Navbar />
      <CreatePostContainer>
        <Header>
          <Title>Generate Image with prompt</Title>
          <Subtitle>
            Write your prompt according to the image you want to generate!
          </Subtitle>
        </Header>

        <MainContent>
          <FormSection>
            <InputGroup>
              <Label>AUTHOR</Label>
              <TextInput
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                size="md"
              />
            </InputGroup>

            <InputGroup>
              <Label>IMAGE PROMPT</Label>
              <TextInput
                placeholder="Write a detailed prompt about the image"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                multiline
                rows={6}
                variant="default"
                size="md"
              />
            </InputGroup>

            <div
              style={{ fontSize: "12px", color: "#8b8ba7", marginTop: "8px" }}
            >
              * You can post the AI Generated Image to showcase in the
              community!
            </div>

            <ButtonGroup>
              <Button
                variant="primary"
                size="lg"
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
                loading={isGenerating}
              >
                🎨 Generate Image
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleShare}
                disabled={!name.trim() || !prompt.trim()}
              >
                📝 Post Image
              </Button>
            </ButtonGroup>
          </FormSection>

          <PreviewSection>
            {isGenerating ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "3px solid transparent",
                    borderTop: "3px solid #ff6b9d",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                  }}
                />
                <PlaceholderText>
                  Generating your amazing image...
                </PlaceholderText>
              </div>
            ) : (
              <PlaceholderText>
                Write a prompt to generate image
              </PlaceholderText>
            )}
          </PreviewSection>
        </MainContent>

        {/* CSS for loading spinner */}
        <style jsx>{`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </CreatePostContainer>
    </>
  );
};

export default CreatePost;
