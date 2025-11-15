import mountainbg from "@/public/profile/mountainprofile.webp"
import Image from "next/image";

const profileheader = () => {
    return(
        <div className="">
         <Image
            src={mountainbg}
            alt="mountainbg"
            className="h-screen w-screen"
          />
        </div>
    );
};

export default profileheader;