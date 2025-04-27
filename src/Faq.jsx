import React from "react";

const Faq = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Question 1: How do I contact you?</h2>
          <p>Answer: You can email us at <a className="text-red-500" href="mailto:csafrfv@cupofjo.com">naseeni@cupofjo.com</a>.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Question 2: How can I collaborate with you?</h2>
          <p>Answer: Please email <a className="text-red-500" href="mailto:maureen@cupofjo.com">maureen@cupofjo.com</a>  for partnership opportunities.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Question 2: How can I find you?</h2>
          <p>Answer: Find us at <a className="text-red-500" href="mailto:maureen@cupofjo.com">senkalib@cupofjo.com</a>  for opportunities.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
