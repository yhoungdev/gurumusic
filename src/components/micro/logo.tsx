import Image from "next/image";

const Logo = () => {
  return (
    <>
      <a href="">
        <Image
          alt={"Logo"}
          width={50}
          height={50}
          src={
            "https://res.cloudinary.com/dhdqt4xwu/image/upload/v1683017716/gurumusic/photo_5947344122643855584_y-removebg-preview_gb5in1.png"
          }
        />
      </a>
    </>
  );
};
export default Logo;
