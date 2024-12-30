const News = () => {
  return (
    <div className="mx-12 pb-28">
      {/* Banner */}
      <div className="my-16 text-6xl w-3/4">
        <p>Stay updated with our latest projects and announcements.</p>
      </div>

      {/* News Section */}
      <div className="w-full flex gap-32">
        <div className="w-1/2">
          <h1 className="text-3xl font-semibold pb-8">
            Carroll Creek receives Historic Preservation Commission Approval
          </h1>
          <p className="text-lg">
            The Carroll Creek mixed use project located in historic Frederick Maryland has
            received Level I approval from the Historic Preservation Commission. The site is
            located in the Frederick Downtown Historic District and is an area designated on
            the National Register of Historic Places. Level I approval relates to issues of
            site location and orientation, form and height, and preliminary materials approval.
            Level II approval will be pursued after Site Plan review with the city of
            Frederick.
          </p>
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-semibold pb-8">
            Groundbreaking - International Headquarters in Virginia
          </h1>
          <p className="text-lg">
            Construction has begun on the adaptive reuse and expansion of an existing building
            to become a private company&apos;s international headquarters in Virginia. The
            project is highly sustainable and includes geothermal wells and rooftop solar
            panels as part of its on-site energy generation. Project completion is expected in
            2026.
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
