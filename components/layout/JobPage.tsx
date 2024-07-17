import { useState } from "react";

const JobPage = () => {
  return (
    <div>
      <h2 className="font-[poppins] font-bold text-[#282538] text-2xl">
        Github <span className="font-[300] ">Jops</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-9 my-8">
        <div className="font-[poppins]">
          <div className="flex items-center gap-x-3 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#1E86FF">
              <path d="M354-270 144-480l210-210 51 51-123 123h534v72H282l123 123-51 51Z" />
            </svg>
            <button className="border-none text-[#1E86FF] text-sm  hover:underline font-[500]">Back to search</button>
          </div>
          <h3 className="uppercase text-[#B9BDCF] text-sm font-bold mt-7">How to apply</h3>
          <p className="mt-4 text-sm font-[500] text-[#334680]">Please email a copy of your resume and online portfolio to wes@kasisto.com & CC eric@kasisto.com</p>
        </div>
        <div className="font-[roboto] text-[#334680]">
          <div className="flex items-center gap-x-6">
            <h2 className="font-bold text-2xl ">Front-End Software Engineer</h2>
            <div className="rounded-[4px] py-1 px-2 border border-[#334680] w-max text-xs font-bold ">Full time</div>
          </div>
          <div className="text-[#B7BCCE] flex items-end gap-2 mt-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="18px"
              fill="#B7BCCE">
              <path d="m614-310 51-51-149-149v-210h-72v240l170 170ZM480-96q-79.38 0-149.19-30T208.5-208.5Q156-261 126-330.96t-30-149.5Q96-560 126-630q30-70 82.5-122t122.46-82q69.96-30 149.5-30t149.55 30.24q70 30.24 121.79 82.08 51.78 51.84 81.99 121.92Q864-559.68 864-480q0 79.38-30 149.19T752-208.5Q700-156 629.87-126T480-96Zm0-384Zm.48 312q129.47 0 220.5-91.5Q792-351 792-480.48q0-129.47-91.02-220.5Q609.95-792 480.48-792 351-792 259.5-700.98 168-609.95 168-480.48 168-351 259.5-259.5T480.48-168Z" />
            </svg>
            <p className="font-[500] text-xs">5 days ago</p>
          </div>
          <div className="flex gap-x-2 items-center my-8">
            <img
              src=""
              className="w-11 h-11 rounded-[4px] "
              alt=""
            />
            <div>
              <h4 className="font-bold text-lg">Kasisto</h4>
              <div className="text-[#B7BCCE] flex items-end gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 -960 960 960"
                  width="18px"
                  fill="#B7BCCE">
                  <path d="m614-310 51-51-149-149v-210h-72v240l170 170ZM480-96q-79.38 0-149.19-30T208.5-208.5Q156-261 126-330.96t-30-149.5Q96-560 126-630q30-70 82.5-122t122.46-82q69.96-30 149.5-30t149.55 30.24q70 30.24 121.79 82.08 51.78 51.84 81.99 121.92Q864-559.68 864-480q0 79.38-30 149.19T752-208.5Q700-156 629.87-126T480-96Zm0-384Zm.48 312q129.47 0 220.5-91.5Q792-351 792-480.48q0-129.47-91.02-220.5Q609.95-792 480.48-792 351-792 259.5-700.98 168-609.95 168-480.48 168-351 259.5-259.5T480.48-168Z" />
                </svg>
                <p className="font-[500] text-xs">New York</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-md whitespace-pre-wrap">{`Humanizing Digital Experiences®

Kasisto’s Digital Experience Platform, KAI, is designed for financial institutions to deliver the industry’s most amazing Conversational AI powered intelligent virtual assistants to their customers. KAI is open and extensible, and also fluent in the language of banking and finance. From simple retail transactions to the complex demands of corporate banks and wealth management, financial institutions can deliver meaningful digital interactions with KAI that help build their digital brand.

Financial institutions around the world use KAI, including DBS Bank, J.P. Morgan, Mastercard, Standard Chartered, TD Bank, and Manulife Bank among others. They chose KAI for its proven track record to drive business results while improving customer experiences. The platform is used by millions of consumers around the world, all the time, across multiple channels, in different languages, and is optimized for performance, scalability, security, and compliance.

This position

We are looking for a Full-Stack, client side software engineer to help build and integrate responsive chat interfaces, analytics dashboards and reporting tools.

What you’ll be doing

Working closely with clients and internal engineering, product and design teams to gather requirements Building and integrating front-end applications with CSS, HTML, Javascript, jQuery, Vue.js, Webpack, Handlebars.js, LESS, Backbone, Python, Django and Java Working to improve user experience and functionality for tools Writing testable code utilizing common front-end unit and BDD testing frameworks What you need for this position

3+ years in client-side web development with CSS, HTML, Javascript and jQuery Proven, full-stack front-end experience using Python and Django Other Modern Web Framework(s) experience is a plus (React, Vue, Angular, Ember) Experience working collaboratively to build scalable, modular, production software in an Agile environment Experience using RESTful json services Node.js and API development familiarity is plus D3.js is a plus

What we offer:

Competitive compensation package Ground floor opportunity within rapidly growing tech startup Great collaborative team environment Full Benefits Fun perks

Location - NYC, Flatiron District

We welcome your cover letter with a description of your previous complete experience and your resume. Applicants must be authorized to work in the US as we are unable to sponsor. Kasisto is an equal opportunity employer.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
