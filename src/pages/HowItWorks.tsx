import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const steps = [
    {
      number: 1,
      title: "Weight Detected on Pressure Pad",
      description: "The moment your child or pet is placed in the car seat, the pressure-sensitive pad activates and begins monitoring.",
      icon: "🪑",
      color: "bg-blue-500"
    },
    {
      number: 2,
      title: "Phone Notification Triggers",
      description: "When you exit the vehicle and move away, the system detects the separation and sends an immediate alert to your phone.",
      icon: "📱",
      color: "bg-yellow-500"
    },
    {
      number: 3,
      title: "Second Warning if No Response",
      description: "If you don't acknowledge the first alert within 2 minutes, the system escalates with louder alarms and repeated notifications.",
      icon: "⚠️",
      color: "bg-orange-500"
    },
    {
      number: 4,
      title: "Police Notified with Live GPS",
      description: "After 5 minutes with no response, emergency services are automatically contacted with your exact GPS coordinates and vehicle information.",
      icon: "🚔",
      color: "bg-red-500"
    }
  ];

export function HowItWorksSection() {
  return (
    <section id="how-it-works">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A simple, four-step process that stands between a forgotten moment and a tragedy.
            </p>
          </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.number}>
                  <Card className="relative overflow-hidden border-2">
                    <div className={`absolute top-0 left-0 w-2 h-full ${step.color}`} />
                    <CardContent className="pt-8 pl-8">
                      <div className="flex items-start gap-6">
                        <div className={`${step.color} text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl flex-shrink-0`}>
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-muted-foreground mb-2">Step {step.number}</div>
                          <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-8">
                      <ArrowDown className="w-8 h-8 text-muted-foreground animate-bounce" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* Response Times */}
      <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Every Second Counts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-primary mb-2">0-2</div>
                  <div className="text-sm text-muted-foreground mb-4">MINUTES</div>
                  <p className="text-sm">First alert sent to your phone with loud notification</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-orange-500 mb-2">2-5</div>
                  <div className="text-sm text-muted-foreground mb-4">MINUTES</div>
                  <p className="text-sm">Escalated warnings with repeated alerts and alarms</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-destructive mb-2">5+</div>
                  <div className="text-sm text-muted-foreground mb-4">MINUTES</div>
                  <p className="text-sm">Emergency services contacted with GPS location</p>
                </CardContent>
              </Card>
            </div>
          </div>
      </section>
    </section>
  );
}

export default function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
}
