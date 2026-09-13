import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/Instagram.png";
import X from "../../assets/fi_5968958.png";

const Footer = () => {
  return (
    <footer className="bg-[#101727] pt-15 sm:pt-20 md:pt-30 pb-8 px-4">
      <div className="footer sm:footer-horizontal  text-base-100/80  container mx-auto max-w-300 ">
        <aside className="max-w-87.5">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-base-200">
            DigiTools
          </h3>
          <p className="mt-4 leading-loose">
            Premium digital tools for creators, <br /> professionals, and
            businesses. Work smarter with our suite of powerful tools.
          </p>
        </aside>
        <nav>
          <h6 className="text-lg text-base-200 md:mb-4">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="text-lg text-base-200 md:mb-4">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="text-lg text-base-200 md:mb-4">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="text-lg text-base-200 md:mb-4">Social Links</h6>
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 rounded-full bg-base-100 p-2.5 cursor-pointer">
              <img
                className="w-full h-auto object-contain"
                src={Instagram}
                alt=""
              />
            </div>
            <div className="w-10 h-10 rounded-full bg-base-100 p-2.5 cursor-pointer">
              <img
                className="w-full h-auto object-contain"
                src={Facebook}
                alt=""
              />
            </div>
            <div className="w-10 h-10 rounded-full bg-base-100 p-2.5 cursor-pointer">
              <img className="w-full h-auto object-contain" src={X} alt="" />
            </div>
          </div>
        </nav>
      </div>
      <div className="container max-w-300 mx-auto mt-12 sm:mt-15 md:mt-20 pt-6 md:pt-8 text-base-200/60 border-base-300/20 border-t">
        <div className="flex sm:flex-row sm:items-center flex-col-reverse gap-4">
          <p className="flex-1">© 2026 Digitools. All rights reserved.</p>
          <div className="flex flex-col sm:items-center sm:flex-row gap-4">
            <p>Privacy Policy</p>
            <p>Terms of Service </p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
