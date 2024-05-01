import Image from "next/image";
import paymentImg from "../../../public/payments.png";
import Link from "next/link";
const Footer = () => {
  return (
      <footer className="w-full bg-[#FBFBFB] text-black py-12  mt-14">
        <div className="container mx-auto px-4  mb-10 flex flex-col sm:flex-row gap-y-4 sm:gap-x-24 md:justify-around flex-wrap">
            <div className="flex   gap-8 sm:gap-x-24 md:gap-x-36 " >
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-black">Company Info</h4>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-gray-500 transition-colors" href="/about">
                  About us
                </Link>
              </li>

              <li>
                <Link className="hover:text-gray-500 transition-colors" href="/cart">
                  MyCart
                </Link>
              </li>

              <li>
                <Link className="hover:text-gray-500 transition-colors" href="/contact">
                  Contact us
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500 transition-colors" href="/shop">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-black">Help Links</h4>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-gray-500 transition-colors" href="/billing">
                  Billing
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500 transition-colors" href="/cart">
                  Order Status
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500 transition-colors" href="/cart">
                  Delivery
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500 transition-colors" href="/cart">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500 transition-colors" href="/about">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-black">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-gray-500 transition-colors" href="/shop">
                  Useful Links
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500 transition-colors" href="/">
                  Special Offer
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500 transition-colors" href="/about">
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500 transition-colors" href="/shop">
                  Advertising
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500 transition-colors" href="/about">
                  Terms of Use
                </Link>
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
              <Link className="hover:text-gray-500 transition-colors" href="/about">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link className="hover:text-gray-500 transition-colors" href="#">
              <Image src={paymentImg} height={"200"} width={"200"} className="object-cover" alt="Payment" />
            </Link>
          </div>
        </div>
      </footer>
  );
};

export default Footer;