import React from "react";
import Button from "./Button";
import Card from "./Card";
import Heading from "./Heading";
import SectionHeader from "./SectionHeader";
import FeatureCard from "./FeatureCard";
import Navigation from "./Navigation";
import Input from "./Input";
import Icon from "./Icon";
import Badge from "./Badge";
import Carousel from "./Carousel";
import Hero from "./Hero";
import Footer from "./Footer";
import Navbar from "./Navbar";

const DemoPage = () => (
  <div style={{ background: "#18191A", minHeight: "100vh", color: "#fff" }}>
    {/* Hero Section */}
    <section style={{ marginBottom: 48 }}>
      <div style={{ padding: "0 32px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: 16, color: "#fff", opacity: 0.8 }}>Hero Components</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {/* Default Hero */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Default Hero</h3>
          <div style={{ width: "100%" }}>
            <Hero
              badge="New Feature"
              title="Build something amazing"
              subtitle="Create beautiful, functional applications with our comprehensive design system and component library."
              primaryAction="Get Started"
              secondaryAction="Learn More"
              minHeight="400px"
            />
          </div>
        </div>

        {/* Gradient Hero */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Gradient Hero</h3>
          <div style={{ width: "100%" }}>
            <Hero
              variant="gradient"
              badge={<Badge variant="outline" size="sm">Beta</Badge>}
              title="Experience the future"
              subtitle="Join thousands of teams who trust our platform to build better products faster."
              primaryAction={<Button variant="primary">Start Free Trial</Button>}
              secondaryAction={<Button variant="ghost">Watch Demo</Button>}
              minHeight="450px"
            />
          </div>
        </div>

        {/* Image Background Hero */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Image Background Hero</h3>
          <div style={{ width: "100%" }}>
            <Hero
              variant="image"
              backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop&auto=format"
              badge={<Badge variant="success">Launch Ready</Badge>}
              title="Ship faster, build better"
              subtitle="Everything you need to create exceptional digital experiences, from design to deployment."
              primaryAction="Start Building"
              secondaryAction="View Examples"
              minHeight="500px"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Navbar Section */}
    <section style={{ marginBottom: 48 }}>
      <div style={{ padding: "0 32px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: 16, color: "#fff", opacity: 0.8 }}>Navbar Components</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {/* Default Navbar */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Default Navbar</h3>
          <div style={{ width: "100%" }}>
            <Navbar
              logo="Gomin"
              logoIcon="home"
              sticky={false}
            />
          </div>
        </div>

        {/* Custom Navbar */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Custom Navbar</h3>
          <div style={{ width: "100%" }}>
            <Navbar
              logo="Custom Brand"
              logoIcon="star"
              sticky={false}
              links={[
                { label: "Home", href: "#" },
                { label: "Features", href: "#", badge: { text: "New", variant: "success" } },
                { label: "About", href: "#" },
                { label: "Contact", href: "#" },
                { label: "Docs", href: "#", badge: { text: "Beta", variant: "info" } }
              ]}
              actions={[
                { type: "link", label: "Login", href: "#" },
                { type: "button", label: "Sign Up", variant: "primary", href: "#" },
                { type: "button", label: "Demo", variant: "ghost", href: "#" }
              ]}
            />
          </div>
        </div>

        {/* Minimal Navbar */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Minimal Navbar</h3>
          <div style={{ width: "100%" }}>
            <Navbar
              logo="Minimal"
              logoIcon="plus"
              sticky={false}
              links={[
                { label: "Product", href: "#" },
                { label: "Pricing", href: "#" },
                { label: "Support", href: "#" }
              ]}
              actions={[
                { type: "button", label: "Get Started", variant: "primary", href: "#" }
              ]}
            />
          </div>
        </div>
      </div>
    </section>

    {/* Section Headers */}
    <section style={{ marginBottom: 48, borderBottom: "1px solid rgba(255, 255, 255, 0.08)", paddingBottom: 24, padding: "0 32px 24px 32px" }}>
      <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: 16, color: "#fff", opacity: 0.8 }}>Section Headers</h2>
      <SectionHeader title="Section Header" subtitle="This is a subtitle for the section header." />
    </section>

    {/* Typography Section */}
    <section style={{ marginBottom: 48, borderBottom: "1px solid rgba(255, 255, 255, 0.08)", paddingBottom: 24, padding: "0 32px 24px 32px" }}>
      <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: 16, color: "#fff", opacity: 0.8 }}>Typography</h2>
      <Heading level={1} style={{ marginBottom: 16 }}>Heading 1</Heading>
      <Heading level={2} style={{ marginBottom: 16 }}>Heading 2</Heading>
      <Heading level={3} style={{ marginBottom: 16 }}>Heading 3</Heading>
    </section>

    {/* Buttons Section */}
    <section style={{ marginBottom: 48, borderBottom: "1px solid rgba(255, 255, 255, 0.08)", paddingBottom: 24, padding: "0 32px 24px 32px" }}>
      <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: 16, color: "#fff", opacity: 0.8 }}>Buttons</h2>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </div>
    </section>

    {/* Cards Section */}
    <section style={{ marginBottom: 48, borderBottom: "1px solid rgba(255, 255, 255, 0.08)", paddingBottom: 24, padding: "0 32px 24px 32px" }}>
      <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: 16, color: "#fff", opacity: 0.8 }}>Cards</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
        <Card>Basic Card Example</Card>
        <FeatureCard title="Feature Title" description="Feature description goes here." />
        <Card 
          image="https://images.unsplash.com/photo-1661956602116-aa6865609028?w=400&h=200&fit=crop&auto=format" 
          imageAlt="Abstract design"
        >
          <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: 8, color: "#fff" }}>Card with Image</h3>
          <p style={{ fontSize: "14px", color: "#8a8f98", margin: 0 }}>This card includes an image at the top with content below.</p>
        </Card>
        <Card 
          image="https://images.unsplash.com/photo-1667372335962-5fd503a8ae5b?w=400&h=150&fit=crop&auto=format" 
          imageAlt="Technology"
          imageHeight="150px"
        >
          <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: 8, color: "#fff" }}>Custom Image Height</h3>
          <p style={{ fontSize: "14px", color: "#8a8f98", margin: 0 }}>Card with custom image height (150px).</p>
        </Card>
        <Card 
          image="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=200&fit=crop&auto=format" 
          imageAlt="Gradient"
        >
          <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: 8, color: "#fff" }}>Product Card</h3>
          <p style={{ fontSize: "14px", color: "#8a8f98", marginBottom: 12 }}>Perfect for showcasing products or features with visual content.</p>
          <div style={{ display: "flex", gap: 8 }}>
            <Badge variant="primary" size="sm">Featured</Badge>
            <Badge variant="success" size="sm">New</Badge>
          </div>
        </Card>
      </div>
    </section>

    {/* Inputs Section */}
    <section style={{ marginBottom: 48, borderBottom: "1px solid rgba(255, 255, 255, 0.08)", paddingBottom: 24, padding: "0 32px 24px 32px" }}>
      <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: 16, color: "#fff", opacity: 0.8 }}>Inputs</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: "400px", margin: "0 auto" }}>
        <Input placeholder="Default input" />
        <Input variant="ghost" placeholder="Ghost input" />
        <Input size="sm" placeholder="Small input" />
        <Input 
          placeholder="Input with icon" 
          icon={<Icon name="search" size={16} />} 
        />
        <Input 
          placeholder="Email input" 
          type="email"
          icon={<Icon name="mail" size={16} />} 
        />
        <Input 
          placeholder="Password input" 
          type="password"
          icon={<Icon name="lock" size={16} />} 
        />
        <Input 
          placeholder="Error state" 
          error={true}
          icon={<Icon name="user" size={16} />} 
        />
        <Input placeholder="Disabled input" disabled={true} />
      </div>
    </section>

    {/* Carousel Section */}
    <section style={{ marginBottom: 48, borderBottom: "1px solid rgba(255, 255, 255, 0.08)", paddingBottom: 64, padding: "0 32px 64px 32px" }}>
      <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: 16, color: "#fff", opacity: 0.8 }}>Carousel</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {/* Basic Carousel */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Basic Carousel</h3>
          <Carousel height="250px">
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "#fff", fontSize: "24px", fontWeight: 600 }}>
              Slide 1
            </div>
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", color: "#fff", fontSize: "24px", fontWeight: 600 }}>
              Slide 2
            </div>
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", color: "#fff", fontSize: "24px", fontWeight: 600 }}>
              Slide 3
            </div>
          </Carousel>
        </div>

        {/* Auto-play Carousel */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Auto-play Carousel with Controls</h3>
          <Carousel height="300px" autoPlay={true} autoPlayInterval={3000} showControls={true}>
            <div style={{ 
              width: "100%", 
              height: "100%", 
              backgroundImage: "url('https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=300&fit=crop&auto=format')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative"
            }}>
              <div style={{ 
                background: "rgba(0, 0, 0, 0.6)", 
                padding: "24px 32px", 
                borderRadius: "12px",
                backdropFilter: "blur(10px)",
                textAlign: "center"
              }}>
                <h4 style={{ fontSize: "24px", fontWeight: 600, marginBottom: 8, color: "#fff" }}>Featured Content 1</h4>
                <p style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.9)", margin: 0 }}>Auto-playing carousel showcase</p>
              </div>
            </div>
            <div style={{ 
              width: "100%", 
              height: "100%", 
              backgroundImage: "url('https://images.unsplash.com/photo-1667372335962-5fd503a8ae5b?w=800&h=300&fit=crop&auto=format')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative"
            }}>
              <div style={{ 
                background: "rgba(0, 0, 0, 0.6)", 
                padding: "24px 32px", 
                borderRadius: "12px",
                backdropFilter: "blur(10px)",
                textAlign: "center"
              }}>
                <h4 style={{ fontSize: "24px", fontWeight: 600, marginBottom: 8, color: "#fff" }}>Featured Content 2</h4>
                <p style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.9)", margin: 0 }}>Hover to pause auto-play</p>
              </div>
            </div>
            <div style={{ 
              width: "100%", 
              height: "100%", 
              backgroundImage: "url('https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&h=300&fit=crop&auto=format')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative"
            }}>
              <div style={{ 
                background: "rgba(0, 0, 0, 0.6)", 
                padding: "24px 32px", 
                borderRadius: "12px",
                backdropFilter: "blur(10px)",
                textAlign: "center"
              }}>
                <h4 style={{ fontSize: "24px", fontWeight: 600, marginBottom: 8, color: "#fff" }}>Featured Content 3</h4>
                <p style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.9)", margin: 0 }}>Perfect for hero sections</p>
              </div>
            </div>
          </Carousel>
        </div>

        {/* Basic Carousel with Controls */}
        <div style={{ marginTop: 24 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Basic Carousel with Controls</h3>
          <Carousel height="250px" showControls={true}>
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "#fff", fontSize: "24px", fontWeight: 600 }}>
              Slide 1
            </div>
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", color: "#fff", fontSize: "24px", fontWeight: 600 }}>
              Slide 2
            </div>
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", color: "#fff", fontSize: "24px", fontWeight: 600 }}>
              Slide 3
            </div>
          </Carousel>
        </div>
      </div>
    </section>

    {/* Badges Section */}
    <section style={{ marginBottom: 48, borderBottom: "1px solid rgba(255, 255, 255, 0.08)", paddingBottom: 24, padding: "0 32px 24px 32px" }}>
      <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: 16, color: "#fff", opacity: 0.8 }}>Badges</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {/* Default Badges */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Default Badges</h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
            <Badge>Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge size="sm">Small</Badge>
            <Badge size="lg">Large</Badge>
          </div>
        </div>

        {/* Status Badges */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Status Badges</h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </div>

        {/* Real-world Examples */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Examples</h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
            <Badge variant="success" size="sm">Online</Badge>
            <Badge variant="warning">Pending</Badge>
            <Badge variant="error" size="sm">Failed</Badge>
            <Badge variant="info">Beta</Badge>
            <Badge variant="primary">New</Badge>
            <Badge variant="outline">Draft</Badge>
            <Badge>v1.2.0</Badge>
            <Badge variant="success">Active</Badge>
          </div>
        </div>
      </div>
    </section>

    {/* Icons Section */}
    <section style={{ marginBottom: 48, padding: "0 32px" }}>
      <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: 16, color: "#fff", opacity: 0.8 }}>Icons</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 16, maxWidth: "800px", margin: "0 auto" }}>
        {[
          "home", "user", "search", "mail", "phone", "lock", "eye", "eye-off",
          "settings", "bell", "heart", "star", "check", "x", "plus", "minus",
          "arrow-right", "arrow-left", "arrow-up", "arrow-down", 
          "chevron-right", "chevron-left", "chevron-up", "chevron-down",
          "menu", "more-vertical", "more-horizontal"
        ].map(iconName => (
          <div key={iconName} style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            gap: 8,
            padding: 12,
            borderRadius: "8px",
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.08)"
          }}>
            <Icon name={iconName} size={24} />
            <span style={{ fontSize: "12px", color: "#8a8f98", textAlign: "center" }}>{iconName}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Footer Section */}
    <section style={{ marginBottom: 48 }}>
      <div style={{ padding: "0 32px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: 16, color: "#fff", opacity: 0.8 }}>Footer Components</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {/* Default Footer */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Default Footer</h3>
          <div style={{ width: "100%" }}>
            <Footer
              logo="Gomin"
              description="A comprehensive design system and component library built with React for creating beautiful, modern applications."
            />
          </div>
        </div>

        {/* Custom Footer */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Custom Footer</h3>
          <div style={{ width: "100%" }}>
            <Footer
              logo="Custom Brand"
              description="Build exceptional digital experiences with our cutting-edge tools and components."
              sections={[
                {
                  title: "Solutions",
                  links: [
                    { label: "Design System", href: "#" },
                    { label: "Component Library", href: "#" },
                    { label: "Templates", href: "#" },
                    { label: "Themes", href: "#" }
                  ]
                },
                {
                  title: "Developers",
                  links: [
                    { label: "Documentation", href: "#" },
                    { label: "API Reference", href: "#" },
                    { label: "Examples", href: "#" },
                    { label: "GitHub", href: "#" }
                  ]
                },
                {
                  title: "Support",
                  links: [
                    { label: "Help Center", href: "#" },
                    { label: "Community", href: "#" },
                    { label: "Contact", href: "#" },
                    { label: "Status", href: "#" }
                  ]
                }
              ]}
              socialLinks={[
                { icon: "mail", href: "#", label: "Email" },
                { icon: "heart", href: "#", label: "Favorites" },
                { icon: "star", href: "#", label: "Star us" },
                { icon: "settings", href: "#", label: "Settings" }
              ]}
              bottomLinks={[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default DemoPage;