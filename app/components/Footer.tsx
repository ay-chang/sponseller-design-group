const Footer = () => {
  return (
    <div className="bg-dark-grey text-white pt-16 pb-16 px-12">
      {/* Top Section */}
      <div className="flex justify-between">
        {/* Logo Section */}
        <div className="text-5xl font-bold">
          <p>SDG</p>
        </div>

        <div className="flex gap-8">
          {/* Contact Section */}
          <div className="text-left">
            <p className="text-lg font-medium mb-2">Get in touch</p>
            <p className="border border-white w-4 my-2"></p>
            <p className="text-lg">inquiries@sponsellerdesign.com</p>
            <p className="border border-white w-4 my-2"></p>
            <p className="text-lg">(202) 355 0305</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-24 pt-4">
        <div>
          <p className="text-sm text-gray-400">© Sponseller Design Group 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
