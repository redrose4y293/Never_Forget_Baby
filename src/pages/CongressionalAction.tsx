import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function CongressionalActionSection() {
  return (
    <section id="congressional-action">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Congressional Action</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Help us mandate this life-saving technology nationwide by 2027.
            </p>
          </div>
      </section>

      {/* Proposal Section */}
      <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-3xl">Our Proposal</CardTitle>
                  <CardDescription className="text-lg">
                    Making child detection systems mandatory in all new vehicles
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none mb-6">
                    <p className="text-lg mb-4">
                      We are working with legislators to introduce federal legislation that would require all new passenger vehicles to be equipped with child detection and alert systems by 2027.
                    </p>
                    <p className="text-lg mb-4">
                      Our proposal includes:
                    </p>
                    <ul className="space-y-2 text-lg">
                      <li>Mandatory pressure-sensitive detection systems in rear passenger seats</li>
                      <li>Automatic alerts to caregivers via smartphone or vehicle systems</li>
                      <li>Integration with emergency services for automatic dispatch</li>
                      <li>GPS tracking capabilities for emergency response</li>
                      <li>Retrofit programs for older vehicles</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Statistics Card */}
              <Card className="mb-8 bg-destructive/10 border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Why This Matters</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-destructive mb-2">1,050+</div>
                      <p className="text-sm">Children lost since 1998</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-destructive mb-2">100%</div>
                      <p className="text-sm">Of these deaths were preventable</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-destructive mb-2">$0</div>
                      <p className="text-sm">The cost of a child's life to their family</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lobbying Letter Card */}
              
            </div>
          </div>
        </section>

      {/* Support Section */}
      <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Who Supports This Initiative</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">🏥</div>
                  <h3 className="font-semibold mb-2">Medical Professionals</h3>
                  <p className="text-sm text-muted-foreground">Pediatricians and emergency medicine doctors</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">👮</div>
                  <h3 className="font-semibold mb-2">Law Enforcement</h3>
                  <p className="text-sm text-muted-foreground">Police departments and first responders</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
                  <h3 className="font-semibold mb-2">Parent Groups</h3>
                  <p className="text-sm text-muted-foreground">National parent safety organizations</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">🚗</div>
                  <h3 className="font-semibold mb-2">Auto Industry</h3>
                  <p className="text-sm text-muted-foreground">Forward-thinking manufacturers</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

    </section>
  );
}

export default function CongressionalAction() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CongressionalActionSection />
      </main>
      <Footer />
    </div>
  );
}
