const Footer = () => {
  return (
    <div className="bg-dark-grey text-white pt-16 pb-16 px-4 sm:px-24 2xl:px-24">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-0">
        {/* Logo Section */}
        <div className="text-3xl sm:text-5xl font-bold text-center sm:text-left">
          <p>Sponseller Design Group</p>
        </div>

        {/* Contact Section */}
        <div className="text-center sm:text-left">
          <p className="text-lg font-medium mb-2 mt-8 sm:mt-0">Get in touch</p>
          <p className="border border-white w-4 mx-auto sm:mx-0 my-2"></p>
          <p className="text-lg">inquiries@sponsellerdesign.com</p>
          <p className="border border-white w-4 mx-auto sm:mx-0 my-2"></p>
          <p className="text-lg">(202) 355 0305</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-center sm:justify-between items-center mt-24 pt-4">
        <p className="text-sm text-gray-400 text-center sm:text-left">
          © Sponseller Design Group 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
