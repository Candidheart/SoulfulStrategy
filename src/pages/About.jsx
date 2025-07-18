import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Lightbulb, Feather, ArrowRight, Quote } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "Every story matters. Every wound holds wisdom. I honor the full spectrum of being human—and meet it with care, not correction."
    },
    {
      icon: Lightbulb,
      title: "Clarity",
      description:
        "Through the fog of trauma, noise, and self-doubt, I help you find the thread back to your truth—and build something steady from it."
    },
    {
      icon: Feather,
      title: "Integrity",
      description:
        "Authentic voice over polished performance. Gentle systems over hustle scripts. Progress that feels like peace."
    },
    {
      icon: Eye,
      title: "Discernment",
      description:
        "Not everything is meant to be kept, fixed, or scaled. I believe in pruning before planting. Alignment before action. Soul before strategy."
    },
    {
      icon: Sparkles,
      title: "Neurodivergent Wisdom",
      description:
        "I walk through the world with AuADHD—Autistic ADHD. It means I notice what others miss. I create systems for the scattered. I build strategies that feel like sanctuary. And I’ve stopped hiding the way my brain was built to shine."
    }
  ];

  const timeline = [
      {
        year: "2010–2015",
        title: "The Disappearing",
        description:
          "Long before the shattering, there were quiet vanishings. Of boundaries. Of breath. Of my own voice. I became who I thought I had to be—soft-spoken, over-giving, endlessly adaptable. It felt like survival, because it was."
      },
      {
        year: "2015–2023",
        title: "The Quiet Becoming",
        description:
          "Years spent tending to tiny hands and quiet dreams. I poured myself into motherhood, side hustles, and into a relationship I believed could be whole. I held it all—until I couldn’t anymore."
      },
      {
        year: "2023",
        title: "The Gentle Awakening",
        description:
          "I started naming what I’d long known. The silence wasn’t peace—it was distance. The unease wasn’t in my head—it was in my body. I stopped making excuses for someone else’s absence. I stopped editing my intuition."
      },
      {
        year: "2023–2024",
        title: "The Wilderness Season",
        description:
          "The illusion crumbled completely. Grief echoed through everything. Silence taught. I wrote my way through the ache. Poetry became my prayer, my protest, my proof of life. For the first time, I told the truth and didn’t apologize for the sound of it."
      },
      {
        year: "2024",
        title: "The Rebuild",
        description:
          "Brick by breath, I began to see that healing wasn’t just a feeling—it was a structure. I built systems to hold myself, then began offering them to women walking their own wilderness. I shared devotionals, created containers, and finally realized: I was never standing alone. I never had been."
      },
      {
        year: "Early 2025",
        title: "The Unmasking",
        description:
          "I’ve always been neurodivergent—AuADHD was just the name I didn’t have. For years, I overcompensated, camouflaged, armored the parts of me that moved differently, felt deeper, processed life like poetry. Naming it didn’t change who I was. It gave me permission to unmask. To stop trying to be palatable. To stop apologizing for the way my mind moves. I said yes to leadership in my church, even as the voice inside whispered, 'Don’t do it. They’ll see you.' And they did. They saw the softness. The sacred fire. The strength in my spirals. I used to believe being different made me less. What I know now is this: the people who poked at my tenderness were never my people. This was the year I became brave."
      },
      {
        year: "Mid–2025",
        title: "The Integration",
        description:
          "No more choosing between softness and strategy. I merged the sacred with the systems. *Soulful Strategy* was born—not as a brand, but as a blueprint for becoming whole. For showing up as all of me—neurodivergent, poetic, strategic, spirit-led—and helping others do the same."
      },
      {
        year: "2026 (and beyond)",
        title: "The Expansion",
        description:
          "This is no longer just my story. It’s a gathering. A collective. A legacy. I'm building spaces where women return to themselves—through story, through systems, through sacred self-trust. The future isn’t loud. It’s honest. It’s whole. It’s here."
      }
    ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6">
                This work chose me
              </h1>
              <p className="font-sans text-xl text-muted-foreground mb-8 leading-relaxed">
                I'm Samantha Josette — poet, strategist, and mirror holder for women 
                who are rebuilding their lives from the ground up.
              </p>
              <p className="font-sans text-lg text-muted-foreground mb-8 leading-relaxed">
                I didn't plan to become a trauma coach or a business strategist. 
                But when my world fell apart, I discovered that healing is a system, 
                growth is a strategy, and poetry is a framework for feeling seen.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans"
              >
                <Link to="/work-with-me">
                  Work With Me <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/src/assets/about-image.jpg" 
                  alt="Writing and reflection" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <Quote className="h-12 w-12 text-primary mb-4" />
                  <p className="font-serif text-lg text-white italic leading-relaxed">
                    "I am not the same woman who entered this wilderness, and I am grateful. 
                    She was beautiful, but she was not free."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              My Story
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              From stay-at-home mom to survivor to strategist — this is the journey 
              that shaped everything I do today.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="md:w-32 flex-shrink-0">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-center font-sans font-semibold">
                    {item.year}
                  </div>
                </div>
                <Card className="flex-1 hover:shadow-lg transition-all-smooth">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="font-sans text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              What I Believe
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              These values guide everything I do — from the way I hold space for healing 
              to the systems I build for growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all-smooth">
                  <CardContent className="p-8">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="font-sans text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                How I Work
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    Healing is a System
                  </h3>
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    Recovery isn't magic — it's methodology. I help you build frameworks 
                    that support your healing even when motivation fails.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    Strategy Meets Soul
                  </h3>
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    You don't have to choose between structure and softness. 
                    The most powerful systems honor both your humanity and your goals.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    Poetry as Framework
                  </h3>
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    Words have power to heal, to clarify, to transform. 
                    I use language as a tool for both personal healing and business growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl p-8">
              <blockquote className="font-serif text-xl text-foreground italic mb-6 leading-relaxed">
                "I am both the CEO and the product being developed. 
                The strategist and the strategy. The system and the soul 
                it was designed to serve."
              </blockquote>
              <p className="font-sans text-muted-foreground">
                — From "Systems of Grace"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Beyond the Work
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                What Fills My Cup
              </h3>
              <ul className="font-sans text-muted-foreground space-y-2">
                <li>• Morning coffee and journal pages</li>
                <li>• Long walks with my thoughts</li>
                <li>• Books that change how I see the world</li>
                <li>• Conversations that go deeper than small talk</li>
                <li>• Building systems that actually work</li>
                <li>• Watching women discover their own power</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                What I'm Learning
              </h3>
              <ul className="font-sans text-muted-foreground space-y-2">
                <li>• That healing and building can happen simultaneously</li>
                <li>• How to automate without losing the human touch</li>
                <li>• The difference between being busy and being productive</li>
                <li>• That vulnerability is a superpower, not a weakness</li>
                <li>• How to hold space for both grief and joy</li>
                <li>• That my story is my strength, not my shame</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Write Your Next Chapter?
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're in the wilderness of healing or ready to build something beautiful, 
            I'm here to walk alongside you. Your story isn't over — it's just beginning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans"
            >
              <Link to="/work-with-me">
                Explore Working Together
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-sans"
            >
              <Link to="/poetry">
                Read My Poetry
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

