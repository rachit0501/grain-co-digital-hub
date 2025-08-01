import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Leaf, Shield, Truck, Heart, Globe, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Organic",
      description: "All our products are certified organic, grown without harmful pesticides or chemicals."
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Rigorous quality control processes ensure only the finest grains reach your table."
    },
    {
      icon: Truck,
      title: "Fresh Delivery",
      description: "Direct from farm to your doorstep with our efficient cold-chain logistics."
    },
    {
      icon: Heart,
      title: "Nutritionally Rich",
      description: "Packed with essential nutrients, vitamins, and minerals for a healthy lifestyle."
    },
    {
      icon: Globe,
      title: "Sustainable Sourcing",
      description: "Supporting eco-friendly farming practices that protect our environment."
    },
    {
      icon: Sparkles,
      title: "Traditional Processing",
      description: "Time-tested methods that preserve the natural goodness and authentic flavors."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-natural">
      <div className="container mx-auto px-8 py-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold text-foreground">Features</h1>
        </div>

        {/* Intro Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-grain-green mb-4">
            What Makes Us Special
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the unique features that set The Grain Company apart in delivering 
            premium quality grains and exceptional customer experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-grain-green-light hover:shadow-natural transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-grain-green">
                  <feature.icon className="h-8 w-8" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-card rounded-lg p-8 shadow-soft">
          <h3 className="text-2xl font-semibold text-center mb-8 text-grain-green">
            Our Quality Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-grain-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold mb-2">Careful Selection</h4>
              <p className="text-sm text-muted-foreground">
                We partner with certified organic farmers who share our commitment to quality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-grain-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold mb-2">Quality Testing</h4>
              <p className="text-sm text-muted-foreground">
                Every batch undergoes comprehensive testing for purity and nutritional value.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-grain-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold mb-2">Expert Processing</h4>
              <p className="text-sm text-muted-foreground">
                Traditional methods combined with modern technology ensure optimal quality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-grain-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h4 className="font-semibold mb-2">Fresh Packaging</h4>
              <p className="text-sm text-muted-foreground">
                Eco-friendly packaging that preserves freshness and extends shelf life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;