import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "How does NeverForget™ work?",
          a: "NeverForget™ uses a pressure-sensitive pad that detects when a child or pet is in the seat. When you leave the vehicle and move away, the system sends alerts to your phone. If you don't respond within 5 minutes, emergency services are automatically contacted with your GPS location."
        },
        {
          q: "Is NeverForget™ compatible with all car seats?",
          a: "Yes! NeverForget™ is designed to work with any car seat, booster seat, or directly on vehicle seats. The universal design ensures compatibility across all vehicle types and seat models."
        },
        {
          q: "Do I need a smartphone to use NeverForget™?",
          a: "Yes, a smartphone (iOS 13+ or Android 8+) is required to receive alerts and manage the system. However, the emergency dispatch feature works independently even if your phone is off or out of battery."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          q: "What if my phone battery dies?",
          a: "The system has a built-in safety feature. If it cannot reach your phone after multiple attempts, it will automatically escalate to emergency services to ensure your child's safety."
        },
        {
          q: "Does this work without cellular service or SIM card?",
          a: "The pad has its own cellular connection for emergency dispatch. While the smartphone app requires cellular or Wi-Fi for alerts, the emergency features work independently through the pad's built-in connection."
        },
        {
          q: "How long does the battery last?",
          a: "The pressure pad has a 72-hour battery backup. Under normal use with regular charging via USB-C, the system maintains constant power. You'll receive low battery alerts well in advance."
        },
        {
          q: "Is the pad waterproof?",
          a: "The pad is water-resistant (IP65 rated) and can handle spills, accidents, and normal cleaning. However, it should not be submerged in water."
        }
      ]
    },
    {
      category: "Safety & Alerts",
      questions: [
        {
          q: "Will it give false alerts?",
          a: "The system is designed to minimize false alerts through smart weight detection and movement sensors. It can distinguish between a child/pet and objects like bags or car seats. You can also customize sensitivity settings in the app."
        },
        {
          q: "How loud are the alerts?",
          a: "Phone alerts use maximum volume regardless of your phone settings. The escalation system ensures you can't miss the alert with repeated notifications, vibrations, and sounds."
        },
        {
          q: "What information is sent to emergency services?",
          a: "Emergency services receive your vehicle's exact GPS coordinates, your contact information, and a notification that a child has been detected in the vehicle. This ensures the fastest possible response."
        },
        {
          q: "Can I disable the emergency dispatch feature?",
          a: "For safety reasons, the emergency dispatch cannot be fully disabled. However, you can extend the response time from 5 to 10 minutes in the app settings if needed."
        }
      ]
    },
    {
      category: "Installation & Use",
      questions: [
        {
          q: "How difficult is installation?",
          a: "Installation is simple and takes less than 5 minutes. Just place the pad under the car seat cover or cushion, pair it with your phone via Bluetooth, and you're ready to go. No tools or professional installation required."
        },
        {
          q: "Can I move the pad between vehicles?",
          a: "Yes! The pad is portable and can be easily moved between vehicles. Simply reconnect it to your app in the new vehicle."
        },
        {
          q: "Does it work in extreme temperatures?",
          a: "Yes, the system is designed to operate in temperatures from -4°F to 140°F (-20°C to 60°C), covering virtually all climate conditions."
        }
      ]
    },
    {
      category: "Pet Pad",
      questions: [
        {
          q: "What's different about the Pet Pad?",
          a: "The Pet Pad is designed for larger weight ranges and can be placed anywhere in the vehicle (back seat, cargo area, or crate). It includes enhanced temperature monitoring specific to pet safety."
        },
        {
          q: "Will my pet trigger false alerts by moving around?",
          a: "The Pet Pad uses advanced algorithms to detect continuous presence rather than momentary weight. Your pet can move freely without triggering false alerts."
        }
      ]
    },
    {
      category: "Subscription & Costs",
      questions: [
        {
          q: "Are there monthly fees or subscriptions?",
          a: "No monthly fees! The purchase price includes lifetime access to the app, GPS tracking, and emergency dispatch services. All software updates are free."
        },
        {
          q: "What's included in the warranty?",
          a: "All units come with a 1-year manufacturer warranty covering defects and malfunctions. Extended warranty options are available at purchase."
        }
      ]
    },
    {
      category: "Privacy & Data",
      questions: [
        {
          q: "How is my data protected?",
          a: "All data is encrypted end-to-end. We never sell your information. GPS data is only transmitted during emergency situations and is automatically deleted after 30 days."
        },
        {
          q: "Who has access to my vehicle's location?",
          a: "Only you have access to location data through your app. Location is only shared with emergency services if the automatic dispatch is triggered."
        }
      ]
    }
  ];

export function FAQSection() {
  return (
    <section id="faq">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about NeverForget™
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            {faqs.map((category) => (
              <div key={category.category} className="mb-12">
                <h2 className="text-3xl font-bold mb-6">{category.category}</h2>
                <Card>
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`${category.category}-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our customer support team is here to help. Contact us anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '#contact'}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-semibold text-lg"
              >
                Contact Support
              </button>
              <button 
                onClick={() => window.location.href = '#buy-now'}
                className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-md font-semibold text-lg"
              >
                Buy NeverForget™
              </button>
            </div>
          </div>
        </section>
    </section>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
