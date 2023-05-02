import Image from "next/image";

const Logo = () => {
  return (
    <>
      <a href="">
        <Image
          alt={"Logo"}
          width={100}
          height={100}
          src={
            "https://res.cloudinary.com/dhdqt4xwu/image/upload/v1681810001/homeowners/homeowner_logo_put_up-removebg-preview_1_rfs6p3.svg"
          }
        />
      </a>
    </>
  );
};
export default Logo;
