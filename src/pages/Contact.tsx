import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["D-36 FRIENDS COLONY", "AHMAMAU", "SHAHEED PATH", "LUCKNOW, UTTAR PRADESH, 226002"]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 9452156007", "+91 7991466995"]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["grainsforyou17@gmail.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Closed"]
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
          <h1 className="text-4xl font-bold text-foreground">Contact Us</h1>
        </div>

        {/* Intro Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-grain-green mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have questions about our products, 
            need bulk order assistance, or want to partner with us, our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-grain-green-light">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-grain-green">
                <MessageSquare className="h-6 w-6" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+91 98765 43210" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What can we help you with?" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more about your inquiry..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-grain-green hover:bg-grain-green-dark">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-grain-green-light">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-grain-green">
                    <info.icon className="h-6 w-6" />
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="mt-12">
          <Card className="bg-gradient-primary text-white border-0">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Need Immediate Assistance?
              </CardTitle>
              <CardDescription className="text-center text-white/80">
                For urgent inquiries or bulk orders, contact us directly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold mb-2">Sales Team</h4>
                  <p className="text-white/80">grainsforyou17@gmail.com</p>
                  <p className="text-white/80">+91 94521 56007</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Customer Support</h4>
                  <p className="text-white/80">grainsforyou17@gmail.com</p>
                  <p className="text-white/80">94521 56007</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Partnership</h4>
                  <p className="text-white/80">grainsforyou17@gmail.com</p>
                  <p className="text-white/80">+91 94521 56007</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <Card className="border-grain-green-light">
            <CardHeader>
              <CardTitle className="text-grain-green text-center">
                Visit Our Office
              </CardTitle>
              <CardDescription className="text-center">
                Located in the heart of Lucknow's agricultural district
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-grain-green-light h-64 rounded-lg flex items-center justify-center">
                <p className="text-grain-green-dark font-medium">
                  Interactive Map Coming Soon
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;