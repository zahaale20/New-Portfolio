import { useEffect, useRef, useState, useCallback } from "react";

const Projects = () => {
  const projects = [
    { title: "ALPHA ANALYTICS", date: "Jan 2024", description: "Advanced analytics platform for real-time data insights." },
    { title: "BETA BUILDER", date: "Feb 2024", description: "Build automation system for modern development workflows." },
    { title: "CIPHER CONNECT", date: "Mar 2024", description: "Cryptographic communication platform with end-to-end encryption." },
    { title: "DELTA DASHBOARD", date: "Apr 2024", description: "Dynamic dashboard framework for enterprise data visualization." },
    { title: "ECHO ENGINE", date: "May 2024", description: "Event-driven processing engine for distributed systems." },
    { title: "FLOW FRAMEWORK", date: "Jun 2024", description: "Flexible workflow automation for complex business processes." },
    { title: "GATEWAY GRID", date: "Jul 2024", description: "Grid computing platform for high-performance applications." },
    { title: "HUB HARMONY", date: "Aug 2024", description: "Harmonized integration hub for microservices architecture." },
    { title: "INSIGHT INTERFACE", date: "Sep 2024", description: "Intelligent interface system powered by machine learning." },
    { title: "JOURNEY JUNCTION", date: "Oct 2024", description: "Journey mapping tool for customer experience optimization." },
    { title: "KERNEL KIT", date: "Nov 2024", description: "Kernel-level toolkit for system performance optimization." },
    { title: "LOGIC LOOP", date: "Dec 2024", description: "Logic processing framework for complex decision trees." },
    { title: "MATRIX MANAGER", date: "Jan 2025", description: "Matrix operations manager for scientific computing." },
    { title: "NEURAL NETWORK", date: "Feb 2025", description: "Neural network platform for deep learning applications." },
    { title: "ORBIT OPTIMIZER", date: "Mar 2025", description: "Optimization engine for resource allocation and scheduling." },
    { title: "PIPELINE PORTAL", date: "Apr 2025", description: "Pipeline management portal for CI/CD workflows." },
    { title: "QUERY QUEST", date: "May 2025", description: "Query optimization system for database performance." },
    { title: "RUNTIME RADAR", date: "Jun 2025", description: "Runtime monitoring and alerting system for applications." },
    { title: "STREAM STUDIO", date: "Jul 2025", description: "Studio platform for real-time data stream processing." },
    { title: "TRANSFORM TOWER", date: "Aug 2025", description: "Transformation engine for data migration and ETL processes." },
    { title: "UNITY UTILITIES", date: "Sep 2025", description: "Unified utility suite for cross-platform development." },
    { title: "VECTOR VAULT", date: "Oct 2025", description: "Vector database solution for AI and machine learning workloads." },
    { title: "WORKFLOW WAVE", date: "Nov 2025", description: "Wave-based workflow orchestration for event-driven systems." },
    { title: "XPLORE EXCHANGE", date: "Dec 2025", description: "Exchange platform for secure data sharing between organizations." },
    { title: "YIELD YARD", date: "Jan 2026", description: "Yield optimization platform for financial and resource planning." },
    { title: "ZONE ZERO", date: "Feb 2026", description: "Zero-trust security framework for cloud-native applications." }
  ];

  const navRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  // Professional infinite scroll with buffer zones and smooth transitions
  const handleScroll = useCallback(() => {
    const nav = navRef.current;
    if (!nav || isScrollingRef.current) return;

    const scrollTop = nav.scrollTop;
    const scrollHeight = nav.scrollHeight;
    const clientHeight = nav.clientHeight;
    const sectionHeight = scrollHeight / 3; // Three sections
    const bufferZone = sectionHeight * 0.1; // 10% buffer zone

    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Set a small timeout to avoid rapid jumps during fast scrolling
    scrollTimeoutRef.current = setTimeout(() => {
      if (isScrollingRef.current) return;

      // Bottom section - jump to middle section
      if (scrollTop >= sectionHeight * 2 - bufferZone) {
        isScrollingRef.current = true;
        nav.scrollTop = scrollTop - sectionHeight;
        requestAnimationFrame(() => {
          isScrollingRef.current = false;
        });
      }
      // Top section - jump to middle section  
      else if (scrollTop <= bufferZone) {
        isScrollingRef.current = true;
        nav.scrollTop = scrollTop + sectionHeight;
        requestAnimationFrame(() => {
          isScrollingRef.current = false;
        });
      }
    }, 50);
  }, []);

  // Scroll event listener with performance optimization
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Use passive listeners for better performance
    nav.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      nav.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  // Initialize scroll position to middle section
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Start in the middle section to allow bidirectional scrolling
    const initializePosition = () => {
      const sectionHeight = nav.scrollHeight / 3;
      nav.scrollTop = sectionHeight + (sectionHeight * 0.1); // Middle section + small offset
    };

    // Wait for render to complete
    requestAnimationFrame(initializePosition);
  }, [projects.length]);

  // Triple the content for seamless infinite scroll
  const loopedProjects = [...projects, ...projects, ...projects];

  return (
    <section id="project">
      <nav ref={navRef}>
        {loopedProjects.map((project, index) => {
          const originalIndex = index % projects.length;
          const sectionIndex = Math.floor(index / projects.length);
          
          return (
            <button
              key={`${originalIndex}-${sectionIndex}`}
              className={selectedProject?.title === project.title ? "active" : ""}
              onClick={() => setSelectedProject(project)}
            >
              {project.title}
            </button>
          );
        })}
      </nav>
      
      <div className="project-details">
        {selectedProject ? (
          <>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.date}</p>
            <p>{selectedProject.description}</p>
          </>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Projects;