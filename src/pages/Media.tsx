import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function MediaSection() {
  return (
    <section id="media">
      {/* Hero Section */}
      {/* <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Media & Press</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Videos, testimonials, and press materials
            </p>
          </div>
        </section> */}

        {/* Commercial Section */}
        {/* <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto"> */}
              {/* <Card>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
                    <div className="text-center">
                      <Play className="w-20 h-20 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground font-semibold">
                        Commercial video coming soon
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Our launch commercial and testimonial videos are in production. Check back soon to see NeverForget™ in action.
                  </p>
                </CardContent>
              </Card> */}
            {/* </div>
          </div>
        </section> */}

        {/* Testimonials Section */}
        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Parent Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Play className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Sarah's Story</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    "NeverForget™ alerted me just 30 seconds after I walked into the store. I can't imagine what could have happened."
                  </p>
                  <Button variant="outline" size="sm" className="w-full" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Play className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Michael's Experience</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    "As a first-time dad, this system gives me incredible peace of mind. It's like having a guardian angel."
                  </p>
                  <Button variant="outline" size="sm" className="w-full" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Play className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Jennifer's Testimony</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    "The pet pad saved my dog's life. I was only gone for 5 minutes, but it was enough to get the alert."
                  </p>
                  <Button variant="outline" size="sm" className="w-full" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Press Coverage */}
        {/* <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Press Coverage</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-4 flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">📰</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">Featured in Major News Outlets</h3>
                      <p className="text-muted-foreground mb-4">
                        NeverForget™ has been featured in numerous news outlets and publications highlighting its life-saving technology.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-muted px-3 py-1 rounded text-sm">CNN</span>
                        <span className="bg-muted px-3 py-1 rounded text-sm">ABC News</span>
                        <span className="bg-muted px-3 py-1 rounded text-sm">TechCrunch</span>
                        <span className="bg-muted px-3 py-1 rounded text-sm">Parenting Magazine</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        {/* Press Kit Section */}
        {/* <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Press Kit</CardTitle>
                  <CardDescription className="text-lg">
                    Everything you need for media coverage
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-6">
                    Download our comprehensive press kit including high-resolution images, product specifications, company information, and founder bio.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" size="lg" className="w-full">
                      <Download className="mr-2 h-5 w-5" />
                      Download Press Kit (PDF)
                    </Button>
                    <Button variant="outline" size="lg" className="w-full">
                      <Download className="mr-2 h-5 w-5" />
                      Download Images (ZIP)
                    </Button>
                  </div>

                  <div className="mt-8 p-6 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-3">Press Kit Includes:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>✓ High-resolution product images</li>
                      <li>✓ Company logo and brand assets</li>
                      <li>✓ Founder biography and photos</li>
                      <li>✓ Technical specifications</li>
                      <li>✓ Statistics and research data</li>
                      <li>✓ Press release templates</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        {/* Media Contact Section */}
        {/* <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Media Inquiries</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              For press inquiries, interview requests, or additional information, please contact our media team.
            </p>
            <Button asChild size="lg">
              <a href="/contact?type=press">Contact Press Team</a>
            </Button>
          </div>
        </section> */}
    </section>
  );
}

export default function Media() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <MediaSection />
      </main>
      <Footer />
    </div>
  );
}
