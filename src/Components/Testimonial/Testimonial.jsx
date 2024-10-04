import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { client, urlFor } from "../../client";
import "./Testimonial.css";
import AppWrap from "../../shared/HOC/AppWrap";
import MotionWrap from "../../shared/HOC/MotionWrap";

const Testimonial = () => {
  const { i18n } = useTranslation();
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const brandsQuery = '*[_type == "brands"]';
    const testimonialsQuery = '*[_type == "testimonials"]';
    client
      .fetch(brandsQuery)
      .then((data) => {
        setBrands(data);
      })
      .catch(() => {});
    client
      .fetch(testimonialsQuery)
      .then((data) => {
        setTestimonials(data);
      })
      .catch(() => {});
  }, []);
  const currentTestimonial = testimonials[currentIndex];
  const handlePreviousTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  const handleNextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <>
      {testimonials.length > 0 && (
        <>
          <div className="app__testimonial-item">
            <img src={urlFor(currentTestimonial?.imageurl)} alt="testimonial" />
            <div className="app__testimonial-content">
              <p className="p-text">
                {currentTestimonial?.feedback[i18n.resolvedLanguage]}
              </p>
              <div>
                <h4 className="bold-text">
                  {currentTestimonial.name[i18n.resolvedLanguage]}
                </h4>
                <h5 className="p-text">
                  {currentTestimonial.company[i18n.resolvedLanguage]}
                </h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={handlePreviousTestimonial}>
              <HiChevronLeft />
            </div>
            <div className="app__flex" onClick={handleNextTestimonial}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
