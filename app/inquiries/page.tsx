"use client";

const Inquiries = () => {
  return (
    <div className="mx-12 py-24">
      {/* Top Section */}
      <div className="w-full flex text-xl font-semibold pb-24">
        <div className="w-1/2">
          <p className="pb-6">Inquiries</p>
          <p className="underline">inquiries@sponsellerdesign.com</p>
        </div>
        <div className="w-1/2">
          <p className="pb-6">Phone</p>
          <p className="underline">(202) 355-0305</p>
        </div>
      </div>

      {/* Job Opportunities */}
      <div>
        <div className="pb-24">
          <h1 className="text-5xl font-semibold">Job Openings</h1>
        </div>

        <div className="w-full">
          <div className="w-1/2 pb-16 text-xl">
            <p className="">
              We are a new and growing boutique architecture firm with a personalized approach
              and commitment to design excellence. Our work includes a diverse range of
              projects, from multi-family residential and master-planning projects to office
              conversions and commercial interiors. We pride ourselves on fostering a
              collaborative and creative work environment where every team member&apos;s ideas
              are valued.
            </p>
          </div>

          {/* Job Description */}
          <div className="w-full flex gap-32 text-lg">
            <div className="w-1/2"></div>
            <div className="w-1/2">
              <h1 className="underline font-semibold text-xl pb-2">Job Description </h1>
              <p className="pb-8">
                We are seeking a talented and motivated Project Designer to join our team. The
                ideal candidate will have a passion for innovative design, a keen eye for
                detail, and the ability to handle working on multiple projects simultaneously.
                This role offers the unique opportunity to work directly with senior principals
                and clients through all phases of the design process.
              </p>

              <h1 className="underline font-semibold text-xl pb-2">Key Responsibilities </h1>
              <div className="pb-8">
                <li>Collaborate with principal architects on design development.</li>
                <li>Produce detailed architectural plans, diagrams, and illustrations.</li>
                <li>
                  Coordinate with consultants, contractors, and clients to ensure project
                  success.
                </li>
              </div>

              <h1 className="underline font-semibold text-xl pb-2">Qualifications </h1>
              <div className="pb-8">
                <li>Bachelor&apos;s or Master&apos;s degree in Architecture.</li>
                <li>3 to 7 years of professional experience in an architectural firm.</li>
                <li>Sketchup, Adobe Suite, and Enscape.</li>
                <li>
                  Fluency with AutoCAD, Revit, Excellent communication and presentation skills.
                </li>
                <li> Ability to work both independently and as part of a team.</li>
              </div>

              <h1 className="underline font-semibold text-xl pb-2">What We Offer </h1>
              <div className="pb-8">
                <li>Competitive salary based on experience level.</li>
                <li>Opportunities for professional growth and development.</li>
                <li>A creative and collaborative work environment.</li>
                <li>The chance to work on a variety of exciting and challenging projects.</li>
              </div>

              <p className="pb-8">
                We are committed to creating a diverse and inclusive workplace and encourage
                applicants from all backgrounds to apply.
              </p>

              <p className="pb-16">
                Please send your resume, portfolio, and a cover letter explaining why you would
                be a great fit for our team to inquiries@sponsellerdesign.com or click the
                button below. We look forward to reviewing your application!
              </p>

              <p
                className="underline cursor-pointer"
                onClick={() =>
                  (window.location.href = `mailto:inquiries@sponsellerdesign.com`)
                }
              >
                Send us your resume here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiries;
