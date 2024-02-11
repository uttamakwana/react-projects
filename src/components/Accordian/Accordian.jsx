import { useRef, useState } from "react";
// data
import { faqs } from "./data";
// icons
import { DownIcon, UpIcon } from "../../constants/icons";
// css
import "./accordian.css";

const Accordian = () => {
  const [selected, setSelected] = useState([]);
  const checkRef = useRef(null);

  // handling toggle
  function handleToggle(faq) {
    const findFaq = selected.find((f) => f.id === faq.id);
    if (checkRef.current.checked) {
      if (findFaq) {
        const removeFaq = selected.filter((f) => f.id !== findFaq.id);
        setSelected(removeFaq);
      } else {
        setSelected((prev) => [...prev, faq]);
      }
    } else {
      const findFaq = selected.find((f) => f.id === faq.id);
      console.log(findFaq);
      if (findFaq) {
        setSelected([]);
      } else {
        setSelected([faq]);
      }
    }
  }

  // handle open
  function isOpen(selected, faq) {
    return selected.some((f) => f.id === faq.id);
  }

  // return the component
  return (
    <section className="accordian-section">
      <h1 className="heading text-center mb-1">Frequently Asked Questions!</h1>
      <div className="accordian-feature">
        <input type="checkbox" name="feature" id="feature" ref={checkRef} />
        <label htmlFor="feature">Multi Select</label>
      </div>
      {faqs && faqs.length > 0 && (
        <div className="accordian-parent">
          {faqs.map((faq) => (
            <div key={faq.id} className="accordian-child mt-1 br-5">
              <div
                className="accordian-question flex-between text-2 gap-4"
                onClick={() => handleToggle(faq)}
              >
                <p className="question">{faq.question}</p>
                {isOpen(selected, faq) ? <UpIcon /> : <DownIcon />}
              </div>
              {isOpen(selected, faq) ? (
                <p
                  className="accordian-answer text-1"
                  onClick={() => handleToggle(faq)}
                >
                  {faq.answer}
                </p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Accordian;
