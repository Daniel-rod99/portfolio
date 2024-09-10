import ImgProfile from "../assets/danidevProfile.webp";

function ImageProfile() {
  return (
    <div className=" w-[250px] h-[250px] relative mt-20 m-auto // ">
      <img
        src={`${ImgProfile}`}
        alt="DaniDev"
        className="w-full h-full rounded-full border-4 border-[indigo] object-cover"
      />
    </div>
  );
}

export default ImageProfile;
