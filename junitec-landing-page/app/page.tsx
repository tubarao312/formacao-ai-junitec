import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Award, Users, Briefcase, Mail, Linkedin, Github, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Junitec_mobile_logo-cor-qSosrvO9JJx3gIPZK3GT5WRslobpLb.svg"
              alt="JUNITEC Logo"
              width={120}
              height={40}
              priority
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link href="#awards" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Awards
            </Link>
            <Link href="#values" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Values
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">Start a Project</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
          <div className="container relative z-10">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  IST's Junior Enterprise <span className="text-blue-600">Since 1990</span>
                </h1>
                <p className="text-lg text-gray-600 md:text-xl">
                  Delivering value-driven technological solutions through innovation, quality, and expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Our Services
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Start a Project
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C0270T01.jpg-e3odSkJABgzahVY6coQVgi69oECpgp.jpeg"
                  alt="JUNITEC Event"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">About JUNITEC</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="max-w-3xl text-gray-600">
                Founded in 1990, JUNITEC is the Junior Enterprise of Instituto Superior Técnico, providing students with
                real-world experience while delivering high-quality technological solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img_5694-2.jpg-7tWEpGWouiBqAOowcJ6bv62dnMUyA6.jpeg"
                  alt="JUNITEC Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Award-Winning Excellence</h3>
                    <p className="text-gray-600">
                      Recognized with the "Most Impactful Project" award in Europe, JUNITEC has established itself as a
                      leader in technological innovation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Student Development</h3>
                    <p className="text-gray-600">
                      We provide IST students with hands-on experience, bridging the gap between academic knowledge and
                      professional practice.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Industry Partnerships</h3>
                    <p className="text-gray-600">
                      Collaborating with leading companies and organizations to deliver innovative solutions that
                      address real-world challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Projects</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="max-w-3xl text-gray-600">
                Explore our portfolio of innovative consulting projects that showcase our expertise and commitment to
                excellence.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 bg-blue-100 relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prancheta-2.png-HFkxY9upBIUPUWG1xSUzCY7kciGL61.jpeg"
                    alt="Oficina dos Sons"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Oficina dos Sons</h3>
                  <p className="text-gray-600 mb-4">
                    Fun e-learning platform for kids with reading and writing challenges, making education accessible
                    and engaging.
                  </p>
                  <Button variant="link" className="text-blue-600 p-0 h-auto font-medium">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 bg-blue-100 relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prancheta-18-768x576-WIDF2njizRdglb2K4QtekaN2z6md9v.png"
                    alt="Unbabel 3.0"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Unbabel 3.0</h3>
                  <p className="text-gray-600 mb-4">
                    Advanced brain pattern analysis for improved communication, leveraging cutting-edge technology.
                  </p>
                  <Button variant="link" className="text-blue-600 p-0 h-auto font-medium">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 bg-blue-100 relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/junitec-scaled-1.jpg-Vi0xeoOc0ts2fItK0JhlPJWyRVVgSe.jpeg"
                    alt="Intranet for Nova Junior Consulting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">NJC Intranet</h3>
                  <p className="text-gray-600 mb-4">
                    Custom intranet solution for Nova Junior Consulting, enhancing internal communication and workflow.
                  </p>
                  <Button variant="link" className="text-blue-600 p-0 h-auto font-medium">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Project 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 bg-blue-100 relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Brain Auto Manager"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Brain Auto Manager</h3>
                  <p className="text-gray-600 mb-4">
                    BCI + Machine Learning solution for safer mobility, revolutionizing transportation safety.
                  </p>
                  <Button variant="link" className="text-blue-600 p-0 h-auto font-medium">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Project 5 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 bg-blue-100 relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prancheta-20_1-768x575-y8And03vXPGG2zSHzTKL4b4YaJsx6N.png"
                    alt="Mobility Support Platform"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Mobility Support Platform</h3>
                  <p className="text-gray-600 mb-4">
                    Collaboration with Thales on European transport solutions, enhancing mobility across the continent.
                  </p>
                  <Button variant="link" className="text-blue-600 p-0 h-auto font-medium">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Project 6 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 bg-blue-100 relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Collector 1.0"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Collector 1.0</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive system to manage over 50,000 art pieces, streamlining collection management.
                  </p>
                  <Button variant="link" className="text-blue-600 p-0 h-auto font-medium">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-blue-600 hover:bg-blue-700">
                View All Projects
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Awards & Recognition</h2>
              <div className="w-20 h-1 bg-white mb-6"></div>
              <p className="max-w-3xl text-blue-100">
                Our commitment to excellence has been recognized through prestigious awards and accolades.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JUNITEC_Junior-Empresa-do-Ano_Europa-M7EfmWZ5yehVPFSsVpc6DIa82B1Ypx.jpeg"
                  alt="JUNITEC Award"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="bg-blue-700 bg-opacity-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Most Impactful Project in Europe</h3>
                  <p className="text-blue-100 mb-4">
                    JUNITEC was honored with the prestigious "Most Impactful Project" award, recognizing our commitment
                    to creating solutions that make a real difference in society.
                  </p>
                  <div className="flex items-center">
                    <Award className="h-6 w-6 mr-2 text-yellow-400" />
                    <span className="text-sm text-blue-100">
                      Awarded by the European Confederation of Junior Enterprises
                    </span>
                  </div>
                </div>

                <div className="bg-blue-700 bg-opacity-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Excellence in Innovation</h3>
                  <p className="text-blue-100">
                    Our innovative approach to technological solutions has been recognized by industry leaders and
                    academic institutions alike.
                  </p>
                </div>

                <div className="bg-blue-700 bg-opacity-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Community Impact</h3>
                  <p className="text-blue-100">
                    Recognized for our contributions to the local community through technology-driven solutions and
                    initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section id="values" className="py-20 bg-white">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Values & Approach</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="max-w-3xl text-gray-600">
                At JUNITEC, our values guide everything we do, ensuring we deliver exceptional results for our partners.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="bg-blue-100 p-4 rounded-full inline-flex mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We embrace cutting-edge technologies and creative thinking to develop solutions that address complex
                  challenges.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="bg-blue-100 p-4 rounded-full inline-flex mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Quality</h3>
                <p className="text-gray-600">
                  We are committed to delivering high-quality solutions that exceed expectations and stand the test of
                  time.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="bg-blue-100 p-4 rounded-full inline-flex mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Collaboration</h3>
                <p className="text-gray-600">
                  We work closely with our partners, fostering open communication and shared goals to achieve success
                  together.
                </p>
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Our Approach</h3>
                <p className="text-gray-600">
                  At JUNITEC, we follow a structured approach to ensure the success of every project:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 p-1 rounded-full mt-1">
                      <ChevronRight className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold">Discovery & Analysis</h4>
                      <p className="text-gray-600">We begin by understanding your needs and challenges in depth.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 p-1 rounded-full mt-1">
                      <ChevronRight className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold">Solution Design</h4>
                      <p className="text-gray-600">
                        Our team develops a tailored solution that addresses your specific requirements.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 p-1 rounded-full mt-1">
                      <ChevronRight className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold">Implementation</h4>
                      <p className="text-gray-600">
                        We bring the solution to life with careful attention to detail and quality.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 p-1 rounded-full mt-1">
                      <ChevronRight className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold">Evaluation & Refinement</h4>
                      <p className="text-gray-600">
                        We continuously evaluate and refine our solutions to ensure optimal performance.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SILAB-JUNITEC-Camara-de-Oeiras-contentor.jpg-fryWJUNJH98CHvBvxu3dOjONhQW4Ac.jpeg"
                  alt="JUNITEC Approach"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Get in Touch</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="max-w-3xl text-gray-600">
                Ready to start a project or have questions? We'd love to hear from you!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Contact Form</h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Address</h4>
                        <p className="text-gray-600">
                          Instituto Superior Técnico, Av. Rovisco Pais, 1049-001 Lisboa, Portugal
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Email</h4>
                        <p className="text-gray-600">info@junitec.pt</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Phone</h4>
                        <p className="text-gray-600">+351 218 417 000</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-6">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors">
                      <Linkedin className="h-5 w-5 text-blue-600" />
                    </a>
                    <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors">
                      <Twitter className="h-5 w-5 text-blue-600" />
                    </a>
                    <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors">
                      <Github className="h-5 w-5 text-blue-600" />
                    </a>
                    <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </a>
                  </div>
                </div>

                <div className="bg-blue-600 p-8 rounded-lg shadow-md text-white">
                  <h3 className="text-xl font-bold mb-4">Start a Project</h3>
                  <p className="mb-6">Ready to bring your ideas to life? Let's collaborate on your next project!</p>
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">Schedule a Meeting</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold">
                <span className="text-white">Juni</span>
                <span className="text-blue-300">tec</span>
              </div>
              <p className="text-blue-200">
                The Junior Enterprise of Instituto Superior Técnico, delivering innovative technological solutions since
                1990.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-blue-200 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-blue-200 hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#awards" className="text-blue-200 hover:text-white transition-colors">
                    Awards
                  </Link>
                </li>
                <li>
                  <Link href="#values" className="text-blue-200 hover:text-white transition-colors">
                    Values
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-blue-200 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    Mobile Applications
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    Software Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    Research & Development
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <p className="text-blue-200 mb-4">
                Subscribe to our newsletter to stay updated with our latest projects and news.
              </p>
              <form className="space-y-2">
                <input type="email" className="w-full px-3 py-2 text-gray-900 rounded-md" placeholder="Your email" />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe</Button>
              </form>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200">&copy; {new Date().getFullYear()} JUNITEC. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

