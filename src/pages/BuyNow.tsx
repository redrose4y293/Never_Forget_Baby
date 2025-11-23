import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const products = [
  {
    name: "Full Kit - Individual",
    price: "$299",
    description: "Complete NeverForget™ system for one vehicle",
    features: [
      "Pressure pad sensor",
      "Mobile app access",
      "GPS tracking",
      "Emergency auto-dispatch",
      "Lifetime software updates",
      "1-year warranty",
      "Free shipping"
    ],
    popular: false,
    // IMPORTANT: Replace this placeholder with your real Stripe Payment Link URL
    // Get it from: https://dashboard.stripe.com → Products → Payment Links → Create new link
    // This placeholder link is invalid and will show "Access Denied" error
    link: "https://buy.stripe.com/pk_test_51SKkKXPstA9CgHJ5LAPiNslwqIMF6iuq6saBqyaQUwqjHqumIv6pO2EXCf3nK5zEMku3CpIHTiaIfuQYhTzl3Lih00A5LUKjeZ",
  },
  {
    name: "Baby + Pet Bundle",
    price: "$499",
    description: "Complete protection for children and pets",
    features: [
      "Baby pressure pad sensor",
      "Pet pressure pad sensor",
      "Mobile app for both",
      "GPS tracking for both",
      "Emergency auto-dispatch",
      "Lifetime software updates",
      "2-year warranty",
      "Free shipping"
    ],
    popular: true,
    // TODO: replace with your real Stripe Payment Link URL for this product
    link: "https://buy.stripe.com/pk_test_51SKkKXPstA9CgHJ5LAPiNslwqIMF6iuq6saBqyaQUwqjHqumIv6pO2EXCf3nK5zEMku3CpIHTiaIfuQYhTzl3Lih00A5LUKjeZ",
  },
  {
    name: "Pet Pad Only",
    price: "$199",
    description: "Preorder the pet-specific system",
    features: [
      "Pet pressure pad sensor",
      "Mobile app access",
      "GPS tracking",
      "Temperature monitoring",
      "Emergency auto-dispatch",
      "Lifetime software updates",
      "1-year warranty",
      "Free shipping"
    ],
    popular: false,
    // IMPORTANT: Replace this placeholder with your real Stripe Payment Link URL
    // Get it from: https://dashboard.stripe.com → Products → Payment Links → Create new link
    // This placeholder link is invalid and will show "Access Denied" error
    link: "https://buy.stripe.com/pk_test_51SKkKXPstA9CgHJ5LAPiNslwqIMF6iuq6saBqyaQUwqjHqumIv6pO2EXCf3nK5zEMku3CpIHTiaIfuQYhTzl3Lih00A5LUKjeZ",
  }
];

const bulkPricing = [
  {
    quantity: "10-49 units",
    discount: "15% off",
    price: "$254 per unit"
  },
  {
    quantity: "50-99 units",
    discount: "25% off",
    price: "$224 per unit"
  },
  {
    quantity: "100+ units",
    discount: "35% off",
    price: "$194 per unit"
  }
];

export function BuyNowSection() {
  const handleBuyClick = (link: string, productName: string) => {
    // Validate that the link is a valid Stripe payment link
    if (!link || link.includes('pk_test_') && link === "https://buy.stripe.com/pk_test_51SKkKXPstA9CgHJ5LAPiNslwqIMF6iuq6saBqyaQUwqjHqumIv6pO2EXCf3nK5zEMku3CpIHTiaIfuQYhTzl3Lih00A5LUKjeZ") {
      alert(`Please configure a valid Stripe Payment Link for "${productName}" in the code. The current link is a placeholder and has been deactivated.`);
      return;
    }
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="buy-now">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Get NeverForget™ Today</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the protection that's right for your family
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <Card
                key={product.name}
                className={`relative ${product.popular ? 'border-primary border-2 shadow-lg' : ''}`}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                  <div className="text-4xl font-bold text-primary mt-4">{product.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full transition-transform hover:-translate-y-0.5"
                    size="lg"
                    variant={product.popular ? "default" : "outline"}
                    onClick={() => handleBuyClick(product.link, product.name)}
                  >
                    {product.name.includes("Preorder") ? "Preorder Now" : "Buy Now"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Purchase Section */}
      {/* <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Bulk Purchase</CardTitle>
                  <CardDescription className="text-lg">
                    For institutions, law enforcement, and organizations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-6">
                    We offer special pricing for bulk orders. Perfect for daycare centers, police departments, car rental companies, and corporate fleets.
                  </p>

                  <div className="space-y-4 mb-8">
                    {bulkPricing.map((tier) => (
                      <div 
                        key={tier.quantity}
                        className="flex items-center justify-between p-4 bg-background border rounded-lg"
                      >
                        <div>
                          <div className="font-semibold">{tier.quantity}</div>
                          <div className="text-sm text-muted-foreground">{tier.discount}</div>
                        </div>
                        <div className="text-2xl font-bold text-primary">{tier.price}</div>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full" size="lg" variant="outline">
                    Request Bulk Quote
                  </Button>

                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <h4 className="font-semibold mb-2">Bulk Benefits:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>✓ Flexible payment terms</li>
                      <li>✓ Dedicated account manager</li>
                      <li>✓ Custom training sessions</li>
                      <li>✓ Priority customer support</li>
                      <li>✓ Extended warranty options</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

      {/* Features Reminder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">🪑</div>
                <h3 className="font-semibold mb-2">Pressure Pad</h3>
                <p className="text-sm text-muted-foreground">Advanced weight detection technology</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="font-semibold mb-2">Mobile App</h3>
                <p className="text-sm text-muted-foreground">iOS & Android compatible</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">📍</div>
                <h3 className="font-semibold mb-2">GPS Tracking</h3>
                <p className="text-sm text-muted-foreground">Real-time location sharing</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">🚨</div>
                <h3 className="font-semibold mb-2">Auto-Dispatch</h3>
                <p className="text-sm text-muted-foreground">Emergency services integration</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Purchase form removed: Stripe Payment Links are used directly from product cards */}

      {/* Guarantee Section */}
      {/* <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">30-Day Money-Back Guarantee</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Try NeverForget™ risk-free. If you're not completely satisfied within 30 days, we'll refund your purchase. No questions asked.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Order Now
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </section> */}
    </section>
  );
}

export default function BuyNow() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <BuyNowSection />
      </main>
      <Footer />
    </div>
  );
}
