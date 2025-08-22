import React, { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Heading from "./Heading";
import SectionHeader from "./SectionHeader";
import FeatureCard from "./FeatureCard";
import Input from "./Input";
import Icon from "./Icon";
import Badge from "./Badge";
import Carousel from "./Carousel";
import Hero from "./Hero";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Modal from "./Modal";
import Dropdown from "./Dropdown";
import Loading, { Spinner, Dots, Pulse, Bars, Ring, Progress, LoadingOverlay, LoadingButton } from "./Loading";
import { useAlert, AlertContainer } from "./Alert";
import Tooltip, { TooltipButton, TooltipIcon, TooltipText } from "./Tooltip";
import Tabs, { Tab, SimpleTabs } from "./Tabs";

const DemoPage = () => {
  const { alerts, showAlert, closeAlert, success, error, warning, info, clearAll } = useAlert();
  
  const [modals, setModals] = useState({
    alert: false,
    confirm: false,
    error: false,
    warning: false,
    success: false,
    custom: false
  });

  const [dropdownValues, setDropdownValues] = useState({
    basic: null,
    searchable: null,
    multiple: [],
    countries: null,
    clearable: 'option2'
  });

  const [loadingStates, setLoadingStates] = useState({
    overlay: false,
    button1: false,
    button2: false,
    button3: false,
    fullscreen: false
  });

  const openModal = (type) => {
    setModals(prev => ({ ...prev, [type]: true }));
  };

  const closeModal = (type) => {
    setModals(prev => ({ ...prev, [type]: false }));
  };

  const handleConfirm = (type) => {
    console.log(`${type} 모달에서 확인을 클릭했습니다!`);
  };

  const simulateLoading = (buttonKey, duration = 2000) => {
    setLoadingStates(prev => ({ ...prev, [buttonKey]: true }));
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [buttonKey]: false }));
    }, duration);
  };

  const toggleOverlay = () => {
    setLoadingStates(prev => ({ ...prev, overlay: !prev.overlay }));
  };

  const showFullscreenLoading = () => {
    setLoadingStates(prev => ({ ...prev, fullscreen: true }));
    // 3초 후 자동으로 닫기
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, fullscreen: false }));
    }, 3000);
  };

  return (
  <div style={{ background: "#18191A", minHeight: "100vh", color: "#fff" }}>
    {/* Hero Section */}
    <section style={{ marginBottom: 48 }}>
      <div>
       <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>CI/CD테스트(nginx서버로변경)Feature>develop 브랜치 머지</h3>

      </div>
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

    {/* Dropdown Section */}
    <section style={{ padding: "0 32px", marginBottom: 48, borderTop: "1px solid #2a2d31" }}>
      <div style={{ paddingTop: 48 }}>
        <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: 16, color: "#fff", opacity: 0.8 }}>Dropdown Components</h2>
        
        {/* Basic Dropdown */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Basic Dropdown</h3>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ minWidth: "200px" }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", marginBottom: "8px" }}>기본 드롭다운</p>
              <Dropdown
                options={['옵션 1', '옵션 2', '옵션 3', '옵션 4']}
                value={dropdownValues.basic}
                onChange={(value) => setDropdownValues(prev => ({ ...prev, basic: value }))}
                placeholder="옵션을 선택하세요"
              />
            </div>
            <div style={{ minWidth: "200px" }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", marginBottom: "8px" }}>Small 크기</p>
              <Dropdown
                options={['Small 1', 'Small 2', 'Small 3']}
                size="sm"
                placeholder="Small dropdown"
              />
            </div>
            <div style={{ minWidth: "200px" }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", marginBottom: "8px" }}>Large 크기</p>
              <Dropdown
                options={['Large 1', 'Large 2', 'Large 3']}
                size="lg"
                placeholder="Large dropdown"
              />
            </div>
          </div>
        </div>

        {/* Variants */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Variants</h3>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ minWidth: "200px" }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", marginBottom: "8px" }}>Default</p>
              <Dropdown
                options={['Option A', 'Option B', 'Option C']}
                variant="default"
                placeholder="Default variant"
              />
            </div>
            <div style={{ minWidth: "200px" }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", marginBottom: "8px" }}>Outline</p>
              <Dropdown
                options={['Option A', 'Option B', 'Option C']}
                variant="outline"
                placeholder="Outline variant"
              />
            </div>
            <div style={{ minWidth: "200px" }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", marginBottom: "8px" }}>Ghost</p>
              <Dropdown
                options={['Option A', 'Option B', 'Option C']}
                variant="ghost"
                placeholder="Ghost variant"
              />
            </div>
          </div>
        </div>

        {/* Advanced Features */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Advanced Features</h3>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ minWidth: "200px" }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", marginBottom: "8px" }}>검색 가능</p>
              <Dropdown
                options={[
                  { value: 'react', label: 'React' },
                  { value: 'vue', label: 'Vue.js' },
                  { value: 'angular', label: 'Angular' },
                  { value: 'svelte', label: 'Svelte' },
                  { value: 'nextjs', label: 'Next.js' },
                  { value: 'nuxt', label: 'Nuxt.js' }
                ]}
                value={dropdownValues.searchable}
                onChange={(value) => setDropdownValues(prev => ({ ...prev, searchable: value }))}
                placeholder="프레임워크 검색..."
                searchable={true}
              />
            </div>
            <div style={{ minWidth: "200px" }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", marginBottom: "8px" }}>다중 선택</p>
              <Dropdown
                options={[
                  { value: 'js', label: 'JavaScript' },
                  { value: 'ts', label: 'TypeScript' },
                  { value: 'python', label: 'Python' },
                  { value: 'java', label: 'Java' },
                  { value: 'go', label: 'Go' }
                ]}
                value={dropdownValues.multiple}
                onChange={(value) => setDropdownValues(prev => ({ ...prev, multiple: value }))}
                placeholder="언어를 선택하세요"
                multiple={true}
                searchable={true}
              />
            </div>
            <div style={{ minWidth: "200px" }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", marginBottom: "8px" }}>초기화 가능</p>
              <Dropdown
                options={[
                  { value: 'option1', label: '옵션 1' },
                  { value: 'option2', label: '옵션 2' },
                  { value: 'option3', label: '옵션 3' }
                ]}
                value={dropdownValues.clearable}
                onChange={(value) => setDropdownValues(prev => ({ ...prev, clearable: value }))}
                placeholder="옵션을 선택하세요"
                clearable={true}
              />
            </div>
          </div>
        </div>

        {/* Real World Examples */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Real World Examples</h3>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ minWidth: "200px" }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", marginBottom: "8px" }}>국가 선택</p>
              <Dropdown
                options={[
                  { value: 'kr', label: '🇰🇷 대한민국' },
                  { value: 'us', label: '🇺🇸 미국' },
                  { value: 'jp', label: '🇯🇵 일본' },
                  { value: 'cn', label: '🇨🇳 중국' },
                  { value: 'uk', label: '🇬🇧 영국' },
                  { value: 'de', label: '🇩🇪 독일' },
                  { value: 'fr', label: '🇫🇷 프랑스' }
                ]}
                value={dropdownValues.countries}
                onChange={(value) => setDropdownValues(prev => ({ ...prev, countries: value }))}
                placeholder="국가를 선택하세요"
                searchable={true}
                clearable={true}
              />
            </div>
            <div style={{ minWidth: "200px" }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", marginBottom: "8px" }}>비활성화</p>
              <Dropdown
                options={['옵션 1', '옵션 2', '옵션 3']}
                placeholder="비활성화된 드롭다운"
                disabled={true}
              />
            </div>
            <div style={{ minWidth: "200px" }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", marginBottom: "8px" }}>오류 상태</p>
              <Dropdown
                options={['옵션 1', '옵션 2', '옵션 3']}
                placeholder="오류가 있는 드롭다운"
                error={true}
              />
            </div>
          </div>
        </div>

        {/* Usage Example */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>사용법 예제</h3>
          <div style={{ 
            backgroundColor: "#1e1f23", 
            border: "1px solid #2a2d31", 
            borderRadius: "8px", 
            padding: "16px",
            fontFamily: "monospace",
            fontSize: "13px",
            color: "#8a8f98"
          }}>
            <div style={{ color: "#569cd6" }}>기본 사용법</div>
            <div style={{ marginTop: "4px" }}>{"<Dropdown options={['옵션1', '옵션2']} onChange={handleChange} />"}</div>
            <br />
            <div style={{ color: "#569cd6" }}>고급 기능</div>
            <div style={{ marginTop: "4px" }}>{"<Dropdown options={options} searchable multiple clearable />"}</div>
          </div>
        </div>
      </div>
    </section>

    {/* Loading Section */}
    <section style={{ padding: "0 32px", marginBottom: 48, borderTop: "1px solid #2a2d31" }}>
      <div style={{ paddingTop: 48 }}>
        <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: 16, color: "#fff", opacity: 0.8 }}>Loading Components</h2>
        
        {/* Loading Types */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Loading Types</h3>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", margin: 0 }}>Spinner</p>
              <Spinner size="md" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", margin: 0 }}>Dots</p>
              <Dots size="md" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", margin: 0 }}>Pulse</p>
              <Pulse size="md" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", margin: 0 }}>Bars</p>
              <Bars size="md" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", margin: 0 }}>Ring</p>
              <Ring size="md" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", margin: 0 }}>Progress</p>
              <Progress size="md" />
            </div>
          </div>
        </div>

        {/* Sizes */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Sizes</h3>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", margin: 0 }}>XS</p>
              <Spinner size="xs" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", margin: 0 }}>SM</p>
              <Spinner size="sm" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", margin: 0 }}>MD</p>
              <Spinner size="md" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", margin: 0 }}>LG</p>
              <Spinner size="lg" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", margin: 0 }}>XL</p>
              <Spinner size="xl" />
            </div>
          </div>
        </div>

        {/* Colors */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Colors</h3>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", margin: 0 }}>Primary</p>
              <Spinner size="md" color="primary" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", margin: 0 }}>Secondary</p>
              <Spinner size="md" color="secondary" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", margin: 0 }}>White</p>
              <Spinner size="md" color="white" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <p style={{ fontSize: "12px", color: "#8a8f98", margin: 0 }}>Custom</p>
              <Spinner size="md" color="#10B981" />
            </div>
          </div>
        </div>

        {/* With Text */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>With Text</h3>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <Loading type="spinner" size="md" text="로딩 중..." />
            <Loading type="dots" size="md" text="처리 중..." />
            <Loading type="bars" size="md" text="업로드 중..." />
          </div>
        </div>

        {/* Interactive Examples */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Interactive Examples</h3>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <LoadingButton
              loading={loadingStates.button1}
              onClick={() => simulateLoading('button1')}
              style={{
                padding: '12px 24px',
                backgroundColor: '#5E6AD2',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 500
              }}
              loadingText="저장 중..."
            >
              저장하기
            </LoadingButton>

            <LoadingButton
              loading={loadingStates.button2}
              onClick={() => simulateLoading('button2', 3000)}
              style={{
                padding: '12px 24px',
                backgroundColor: '#10B981',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 500
              }}
              loadingText="업로드 중..."
            >
              파일 업로드
            </LoadingButton>

            <LoadingButton
              loading={loadingStates.button3}
              onClick={() => simulateLoading('button3', 1500)}
              style={{
                padding: '12px 24px',
                backgroundColor: 'transparent',
                color: '#5E6AD2',
                border: '1px solid #5E6AD2',
                borderRadius: '8px',
                fontWeight: 500
              }}
            >
              데이터 로드
            </LoadingButton>
          </div>
        </div>

        {/* Loading Overlay */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Loading Overlay</h3>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <Button
                variant="primary"
                onClick={toggleOverlay}
                style={{ minWidth: '180px' }}
              >
                {loadingStates.overlay ? '오버레이 숨기기' : '오버레이 보기'}
              </Button>
              
              <Button
                variant="outline"
                onClick={showFullscreenLoading}
                style={{ 
                  minWidth: '180px',
                  backgroundColor: '#EF4444',
                  borderColor: '#EF4444',
                  color: 'white'
                }}
              >
                전체 화면 로딩
              </Button>
            </div>
            
            <LoadingOverlay
              loading={loadingStates.overlay}
              loadingProps={{
                type: "spinner",
                size: "lg",
                text: "데이터를 불러오는 중...",
                color: "primary"
              }}
            >
              <div style={{
                width: '300px',
                height: '200px',
                backgroundColor: '#1e1f23',
                border: '1px solid #2a2d31',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#8a8f98'
              }}>
                <p>여기에 콘텐츠가 있습니다.<br/>오버레이 테스트용 영역</p>
              </div>
            </LoadingOverlay>
          </div>
        </div>

        {/* Usage Examples */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>사용법 예제</h3>
          <div style={{ 
            backgroundColor: "#1e1f23", 
            border: "1px solid #2a2d31", 
            borderRadius: "8px", 
            padding: "16px",
            fontFamily: "monospace",
            fontSize: "13px",
            color: "#8a8f98"
          }}>
            <div style={{ color: "#569cd6" }}>기본 스피너</div>
            <div style={{ marginTop: "4px" }}>{"<Loading type=\"spinner\" size=\"md\" />"}</div>
            <br />
            <div style={{ color: "#569cd6" }}>텍스트와 함께</div>
            <div style={{ marginTop: "4px" }}>{"<Loading type=\"dots\" text=\"로딩 중...\" />"}</div>
            <br />
            <div style={{ color: "#569cd6" }}>로딩 버튼</div>
            <div style={{ marginTop: "4px" }}>{"<LoadingButton loading={isLoading} onClick={handleSave}>"}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"저장하기"}</div>
            <div style={{ marginTop: "2px" }}>{"</LoadingButton>"}</div>
            <br />
            <div style={{ color: "#569cd6" }}>오버레이</div>
            <div style={{ marginTop: "4px" }}>{"<LoadingOverlay loading={isLoading}>"}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"콘텐츠"}</div>
            <div style={{ marginTop: "2px" }}>{"</LoadingOverlay>"}</div>
            <br />
            <div style={{ color: "#569cd6" }}>전체 화면 dimmed</div>
            <div style={{ marginTop: "4px" }}>{"<Loading type=\"dots\" fullscreen={true} text=\"로딩 중...\" />"}</div>
          </div>
        </div>
      </div>
    </section>

    {/* Alert Section */}
    <section style={{ padding: "0 32px", marginBottom: 48, borderTop: "1px solid #2a2d31" }}>
      <div style={{ paddingTop: 48 }}>
        <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: 16, color: "#fff", opacity: 0.8 }}>Alert/Notification Components</h2>
        
        {/* Basic Alerts */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Basic Alerts</h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Button
              variant="primary"
              onClick={() => success("작업이 성공적으로 완료되었습니다!")}
              style={{ backgroundColor: '#10B981', borderColor: '#10B981' }}
            >
              성공 알림
            </Button>
            <Button
              variant="primary"
              onClick={() => error("오류가 발생했습니다. 다시 시도해주세요.")}
              style={{ backgroundColor: '#EF4444', borderColor: '#EF4444' }}
            >
              오류 알림
            </Button>
            <Button
              variant="primary"
              onClick={() => warning("주의가 필요한 상황입니다.")}
              style={{ backgroundColor: '#F59E0B', borderColor: '#F59E0B' }}
            >
              경고 알림
            </Button>
            <Button
              variant="primary"
              onClick={() => info("새로운 정보가 있습니다.")}
              style={{ backgroundColor: '#3B82F6', borderColor: '#3B82F6' }}
            >
              정보 알림
            </Button>
          </div>
        </div>

        {/* Advanced Alerts */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Advanced Alerts</h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Button
              variant="outline"
              onClick={() => showAlert({
                type: 'success',
                title: '업로드 완료',
                message: '파일이 성공적으로 업로드되었습니다.',
                duration: 7000
              })}
            >
              제목 + 메시지
            </Button>
            <Button
              variant="outline"
              onClick={() => showAlert({
                type: 'warning',
                title: '저장 공간 부족',
                message: '저장 공간이 90%를 초과했습니다.',
                action: {
                  label: '정리하기',
                  onClick: () => alert('정리 페이지로 이동!')
                },
                duration: 10000
              })}
            >
              액션 버튼
            </Button>
            <Button
              variant="outline"
              onClick={() => showAlert({
                type: 'info',
                title: '업데이트 안내',
                message: '새로운 버전이 출시되었습니다. 업데이트를 진행하시겠습니까?',
                duration: 0, // 자동으로 사라지지 않음
                closable: true
              })}
            >
              수동 닫기
            </Button>
            <Button
              variant="outline"
              onClick={() => showAlert({
                type: 'error',
                message: '아이콘 없는 심플 알림입니다.',
                icon: false,
                duration: 4000
              })}
            >
              아이콘 없음
            </Button>
          </div>
        </div>

        {/* Multiple Alerts */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Multiple Alerts</h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Button
              variant="ghost"
              onClick={() => {
                success("첫 번째 알림!");
                setTimeout(() => warning("두 번째 알림!"), 500);
                setTimeout(() => info("세 번째 알림!"), 1000);
              }}
            >
              연속 알림
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                for(let i = 1; i <= 5; i++) {
                  setTimeout(() => {
                    showAlert({
                      type: i % 2 === 0 ? 'success' : 'info',
                      message: `알림 ${i}/5`,
                      duration: 3000
                    });
                  }, i * 200);
                }
              }}
            >
              스택 테스트
            </Button>
            <Button
              variant="ghost"
              onClick={clearAll}
              style={{ color: '#EF4444', borderColor: '#EF4444' }}
            >
              모든 알림 제거
            </Button>
          </div>
        </div>

        {/* Real World Examples */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Real World Examples</h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Button
              variant="primary"
              onClick={() => showAlert({
                type: 'success',
                title: '주문 완료',
                message: '주문번호 #12345가 성공적으로 접수되었습니다.',
                action: {
                  label: '주문 확인',
                  onClick: () => alert('주문 페이지로 이동!')
                },
                duration: 8000
              })}
            >
              주문 완료
            </Button>
            <Button
              variant="primary"
              onClick={() => showAlert({
                type: 'error',
                title: '결제 실패',
                message: '카드 정보를 확인하고 다시 시도해주세요.',
                action: {
                  label: '재시도',
                  onClick: () => alert('결제 페이지로 이동!')
                },
                duration: 0
              })}
            >
              결제 실패
            </Button>
            <Button
              variant="primary"
              onClick={() => showAlert({
                type: 'info',
                title: '새 메시지',
                message: '관리자님으로부터 새로운 메시지가 도착했습니다.',
                action: {
                  label: '확인',
                  onClick: () => alert('메시지함으로 이동!')
                }
              })}
            >
              메시지 알림
            </Button>
          </div>
        </div>

        {/* Usage Examples */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>사용법 예제</h3>
          <div style={{ 
            backgroundColor: "#1e1f23", 
            border: "1px solid #2a2d31", 
            borderRadius: "8px", 
            padding: "16px",
            fontFamily: "monospace",
            fontSize: "13px",
            color: "#8a8f98"
          }}>
            <div style={{ color: "#569cd6" }}>기본 알림</div>
            <div style={{ marginTop: "4px" }}>{"const { success, error, warning, info } = useAlert();"}</div>
            <div style={{ marginTop: "4px" }}>{"success('저장되었습니다!');"}</div>
            <br />
            <div style={{ color: "#569cd6" }}>고급 알림</div>
            <div style={{ marginTop: "4px" }}>{"showAlert({"}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"type: 'warning',"}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"title: '경고',"}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"message: '주의하세요!',"}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"action: { label: '확인', onClick: handleAction }"}</div>
            <div style={{ marginTop: "2px" }}>{"});"}</div>
          </div>
        </div>
      </div>
    </section>

    {/* Tooltip Section */}
    <section style={{ padding: "0 32px", marginBottom: 48, borderTop: "1px solid #2a2d31" }}>
      <div style={{ paddingTop: 48 }}>
        <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: 16, color: "#fff", opacity: 0.8 }}>Tooltip Components</h2>
        
        {/* Basic Tooltips */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Basic Tooltips</h3>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <Tooltip content="위쪽에 표시되는 툴팁입니다" position="top">
              <Button variant="outline">Top Tooltip</Button>
            </Tooltip>
            <Tooltip content="아래쪽에 표시되는 툴팁입니다" position="bottom">
              <Button variant="outline">Bottom Tooltip</Button>
            </Tooltip>
            <Tooltip content="왼쪽에 표시되는 툴팁입니다" position="left">
              <Button variant="outline">Left Tooltip</Button>
            </Tooltip>
            <Tooltip content="오른쪽에 표시되는 툴팁입니다" position="right">
              <Button variant="outline">Right Tooltip</Button>
            </Tooltip>
          </div>
        </div>

        {/* Trigger Types */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Trigger Types</h3>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <Tooltip content="마우스를 올렸을 때 표시됩니다 (기본값)" trigger="hover">
              <Button variant="primary">Hover Trigger</Button>
            </Tooltip>
            <Tooltip content="클릭했을 때 표시됩니다" trigger="click">
              <Button variant="primary">Click Trigger</Button>
            </Tooltip>
            <Tooltip content="포커스됐을 때 표시됩니다" trigger="focus">
              <Button variant="primary">Focus Trigger</Button>
            </Tooltip>
          </div>
        </div>

        {/* Variants */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Variants & Sizes</h3>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <Tooltip content="어두운 테마 툴팁 (기본)" variant="dark" size="sm">
              <Button variant="ghost">Dark Small</Button>
            </Tooltip>
            <Tooltip content="밝은 테마 툴팁입니다" variant="light" size="md">
              <Button variant="ghost">Light Medium</Button>
            </Tooltip>
            <Tooltip 
              content="큰 크기의 툴팁으로 더 많은 정보를 담을 수 있습니다. 여러 줄의 텍스트도 표시 가능합니다." 
              variant="dark" 
              size="lg"
              maxWidth="250px"
            >
              <Button variant="ghost">Dark Large</Button>
            </Tooltip>
            <Tooltip content="화살표 없는 툴팁" arrow={false}>
              <Button variant="ghost">No Arrow</Button>
            </Tooltip>
          </div>
        </div>

        {/* Convenience Components */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Convenience Components</h3>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <TooltipButton 
              tooltip="버튼 전용 편의 컴포넌트입니다"
              style={{
                padding: '12px 24px',
                backgroundColor: '#5E6AD2',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Tooltip Button
            </TooltipButton>
            
            <TooltipIcon tooltip="아이콘용 툴팁입니다">
              <Icon name="help-circle" size={24} color="#8a8f98" style={{ cursor: 'help' }} />
            </TooltipIcon>
            
            <TooltipText tooltip="점선 밑줄이 있는 텍스트입니다">
              도움말 텍스트
            </TooltipText>
          </div>
        </div>

        {/* Advanced Examples */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Advanced Examples</h3>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <Tooltip 
              content="500ms 지연 후 표시됩니다" 
              delay={500}
            >
              <Button variant="outline">Delayed Tooltip</Button>
            </Tooltip>
            
            <Tooltip 
              content="빠른 숨김 툴팁입니다" 
              hideDelay={100}
            >
              <Button variant="outline">Fast Hide</Button>
            </Tooltip>
            
            <Tooltip 
              content="비활성화된 상태입니다" 
              disabled={true}
            >
              <Button variant="outline" style={{ opacity: 0.5 }}>Disabled Tooltip</Button>
            </Tooltip>
            
            <Tooltip 
              content={
                <div>
                  <strong style={{ color: '#5E6AD2' }}>HTML 콘텐츠</strong>
                  <br />
                  <span>Rich content with formatting</span>
                  <br />
                  <em style={{ color: '#10B981' }}>Styled elements</em>
                </div>
              }
              maxWidth="200px"
              size="lg"
            >
              <Button variant="primary">Rich Content</Button>
            </Tooltip>
          </div>
        </div>

        {/* Real World Examples */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Real World Examples</h3>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>사용자 이름</span>
              <Tooltip content="사용자 이름은 3-20자 사이여야 하며, 영문, 숫자, 언더스코어만 사용 가능합니다.">
                <Icon name="help-circle" size={16} color="#8a8f98" style={{ cursor: 'help' }} />
              </Tooltip>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Button 
                variant="primary" 
                style={{ 
                  backgroundColor: '#EF4444',
                  borderColor: '#EF4444'
                }}
              >
                삭제
              </Button>
              <Tooltip content="이 작업은 되돌릴 수 없습니다. 신중하게 결정해주세요." variant="light" position="top">
                <Icon name="alert-triangle" size={16} color="#F59E0B" style={{ cursor: 'help' }} />
              </Tooltip>
            </div>
            
            <Tooltip 
              content="프리미엄 기능입니다. 업그레이드가 필요합니다." 
              variant="light"
              trigger="click"
            >
              <Button variant="outline" style={{ opacity: 0.6, cursor: 'not-allowed' }}>
                🔒 Premium Feature
              </Button>
            </Tooltip>
          </div>
        </div>

        {/* Usage Examples */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>사용법 예제</h3>
          <div style={{ 
            backgroundColor: "#1e1f23", 
            border: "1px solid #2a2d31", 
            borderRadius: "8px", 
            padding: "16px",
            fontFamily: "monospace",
            fontSize: "13px",
            color: "#8a8f98"
          }}>
            <div style={{ color: "#569cd6" }}>기본 툴팁</div>
            <div style={{ marginTop: "4px" }}>{"<Tooltip content=\"도움말 메시지\">"}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"<Button>버튼</Button>"}</div>
            <div style={{ marginTop: "2px" }}>{"</Tooltip>"}</div>
            <br />
            <div style={{ color: "#569cd6" }}>고급 옵션</div>
            <div style={{ marginTop: "4px" }}>{"<Tooltip"}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"content=\"상세 설명\""}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"position=\"right\""}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"trigger=\"click\""}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"variant=\"light\""}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"delay={300}"}</div>
            <div style={{ marginTop: "2px" }}>{"/>"}</div>
            <br />
            <div style={{ color: "#569cd6" }}>편의 컴포넌트</div>
            <div style={{ marginTop: "4px" }}>{"<TooltipButton tooltip=\"버튼 설명\">클릭</TooltipButton>"}</div>
            <div style={{ marginTop: "4px" }}>{"<TooltipIcon tooltip=\"아이콘 설명\"><Icon /></TooltipIcon>"}</div>
            <div style={{ marginTop: "4px" }}>{"<TooltipText tooltip=\"텍스트 설명\">도움말</TooltipText>"}</div>
          </div>
        </div>
      </div>
    </section>

    {/* Tabs Section */}
    <section style={{ padding: "0 32px", marginBottom: 48, borderTop: "1px solid #2a2d31" }}>
      <div style={{ paddingTop: 48 }}>
        <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: 16, color: "#fff", opacity: 0.8 }}>Tabs Components</h2>
        
        {/* Basic Tabs */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Basic Tabs</h3>
          <Tabs
            tabs={[
              {
                id: 'tab1',
                label: '홈',
                content: (
                  <div style={{ padding: '20px', backgroundColor: '#1e1f23', borderRadius: '8px' }}>
                    <h4 style={{ color: '#fff', marginTop: 0 }}>홈 탭 콘텐츠</h4>
                    <p style={{ color: '#8a8f98', margin: 0 }}>
                      이곳은 홈 탭의 콘텐츠입니다. 다양한 정보와 대시보드를 표시할 수 있습니다.
                    </p>
                  </div>
                )
              },
              {
                id: 'tab2',
                label: '설정',
                icon: 'settings',
                content: (
                  <div style={{ padding: '20px', backgroundColor: '#1e1f23', borderRadius: '8px' }}>
                    <h4 style={{ color: '#fff', marginTop: 0 }}>설정 탭 콘텐츠</h4>
                    <p style={{ color: '#8a8f98', margin: '0 0 16px 0' }}>
                      애플리케이션의 각종 설정을 관리할 수 있습니다.
                    </p>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <Button variant="primary" size="sm">저장</Button>
                      <Button variant="outline" size="sm">취소</Button>
                    </div>
                  </div>
                )
              },
              {
                id: 'tab3',
                label: '프로필',
                icon: 'user',
                content: (
                  <div style={{ padding: '20px', backgroundColor: '#1e1f23', borderRadius: '8px' }}>
                    <h4 style={{ color: '#fff', marginTop: 0 }}>프로필 탭 콘텐츠</h4>
                    <p style={{ color: '#8a8f98', margin: 0 }}>
                      사용자 프로필 정보를 확인하고 수정할 수 있습니다.
                    </p>
                  </div>
                )
              }
            ]}
          />
        </div>

        {/* Variants */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Variants</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Pills */}
            <div>
              <h4 style={{ fontSize: "12px", color: "#8a8f98", marginBottom: '16px' }}>Pills Variant</h4>
              <Tabs
                variant="pills"
                tabs={[
                  { id: 'pill1', label: '대시보드', content: <div style={{ padding: '16px', color: '#8a8f98' }}>Pills 스타일 대시보드 콘텐츠</div> },
                  { id: 'pill2', label: '분석', icon: 'trending-up', content: <div style={{ padding: '16px', color: '#8a8f98' }}>분석 데이터 및 차트</div> },
                  { id: 'pill3', label: '보고서', content: <div style={{ padding: '16px', color: '#8a8f98' }}>생성된 보고서 목록</div> }
                ]}
              />
            </div>

            {/* Underline */}
            <div>
              <h4 style={{ fontSize: "12px", color: "#8a8f98", marginBottom: '16px' }}>Underline Variant</h4>
              <Tabs
                variant="underline"
                tabs={[
                  { id: 'under1', label: '개요', content: <div style={{ padding: '16px', color: '#8a8f98' }}>프로젝트 개요 정보</div> },
                  { id: 'under2', label: '팀', icon: 'users', content: <div style={{ padding: '16px', color: '#8a8f98' }}>팀 멤버 및 권한 관리</div> },
                  { id: 'under3', label: '활동', badge: '3', content: <div style={{ padding: '16px', color: '#8a8f98' }}>최근 활동 내역</div> }
                ]}
              />
            </div>
          </div>
        </div>

        {/* Advanced Features */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Advanced Features</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* With Icons and Badges */}
            <div>
              <h4 style={{ fontSize: "12px", color: "#8a8f98", marginBottom: '16px' }}>Icons, Badges & Disabled</h4>
              <Tabs
                tabs={[
                  { 
                    id: 'adv1', 
                    label: '메시지', 
                    icon: 'mail', 
                    badge: '12',
                    content: <div style={{ padding: '16px', color: '#8a8f98' }}>읽지 않은 메시지 12개</div> 
                  },
                  { 
                    id: 'adv2', 
                    label: '알림', 
                    icon: 'bell', 
                    badge: '5',
                    content: <div style={{ padding: '16px', color: '#8a8f98' }}>새 알림 5개</div> 
                  },
                  { 
                    id: 'adv3', 
                    label: '설정', 
                    icon: 'settings',
                    content: <div style={{ padding: '16px', color: '#8a8f98' }}>시스템 설정</div> 
                  },
                  { 
                    id: 'adv4', 
                    label: '비활성화', 
                    disabled: true,
                    content: <div style={{ padding: '16px', color: '#8a8f98' }}>접근할 수 없는 콘텐츠</div> 
                  }
                ]}
              />
            </div>

            {/* Full Width & Centered */}
            <div>
              <h4 style={{ fontSize: "12px", color: "#8a8f98", marginBottom: '16px' }}>Full Width & Centered</h4>
              <Tabs
                fullWidth
                centered
                variant="pills"
                tabs={[
                  { id: 'full1', label: '전체 너비', content: <div style={{ padding: '16px', color: '#8a8f98' }}>전체 너비로 표시되는 탭</div> },
                  { id: 'full2', label: '가운데 정렬', content: <div style={{ padding: '16px', color: '#8a8f98' }}>가운데 정렬된 탭</div> },
                  { id: 'full3', label: '균등 분배', content: <div style={{ padding: '16px', color: '#8a8f98' }}>균등하게 분배된 탭</div> }
                ]}
              />
            </div>
          </div>
        </div>

        {/* Vertical Tabs */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Vertical Tabs</h3>
          <div style={{ height: '300px' }}>
            <Tabs
              variant="vertical"
              tabs={[
                {
                  id: 'vert1',
                  label: '계정 설정',
                  icon: 'user',
                  content: (
                    <div style={{ padding: '20px', backgroundColor: '#1e1f23', borderRadius: '8px', height: '100%' }}>
                      <h4 style={{ color: '#fff', marginTop: 0 }}>계정 설정</h4>
                      <p style={{ color: '#8a8f98' }}>사용자 계정 정보를 관리합니다.</p>
                      <div style={{ marginTop: '16px' }}>
                        <Input placeholder="사용자 이름" style={{ marginBottom: '12px' }} />
                        <Input placeholder="이메일 주소" />
                      </div>
                    </div>
                  )
                },
                {
                  id: 'vert2',
                  label: '보안',
                  icon: 'shield',
                  content: (
                    <div style={{ padding: '20px', backgroundColor: '#1e1f23', borderRadius: '8px', height: '100%' }}>
                      <h4 style={{ color: '#fff', marginTop: 0 }}>보안 설정</h4>
                      <p style={{ color: '#8a8f98' }}>비밀번호 및 2단계 인증을 설정합니다.</p>
                      <div style={{ marginTop: '16px' }}>
                        <Button variant="primary" style={{ marginRight: '8px' }}>비밀번호 변경</Button>
                        <Button variant="outline">2FA 설정</Button>
                      </div>
                    </div>
                  )
                },
                {
                  id: 'vert3',
                  label: '알림',
                  icon: 'bell',
                  badge: '2',
                  content: (
                    <div style={{ padding: '20px', backgroundColor: '#1e1f23', borderRadius: '8px', height: '100%' }}>
                      <h4 style={{ color: '#fff', marginTop: 0 }}>알림 설정</h4>
                      <p style={{ color: '#8a8f98' }}>받고 싶은 알림의 종류를 선택합니다.</p>
                    </div>
                  )
                },
                {
                  id: 'vert4',
                  label: '결제',
                  icon: 'credit-card',
                  content: (
                    <div style={{ padding: '20px', backgroundColor: '#1e1f23', borderRadius: '8px', height: '100%' }}>
                      <h4 style={{ color: '#fff', marginTop: 0 }}>결제 정보</h4>
                      <p style={{ color: '#8a8f98' }}>결제 수단과 구독 정보를 관리합니다.</p>
                    </div>
                  )
                }
              ]}
            />
          </div>
        </div>

        {/* Simple Tabs (JSX Style) */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Simple Tabs (JSX Style)</h3>
          <SimpleTabs variant="pills">
            <Tab label="첫 번째" icon="home">
              <div style={{ padding: '16px', color: '#8a8f98' }}>
                JSX 스타일로 작성된 첫 번째 탭 콘텐츠입니다.
              </div>
            </Tab>
            <Tab label="두 번째" icon="star" badge="New">
              <div style={{ padding: '16px', color: '#8a8f98' }}>
                새로운 기능이 추가된 두 번째 탭입니다.
              </div>
            </Tab>
            <Tab label="세 번째" disabled>
              <div style={{ padding: '16px', color: '#8a8f98' }}>
                비활성화된 탭입니다.
              </div>
            </Tab>
          </SimpleTabs>
        </div>

        {/* Usage Examples */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>사용법 예제</h3>
          <div style={{ 
            backgroundColor: "#1e1f23", 
            border: "1px solid #2a2d31", 
            borderRadius: "8px", 
            padding: "16px",
            fontFamily: "monospace",
            fontSize: "13px",
            color: "#8a8f98"
          }}>
            <div style={{ color: "#569cd6" }}>기본 탭</div>
            <div style={{ marginTop: "4px" }}>{"<Tabs tabs={["}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"{ id: 'tab1', label: '홈', content: <div>홈</div> },"}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"{ id: 'tab2', label: '설정', icon: 'settings', content: <div>설정</div> }"}</div>
            <div style={{ marginTop: "2px" }}>{"]} />"}</div>
            <br />
            <div style={{ color: "#569cd6" }}>고급 옵션</div>
            <div style={{ marginTop: "4px" }}>{"<Tabs"}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"variant=\"pills\"      // default, pills, underline, vertical"}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"fullWidth={true}"}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"centered={true}"}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"lazy={true}           // 처음 활성화될 때만 렌더링"}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"onTabChange={handleTabChange}"}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"tabs={tabs}"}</div>
            <div style={{ marginTop: "2px" }}>{"/>"}</div>
            <br />
            <div style={{ color: "#569cd6" }}>JSX 스타일</div>
            <div style={{ marginTop: "4px" }}>{"<SimpleTabs>"}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"<Tab label=\"홈\" icon=\"home\">홈 콘텐츠</Tab>"}</div>
            <div style={{ marginTop: "2px", marginLeft: "16px" }}>{"<Tab label=\"설정\" badge=\"2\">설정 콘텐츠</Tab>"}</div>
            <div style={{ marginTop: "2px" }}>{"</SimpleTabs>"}</div>
          </div>
        </div>
      </div>
    </section>

    {/* Modal Section */}
    <section style={{ padding: "0 32px", marginBottom: 48, borderTop: "1px solid #2a2d31" }}>
      <div style={{ paddingTop: 48 }}>
        <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: 16, color: "#fff", opacity: 0.8 }}>Modal Components</h2>
        
        {/* Alert Modal */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Alert Modal (확인만)</h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Button 
              variant="primary" 
              onClick={() => openModal('alert')}
            >
              기본 알림
            </Button>
            <Button 
              variant="outline" 
              onClick={() => openModal('error')}
            >
              오류 알림
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => openModal('warning')}
            >
              경고 알림
            </Button>
            <Button 
              variant="primary" 
              onClick={() => openModal('success')}
            >
              성공 알림
            </Button>
          </div>
        </div>

        {/* Confirm Modal */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>Confirm Modal (확인+취소)</h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Button 
              variant="primary" 
              onClick={() => openModal('confirm')}
            >
              확인/취소 모달
            </Button>
            <Button 
              variant="outline" 
              onClick={() => openModal('custom')}
            >
              커스텀 콘텐츠
            </Button>
          </div>
        </div>

        {/* Custom Content Example */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: 12, color: "#8a8f98" }}>사용법 예제</h3>
          <div style={{ 
            backgroundColor: "#1e1f23", 
            border: "1px solid #2a2d31", 
            borderRadius: "8px", 
            padding: "16px",
            fontFamily: "monospace",
            fontSize: "13px",
            color: "#8a8f98"
          }}>
            <div style={{ color: "#569cd6" }}>Alert 타입 (확인만)</div>
            <div style={{ marginTop: "4px" }}>{"<Modal type=\"alert\" title=\"알림\" message=\"저장되었습니다\" />"}</div>
            <br />
            <div style={{ color: "#569cd6" }}>Confirm 타입 (확인+취소)</div>
            <div style={{ marginTop: "4px" }}>{"<Modal type=\"confirm\" title=\"삭제 확인\" message=\"정말 삭제하시겠습니까?\" />"}</div>
          </div>
        </div>
      </div>
    </section>

    {/* Modal Instances */}
    <Modal
      isOpen={modals.alert}
      onClose={() => closeModal('alert')}
      onConfirm={() => handleConfirm('alert')}
      type="alert"
      title="알림"
      message="작업이 성공적으로 완료되었습니다."
      variant="default"
    />

    <Modal
      isOpen={modals.error}
      onClose={() => closeModal('error')}
      onConfirm={() => handleConfirm('error')}
      type="alert"
      title="오류 발생"
      message="파일을 저장할 수 없습니다. 다시 시도해주세요."
      variant="error"
      confirmText="다시 시도"
    />

    <Modal
      isOpen={modals.warning}
      onClose={() => closeModal('warning')}
      onConfirm={() => handleConfirm('warning')}
      type="alert"
      title="경고"
      message="변경사항이 저장되지 않았습니다."
      variant="warning"
      confirmText="확인"
    />

    <Modal
      isOpen={modals.success}
      onClose={() => closeModal('success')}
      onConfirm={() => handleConfirm('success')}
      type="alert"
      title="성공"
      message="사용자 계정이 성공적으로 생성되었습니다!"
      variant="success"
      confirmText="시작하기"
    />

    <Modal
      isOpen={modals.confirm}
      onClose={() => closeModal('confirm')}
      onConfirm={() => handleConfirm('confirm')}
      type="confirm"
      title="삭제 확인"
      message="이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?"
      variant="error"
      confirmText="삭제"
      cancelText="취소"
    />

    <Modal
      isOpen={modals.custom}
      onClose={() => closeModal('custom')}
      onConfirm={() => handleConfirm('custom')}
      type="confirm"
      title="업그레이드 안내"
      variant="default"
      size="lg"
      confirmText="업그레이드"
      cancelText="나중에"
    >
      <div style={{ marginBottom: "20px" }}>
        <div style={{ 
          backgroundColor: "#1e1f23", 
          border: "1px solid #2a2d31", 
          borderRadius: "8px", 
          padding: "16px",
          marginBottom: "16px"
        }}>
          <h4 style={{ color: "#fff", margin: "0 0 8px 0", fontSize: "16px" }}>Pro 플랜의 혜택</h4>
          <ul style={{ margin: 0, paddingLeft: "20px", color: "#8a8f98" }}>
            <li>무제한 프로젝트</li>
            <li>고급 분석 도구</li>
            <li>우선 고객 지원</li>
            <li>팀 협업 기능</li>
          </ul>
        </div>
        <p style={{ color: "#8a8f98", margin: 0, fontSize: "14px" }}>
          지금 업그레이드하면 첫 달 50% 할인 혜택을 받을 수 있습니다.
        </p>
      </div>
    </Modal>

    {/* 전체 화면 Dimmed 로딩 */}
    {loadingStates.fullscreen && (
      <Loading
        type="spinner"
        size="xl"
        text="전체 화면 로딩 중..."
        color="primary"
        fullscreen={true}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(4px)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'fadeIn 0.3s ease-out'
        }}
      />
    )}

    <style>{`
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `}</style>

    {/* Alert Container */}
    <AlertContainer
      position="top-right"
      alerts={alerts}
      onClose={closeAlert}
    />

  </div>
  );
};

export default DemoPage;