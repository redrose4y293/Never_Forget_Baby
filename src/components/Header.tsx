import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "/#home" },
  { name: "Product", href: "/#product" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Pet Pad", href: "/#pet-pad" },
  { name: "Our Mission", href: "/#our-mission" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/#home" className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-primary">NeverForget™</div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button asChild className="ml-4">
            <a href="/#buy-now">Buy Now</a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <Button asChild className="w-full">
                <a href="/#buy-now" onClick={() => setIsOpen(false)}>
                  Buy Now
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
