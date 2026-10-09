
import { useState } from "react";
import {
  AudioLines,
  Sparkles,
  ArrowLeft,
  MessageCircle,
  Phone,
  Timer,
  Mic,
  MessagesSquare,
  Gamepad2,
  LogOut,
} from "lucide-react";
import "./App.css";
function Button({ children, onClick }) {
  return (
    <button className="primary-btn" onClick={onClick}>
      {children}
    </button>
  );
}
function Splash({ next }) {
  return (
    <div className="phone splash">
      <div className="logo-circle">
        <AudioLines size={35} />
        <Sparkles className="sparkle" size={17} />
      </div>

      <h1>ConvoAI</h1>

      <p className="tagline">
        Step into a smarter way to learn
      </p>

      <div className="splash-buttons">
        <button className="splash-skip" onClick={next}>
          Skip
        </button>

        <button className="splash-next" onClick={next}>
          Next →
        </button>
      </div>
    </div>
  );
}

function Welcome({ next }) {
  return (
    <div className="phone welcome">
      <button className="skip" onClick={next}>
        Skip
      </button>

      <div className="welcome-art">
        <div className="art-shape">
          <AudioLines size={65} />
        </div>
      </div>

      <div className="welcome-text">
        <h2>Welcome To ConVoAI</h2>
        <p>
          Practice real conversations, get instant feedback,
          and speak naturally in any situation.
        </p>
      </div>

      <Button onClick={next}>Continue</Button>
    </div>
  );
}

function Login({ next }) {
  const [mobile, setMobile] = useState("");
  const [agree, setAgree] = useState(false);

  function handleSubmit() {
    if (mobile.length !== 10) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }

    if (!agree) {
      alert("Please accept the Terms & Privacy Policy");
      return;
    }

    next();
  }

  return (
    <div className="phone">
      <header className="purple-header">
        <h2>ConvoAI</h2>
      </header>

      <div className="screen-content">
        <p>Login with your phone number to continue</p>

        <input
          type="tel"
          maxLength={10}
          placeholder="Enter Your Mobile Number"
          value={mobile}
          onChange={(e) =>
            setMobile(e.target.value.replace(/\D/g, ""))
          }
        />

        <label className="terms">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          I agree to the Terms & Privacy Policy
        </label>

        <div className="spacer" />

        <Button onClick={handleSubmit}>
          Get Started
        </Button>
      </div>
    </div>
  );
}

function OTP({ next, back }) {
  const [otp, setOtp] = useState(["4", "7", "5", "8", "7", "9"]);

  function updateOTP(index, value) {
    const digits = [...otp];
    digits[index] = value.replace(/\D/g, "").slice(-1);
    setOtp(digits);
  }

  return (
    <div className="phone">
      <header className="purple-header">
        <button className="back-btn" onClick={back}>
          <ArrowLeft size={19} />
        </button>
      </header>

      <div className="screen-content">
        <h3>Enter OTP</h3>

        <p className="muted">
          Enter the 6-digit code we sent to your mobile
        </p>

        <div className="otp-row">
          {otp.map((digit, index) => (
            <input
              key={index}
              aria-label={`OTP digit ${index + 1}`}
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) =>
                updateOTP(index, e.target.value)
              }
            />
          ))}
        </div>

        <button
          className="resend"
          onClick={() =>
            alert("Connect an OTP service to resend")
          }
        >
          Resend OTP
        </button>

        <div className="spacer" />

        <Button
          onClick={() => {
            if (otp.every(Boolean)) {
              next();
            } else {
              alert("Please enter all 6 digits");
            }
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

function Dashboard({ onLogout }) {
  const [tab, setTab] = useState("Dashboard");

  return (
    <div className="phone dashboard">
      <div className="dashboard-scroll">
        <div className="dash-header">
          <div className="dash-topbar">
            <p>🟣 Hi Preetika! 👋</p>

            <button
              className="logout-btn"
              onClick={onLogout}
            >
              <LogOut size={14} />
              <span>Logout</span>
            </button>
          </div>

          <div className="progress-card">
            <h3>Today's Progress</h3>

            <div className="progress-label">
              <span>Daily Goal Progress</span>
              <span>65%</span>
            </div>

            <div className="progress-track">
              <div className="progress-fill" />
            </div>

            <div className="quick-stats">
              <div>
                <MessageCircle />
                <b>10</b>
                <span>Chats</span>
              </div>

              <div>
                <Phone />
                <b>4</b>
                <span>Calls</span>
              </div>

              <div>
                <Timer />
                <b>38</b>
                <span>Minutes</span>
              </div>
            </div>

            <p className="goal-note">
              🔥 You're 1 step away from your daily goal.
            </p>
          </div>
        </div>

        <div className="dash-content">
          <div className="mini-cards">
            <div className="mini-card">
              🔥 <span><b>0</b> Day Streak</span>
            </div>

            <div className="mini-card">
              💎 <span><b>0</b> Total coins</span>
            </div>
          </div>

          <h3>AI Insights</h3>

          <div className="insights">
            <div>
              <Mic />
              <b>38%</b>
              <span>Fluency</span>
            </div>

            <div>
              <AudioLines />
              <b>9%</b>
              <span>Pronunciation</span>
            </div>

            <div>
              <MessagesSquare />
              <b>12</b>
              <span>New Words</span>
            </div>
          </div>

          <h3>Recent Conversations</h3>

          <div className="conversation">
            <Phone />

            <div>
              <b>Job Interview Practice</b>
              <a href="#feedback">View Feedback</a>
            </div>

            <small>6 min</small>
          </div>

          <div className="conversation">
            <MessagesSquare />

            <div>
              <b>Ordering Food</b>
              <a href="#feedback">View Feedback</a>
            </div>

            <small>10 min</small>
          </div>

          <h3>Your Weekly Stats</h3>

          <div className="weekly-stats">
            <div>
              <Timer />
              <b>140 min</b>
              <span>Total Talk Time</span>
            </div>

            <div>
              <MessagesSquare />
              <b>23</b>
              <span>Total Chats</span>
            </div>
          </div>
        </div>
      </div>
      <nav className="bottom-nav">
        {[
          ["Dashboard", <AudioLines key="dashboard-icon" />],
          ["AI Chat", <MessagesSquare key="chat-icon" />],
          ["AI Call", <Phone key="call-icon" />],
          ["Games", <Gamepad2 key="games-icon" />],
        ].map(([name, icon]) => (
          <button
            key={name}
            className={tab === name ? "active" : ""}
            onClick={() => setTab(name)}
          >
            {icon}
            <span>{name}</span>
          </button>
        ))}
      </nav>

      {tab !== "Dashboard" && (
        <div className="tab-message">
          <b>{tab}</b>

          <p>
            {tab === "AI Chat"
              ? "Start practising conversations with AI."
              : tab === "AI Call"
              ? "Practise speaking with an AI partner."
              : "Play games to improve your vocabulary."}
          </p>

          <button onClick={() => setTab("Dashboard")}>
            Back to Dashboard
          </button>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState(0);
  const next = () => {
    setScreen((current) => Math.min(current + 1, 4));
  };
  const back = () => {
    setScreen(2);
  };
  const logout = () => {
    setScreen(0);
  };
  return (
    <main className="app">
      {screen === 0 && <Splash next={next} />}

      {screen === 1 && <Welcome next={next} />}

      {screen === 2 && <Login next={next} />}

      {screen === 3 && <OTP next={next} back={back} />}

      {screen === 4 && (
        <Dashboard onLogout={logout} />
      )}
    </main>
  );
}

