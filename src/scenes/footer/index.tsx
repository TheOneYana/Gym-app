import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Whether you're a beginner or a seasoned athlete, our personalized
            workouts, expert guidance, and community support are here to help
            you reach your fitness goals. Don't wait any longer—take the first
            step towards getting in shape today!
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Locations</p>
          <p className="my-5">Reviews</p>
          <p>Trainers</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">We are open 24/7</p>
          <p>(333) 425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
