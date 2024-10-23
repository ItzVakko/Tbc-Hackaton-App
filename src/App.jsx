import "./App.css";
import FixedFooter from "./Components/FixedFooter";
import { HomePage } from "./Components/HomePage";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Nova from "./Components/Nova";
import AllForOnePage from "./Components/AllForOnePage";
import NovaAssistant from "./Assets/Images/nova-assistant.png";
import { useState, useEffect, useRef } from "react";

function App() {
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [novaMessage, setNovaMessage] = useState("");
  const [showFollowUpChoices, setShowFollowUpChoices] = useState(false);
  const chatEndRef = useRef(null);
  const navigate = useNavigate();

  const chatContainerRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (chatEndRef.current && chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatEndRef.current.offsetTop;
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [novaMessage, showFollowUpChoices]);

  const handleChoice = (choice) => {
    if (choice === "ჩატი Nova-სთან") {
      setNovaMessage("");
      setShowFollowUpChoices(false);
      navigate("/nova");
      setShowFollowUpChoices(true);
    } else if (choice === "განახლების აღწერა") {
      setNovaMessage(
        <div className="nova-message-box">
          <p>
            თუ თქვენ და თქვენს ირგვლივ მყოფთ გაქვთ ერთი საერთო მიზანი და ამ
            მიზნის მისაღწევად გესაჭროვებათ სახსრები, შეგიძლიათ, “ყველა
            ერთისთვის”-ში, ერთად დააგროვოთ საჭირო თანხა და ამასთან ერთად, იხილოთ
            თქვენი პროგრესი! მე დაგეხმარებით საჭირო ინფორმაციის მოწოდებასა და
            სხვადასხვა პრობლემების გადაჭრაში!
          </p>
        </div>
      );
      setShowFollowUpChoices(true);
    }
  };

  const handleFollowUpChoice = (choice) => {
    if (choice === "მსურს") {
      setIsFirstTime(true);
      setNovaMessage("");
      setShowFollowUpChoices(false);
      navigate("/allforone");
    } else if (choice === "არა, მოგვიანებით") {
      setIsFirstTime(true);
      setNovaMessage("");
      navigate("/");
    }
  };

  useEffect(() => {
    const handleRouteChange = () => {
      if (window.location.pathname === "/nova") {
        setNovaMessage("");
        setShowFollowUpChoices(false);
        setIsFirstTime(true);
      }
    };

    handleRouteChange();

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [navigate]);

  // Auto-scroll effect
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [novaMessage, showFollowUpChoices]);

  return (
    <div className="app-parent-container">
      <div className="app-container">
        <div className="no-space"></div>
        <NavBar />

        {isFirstTime ? (
          ""
        ) : (
          <div ref={chatContainerRef} className="chat-container">
            <div className="nova">
              <img className="nova-image" src={NovaAssistant} alt="nova logo" />
              <div className="nova-text-box">
                <p>
                  მოგესალმებით, ჩემი სახელია ნოვა. მე ვარ თიბისის დამხმარე
                  ასისტენტი. მე გაგაცნობ სიახლეებს ახალ განახლებებთან
                  დაკავშირებით და დაგეხმარები მათთან ადაპტირებაში. გნებავს
                  დაიწყო ჩატი NOVA-სთან თუ ახალი განახლებების შესახებ გინდა
                  ინფორამციის მოსმენა?
                </p>
              </div>
            </div>
            <div className="answers">
              <button onClick={() => handleChoice("ჩატი Nova-სთან")}>
                {" "}
                ჩატი Nova-სთან{" "}
              </button>
              <button onClick={() => handleChoice("განახლების აღწერა")}>
                განახლების აღწერა
              </button>
            </div>

            <div className="nova">
              <img className="nova-image" src={NovaAssistant} alt="nova logo" />
              <p>{novaMessage}</p>
            </div>

            {showFollowUpChoices && (
              <div className="answers">
                <button onClick={() => handleFollowUpChoice("მსურს")}>
                  {" "}
                  მსურს{" "}
                </button>
                <button
                  onClick={() => handleFollowUpChoice("არა, მოგვიანებით")}
                >
                  {" "}
                  არა, მოგვიანებით{" "}
                </button>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>
        )}

        <main
          style={{
            filter: isFirstTime ? "blur(0)" : "blur(5px)",
            backgroundColor: isFirstTime ? "transparent" : "rgba(0, 0, 0, 0.7)",
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="allforone" element={<AllForOnePage />} />
            <Route path="nova" element={<Nova />} />
          </Routes>
        </main>

        <FixedFooter
          isFirstTime={isFirstTime}
          setIsFirstTime={setIsFirstTime}
        />
      </div>
    </div>
  );
}

export default App;
