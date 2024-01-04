const Hero = () => {
  return (
    <div
    // style={{ position: "relative" }}
    >
      <div
        aria-label="The Fearless Eater hero section"
        className="heroSectionBG"
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(assets/heroImage.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // maxWidth: "100%",
          // height: "208px",
          // marginTop: "-70px",
          // fontSize: "50px",
          // overflow: false,
          // margin: 0,
          // padding: 0,
          // boxSizing: "border-box",
        }}
      />
      <div
        className="heroSectionText"
        style={{
          color: "#ffffff",
          position: "absolute",
          bottom: "0px",
          left: "64px",
        }}
      >
        <h1>The Fearless Eater</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default Hero;
