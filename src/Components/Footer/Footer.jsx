import Image from "next/image";
import paymentImg from "../../../public/payments.png";

const Footer = () => {
  return (
      <footer className="w-full bg-[#FBFBFB] text-black py-12  mt-14">
        <div className="container mx-auto px-4  mb-10 flex flex-col sm:flex-row gap-y-4 sm:gap-x-24 md:justify-around flex-wrap">
            <div className="flex   gap-8 sm:gap-x-24 md:gap-x-36 " >
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-black">Company Info</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-gray-500 transition-colors" href="#">
                  About us
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500 transition-colors" href="#">
                  Latest Posts
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500 transition-colors" href="#">
                  Contact us
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500 transition-colors" href="#">
                  Shop
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-black">Help Links</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-gray-500 transition-colors" href="#">
                  Tracking
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500 transition-colors" href="#">
                  Order Status
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500 transition-colors" href="#">
                  Delivery
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500 transition-colors" href="#">
                  Shipping Info
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500 transition-colors" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-black">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-gray-500 transition-colors" href="#">
                  Useful Links
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500 transition-colors" href="#">
                  Special Offer
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500 transition-colors" href="#">
                  Gift Cards
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500 transition-colors" href="#">
                  Advertising
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500 transition-colors" href="#">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-black">
              GET IN THE KNOW
            </h4>
            <div className="flex items-center space-x-2">
              <input
                className="bg-[#FBFBFB] border-b-2 border-black text-gray-400 placeholder-gray-500 px-4 py-2 w-full"
                placeholder="Enter your email"
                type="email"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="container mx-auto px-4 mt-12 flex items-center flex-col sm:flex-row gap-y-4 justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-sm">© 2024 NorthStar eCommerce.</div>
            <br />
            <div>
              <a className="hover:text-gray-500 transition-colors" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a className="hover:text-gray-500 transition-colors" href="#">
              <Image src={paymentImg} height={"200"} width={"200"} className="object-cover" alt="Payment" />
            </a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;