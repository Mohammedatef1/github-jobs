import Context from "@/context/Context";
import { useContext } from "react";

const Footer = () => {
  const ctx = useContext(Context);
  return (
    <div>
      <h3 className="font-[roboto] text-sm text-[#B9BDCF] mt-6 text-center">
        created by{" "}
        <a
          className="font-[500]"
          href="https://github.com/Mohammedatef1"
          target="blank">
          mohammedatef1
        </a>{" "}
        - devChallenges.io
      </h3>
    </div>
  );
};

export default Footer;
