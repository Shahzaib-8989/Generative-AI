import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { getAllPosts } from "../api";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl};
  padding-top: calc(
    80px + ${({ theme }) => theme.spacing.xl}
  ); /* Account for fixed navbar */
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};

  &::before,
  &::after {
    content: "©";
    font-size: 1.1rem;
  }
`;

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 600px;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ImageGrid = styled.div`
  columns: 4;
  column-gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg} 0;

  @media (max-width: 1200px) {
    columns: 3;
  }

  @media (max-width: 768px) {
    columns: 2;
  }

  @media (max-width: 480px) {
    columns: 1;
  }
`;

const ImageCard = styled.div`
  position: relative;
  background: ${({ theme }) => theme.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  break-inside: avoid;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: inline-block;
  width: 100%;

  &:hover {
    transform: scale(1.02);
    box-shadow: ${({ theme }) => theme.ui.glowShadow};
    z-index: 10;
  }

  &:hover .image-overlay {
    opacity: 1;
  }

  &:hover .prompt-overlay {
    opacity: 1;
  }

  /* Add some visual variety with different border styles */
  &:nth-child(3n) {
    border: 2px solid ${({ theme }) => theme.colors.purple}20;
  }

  &:nth-child(4n) {
    border: 2px solid ${({ theme }) => theme.colors.pink}20;
  }

  &:nth-child(5n) {
    border: 2px solid ${({ theme }) => theme.colors.cyan}20;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all ${({ theme }) => theme.transitions.normal};
`;

const DownloadButton = styled.button`
  background: ${({ theme }) => theme.gradients.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: scale(1.1);
    box-shadow: ${({ theme }) => theme.ui.glowShadow};
  }
`;

const GeneratedImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: all ${({ theme }) => theme.transitions.normal};
`;

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch posts from API with search parameter
  const fetchPosts = async (search = "") => {
    try {
      if (search) {
        setSearchLoading(true);
      } else {
        setLoading(true);
      }

      console.log("Fetching posts with search:", search);
      const response = await getAllPosts(search);
      setPosts(response.data);
      setError(null);
      console.log("Fetched posts:", response.data.length);
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError("Failed to fetch posts");
      // Fallback to mock data if API fails
      const mockData = [
        {
          _id: "1",
          name: "Demo User",
          prompt: "Futuristic cityscape at night",
          photo:
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
        },
        {
          _id: "2",
          name: "AI Artist",
          prompt: "Mountain landscape with aurora",
          photo:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop",
        },
        {
          _id: "3",
          name: "Creative Mind",
          prompt: "Space nebula with stars",
          photo:
            "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=700&fit=crop",
        },
        {
          _id: "4",
          name: "Digital Creator",
          prompt: "Abstract digital art",
          photo:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=450&fit=crop",
        },
        {
          _id: "5",
          name: "Cyber Artist",
          prompt: "Cyberpunk street scene",
          photo:
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=550&fit=crop",
        },
        {
          _id: "6",
          name: "Fantasy Creator",
          prompt: "Fantasy forest landscape",
          photo:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=650&fit=crop",
        },
      ];
      setPosts(mockData);
    } finally {
      setLoading(false);
      setSearchLoading(false);
    }
  };

  // Initial fetch on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Debounced search - make API call after user stops typing
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchPosts(searchQuery);
    }, 500); // 500ms delay after user stops typing

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const handleSearch = () => {
    // Search is handled automatically by useEffect - no API call needed
    console.log("Manual search triggered for:", searchQuery);
  };

  const handleDownload = (imageUrl, prompt) => {
    // Handle image download
    console.log("Downloading image:", prompt);
    // Create download link
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `${prompt.replace(/\s+/g, "_")}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <HomeContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
              color: "#ffffff",
              fontSize: "1.2rem",
            }}
          >
            Loading posts...
          </div>
        </HomeContainer>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <HomeContainer>
        <Title>Explore popular posts in the Community!</Title>
        <Subtitle>Generated with AI</Subtitle>

        <SearchSection>
          <div style={{ position: "relative", width: "100%" }}>
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => {
                console.log("Input changed:", e.target.value);
                setSearchQuery(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              style={{
                width: "100%",
                padding: "12px 16px",
                paddingRight: searchLoading ? "50px" : "16px",
                fontSize: "16px",
                border: "2px solid #2a2a3e",
                borderRadius: "12px",
                backgroundColor: "#1e1e2e",
                color: "#ffffff",
                outline: "none",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#8b5cf6";
                e.target.style.boxShadow = "0 0 20px rgba(139, 92, 246, 0.3)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#2a2a3e";
                e.target.style.boxShadow = "none";
              }}
            />
            {searchLoading && (
              <div
                style={{
                  position: "absolute",
                  right: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "20px",
                  height: "20px",
                  border: "2px solid transparent",
                  borderTop: "2px solid #8b5cf6",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              />
            )}
          </div>
        </SearchSection>

        <ImageGrid>
          {posts.length > 0 ? (
            posts.map((post) => (
              <ImageCard key={post._id}>
                <GeneratedImage
                  src={post.photo}
                  alt={post.prompt}
                  loading="lazy"
                />
                <ImageOverlay className="image-overlay">
                  <DownloadButton
                    onClick={() => handleDownload(post.photo, post.prompt)}
                    title={`Download: ${post.prompt}`}
                  >
                    ⬇️
                  </DownloadButton>
                </ImageOverlay>

                {/* Add prompt and author overlay on hover */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                    color: "white",
                    padding: "20px 16px 16px",
                    fontSize: "14px",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    pointerEvents: "none",
                  }}
                  className="prompt-overlay"
                >
                  <div style={{ fontWeight: "bold", marginBottom: "4px" }}>
                    {post.name}
                  </div>
                  <div>{post.prompt}</div>
                </div>
              </ImageCard>
            ))
          ) : (
            <div
              style={{
                gridColumn: "1 / -1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "#8b8ba7",
                fontSize: "1.1rem",
                padding: "60px 40px",
                fontStyle: "italic",
                minHeight: "200px",
              }}
            >
              {searchLoading
                ? "Searching..."
                : searchQuery
                ? `No posts found for "${searchQuery}"`
                : "No posts available"}
            </div>
          )}
        </ImageGrid>
      </HomeContainer>
    </>
  );
};

export default Home;
