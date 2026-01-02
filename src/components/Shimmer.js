const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {/* Shimmer Header */}
      <div className="shimmer-header">
        <div className="shimmer-logo"></div>
        <div className="shimmer-nav">
          <div className="shimmer-nav-item"></div>
          <div className="shimmer-nav-item"></div>
          <div className="shimmer-nav-item"></div>
          <div className="shimmer-nav-item"></div>
        </div>
      </div>

      {/* Shimmer Body */}
      <div className="shimmer-body">
        {/* Shimmer Search */}
        <div className="shimmer-search"></div>

        {/* Shimmer Restaurant Cards */}
        <div className="shimmer-list">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="shimmer-card">
                <div className="shimmer-card-image"></div>
                <div className="shimmer-card-title"></div>
                <div className="shimmer-card-cuisine"></div>
                <div className="shimmer-card-rating"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
