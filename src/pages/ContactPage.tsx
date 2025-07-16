import React, { useState } from 'react';
import { Phone, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import emailjs from '@emailjs/browser';

const faqs = [
  {
    question: 'What areas do you serve?',
    answer:
      "We primarily serve Lagos, Abuja, and surrounding areas, but we're available for projects throughout Nigeria and can discuss international projects as well.",
  },
  {
    question: 'What is your typical process for a new client?',
    answer:
      'We begin with an initial consultation to understand your needs, then proceed with concept development, detailed planning, implementation, and final handover. Each step involves close collaboration with you.',
  },
  {
    question: 'What is the typical timeline for a project?',
    answer:
      'Project timelines vary based on scope and complexity. Small renovations might take 4-6 weeks, while larger projects can take several months. We\'ll provide a detailed timeline during the planning phase.',
  },
  {
    question: 'Do you offer virtual consultations?',
    answer:
      'Yes, we offer virtual consultations for clients who prefer remote meetings or are located outside our service area. These can be arranged via video call at your convenience.',
  },
  {
    question: 'How are your services priced?',
    answer:
      'Our pricing varies based on project scope, size, and specific services required. We offer transparent pricing and will provide a detailed quote after the initial consultation.',
  },
];

const ContactPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  interface FAQ {
    question: string;
    answer: string;
  }

  interface FormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  }

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  interface ChangeEvent {
    target: {
      name: string;
      value: string;
    };
  }

  const handleChange = (e: ChangeEvent): void => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({ ...prev, [name]: value }));
  };

  interface EmailJSParams {
    [key: string]: string;
  }

  interface SubmitEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = (e: SubmitEvent): void => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const params: EmailJSParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      from_name: formData.name,
    };

    emailjs
      .send(
        'service_fyu5tk6', 
        'template_fcwv9qk', 
        params,
        '6wCVFYyRQR3kN1U3L' 
      )
      .then(
        () => {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        },
        () => {
          setSubmitStatus('error');
          setErrorMessage('There was an error sending your message. Please try again later.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      <div className="pt-40 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center">Contact Us</h1>
          <div className="w-24 h-1 bg-gold mx-auto my-6"></div>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Our team is ready to bring your vision to life, get a free quote today!
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-6">Get in Touch</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="project-management">Project Management</option>
                    <option value="renovation">Renovation</option>
                    <option value="interior/exterior-design">Interior/Exterior Design</option>
                    <option value="interior-and-exterior-architecture">Interior Architecture</option>
                    <option value="building-finishing">Building Finishing</option>
                    <option value="3d-graphical-modeling">3D Graphical Modeling</option>
                    <option value="retail-decor-and-furnishings">Retail Decor and Furnishings</option>
                    <option value="building-project-consultation-plan">Building Project Consultation Plan</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <p className="text-green-600">Your message has been sent successfully. We'll get back to you soon!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 bg-gold text-white rounded hover:bg-gold/90 transition-colors text-lg font-medium w-full ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-semibold mb-6">Our Offices</h3>

              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-serif text-xl font-semibold mb-4">Awka Office</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="text-gold w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">
                        11 Seaman Avenue, Secretariat Road Awka
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Phone className="text-gold w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">
                        +234 906 401 3237
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Clock className="text-gold w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">
                        Monday - Friday: 9am - 5pm<br />
                        Saturday: 10am - 2pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-serif text-xl font-semibold mb-4">Lagos Office</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="text-gold w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">
                        B025, Yobe Plaza, Balogun Business Association (BBA) Trade Fair Lagos
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Phone className="text-gold w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">
                        +234 906 401 3237
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Clock className="text-gold w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">
                        Monday - Friday: 9am - 5pm<br />
                        Saturday: 10am - 2pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-serif font-semibold mb-4 text-center md:text-left">Awka Office Map</h4>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
                <iframe
                  title="Awka Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.8300569301726!2d7.083002174934463!3d6.236870393754702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044f5158b1b2b5d%3A0x2e1de7e7a1c2d4ff!2s11%20Seaman%20Ave%2C%20Awka%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1717336789012!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0 w-full h-full"
                ></iframe>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-serif font-semibold mb-4 text-center md:text-left">Lagos Office Map</h4>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
                <iframe
                  title="Lagos Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0268751295245!2d3.2909372749646063!3d6.469435624860358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d32fdd5f6cf%3A0x42f7f6f2a9e143e3!2sB025%20Yobe%20Plaza%2C%20Balogun%20Business%20Association%20(BBA)%20Trade%20Fair%20Complex%2C%20Lagos!5e0!3m2!1sen!2sng!4v1717336906789!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gold" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gold" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="mt-3 text-gray-600 text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;