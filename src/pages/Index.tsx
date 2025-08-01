import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import grainCompanyLogo from "@/assets/grain-company-logo.png";
import freshAttaProduct from "@/assets/fresh-atta-product.png";

const Index = () => {
  const navigationItems = [
    { label: "About Us", path: "/about" },
    { label: "Features", path: "/features" },
    { label: "USP", path: "/usp" },
    { label: "Product List", path: "/products" },
    { label: "Contact Us", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/graincompany", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@graincompany", label: "YouTube" },
    { icon: Twitter, href: "https://twitter.com/graincompany", label: "Twitter" },
  ];

  return (
    <div className="min-h-screen bg-gradient-natural">
      {/* Header */}
      <header className="w-full py-6 px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src={grainCompanyLogo} 
            alt="The Grain Company Logo" 
            className="h-12 w-auto"
          />
          <h1 className="text-3xl font-bold text-foreground tracking-wide">
            THE GRAIN COMPANY
          </h1>
        </div>
        
        {/* Social Media Links */}
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              variant="outline"
              size="icon"
              asChild
              className="border-grain-green hover:bg-grain-green hover:text-white transition-colors"
            >
              <a 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex h-[calc(100vh-120px)] px-8">
        {/* Left Half - Product Image */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="relative">
            <img 
              src={freshAttaProduct} 
              alt="Fresh Atta Product" 
              className="max-w-md w-full h-auto object-contain drop-shadow-natural"
            />
          </div>
        </div>

        {/* Right Half - Navigation Buttons */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8 p-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Premium Quality Grains
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">
              Discover our range of natural, organic grain products that bring 
              the goodness of traditional farming to your table.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-xs">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                asChild
                size="lg"
                className="bg-grain-green hover:bg-grain-green-dark text-white font-semibold py-4 shadow-natural hover:shadow-lg transition-all duration-300"
              >
                <Link to={item.path}>
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;