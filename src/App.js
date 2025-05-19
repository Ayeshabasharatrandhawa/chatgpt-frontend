import React, { useState } from "react";
import gptLogo from "./assets/chatgpt.svg";
import addButtonIcon from "./assets/add-30.png";
import msgicon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  // Mocked API call function (no backend)
  async function sendMsgToOpenAI(message) {
    await new Promise((resolve) => setTimeout(resolve, 500)); // simulate delay
    if (!message.trim()) throw new Error("Input cannot be empty");
    return `Mocked response for: "${message}"`;
  }

  const handleSend = async () => {
    try {
      const res = await sendMsgToOpenAI(input);
      setResponse(res);
      setError("");
    } catch (err) {
      setError(err.message || "There was an issue with the request.");
    }
  };

  const styles = {
    appContainer: {
      display: "flex",
      height: "100vh",
      color: "white",
      backgroundColor: "#1a202c", // gray-900
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    sidebar: {
      width: "25%",
      backgroundColor: "#2d3748", // gray-800
      borderRight: "1px solid #4a5568", // gray-700
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "1rem",
    },
    button: {
      width: "100%",
      background: "transparent",
      color: "white",
      fontWeight: "600",
      fontSize: "1.125rem", // text-lg
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      padding: "0.75rem 0",
      marginBottom: "1rem",
      border: "1px solid #4a5568",
      borderRadius: "0.375rem",
      cursor: "pointer",
      userSelect: "none",
      transition: "background-color 0.3s ease",
    },
    newChatButton: {
      width: "100%",
      backgroundColor: "#16a34a", // green-600
      color: "white",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      padding: "0.75rem 0",
      marginBottom: "1.5rem",
      borderRadius: "0.375rem",
      cursor: "pointer",
      userSelect: "none",
      border: "none",
      transition: "background-color 0.3s ease",
    },
    sidebarSection: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },
    sidebarButton: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      fontSize: "0.875rem", // text-sm
      gap: "0.5rem",
      backgroundColor: "#4a5568", // gray-700
      padding: "0.5rem 0.75rem",
      borderRadius: "0.375rem",
      cursor: "pointer",
      userSelect: "none",
      border: "none",
      transition: "background-color 0.3s ease",
    },
    sidebarLower: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },
    sidebarLowerItem: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      fontSize: "0.875rem",
      padding: "0.5rem",
      borderRadius: "0.375rem",
      cursor: "pointer",
      userSelect: "none",
      transition: "background-color 0.3s ease",
    },
    mainArea: {
      width: "75%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    header: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "1rem",
      padding: "1rem",
      borderBottom: "1px solid #4a5568",
      // Removed signup/login buttons, so this can be empty or removed if preferred
    },
    chatContent: {
      flex: 1,
      overflowY: "auto",
      padding: "1.5rem",
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      backgroundColor: "#1a202c",
    },
    messageContainer: {
      display: "flex",
      alignItems: "flex-start",
      gap: "1rem",
      maxWidth: "80%",
    },
    userMessage: {
      backgroundColor: "#4a5568", // gray-700
      padding: "1rem",
      borderRadius: "0.75rem",
      fontSize: "0.875rem",
      lineHeight: "1.4",
      color: "white",
    },
    botMessage: {
      backgroundColor: "#4a5568",
      padding: "1rem",
      borderRadius: "0.75rem",
      fontSize: "0.875rem",
      lineHeight: "1.4",
      color: "white",
    },
    footer: {
      padding: "1rem",
      borderTop: "1px solid #4a5568",
      backgroundColor: "#2d3748", // gray-800
    },
    inputContainer: {
      display: "flex",
      maxWidth: "600px",
      margin: "0 auto",
      alignItems: "center",
      gap: "0.5rem",
    },
    input: {
      flexGrow: 1,
      backgroundColor: "#4a5568",
      color: "white",
      padding: "0.5rem 1rem",
      borderRadius: "9999px", // full rounded
      border: "none",
      fontSize: "0.875rem",
      outline: "none",
    },
    sendButton: {
      background: "transparent",
      border: "none",
      cursor: "pointer",
      padding: 0,
      display: "flex",
      alignItems: "center",
    },
    errorText: {
      color: "#f87171", // red-500
      textAlign: "center",
      fontSize: "0.875rem",
      marginTop: "0.5rem",
    },
  };

  return (
    <div style={styles.appContainer}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div>
          <button
            style={styles.button}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#4a5568")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <img src={gptLogo} alt="ChatGPT Logo" style={{ width: 24, height: 24 }} />
            ChatGPT
          </button>

          <button
            style={styles.newChatButton}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#15803d")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#16a34a")}
          >
            <img src={addButtonIcon} alt="Add Button" style={{ width: 20, height: 20 }} />
            New Chat
          </button>

          <div style={styles.sidebarSection}>
            <button
              style={styles.sidebarButton}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6b7280")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4a5568")}
            >
              <img src={msgicon} alt="" style={{ width: 16, height: 16 }} />
              What is programming?
            </button>
            <button
              style={styles.sidebarButton}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6b7280")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4a5568")}
            >
              <img src={msgicon} alt="" style={{ width: 16, height: 16 }} />
              What is React?
            </button>
          </div>
        </div>

        <div style={styles.sidebarLower}>
          <div
            style={styles.sidebarLowerItem}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#4a5568")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <img src={rocket} alt="Upgrade Icon" style={{ width: 18, height: 18 }} />
            Upgrade to Plus
          </div>
          <div
            style={styles.sidebarLowerItem}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#4a5568")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <img src={saved} alt="Saved Icon" style={{ width: 18, height: 18 }} />
            Saved Messages
          </div>
          <div
            style={styles.sidebarLowerItem}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#4a5568")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <img src={home} alt="Home Icon" style={{ width: 18, height: 18 }} />
            Home
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainArea}>
        {/* Header - Empty since signup/login removed */}
        <div style={styles.header}>
          {/* No buttons */}
        </div>

        {/* Chat content */}
        <div style={styles.chatContent}>
          {/* User message */}
          {input && (
            <div style={{ ...styles.messageContainer, alignSelf: "flex-end" }}>
              <img
                src={userIcon}
                alt="User Icon"
                style={{ width: 40, height: 40, borderRadius: "50%" }}
              />
              <p style={styles.userMessage}>{input}</p>
            </div>
          )}

          {/* Bot response */}
          {response && (
            <div style={{ ...styles.messageContainer, alignSelf: "flex-start" }}>
              <img
                src={gptImgLogo}
                alt="GPT Icon"
                style={{ width: 40, height: 40, borderRadius: "50%" }} // Rounded AI logo here
              />
              <p style={styles.botMessage}>{response}</p>
            </div>
          )}
          {error && <p style={styles.errorText}>{error}</p>}
        </div>

        {/* Footer input */}
        <footer style={styles.footer}>
          <div style={styles.inputContainer}>
            <input
              type="text"
              placeholder="Ask a question to ChatGPT!"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={styles.input}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <button
              onClick={handleSend}
              style={styles.sendButton}
              title="Send Message"
              aria-label="Send Message"
            >
              <img src={sendBtn} alt="Send Icon" style={{ width: 24, height: 24 }} />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
