import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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
          <h1 className="text-4xl font-bold text-foreground">About Us</h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-grain-green">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Grain Company was founded with a simple vision: to bring the finest, 
              most natural grain products from farm to table. With decades of experience 
              in agriculture and food processing, we've built a legacy of trust and quality 
              that spans generations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to sustainable farming practices and traditional methods 
              ensures that every product we deliver maintains the nutritional integrity 
              and authentic taste that nature intended.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="border-grain-green-light">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-grain-green">
                  <Users className="h-5 w-5" />
                  Our Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  A passionate team of agricultural experts, nutritionists, and food 
                  technologists working together to deliver excellence.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-grain-green-light">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-grain-green">
                  <Target className="h-5 w-5" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  To provide premium quality, natural grain products while supporting 
                  sustainable agriculture and local farming communities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-grain-green-light">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-grain-green">
                  <Award className="h-5 w-5" />
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Quality, sustainability, transparency, and community support drive 
                  everything we do in our pursuit of agricultural excellence.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-card rounded-lg p-8 shadow-soft">
          <h3 className="text-2xl font-semibold text-center mb-8 text-grain-green">
            Our Impact in Numbers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-grain-green mb-2">25+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-grain-green mb-2">500+</div>
              <div className="text-muted-foreground">Partner Farmers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-grain-green mb-2">10,000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-grain-green mb-2">100%</div>
              <div className="text-muted-foreground">Natural Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;