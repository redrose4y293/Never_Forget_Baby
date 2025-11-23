import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Baby, Smartphone, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero.png";

export function HomeSection() {
  return (
    <section id="home">
      {/* Hero Section */}
<section id="home">
  <section className="relative w-full">
    <div className="relative w-full max-w-[1550px] max-h-[770px] overflow-hidden mx-auto flex items-center justify-center">
      
      {/* Image centered */}
      <img
        src={heroImage}
        alt="NeverForget hero"
        className="block object-contain object-center max-h-[770px]"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
    </div>
  </section>
</section>




      {/* Features Strip */}
      <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Baby className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Pressure Pad</h3>
                  <p className="text-sm text-muted-foreground">Detects weight automatically</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Smartphone className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Real-Time Alerts</h3>
                  <p className="text-sm text-muted-foreground">Instant phone notifications</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">GPS Tracking</h3>
                  <p className="text-sm text-muted-foreground">Live location sharing</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Police Dispatch</h3>
                  <p className="text-sm text-muted-foreground">Automatic emergency response</p>
                </CardContent>
              </Card>
            </div>
          </div>
      </section>

      {/* Why It Matters
      <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Why It Matters</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every year, dozens of children die in hot cars. These tragedies happen to loving, attentive parents who simply made one terrible mistake. We just made sure that never happens again.
              </p>
              <div className="bg-destructive/10 border-2 border-destructive rounded-lg p-8">
                <div className="text-6xl font-bold text-destructive mb-2">1,050+</div>
                <p className="text-xl">Children lost since 1998 to vehicular heatstroke</p>
              </div>
            </div>
          </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Protect Every Life You Love</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Not just kids. Never forget your pet, either.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="#buy-now">Order Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="#pet-pad">Learn About Pet Pad</Link>
              </Button>
            </div>
          </div>
      </section>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HomeSection />
      </main>
      <Footer />
    </div>
  );
}
