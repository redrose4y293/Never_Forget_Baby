import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Product from "./pages/Product";
import HowItWorks from "./pages/HowItWorks";
import PetPad from "./pages/PetPad";
//import LivesLost from "./pages/LivesLost";
import OurMission from "./pages/OurMission";
import CongressionalAction from "./pages/CongressionalAction";
//mport Media from "./pages/Media";
import BuyNow from "./pages/BuyNow";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/product" element={<Product />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pet-pad" element={<PetPad />} />
          {/* <Route path="/lives-lost" element={<LivesLost />} /> */}
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/congressional-action" element={<CongressionalAction />} />
          {/* <Route path="/media" element={<Media />} /> */}
          <Route path="/buy-now" element={<BuyNow />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
