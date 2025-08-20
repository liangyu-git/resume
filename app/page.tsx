'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail, Download, ExternalLink, MapPin, Calendar, Award, Code, Brain, Eye, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                <MapPin className="w-3 h-3 mr-2" />
                AI Engineer @ Perfect Corp
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Bright
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              AI & Computer Vision Engineer crafting intelligent systems that understand and interact with the visual world through cutting-edge machine learning technologies
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Button asChild size="lg" className="group">
                <Link href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center gap-4 pt-4"
            >
              <Link
                href="https://github.com/liangyu-git"
                target="_blank"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all hover:scale-105"
                title="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/liang-yu-sun"
                target="_blank"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all hover:scale-105"
                title="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:bright880409@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all hover:scale-105"
                title="Send Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Explore my work</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
            >
              <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mt-2" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About & Experience Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Passionate about pushing the boundaries of AI and computer vision to solve real-world problems
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  I'm <strong>LIANG-YU SUN</strong> (call me Bright), an AI and Computer Vision Engineer at Perfect Corp. 
                  I specialize in developing cutting-edge machine learning solutions that bridge the gap between artificial 
                  intelligence and real-world applications.
                </p>
                <p>
                  My expertise spans deep learning, computer vision, and AI system architecture, 
                  with a focus on creating intelligent systems that can perceive, understand, 
                  and interact with visual data in meaningful ways.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-card border">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Experience</span>
                  </div>
                  <p className="text-2xl font-bold">3+ Years</p>
                  <p className="text-sm text-muted-foreground">AI Engineering</p>
                </div>
                <div className="p-4 rounded-lg bg-card border">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Projects</span>
                  </div>
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-sm text-muted-foreground">AI Solutions</p>
                </div>
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-8">Professional Experience</h3>
              
              <div className="space-y-6">
                <div className="relative pl-8 pb-8 border-l-2 border-primary/30 last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h4 className="font-semibold">AI & Computer Vision Engineer</h4>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">Current</span>
                  </div>
                  <p className="text-primary font-medium mb-1">Perfect Corp</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>2022 - Present</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Developed advanced computer vision models for beauty tech applications</li>
                    <li>• Implemented real-time image processing systems using deep learning</li>
                    <li>• Optimized ML models for mobile and web deployment</li>
                  </ul>
                </div>

                <div className="relative pl-8 pb-8 border-l-2 border-primary/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-muted-foreground rounded-full"></div>
                  <h4 className="font-semibold mb-1">Software Engineer</h4>
                  <p className="text-muted-foreground font-medium mb-1">Previous Company</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>2020 - 2022</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Built scalable web applications with modern frameworks</li>
                    <li>• Collaborated on machine learning integration projects</li>
                    <li>• Mentored junior developers in best practices</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technologies and frameworks I use to build intelligent systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border bg-card hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Machine Learning</h3>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'MLflow'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-secondary rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Deep learning, neural networks, model optimization, and MLOps
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border bg-card hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Computer Vision</h3>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {['OpenCV', 'YOLO', 'RCNN', 'MediaPipe', 'Detectron2'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-secondary rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Object detection, image segmentation, facial recognition, AR/VR
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border bg-card hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Development</h3>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript', 'React', 'Node.js', 'Docker'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-secondary rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Full-stack development, cloud deployment, API design
                </p>
              </div>
            </motion.div>
          </div>

          {/* Technical Proficiency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl border p-8"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Proficiency</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Python & ML Frameworks</span>
                    <span className="text-sm text-primary">95%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '95%' }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-primary h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Computer Vision</span>
                    <span className="text-sm text-primary">90%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '90%' }}
                      transition={{ duration: 1, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-primary h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Deep Learning</span>
                    <span className="text-sm text-primary">88%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '88%' }}
                      transition={{ duration: 1, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="bg-primary h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Full-Stack Development</span>
                    <span className="text-sm text-primary">85%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      transition={{ duration: 1, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="bg-primary h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Innovative AI and computer vision solutions I've developed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Real-time Face Recognition System',
                description: 'Advanced facial recognition system with 99.2% accuracy using deep learning and computer vision techniques.',
                tech: ['Python', 'TensorFlow', 'OpenCV', 'React'],
                image: '/project1.jpg',
                github: 'https://github.com/bright-sun/face-recognition',
                live: 'https://face-recognition-demo.com'
              },
              {
                title: 'AI-Powered Beauty Filter',
                description: 'Real-time beauty enhancement filter using computer vision and AR technology for mobile applications.',
                tech: ['PyTorch', 'MediaPipe', 'WebGL', 'JavaScript'],
                image: '/project2.jpg',
                github: 'https://github.com/bright-sun/beauty-filter',
                live: 'https://beauty-filter-demo.com'
              },
              {
                title: 'Object Detection API',
                description: 'Scalable object detection API serving multiple models with real-time inference and batch processing.',
                tech: ['FastAPI', 'Docker', 'YOLO', 'Redis'],
                image: '/project3.jpg',
                github: 'https://github.com/bright-sun/object-detection-api',
                live: 'https://api-demo.com'
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl border overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/40 flex items-center justify-center">
                  <div className="text-4xl opacity-50">🤖</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-secondary rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.live} target="_blank">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your AI and computer vision projects to life? Let's discuss how we can collaborate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl border p-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">bright880409@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Taiwan</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-4">Connect with me</h4>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://linkedin.com/in/liang-yu-sun" target="_blank">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://github.com/liangyu-git" target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}