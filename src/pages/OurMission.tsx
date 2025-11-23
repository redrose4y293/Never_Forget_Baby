import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function OurMissionSection() {
  return (
    <section id="our-mission">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              To make vehicular heatstroke deaths a thing of the past through technology and awareness.
            </p>
          </div>
      </section>

      {/* Founder Message */}
      <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-2">
              <CardContent className="pt-12 pb-12">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold mb-6 text-center">A Message from Our Founder</h2>
                  
                  <p className="text-lg mb-6">
                    My name is Nathan Reardon, and I created NeverForget™ after hearing one too many tragic stories of children dying in hot cars.
                  </p>

                  <p className="text-lg mb-6">
                    As a father myself, these stories haunted me. What struck me most was that these weren't negligent parents – they were loving, caring individuals who simply had a momentary lapse in an otherwise normal day. A change in routine. A stressful morning. A sleeping child in the backseat.
                  </p>

                  <p className="text-lg mb-6">
                    I realized that we live in an age where our phones can detect our face, our cars can drive themselves, and we can video call someone on the other side of the world – yet we had no reliable system to prevent these preventable deaths.
                  </p>

                  <p className="text-lg mb-6">
                    That's when I assembled a team of engineers, child safety experts, and emergency response professionals to create NeverForget™. Our goal was simple: create a foolproof system that would alert parents before tragedy strikes, and automatically summon help if they can't respond.
                  </p>

                  <p className="text-lg mb-6">
                    We spent three years developing and testing the technology. We worked with emergency services to ensure seamless integration. We tested with families in real-world conditions. And we made sure the system was so reliable and easy to use that it would become second nature.
                  </p>

                  <p className="text-lg mb-6">
                    But technology alone isn't enough. That's why we're also committed to raising awareness and working with legislators to make this technology standard in all vehicles. Every child's life is precious, and no family should have to endure this preventable tragedy.
                  </p>

                  <p className="text-lg mb-8">
                    NeverForget™ is more than a product – it's a mission to save lives. Join us in making vehicular heatstroke deaths a thing of the past.
                  </p>

                  <div className="text-right">
                    <p className="text-2xl font-signature mb-2">Nathan Reardon</p>
                    <p className="text-muted-foreground">Founder & CEO, NeverForget™</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="pt-8">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="text-xl font-semibold mb-3">Safety First</h3>
                  <p className="text-muted-foreground">
                    Every decision we make is guided by one question: Will this save lives?
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8">
                  <div className="text-4xl mb-4">🔬</div>
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    We leverage cutting-edge technology to solve age-old problems in child safety.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8">
                  <div className="text-4xl mb-4">❤️</div>
                  <h3 className="text-xl font-semibold mb-3">Compassion</h3>
                  <p className="text-muted-foreground">
                    We understand that these tragedies happen to loving parents, and we're here to help.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-semibold mb-3">Partnership</h3>
                  <p className="text-muted-foreground">
                    We work closely with emergency services, legislators, and safety advocates.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8">
                  <div className="text-4xl mb-4">📢</div>
                  <h3 className="text-xl font-semibold mb-3">Awareness</h3>
                  <p className="text-muted-foreground">
                    Education and awareness are just as important as technology in preventing deaths.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8">
                  <div className="text-4xl mb-4">⚖️</div>
                  <h3 className="text-xl font-semibold mb-3">Advocacy</h3>
                  <p className="text-muted-foreground">
                    We're committed to making this life-saving technology mandatory in all vehicles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      {/* Timeline Section */}
      <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-24 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                      2020
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Concept & Research</h3>
                      <p className="text-muted-foreground">
                        Started researching the problem and consulting with child safety experts and emergency responders.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-24 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                      2021
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Development</h3>
                      <p className="text-muted-foreground">
                        Assembled our engineering team and began developing the first prototypes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-24 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                      2022
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Testing</h3>
                      <p className="text-muted-foreground">
                        Conducted extensive real-world testing with families and emergency services integration.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-24 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                      2023
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Launch</h3>
                      <p className="text-muted-foreground">
                        Official product launch and beginning of our legislative advocacy campaign.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-24 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                      2024
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Expansion</h3>
                      <p className="text-muted-foreground">
                        Launched Pet Pad version and expanded partnerships with car seat manufacturers.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-24 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                      2027
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Goal</h3>
                      <p className="text-muted-foreground">
                        Make NeverForget™ technology mandatory in all new vehicles by 2027.
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

export default function OurMission() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <OurMissionSection />
      </main>
      <Footer />
    </div>
  );
}
