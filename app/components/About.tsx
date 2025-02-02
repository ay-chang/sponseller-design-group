const About = () => {
  return (
    <div className="mx-36 2xl:mx-96 mt-36 mb-36 xl:mb-64">
      {/* Top Section */}
      <div className="mb-8">
        <p className="text-sm 2xl:text-md uppercase text-gray-500 tracking-wide">
          • Urban Design & Development Specialists
        </p>
      </div>

      {/* Title Section */}
      <div className="mb-12 w-1/2">
        <h1 className="text-3xl 2xl:text-4xl font-bold leading-tight">
          We find innovative and unexpected solutions to site and programmatic challenges for
          our clients. We thrive on the unexpected solution in a value based process.
        </h1>
      </div>

      {/* Bottom Section */}
      <div className="flex items-start">
        <div className="border w-16 border-gray-300"></div>
        {/* Supporting Text */}
        <p className="text-lg 2xl:text-2xl text-gray-500 leading-relaxed w-2/3 ml-96">
          We provide a high level of principal involvement in every phase of the project and
          believe in the power of strong conceptual thinking to carry projects through all
          phases of development. We value an interactive, collaborative design process with
          clients and team members.
        </p>
      </div>
    </div>
  );
};

export default About;
