import React from 'react'
import Servicespic from '../assets/Servicespic.png'
import Maintenance from '../assets/Maintenance.png'
import Custom from '../assets/Custom.png'
import Kitchen from '../assets/Kitchen.png'
import Fireplace from '../assets/Fireplace.png'
import Safety from '../assets/Safety.png'
import NoWaveFooter from '../NoWaveFooter'
import Servicesheader from '../assets/Servicesheader.png'

const PoolRemodel = () => {
    return (
        <div className="services-body">
        <div className="pages-container">
            <h1 className="pages-header">Our Services</h1>
        <img src={Servicesheader} alt="services header" className="pages-header-pic"/>
      </div>
      
        <div className="sections-container">
      <div class="services-sections-1">
    <div class="services-images">
      <img src={Servicespic} alt="custom" className="services-images" />
    </div>
    <div class="services-text">
        <h1>Custom Pool and Spa Designs</h1>
      <h3>Create your own personal paradise with a custom pool build and spa that brings your vision to life. Whether you prefer the organic shapes of a free-form design or the sleek lines of a rectangular pool, the possibilities are endless. Collaborate with our team to shape every aspect of your pool, from materials and features to custom rock formations and concrete. Enhance your pool with cascading waterfalls, underwater lighting, and built-in seating areas. Prioritize safety with secure fencing and energy efficiency with eco-friendly equipment. With meticulous planning and attention to detail, your custom pool will become a breathtaking oasis that reflects your unique style and provides endless joy and relaxation</h3>
    </div>
  </div>

  <div class="services-sections-2">
    <div class="services-text">
        <h1>Pool Remodel</h1>
      <h3>Transform your existing pool into a stunning retreat with a comprehensive pool remodel. Upgrade the look and functionality of your pool by replacing worn-out tiles with fresh, stylish options that breathe new life into the space. Remove old and cracked concrete surfaces and replace them with a beautiful and durable deck that complements your outdoor aesthetic. Revitalize the pool's interior by applying new plaster, instantly rejuvenating its appearance. Enhance the efficiency and performance of your pool by upgrading the plumbing and equipment, ensuring optimal circulation and filtration. With a pool remodel, you can create a modern and inviting oasis that exceeds your expectations, providing years of enjoyment and relaxation.</h3>
    </div>
    <div class="services-images">
      <img src={Maintenance} alt="jesse" className="services-images" />
    </div>
  </div>

  <div class="services-sections-1">
    <div class="services-images">
      <img src={Custom} alt="concrete" className="services-images" />
    </div>
    <div class="services-text">
        <h1>Custom Concrete</h1>
      <h3>Transform your outdoor spaces with custom concrete solutions that offer both practicality and visual appeal. Opt for a sand finish that adds a subtle texture to your patios, driveways, and walkways, creating a clean and modern look. Add a touch of personalization with colored stamping, which allows you to achieve the appearance of natural stone, pavers, woodgrain and more without breaking the bank. Enhance the safety and aesthetics of your pool or spa area with stylish coping, providing a finished edge that blends seamlessly with the surroundings. If you prefer a traditional and textured look, consider a broom finish that adds both traction and visual interest to your concrete surfaces. With custom concrete, you can create functional and attractive outdoor spaces that suit your style and enhance your property's overall appeal..</h3>
    </div>
  </div>

  <div class="services-sections-2">
    <div class="services-text">
        <h1>Outdoor Kitchens</h1>
      <h3>Build an outdoor living space with a practical and budget-friendly outdoor kitchen tailored to your needs. Our team will work closely with you to create a functional cooking area that brings convenience and enjoyment to your outdoor gatherings. Utilizing affordable materials like durable appliances, easy-to-maintain countertops, and functional cabinetry, we'll ensure your outdoor kitchen is built to last. Enhance the atmosphere with subtle lighting and tasteful landscaping, creating a cozy ambiance for relaxed dining. From a simple grill and sink setup to smart storage solutions, we'll design an outdoor kitchen that maximizes functionality without compromising on quality. Get ready to savor the joys of outdoor cooking and dining with our affordable and customized outdoor kitchen solutions.</h3>
    </div>
    <div class="services-images">
      <img src={Kitchen} alt="kitchen" className="services-images" />
    </div>
  </div>

  <div class="services-sections-1">
    <div class="services-images">
      <img src={Fireplace} alt="accessories" className="services-images" />
    </div>
    <div class="services-text">
        <h1>Fireplace and Accessories</h1>
      <h3>Enhance your outdoor living experience with a range of carefully selected features and accessories that add both functionality and enjoyment to your space. Create a cozy and inviting atmosphere with a charming fireplace, perfect for gathering around with loved ones and creating lasting memories. Add a touch of excitement to your pool area with fun and versatile accessories like pool slides, offering a splash of adventure for everyone. Illuminate your pool with tasteful and energy-efficient pool lights, creating a soothing ambiance for evening swims. For those who love active play, consider adding a basketball hoop for friendly games and outdoor fun. At our company, we specialize in crafting custom outdoor solutions tailored to your specific needs and preferences. Let us help you transform your outdoor space into a welcoming haven that combines comfort, entertainment, and relaxation.</h3>
    </div>
  </div>
  <div class="services-sections-2">
    <div class="services-text">
        <h1>Safety</h1>
      <h3>At our company, we prioritize the safety and well-being of our clients and their families. We offer a range of reliable and affordable pool safety equipment to ensure a secure swimming environment for everyone. Our selection includes essential safety features such as pool covers, pool alarms, and pool fences that meet industry standards. These practical and effective measures provide peace of mind, giving you the confidence that your pool area is secure and protected. Our knowledgeable team is here to guide you in choosing the right safety equipment for your specific needs, ensuring that you can enjoy your pool with confidence and tranquility. Safety is our utmost priority, and we are committed to helping you create a safe and enjoyable swimming experience for all.</h3>
    </div>
    <div class="services-images">
      <img src={Safety} alt="lifeguard" className="services-images" />
    </div>
    </div>
  </div>
<NoWaveFooter />
        
</div>
      )
    }
      
export default PoolRemodel