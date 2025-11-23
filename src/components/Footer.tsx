import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">NeverForget™</h3>
            <p className="text-sm text-muted-foreground">
              Saving Lives Through Technology
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#product" className="text-muted-foreground hover:text-primary">Features</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-primary">How It Works</a></li>
              <li><a href="#pet-pad" className="text-muted-foreground hover:text-primary">Pet Pad</a></li>
              <li><a href="#buy-now" className="text-muted-foreground hover:text-primary">Buy Now</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#our-mission" className="text-muted-foreground hover:text-primary">Our Mission</a></li>
              <li><a href="#lives-lost" className="text-muted-foreground hover:text-primary">Lives Lost</a></li>
              <li><a href="#congressional-action" className="text-muted-foreground hover:text-primary">Congressional Action</a></li>
              <li><a href="./GB.docx" target="_blank" className="text-muted-foreground hover:text-primary">Global Policy</a></li>
            
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#faq" className="text-muted-foreground hover:text-primary">FAQ</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NeverForget™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
