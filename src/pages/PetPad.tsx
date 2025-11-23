import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import petHappy from "@/assets/pet-happy.png";
import petDanger from "@/assets/pet-danger.png";

const features = [
    {
      title: "Universal Pet Size",
      description: "Works with dogs and cats of all sizes, from small breeds to large dogs"
    },
    {
      title: "Anti-Slip Material",
      description: "Stays securely in place even with active pets moving around"
    },
    {
      title: "Temperature Monitoring",
      description: "Tracks vehicle temperature and alerts you before danger levels"
    },
    {
      title: "Easy Installation",
      description: "Place in back seat, cargo area, or crate - works anywhere"
    },
    {
      title: "Battery Powered",
      description: "Long-lasting battery with low-power alerts via the app"
    },
    {
      title: "Same Alert System",
      description: "Uses the same proven notification and emergency dispatch system"
    }
  ];

export function PetPadSection() {
  return (
    <section id="pet-pad">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative w-full">
          {/* Image controls height & shows fully (no cropping) */}
          <img
            src={petHappy}
            alt="NeverForget Pet hero"
            className="w-full h-auto block"
          />
          {/* Gradient overlay matching image area */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          {/* Content overlay (currently empty, ready for heading if needed) */}
          <div className="absolute inset-0 flex flex-col justify-between text-white py-10 px-4 md:pl-16 lg:pl-24">
            <div className="max-w-2xl">
              {/* You can add PetPad heading/subtitle here similar to Home if desired */}
            </div>
          </div>
        </div>
      </section>

      {/* Danger Section */}
      <section className="py-20 bg-destructive/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <img 
                src={petDanger} 
                alt="Pet in danger"
                className="rounded-lg shadow-2xl"
              />
              <div>
                <h2 className="text-4xl font-bold mb-6">The Danger Is Real</h2>
                <div className="space-y-4 text-lg">
                  <p className="text-destructive font-semibold">
                    On a 90° day, the temperature inside a vehicle can reach 110° in just 10 minutes.
                  </p>
                  <p>
                    A pet can suffer heatstroke and die in as little as 15 minutes.
                  </p>
                  <p>
                    Even with windows cracked, the temperature inside a car can become deadly for your furry family member.
                  </p>
                  <p className="font-semibold">
                    Don't let your best friend become a statistic.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Pet Pad Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature) => (
                <Card key={feature.title}>
                  <CardHeader>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">How Pet Pad Works</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Place & Connect</h3>
                      <p className="text-muted-foreground">
                        Place the Pet Pad in your vehicle where your pet normally sits. Connect it to the NeverForget™ app via Bluetooth.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Automatic Detection</h3>
                      <p className="text-muted-foreground">
                        The pad automatically detects when your pet is present and monitors their safety status.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Instant Alerts</h3>
                      <p className="text-muted-foreground">
                        If you leave the vehicle with your pet inside, you'll receive immediate alerts with the same escalating system as the baby version.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Emergency Response</h3>
                      <p className="text-muted-foreground">
                        If you don't respond, emergency services are contacted automatically with your vehicle's GPS location.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
      </section>

    </section>
  );
}

export default function PetPad() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PetPadSection />
      </main>
      <Footer />
    </div>
  );
}
