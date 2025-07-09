"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Calendar, Palette, Home, Briefcase, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const achievements = [
  {
    icon: Users,
    number: "500+",
    label: "Happy Clients",
  },
  {
    icon: Briefcase,
    number: "1000+",
    label: "Projects Completed",
  },
  {
    icon: Calendar,
    number: "5+",
    label: "Years Experience",
  },
  {
    icon: Award,
    number: "15+",
    label: "Awards Won",
  },
]

const services = [
  {
    icon: Palette,
    title: "Custom Nameplates",
    description: "Personalized nameplates for homes and offices with premium materials and finishes.",
  },
  {
    icon: Home,
    title: "Wall Art Design",
    description: "Stunning wall art pieces that transform your space and reflect your personality.",
  },
  {
    icon: Briefcase,
    title: "Interior Consultation",
    description: "Expert advice on interior design, space planning, and decor selection.",
  },
  {
    icon: Heart,
    title: "Custom Decor",
    description: "Unique decorative items including lamps, clocks, and artistic pieces.",
  },
]

const timeline = [
  {
    year: "2019",
    title: "Started Journey",
    description: "Began interior design career with a passion for creating beautiful spaces.",
  },
  {
    year: "2020",
    title: "First Major Project",
    description: "Completed first commercial interior design project for a Mumbai office.",
  },
  {
    year: "2021",
    title: "Award Recognition",
    description: "Won 'Best Emerging Designer' award at Mumbai Interior Design Awards.",
  },
  {
    year: "2022",
    title: "Business Expansion",
    description: "Launched custom nameplate and wall art product line.",
  },
  {
    year: "2023",
    title: "Online Platform",
    description: "Launched online platform to serve clients across India.",
  },
  {
    year: "2024",
    title: "500+ Happy Clients",
    description: "Reached milestone of serving over 500 satisfied customers.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="w-fit">Interior Design Expert</Badge>
                <h1 className="text-4xl md:text-5xl font-bold">Meet Parag</h1>
                <p className="text-xl text-muted-foreground">
                  Transforming spaces with creativity, passion, and attention to detail. Specializing in custom interior
                  solutions that reflect your unique style.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/shop">View Portfolio</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Parag - Interior Designer"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-muted-foreground">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Design Philosophy</h2>
              <p className="text-lg text-muted-foreground">
                Every space tells a story, and I believe in creating designs that reflect the personality and lifestyle
                of those who inhabit them.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                With over 5 years of experience in interior design, I've had the privilege of transforming hundreds of
                spaces across Mumbai and beyond. My journey began with a simple belief: that good design should be
                accessible, personal, and meaningful.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                I specialize in creating custom interior solutions that go beyond mere decoration. Whether it's a
                personalized nameplate that welcomes guests to your home, a piece of wall art that captures your
                essence, or a complete interior makeover, every project is approached with the same level of dedication
                and creativity.
              </p>

              <p className="text-lg leading-relaxed">
                My work has been recognized with multiple awards, but the real reward comes from seeing the joy on my
                clients' faces when they see their transformed spaces. I believe that great design is not just about
                aesthetics—it's about creating environments that enhance the way we live, work, and connect with others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From custom nameplates to complete interior solutions, I provide comprehensive design services tailored to
              your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-lg text-muted-foreground">
              A timeline of milestones and achievements in my design career.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {item.year}
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's work together to create something beautiful and meaningful for your home or office. Get in touch
                for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/customize">Start Customizing</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
