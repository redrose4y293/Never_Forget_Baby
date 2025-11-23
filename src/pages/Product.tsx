import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import connectedSensor from "@/assets/connected-sensor.png";
import alertPhone from "@/assets/alert-phone.png";
import lawEnforcement from "@/assets/law-enforcement.png";
import emergencyDispatch from "@/assets/emergency-dispatch.png";

const components = [
    {
      title: "Pressure Pad Sensor",
      description: "Advanced weight detection technology that automatically activates when a child or pet is placed in the seat.",
      image: connectedSensor,
      features: [
        "Ultra-sensitive pressure detection",
        "Anti-slip material",
        "Works with any car seat",
        "Battery backup included"
      ]
    },
    {
      title: "Mobile App Alerts",
      description: "Instant notifications to your smartphone when the system detects occupancy and you've left the vehicle.",
      image: alertPhone,
      features: [
        "Multi-level alert system",
        "Bluetooth & cellular connectivity",
        "Customizable notification settings",
        "Works on iOS & Android"
      ]
    },
    {
      title: "GPS Tracking",
      description: "Real-time location tracking ensures emergency services can find your vehicle immediately.",
      image: lawEnforcement,
      features: [
        "Precise GPS coordinates",
        "Real-time location updates",
        "Automatic sharing with authorities",
        "Location history"
      ]
    },
    {
      title: "Emergency Auto-Dispatch",
      description: "If you don't respond to alerts, the system automatically contacts emergency services with your vehicle's location.",
      image: emergencyDispatch,
      features: [
        "Automatic 911 notification",
        "GPS coordinates transmitted",
        "Two-way communication",
        "Police priority dispatch"
      ]
    }
  ];

export function ProductSection() {
  return (
    <section id="product">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">The Complete NeverForget™ System</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive safety solution that combines cutting-edge hardware and intelligent software to protect the lives that matter most.
            </p>
          </div>
      </section>

      {/* Components Section */}
      <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {components.map((component, index) => (
                <div 
                  key={component.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="text-3xl">{component.title}</CardTitle>
                        <CardDescription className="text-base">{component.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {component.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <span className="text-primary mr-2">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <img 
                      src={component.image} 
                      alt={component.title}
                      className="rounded-lg shadow-2xl w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Connectivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Bluetooth 5.0</li>
                    <li>• 4G LTE Cellular</li>
                    <li>• GPS + GLONASS</li>
                    <li>• Wi-Fi 802.11 b/g/n</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Power</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 72-hour battery backup</li>
                    <li>• USB-C charging</li>
                    <li>• Low battery alerts</li>
                    <li>• Auto power management</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Compatibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• All car seats</li>
                    <li>• iOS 13+ / Android 8+</li>
                    <li>• Universal vehicle fit</li>
                    <li>• Multi-device pairing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </section>
  );
}

export default function Product() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ProductSection />
      </main>
      <Footer />
    </div>
  );
}
