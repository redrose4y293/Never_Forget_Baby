import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      // Dummy Formspree endpoint – replace this ID with your real one later
      await fetch("https://formspree.io/f/mgvnzqdp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll respond within 24 hours.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "We couldn't send your message. Please try again shortly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to help. Reach out with any questions or concerns.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Your full name" 
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        placeholder="(555) 123-4567" 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiry-type">Inquiry Type *</Label>
                      <Select name="inquiry-type" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Question</SelectItem>
                          <SelectItem value="support">Customer Support</SelectItem>
                          <SelectItem value="press">Press / Media</SelectItem>
                          <SelectItem value="retailer">Retailer / Partnership</SelectItem>
                          <SelectItem value="law-enforcement">Law Enforcement</SelectItem>
                          <SelectItem value="bulk">Bulk Purchase</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Tell us how we can help..." 
                        rows={6}
                        required 
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Support</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-muted-foreground">1-800-NEVER-FORGET</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri: 8am-8pm EST</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">support@neverforget.com</p>
                      <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Press & Media</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1">Media Inquiries</h4>
                      <p className="text-muted-foreground">press@neverforget.com</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Press Kit</h4>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="/media">Download Press Materials</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Partnerships</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1">Business Development</h4>
                      <p className="text-muted-foreground">partnerships@neverforget.com</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Bulk Orders</h4>
                      <p className="text-muted-foreground">For orders of 10+ units</p>
                      <Button variant="outline" className="w-full mt-2" asChild>
                        <a href="/buy-now#bulk">Request Quote</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Headquarters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      NeverForget™ Technologies<br />
                      123 Safety Drive<br />
                      Innovation City, IC 12345<br />
                      United States
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Support */}
        <section className="py-20 bg-destructive/10">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-destructive/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚨</div>
                  <h3 className="text-2xl font-bold mb-3">Emergency Support</h3>
                  <p className="text-muted-foreground mb-4">
                    If you're experiencing a life-threatening emergency with a child or pet in a vehicle, call 911 immediately.
                  </p>
                  <p className="text-muted-foreground">
                    For technical emergencies with your NeverForget™ system, call our 24/7 emergency hotline:
                  </p>
                  <p className="text-2xl font-bold text-destructive mt-2">1-800-911-SAVE</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
    </section>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
