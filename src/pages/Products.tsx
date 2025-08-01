import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, Wheat, Leaf, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const productCategories = [
    {
      title: "Premium Flour",
      icon: Wheat,
      products: [
        {
          name: "Fresh Atta",
          description: "Traditional stone-ground whole wheat flour",
          sizes: ["1kg", "5kg", "10kg"],
          features: ["Stone ground", "100% whole wheat", "High fiber"],
          price: "₹45/kg",
          rating: 4.8
        },
        {
          name: "Multigrain Flour",
          description: "Nutritious blend of wheat, oats, and millets",
          sizes: ["1kg", "2kg", "5kg"],
          features: ["7 grain blend", "High protein", "Gluten friendly"],
          price: "₹65/kg",
          rating: 4.7
        }
      ]
    },
    {
      title: "Organic Grains",
      icon: Leaf,
      products: [
        {
          name: "Organic Quinoa",
          description: "Premium quality imported quinoa",
          sizes: ["500g", "1kg"],
          features: ["Organic certified", "High protein", "Gluten free"],
          price: "₹320/kg",
          rating: 4.9
        },
        {
          name: "Brown Rice",
          description: "Unpolished brown rice with natural bran",
          sizes: ["1kg", "5kg", "25kg"],
          features: ["Unpolished", "High fiber", "Diabetic friendly"],
          price: "₹85/kg",
          rating: 4.6
        }
      ]
    },
    {
      title: "Traditional Millets",
      icon: Package,
      products: [
        {
          name: "Finger Millet (Ragi)",
          description: "Calcium-rich finger millet flour",
          sizes: ["500g", "1kg", "2kg"],
          features: ["High calcium", "Gluten free", "Baby food safe"],
          price: "₹95/kg",
          rating: 4.7
        },
        {
          name: "Pearl Millet (Bajra)",
          description: "Iron-rich pearl millet grain",
          sizes: ["1kg", "5kg"],
          features: ["High iron", "Drought resistant", "Traditional variety"],
          price: "₹75/kg",
          rating: 4.5
        }
      ]
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
          <h1 className="text-4xl font-bold text-foreground">Product List</h1>
        </div>

        {/* Intro Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-grain-green mb-4">
            Our Premium Product Range
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our carefully curated selection of premium grains, flours, and organic 
            products sourced directly from certified farmers across India.
          </p>
        </div>

        {/* Product Categories */}
        <div className="space-y-12">
          {productCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="h-8 w-8 text-grain-green" />
                <h3 className="text-2xl font-semibold text-grain-green">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.products.map((product, productIndex) => (
                  <Card key={productIndex} className="border-grain-green-light hover:shadow-natural transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-grain-green mb-2">
                            {product.name}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {product.description}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Features */}
                        <div className="flex flex-wrap gap-2">
                          {product.features.map((feature, featureIndex) => (
                            <Badge key={featureIndex} variant="secondary" className="bg-grain-green-light text-grain-green-dark">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        
                        {/* Sizes */}
                        <div>
                          <span className="text-sm font-medium text-muted-foreground">Available sizes: </span>
                          <span className="text-sm">{product.sizes.join(", ")}</span>
                        </div>
                        
                        {/* Price and Action */}
                        <div className="flex justify-between items-center pt-4 border-t">
                          <span className="text-xl font-bold text-grain-green">
                            {product.price}
                          </span>
                          <Button className="bg-grain-green hover:bg-grain-green-dark">
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-card rounded-lg p-8 shadow-soft mt-12 text-center">
          <h3 className="text-2xl font-semibold text-grain-green mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-muted-foreground mb-6">
            We offer custom sourcing and bulk orders for restaurants, 
            hotels, and institutions. Contact us for special requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-grain-green hover:bg-grain-green-dark">
              <Link to="/contact">Request Custom Quote</Link>
            </Button>
            <Button variant="outline" className="border-grain-green text-grain-green hover:bg-grain-green hover:text-white">
              Download Catalog
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;