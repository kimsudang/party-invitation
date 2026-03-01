import { Toaster } from "sonner";
import InvitationCard from "./components/InvitationCard";
import MapSection from "./components/MapSection";
import TransportSection from "./components/TransportSection";
import ShareButtons from "./components/ShareButtons";

function App() {
    return (
        <>
            <Toaster position="top-center" richColors />
            <main className="min-h-dvh w-full py-8">
                <div className="mx-auto w-full max-w-sm flex flex-col gap-6">
                    <InvitationCard />
                    <MapSection />
                    <TransportSection />
                    <ShareButtons />
                </div>
            </main>
        </>
    );
}

export default App;
