import Image from "next/image";


export default function RoundedImage(props) {
    return <Image alt={props.alt} className="rounded-lg border" {...props} />;
  }