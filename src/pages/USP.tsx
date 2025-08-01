import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Star, TrendingUp, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const USP = () => {
  const uniqueSellingPoints = [
    {
      icon: Star,
      title: "Premium Quality Promise",
      description: "Every grain passes through 15+ quality checkpoints before reaching you.",
      highlight: "Zero compromise on quality"
    },
    {
      icon: TrendingUp,
      title: "Direct Farm Partnership",
      description: "We work directly with farmers, ensuring fair prices and superior quality control.",
      highlight: "Cutting out middlemen"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Supporting 500+ farming families while preserving traditional agricultural methods.",
      highlight: "Social responsibility"
    },
    {
      icon: CheckCircle,
      title: "Freshness Guarantee",
      description: "Our unique cold-chain logistics ensures maximum freshness from farm to table.",
      highlight: "Maximum nutrition retention"
    }
  ];

  const competitiveAdvantages = [
    "Lowest processing time in industry (24-48 hours)",
    "100% traceability - track your grain to its source farm",
    "No artificial preservatives or additives",
    "Customizable packaging sizes for all needs",
    "24/7 customer support with agricultural experts",
    "Subscription service with doorstep delivery"
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
          <h1 className="text-4xl font-bold text-foreground">Unique Selling Points</h1>
        </div>

        {/* Main USP Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-grain-green mb-4">
            Why Choose The Grain Company?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We don't just sell grains - we deliver a promise of quality, sustainability, 
            and community impact that sets us apart in the industry.
          </p>
        </div>

        {/* USP Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {uniqueSellingPoints.map((usp, index) => (
            <Card key={index} className="border-grain-green-light hover:shadow-natural transition-all duration-300 hover:border-grain-green">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-grain-green">
                  <usp.icon className="h-8 w-8" />
                  {usp.title}
                </CardTitle>
                <div className="inline-block bg-grain-green-light px-3 py-1 rounded-full text-sm font-medium text-grain-green-dark">
                  {usp.highlight}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {usp.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Competitive Advantages */}
        <div className="bg-card rounded-lg p-8 shadow-soft mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8 text-grain-green">
            Our Competitive Edge
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {competitiveAdvantages.map((advantage, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-grain-green flex-shrink-0" />
                <span className="text-muted-foreground">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-primary rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Our Value Proposition
          </h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            "More hands in farming, fewer in processing" - We invest in people and 
            technology where it matters most, delivering exceptional value without 
            compromising on quality or sustainability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div>
              <div className="text-3xl font-bold mb-2">30%</div>
              <div className="text-white/80">Lower processing time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25%</div>
              <div className="text-white/80">Higher farmer income</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15%</div>
              <div className="text-white/80">More nutrition retained</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USP;