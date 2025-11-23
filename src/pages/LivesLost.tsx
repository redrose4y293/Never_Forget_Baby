import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import everySecond from "@/assets/every-second-counts.png";

export function LivesLostSection() {
  const [count, setCount] = useState(0);
  const targetCount = 1050;

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const facts = [
    {
      stat: "1,050+",
      label: "Children have died from vehicular heatstroke since 1998"
    },
    {
      stat: "54%",
      label: "Were forgotten by their caregiver"
    },
    {
      stat: "46%",
      label: "Gained access to vehicle on their own"
    },
    {
      stat: "10 min",
      label: "Time for car to reach dangerous temperature on 90° day"
    },
    {
      stat: "110°F",
      label: "Temperature inside car can reach in under 20 minutes"
    },
    {
      stat: "104°F",
      label: "Body temperature at which heatstroke begins"
    }
  ];

  const stories = [
    {
      title: "The Loving Parent",
      description: "A devoted mother of two, exhausted from working double shifts, thought she had dropped her 6-month-old at daycare. She drove straight to work. It wasn't until pickup time that she realized her tragic mistake. These incidents happen to loving, attentive parents who simply have a momentary lapse in their routine."
    },
    {
      title: "The Changed Routine",
      description: "A father who never did daycare dropoff had to cover for his wife who was sick. Unfamiliar with the routine, he drove to work as he always did, forgetting his daughter was in the back seat. Routine changes are a leading cause of these tragedies."
    },
    {
      title: "The Sleeping Child",
      description: "A toddler fell asleep during a quick errand. The parent forgot the child was in the car because they were so quiet. By the time they returned to the vehicle, it was too late. Even experienced parents can make this fatal mistake."
    }
  ];

  return (
    <section id="lives-lost">
      {/* Hero Section */}
      <section 
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${everySecond})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          <div className="relative z-20 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Lives Lost
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Every number represents a tragedy that could have been prevented
            </p>
          </div>
      </section>

      {/* Counter Section */}
      <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-4 border-destructive rounded-2xl p-12 mb-12">
                <div className="text-8xl md:text-9xl font-bold text-destructive mb-4">
                  {count.toLocaleString()}+
                </div>
                <p className="text-2xl font-semibold mb-2">Children Lost Since 1998</p>
                <p className="text-lg text-muted-foreground">
                  To vehicular heatstroke in the United States
                </p>
              </div>

              <p className="text-xl text-muted-foreground mb-8">
                Each of these numbers represents a child, a family forever changed, and a tragedy that could have been prevented with the right technology.
              </p>
            </div>
          </div>
      </section>

      {/* Facts Section */}
      <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">The Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {facts.map((fact) => (
                <Card key={fact.label} className="text-center">
                  <CardContent className="pt-8">
                    <div className="text-5xl font-bold text-primary mb-3">{fact.stat}</div>
                    <p className="text-muted-foreground">{fact.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
      </section>

      {/* Stories Section */}
      <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">It Can Happen to Anyone</h2>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              These tragedies don't discriminate. They happen to loving, responsible parents from all walks of life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {stories.map((story) => (
                <Card key={story.title}>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">{story.title}</h3>
                    <p className="text-muted-foreground">{story.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
      </section>

      {/* Heatstroke Danger */}
      <section className="py-20 bg-destructive/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Understanding Heatstroke</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-semibold mb-4">How Quickly It Happens</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 font-bold">
                        10m
                      </div>
                      <p>On a 90°F day, a car's interior can reach 110°F in just 10 minutes</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 font-bold">
                        20m
                      </div>
                      <p>Temperature can exceed 130°F in under 20 minutes</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-destructive text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 font-bold">
                        30m
                      </div>
                      <p>Fatal heatstroke can occur in as little as 30 minutes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-semibold mb-4">Even "Mild" Days Are Dangerous</h3>
                  <p className="text-muted-foreground mb-4">
                    Heatstroke deaths have occurred even on days as cool as 60°F. Cracking windows has been shown to have little effect on the temperature rise inside a vehicle.
                  </p>
                  <p className="font-semibold text-destructive">
                    Children's bodies heat up 3-5 times faster than adults, making them extremely vulnerable.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">We Can End This</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              With NeverForget™, these tragedies become a thing of the past. Join us in making vehicular heatstroke deaths history.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '#buy-now'}
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-md font-semibold text-lg"
              >
                Get NeverForget™ Today
              </button>
            </div>
          </div>
        </section>
    </section>
  );
}

export default function LivesLost() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <LivesLostSection />
      </main>
      <Footer />
    </div>
  );
}
