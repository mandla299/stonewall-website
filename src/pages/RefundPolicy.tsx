import React from 'react';

const RefundPolicy = () => {
  return (
    <section className="bg-white text-[#1e1b4b] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-center">
          Refund Policy
        </h1>
        <p className="text-lg text-center mb-12 text-[#332E81]">
          We believe in clarity, fairness, and accountability. Here’s how we handle refunds for our services.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-2">Eligibility for Refunds</h2>
            <p className="text-[#332E81] text-sm">
              Refunds are available if a deliverable does not meet the agreed scope, quality standards, or timeline. You must notify us within 7 days of delivery to initiate a review.
            </p>
          </div>

          <div>
                <h2 className="text-xl font-bold mb-2">Revision Before Refund</h2>
                <p className="text-[#332E81] text-sm">
                    In many cases, we offer a complimentary revision before initiating a refund. This allows us to correct any issues and deliver a result that meets your expectations. If the revision still falls short, a refund will be considered.
                </p>
                </div>


          <div>
            <h2 className="text-xl font-bold mb-2">Partial vs Full Refunds</h2>
            <p className="text-[#332E81] text-sm">
              Depending on the nature of the issue, we may offer a partial refund, a full refund, or a revision at no extra cost. We assess each case individually to ensure fairness.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Scope Clarification & Agreement</h2>
            <p className="text-[#332E81] text-sm">
                Before starting any project, we define the scope, deliverables, and timeline in writing. Refunds are evaluated based on this agreement. We encourage clients to review and confirm scope details to avoid misunderstandings.
            </p>
            </div>


          <div>
            <h2 className="text-xl font-bold mb-2">Non-Refundable Scenarios</h2>
            <ul className="list-disc list-inside text-sm text-[#332E81]">
              <li>Change of mind after work has begun</li>
              <li>Delays caused by incomplete client input or feedback</li>
              <li>Requests outside the original scope without prior agreement</li>
            </ul>
          </div>

          <div>
                <h2 className="text-xl font-bold mb-2">Dispute Resolution</h2>
                <p className="text-[#332E81] text-sm">
                    If a refund request is disputed, we offer a structured resolution process involving a senior reviewer. Our goal is to resolve concerns fairly, transparently, and with mutual respect.
                </p>
                </div>

                <div>
                <h2 className="text-xl font-bold mb-2">Refunds for Subscription Plans</h2>
                <p className="text-[#332E81] text-sm">
                    Monthly subscriptions can be canceled anytime. Refunds are not issued for partial months unless a service failure occurs. Annual plans may be eligible for prorated refunds based on usage.
                </p>
                </div>



          <div>
            <h2 className="text-xl font-bold mb-2">Client Responsibilities</h2>
            <p className="text-[#332E81] text-sm">
                Timely feedback, complete input materials, and clear communication are essential for successful delivery. Refunds may be impacted if delays or errors result from missing or unclear client input.
            </p>
            </div>


          <div>
            <h2 className="text-xl font-bold mb-2">How to Request a Refund</h2>
            <p className="text-[#332E81] text-sm">
              Email <a href="mailto:mandla@swdatasolutions.com" className="text-[#ff7200] font-semibold">support@stonewalldata.com</a> with your project ID, issue summary, and preferred resolution. Our team will respond within 2 business days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Refund Timeline</h2>
            <p className="text-[#332E81] text-sm">
              Approved refunds are processed within 5–10 business days via your original payment method.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
