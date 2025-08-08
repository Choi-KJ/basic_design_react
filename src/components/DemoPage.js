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

        {/* Rolling Hero with Auto-play */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Rolling Hero (Auto-play)</h3>
          <div style={{ width: "100%" }}>
            <Hero
              slides={[
                {
                  variant: "gradient",
                  badge: "New",
                  title: "Slide 1: Innovation First",
                  subtitle: "Experience cutting-edge technology that transforms how you work and create.",
                  primaryAction: "Explore Features",
                  secondaryAction: "Learn More"
                },
                {
                  variant: "image",
                  backgroundImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop&auto=format",
                  badge: <Badge variant="primary">Popular</Badge>,
                  title: "Slide 2: Built for Teams",
                  subtitle: "Collaborate seamlessly with powerful tools designed for modern workflows.",
                  primaryAction: "Start Team Trial",
                  secondaryAction: "See Demo"
                },
                {
                  variant: "default",
                  badge: <Badge variant="success" size="sm">Trusted</Badge>,
                  title: "Slide 3: Scale with Confidence",
                  subtitle: "From startup to enterprise, our platform grows with your business needs.",
                  primaryAction: "Get Started",
                  secondaryAction: "Contact Sales"
                }
              ]}
              autoPlay={true}
              autoPlayInterval={4000}
              showNavigation={true}
              showIndicators={true}
              minHeight="500px"
            />
          </div>
        </div>

        {/* Rolling Hero with Manual Controls */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Rolling Hero (Manual Only)</h3>
          <div style={{ width: "100%" }}>
            <Hero
              slides={[
                {
                  variant: "image",
                  backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&auto=format",
                  title: "Analytics Dashboard",
                  subtitle: "Track performance and make data-driven decisions with real-time insights.",
                  primaryAction: "View Dashboard"
                },
                {
                  variant: "image", 
                  backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&auto=format",
                  badge: "AI Powered",
                  title: "Smart Automation",
                  subtitle: "Let AI handle the routine tasks while you focus on what matters most.",
                  primaryAction: "Enable AI",
                  secondaryAction: "Learn How"
                },
                {
                  variant: "gradient",
                  badge: <Badge variant="info">Coming Soon</Badge>,
                  title: "Next Generation Features",
                  subtitle: "Get ready for revolutionary updates that will change everything.",
                  primaryAction: "Join Waitlist",
                  secondaryAction: "Read Roadmap"
                }
              ]}
              autoPlay={false}
              showNavigation={true}
              showIndicators={true}
              minHeight="450px"
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
          image="https://placehold.co/400x200/667eea/ffffff/png?text=Sample+Image+1" 
          imageAlt="Sample placeholder image"
        >
          <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: 8, color: "#fff" }}>Card with Sample Image</h3>
          <p style={{ fontSize: "14px", color: "#8a8f98", margin: 0 }}>This card uses placeholder images for consistent display.</p>
        </Card>
        <Card 
          image="https://placehold.co/400x150/764ba2/ffffff/png?text=Custom+Height" 
          imageAlt="Technology sample"
          imageHeight="150px"
        >
          <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: 8, color: "#fff" }}>Custom Image Height</h3>
          <p style={{ fontSize: "14px", color: "#8a8f98", margin: 0 }}>Card with custom image height (150px) using placeholder.</p>
        </Card>
        <Card 
          image="https://placehold.co/400x200/28a745/ffffff/png?text=Product+Card" 
          imageAlt="Product sample"
        >
          <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: 8, color: "#fff" }}>Product Card</h3>
          <p style={{ fontSize: "14px", color: "#8a8f98", marginBottom: 12 }}>Perfect for showcasing products with visual content.</p>
          <div style={{ display: "flex", gap: 8 }}>
            <Badge variant="primary" size="sm">Featured</Badge>
            <Badge variant="success" size="sm">New</Badge>
          </div>
        </Card>
        
        {/* Flip Cards */}
        <Card 
          flipCard={true}
          image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop&auto=format" 
          imageAlt="Innovation flip card"
          style={{ minHeight: "400px" }}
          backContent={
            <div>
              <h3 style={{ 
                fontSize: "20px", 
                fontWeight: 600, 
                marginBottom: 16, 
                color: "#fff" 
              }}>🚀 혁신적인 기술</h3>
              <p style={{ 
                fontSize: "15px", 
                color: "#8a8f98", 
                lineHeight: 1.6, 
                marginBottom: 20,
                maxWidth: "280px"
              }}>최신 기술 스택으로 구현된 고성능 솔루션입니다. AI와 머신러닝을 활용하여 사용자 경험을 극대화합니다.</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
                <Badge variant="info" size="sm">AI</Badge>
                <Badge variant="primary" size="sm">ML</Badge>
                <Badge variant="success" size="sm">React</Badge>
              </div>
            </div>
          }
        >
          <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: 8, color: "#fff" }}>클릭하여 뒤집기</h3>
          <p style={{ fontSize: "14px", color: "#8a8f98", marginBottom: 12 }}>이 카드를 클릭하면 뒷면의 상세 정보를 볼 수 있습니다.</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert('상세 페이지로 이동합니다!');
            }}
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              border: "none",
              borderRadius: "6px",
              color: "#fff",
              padding: "8px 16px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "0 2px 4px rgba(102, 126, 234, 0.3)"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-1px)";
              e.target.style.boxShadow = "0 4px 8px rgba(102, 126, 234, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 2px 4px rgba(102, 126, 234, 0.3)";
            }}
          >
            상세보기
          </button>
        </Card>
        
        <Card 
          flipCard={true}
          image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&auto=format" 
          imageAlt="Analytics flip card"
          style={{ minHeight: "400px" }}
          backContent={
            <div>
              <h3 style={{ 
                fontSize: "20px", 
                fontWeight: 600, 
                marginBottom: 16, 
                color: "#fff" 
              }}>📊 데이터 분석</h3>
              <p style={{ 
                fontSize: "15px", 
                color: "#8a8f98", 
                lineHeight: 1.6, 
                marginBottom: 20,
                maxWidth: "280px"
              }}>실시간 데이터 분석으로 비즈니스 인사이트를 제공합니다. 대시보드를 통해 핵심 지표를 한눈에 확인하세요.</p>
              <div style={{ 
                background: "rgba(103, 126, 234, 0.15)", 
                padding: "12px 16px", 
                borderRadius: "8px",
                fontSize: "13px",
                color: "#677eea",
                fontWeight: 500
              }}>
                💡 클릭하여 앞면으로 돌아가기
              </div>
            </div>
          }
        >
          <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: 8, color: "#fff" }}>데이터 분석 도구</h3>
          <p style={{ fontSize: "14px", color: "#8a8f98", marginBottom: 12 }}>실시간 분석과 시각화를 제공하는 플랫폼입니다.</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert('분석 도구 상세 페이지로 이동합니다!');
            }}
            style={{
              background: "linear-gradient(135deg, #6f42c1 0%, #9c27b0 100%)",
              border: "none",
              borderRadius: "6px",
              color: "#fff",
              padding: "8px 16px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "0 2px 4px rgba(111, 66, 193, 0.3)"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-1px)";
              e.target.style.boxShadow = "0 4px 8px rgba(111, 66, 193, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 2px 4px rgba(111, 66, 193, 0.3)";
            }}
          >
            분석 시작
          </button>
        </Card>
        
        <Card 
          flipCard={true}
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&auto=format" 
          imageAlt="Team collaboration flip card"
          style={{ minHeight: "400px" }}
          backContent={
            <div>
              <h3 style={{ 
                fontSize: "20px", 
                fontWeight: 600, 
                marginBottom: 16, 
                color: "#fff" 
              }}>👥 팀 협업</h3>
              <p style={{ 
                fontSize: "15px", 
                color: "#8a8f98", 
                lineHeight: 1.6, 
                marginBottom: 16 
              }}>원격 팀을 위한 완벽한 협업 솔루션:</p>
              <ul style={{ 
                fontSize: "14px", 
                color: "#8a8f98", 
                paddingLeft: "20px", 
                margin: 0,
                lineHeight: 1.8
              }}>
                <li>실시간 공동 편집</li>
                <li>버전 관리 시스템</li>
                <li>댓글 및 피드백</li>
                <li>프로젝트 관리</li>
              </ul>
            </div>
          }
        >
          <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: 8, color: "#fff" }}>팀 협업 플랫폼</h3>
          <p style={{ fontSize: "14px", color: "#8a8f98", marginBottom: 12 }}>원격 팀을 위한 올인원 협업 도구입니다.</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert('협업 플랫폼으로 이동합니다!');
            }}
            style={{
              background: "linear-gradient(135deg, #17a2b8 0%, #138496 100%)",
              border: "none",
              borderRadius: "6px",
              color: "#fff",
              padding: "8px 16px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "0 2px 4px rgba(23, 162, 184, 0.3)"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-1px)";
              e.target.style.boxShadow = "0 4px 8px rgba(23, 162, 184, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 2px 4px rgba(23, 162, 184, 0.3)";
            }}
          >
            협업 시작
          </button>
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