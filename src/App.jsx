import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Menu, 
  X, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Brain,
  Zap,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Star,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'experience', 'education', 'publications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/1_2j2Cggnag9-fJ-SHf71mlEhlntvIc5S/view?usp=drive_link', '_blank');
  };

  const handleContactClick = (type) => {
    if (type === 'email') {
      window.location.href = 'mailto:rshaudx3@gmail.com';
    } else if (type === 'phone') {
      window.location.href = 'tel:+917439505623';
    } else if (type === 'linkedin') {
      window.open('https://linkedin.com/in/raza-shaud', '_blank');
    } else if (type === 'github') {
      window.open('https://github.com/RAZASHAUD', '_blank');
    }
  };

  const skills = {
    'Programming Languages': ['Python', 'C', 'C++', 'PHP', 'JavaScript', 'SQL'],
    'Frameworks & Libraries': ['ReactJS', 'FastAPI', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'OpenCV'],
    'Databases': ['SQLite', 'SQL', 'NoSQL'],
    'Core Competencies': ['Data Structures', 'Algorithms', 'OOP', 'Operating Systems'],
    'Data Science': ['Data Cleaning', 'Statistical Analysis', 'Machine Learning', 'Model Deployment'],
    'Technologies': ['Arduino', 'MATLAB', 'Multisim', 'ETAP', 'Power BI'],
    'Tools': ['VS Code', 'Jupyter', 'PyCharm', 'Microsoft Office'],
    'Soft Skills': ['Problem-solving', 'Analytical Mindset', 'Communication', 'Teamwork', 'Adaptability', 'Critical Thinking']
  };

  const projects = [
    {
      title: 'Power Outage Prediction',
      description: 'Advanced ML model achieving 94% F1 Score for predicting power outages using historical data and weather patterns.',
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Data Analysis'],
      metrics: '94% F1 Score'
    },
    {
      title: 'Human & AI Voice Detection',
      description: 'Deep learning system to distinguish between human and AI-generated voices with high accuracy.',
      technologies: ['Python', 'TensorFlow', 'Audio Processing', 'Deep Learning'],
      metrics: '89% Accuracy'
    },
    {
      title: 'Smart Attendance System',
      description: 'Real-time face detection and recognition system for automated attendance tracking.',
      technologies: ['Python', 'OpenCV', 'Face Recognition', 'Computer Vision'],
      metrics: 'Real-time Processing'
    },
    {
      title: 'Saline Monitoring System',
      description: 'IoT-based healthcare solution for monitoring saline levels with automated alerts.',
      technologies: ['Arduino', 'IoT', 'Sensors', 'Alert System'],
      metrics: 'IoT Integration'
    },
    {
      title: 'Real-Time Face Mask Detection',
      description: 'Computer vision application for detecting face mask compliance in real-time video streams.',
      technologies: ['Python', 'OpenCV', 'Computer Vision', 'Real-time Processing'],
      metrics: 'Real-time Detection'
    }
  ];

  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'Tech Solutions Inc.',
      period: 'April – June 2025',
      description: 'Gained hands-on experience in agile development workflows, code reviews, version control systems, and deployment processes.',
      skills: ['Agile Development', 'Code Reviews', 'Version Control', 'Deployment']
    },
    {
      title: 'Power Distribution Systems Trainee',
      company: 'SAIL',
      period: 'November – December 2024',
      description: 'Specialized training in industrial motors, transformers, and power distribution systems.',
      skills: ['Industrial Motors', 'Transformers', 'Power Systems']
    },
    {
      title: 'Power Plant Operations Trainee',
      company: 'DVC',
      period: 'June – July 2024',
      description: 'Comprehensive training in substation automation, power plant operations, and security protocols.',
      skills: ['Substation Automation', 'Power Plant Operations', 'Security Systems']
    }
  ];

  const publications = [
    {
      title: 'IEEE GIEST 2024 Conference Paper',
      type: 'Conference Publication',
      description: 'Research paper presented at IEEE GIEST 2024 conference'
    },
    {
      title: 'Udemy Python Bootcamp',
      type: 'Certification',
      description: 'Comprehensive Python programming certification'
    },
    {
      title: 'Flipkart GRID 6.0 – Level 1',
      type: 'Competition',
      description: 'Successfully completed Level 1 of Flipkart GRID 6.0 challenge'
    },
    {
      title: 'Accenture Innovation Challenge',
      type: 'Competition',
      description: 'Participated in software solutions track'
    },
    {
      title: 'C++ DSA Training',
      type: 'Certification',
      description: 'Advanced training in Data Structures and Algorithms using C++'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Electrical Engineer, Software Developer & ML Enthusiast Portfolio – Raza Shaud</title>
        <meta name="description" content="Raza Shaud - Final-year B.Tech Electrical Engineering student with expertise in Python, Machine Learning, IoT, and industrial automation. Available for software engineering and ML opportunities from June 2026." />
        <meta property="og:title" content="Electrical Engineer, Software Developer & ML Enthusiast Portfolio – Raza Shaud" />
        <meta property="og:description" content="Raza Shaud - Final-year B.Tech Electrical Engineering student with expertise in Python, Machine Learning, IoT, and industrial automation. Available for software engineering and ML opportunities from June 2026." />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="Electrical Engineer, Python Developer, Machine Learning, Software Engineer, IoT, Industrial Automation, Kolkata" />
      </Helmet>

      <div className="min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl font-bold gradient-text"
              >
                Raza Shaud
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {['Home', 'Skills', 'Projects', 'Experience', 'Education', 'Publications', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`nav-link text-sm font-medium transition-colors ${
                      activeSection === item.toLowerCase() 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-2 space-y-1">
                {['Home', 'Skills', 'Projects', 'Experience', 'Education', 'Publications', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="hero-bg min-h-screen flex items-center relative overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 tech-pattern opacity-30" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold mb-6"
                >
                  Raza Shaud
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl mb-4 text-blue-100"
                >
                  Electrical Engineer • Python Developer • ML Enthusiast
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center text-blue-200 mb-8"
                >
                  <MapPin size={20} className="mr-2" />
                  Kolkata, India
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed"
                >
                  Final-year B.Tech Electrical Engineering student with strong hands-on experience in Python, Machine Learning, IoT, and industrial automation. Passionate about integrating engineering with software and data science to solve real-world problems.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button 
                    onClick={handleResumeDownload}
                    className="btn-primary text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center"
                  >
                    <Download size={20} className="mr-2" />
                    Download Resume
                  </Button>
                  
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    variant="outline"
                    className="glass-effect text-white border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold"
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="floating-element">
                  <img 
                    src="https://horizons-cdn.hostinger.com/4a0a807d-7f36-43d9-bc42-ed8391098f3d/6fa0c545c78bba692457ad279c6f0b9d.jpg"
                    alt="Raza Shaud - Electrical Engineer and Software Developer"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                  />
                </div>
                
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300/20 rounded-full blur-xl" />
              </motion.div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          >
            <ChevronDown size={32} />
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Technical Skills</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive expertise across programming, data science, and engineering technologies
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="tech-card rounded-xl p-6"
                >
                  <div className="flex items-center mb-4">
                    {category.includes('Programming') && <Code className="text-blue-600 mr-3" size={24} />}
                    {category.includes('Databases') && <Database className="text-blue-600 mr-3" size={24} />}
                    {category.includes('Data Science') && <Brain className="text-blue-600 mr-3" size={24} />}
                    {category.includes('Technologies') && <Zap className="text-blue-600 mr-3" size={24} />}
                    {!category.includes('Programming') && !category.includes('Databases') && !category.includes('Data Science') && !category.includes('Technologies') && <Star className="text-blue-600 mr-3" size={24} />}
                    <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="skill-tag px-3 py-1 rounded-full text-sm font-medium text-blue-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Innovative solutions combining engineering principles with cutting-edge technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="project-card rounded-xl p-6 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.metrics}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    onClick={() => toast({
                      title: "🚧 Project Details",
                      description: "Detailed project information and live demos aren't implemented yet—but don't worry! You can request them in your next prompt! 🚀"
                    })}
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold flex items-center"
                  >
                    View Details <ArrowRight size={16} className="ml-1" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Professional Experience</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hands-on experience in software development and industrial engineering
              </p>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="tech-card rounded-xl p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{experience.title}</h3>
                      <div className="flex items-center text-blue-600 mb-2">
                        <Briefcase size={18} className="mr-2" />
                        <span className="font-semibold">{experience.company}</span>
                      </div>
                    </div>
                    <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-semibold">
                      {experience.period}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-tag px-3 py-1 rounded-full text-sm font-medium text-blue-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Education</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Strong academic foundation in electrical engineering and technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="tech-card rounded-xl p-8"
              >
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-blue-600 mr-3" size={32} />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">B.Tech in Electrical Engineering</h3>
                    <p className="text-blue-600 font-semibold">November 2022 – June 2026</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Ghani Khan Choudhury Institute of Engineering & Technology, Malda
                </p>
                
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg inline-block">
                  Available for full-time opportunities from June 2026
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="tech-card rounded-xl p-8"
              >
                <div className="flex items-center mb-4">
                  <BookOpen className="text-blue-600 mr-3" size={32} />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Higher Secondary (WBCHSE)</h3>
                    <p className="text-blue-600 font-semibold">2020 – 2022</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Arya Parishad Vidyalaya, Kolkata
                </p>
                
                <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg inline-block">
                  Percentage: 71.8%
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Publications & Certifications Section */}
        <section id="publications" className="py-20 section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Publications & Certifications</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Academic contributions and professional development achievements
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publications.map((publication, index) => (
                <motion.div
                  key={publication.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="tech-card rounded-xl p-6"
                >
                  <div className="flex items-center mb-3">
                    <Award className="text-blue-600 mr-3" size={24} />
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {publication.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{publication.title}</h3>
                  <p className="text-gray-600">{publication.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 tech-card rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Additional Information</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-3">Hobbies & Interests</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Swimming', 'Chess', 'Cricket', 'Carrom'].map((hobby) => (
                      <span key={hobby} className="skill-tag px-3 py-1 rounded-full text-sm font-medium text-blue-700">
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['English', 'Hindi', 'Bengali'].map((language) => (
                      <span key={language} className="skill-tag px-3 py-1 rounded-full text-sm font-medium text-blue-700">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to contribute to innovative projects and grow with your team
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                onClick={() => handleContactClick('email')}
                className="tech-card rounded-xl p-6 text-center cursor-pointer group hover:shadow-lg transition-all"
              >
                <Mail className="text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">rshaudx3@gmail.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleContactClick('phone')}
                className="tech-card rounded-xl p-6 text-center cursor-pointer group hover:shadow-lg transition-all"
              >
                <Phone className="text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600 text-sm">+91 7439505623</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                onClick={() => handleContactClick('linkedin')}
                className="tech-card rounded-xl p-6 text-center cursor-pointer group hover:shadow-lg transition-all"
              >
                <Linkedin className="text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">LinkedIn</h3>
                <p className="text-gray-600 text-sm">linkedin.com/in/raza-shaud</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                onClick={() => handleContactClick('github')}
                className="tech-card rounded-xl p-6 text-center cursor-pointer group hover:shadow-lg transition-all"
              >
                <Github className="text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">GitHub</h3>
                <p className="text-gray-600 text-sm">github.com/RAZASHAUD</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button 
                onClick={handleResumeDownload}
                className="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center mx-auto"
              >
                <Download size={24} className="mr-3" />
                Download Complete Resume
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-2xl font-bold gradient-text mb-4">Raza Shaud</p>
              <p className="text-gray-400 mb-6">
                Electrical Engineer • Python Developer • ML Enthusiast
              </p>
              <div className="flex justify-center space-x-6 mb-8">
                <button 
                  onClick={() => handleContactClick('email')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={24} />
                </button>
                <button 
                  onClick={() => handleContactClick('linkedin')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </button>
                <button 
                  onClick={() => handleContactClick('github')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </button>
              </div>
              <div className="section-divider mb-6" />
              <p className="text-gray-500">
 ui$0               © 2024 Raza Shaud. Available for opportunities from June 2026.
              </p>
            </div>
          </div>
        </footer>

        <Toaster />
      </div>
    </>
  );
}

export default App;