import { withPWA } from "next-pwa";

function OfflinePage() {
  return (
    <div style={{ color: "red", fontSize: "25px" }}>
      You are offline. Please check your internet connection.
    </div>
  );
}

export default withPWA(OfflinePage);
