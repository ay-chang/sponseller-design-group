"use client";

import { useState } from "react";

const Inquiries = () => {
    const [isJobModalOpen, setIsJobModalOpen] = useState(false);

    const handleApplyClick = () => {
        setIsJobModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsJobModalOpen(false);
    };

    const handleEmailClick = () => {
        window.location.href = "mailto:inquiries@sponsellerdesign.com";
    };

    return (
        <div className="mx-4 sm:mx-24 2xl:mx-24 py-24">
            {/* Top Section */}
            <div className="w-full flex flex-col sm:flex-row text-md font-semibold pb-24 gap-8">
                <div className="w-full sm:w-1/2">
                    <p className="pb-6">Inquiries</p>
                    <p className="underline break-words">inquiries@sponsellerdesign.com</p>
                </div>
                <div className="w-full sm:w-1/2">
                    <p className="pb-6">Phone</p>
                    <p className="underline">(202) 355-0305</p>
                </div>
            </div>

            {/* Job Opportunities */}
            <div>
                <div className="pb-16">
                    <h1 className="text-2xl sm:text-3xl font-semibold">Job Openings</h1>
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-16 ">
                    {/* Description Column */}
                    <div className="w-full lg:w-1/2 text-md">
                        <p className="pb-16">
                            We are a new and growing boutique architecture firm with a
                            personalized approach and commitment to design excellence. Our work
                            includes a diverse range of projects, from multi-family residential
                            and master-planning projects to office conversions and commercial
                            interiors. We pride ourselves on fostering a collaborative and
                            creative work environment where every team member&apos;s ideas are
                            valued.
                        </p>
                    </div>

                    {/* Job Listing Button Column */}
                    <div className="w-full lg:w-1/2 text-md flex items-start">
                        <button
                            type="button"
                            className="underline cursor-pointer text-left text-lg sm:text-xl font-semibold hover:opacity-80 focus:outline-none"
                            onClick={handleApplyClick}
                        >
                            Senior Designer/Architect
                        </button>
                    </div>
                </div>
            </div>

            {/* Job Posting Modal */}
            {isJobModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
                    <div className="bg-white max-h-[90vh] w-full max-w-3xl overflow-y-auto p-6 sm:p-10 rounded-md shadow-xl relative">
                        <button
                            type="button"
                            className="absolute top-4 right-4 text-sm underline cursor-pointer"
                            onClick={handleCloseModal}
                        >
                            Close
                        </button>

                        <h2 className="text-2xl sm:text-3xl font-semibold pb-4">
                            Role: Senior Designer/Architect
                        </h2>

                        <h3 className="underline font-semibold text-lg sm:text-xl pb-2">
                            Job Description
                        </h3>
                        <p className="pb-6">
                            We are seeking a talented and motivated Senior Designer/Architect
                            with 15–20 years of experience to join our team. As a boutique
                            design group, we offer the opportunity to contribute meaningfully
                            to the evolution of the firm and play a key role in shaping our
                            design culture and project outcomes. The ideal candidate is
                            passionate about innovative design, brings a strong balance of
                            design and technical skills, and is comfortable managing multiple
                            projects simultaneously. This role offers the chance to work on a
                            wide range of project types, including multifamily, master
                            planning, commercial, and interiors.
                        </p>

                        <h3 className="underline font-semibold text-lg sm:text-xl pb-2">
                            Key Responsibilities
                        </h3>
                        <ul className="list-disc list-inside pb-6 space-y-1">
                            <li>
                                Collaborate with design team on concept and design development.
                            </li>
                            <li>
                                Oversee the integration of building systems and technical
                                requirements into the design.
                            </li>
                            <li>
                                Ensure compliance with zoning, building codes, accessibility
                                standards, and other regulatory requirements.
                            </li>
                            <li>
                                Produce detailed architectural plans, diagrams, and
                                illustrations.
                            </li>
                            <li>Lead client meetings and presentations.</li>
                            <li>
                                Represent the firm in coordination meetings with consultants,
                                contractors, and permitting agencies.
                            </li>
                        </ul>

                        <h3 className="underline font-semibold text-lg sm:text-xl pb-2">
                            Qualifications
                        </h3>
                        <ul className="list-disc list-inside pb-6 space-y-1">
                            <li>Bachelor&apos;s or Master&apos;s degree in Architecture.</li>
                            <li>
                                15 to 20 years of professional experience in an architectural
                                firm working on multifamily and commercial projects.
                            </li>
                            <li>
                                Fluency with Autodesk Revit, Adobe InDesign, Adobe Photoshop,
                                MS Office, and SketchUp; proficiency with Enscape is a plus.
                            </li>
                            <li>Excellent communication and presentation skills.</li>
                            <li>Ability to work both independently and as part of a team.</li>
                        </ul>

                        <h3 className="underline font-semibold text-lg sm:text-xl pb-2">
                            What We Offer
                        </h3>
                        <ul className="list-disc list-inside pb-6 space-y-1">
                            <li>Competitive salary based on experience level.</li>
                            <li>Opportunities for professional growth and development.</li>
                            <li>A creative and collaborative work environment.</li>
                            <li>
                                The chance to work on a variety of exciting and challenging
                                projects.
                            </li>
                        </ul>

                        <p className="pb-6">
                            We are committed to creating a diverse and inclusive workplace and
                            encourage applicants from all backgrounds to apply. Please send
                            your resume, portfolio, and a cover letter explaining why you would
                            be a great fit for our team to inquiries@sponsellerdesign.com. We
                            look forward to reviewing your application!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                            <button
                                type="button"
                                className="underline cursor-pointer text-left"
                                onClick={handleEmailClick}
                            >
                                Send us your resume here
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Inquiries;
