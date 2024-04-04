import { usePub, useSub } from "services/PubSub_SR";

function SubscriberComponent() {
  const handleUserLoggedIn = (userData: any) => {
    console.log("print incomcidn from dashboard", userData);
  };
  const handleClick = () => {
    console.log("clicked MFE-2 emitter");
    usePub("userLoggedIn", { name: "Vishal" });
  };
  useSub("userLoggedIn", handleUserLoggedIn);

  return (
    <div>
      <h4>Receiver/Emitter Component</h4>
      <div>
        <button onClick={handleClick}>Emitter Two</button>
      </div>
    </div>
  );
}

export default SubscriberComponent;
