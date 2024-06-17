import { Link,useLocation } from "react-router-dom"
import Group11 from "../images/Group 11 1.png"

export default function Header() {
  const path = useLocation().pathname;
  return (
    <div className="flex p-20 justify-evenly ">
      <Link to='/' className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white pl-25">
      <img src={Group11} alt="logo" className="w-20 h-20 bg-black " />
      </Link>
      <div className=" flex gap-20 my-auto">
      <Link active={path === "/"} as={'div'}>
            <Link to='/'>HOME</Link>
          </Link>
          <Link active={path === "/gallery"} as={'div'}>
            <Link to='/gallery'>GALLERY</Link>
          </Link>
          <Link active={path === "/projects"} as={'div'}>
            <Link to='/projects'>PROJECTS</Link>
          </Link>
          <Link active={path === "/certificates"} as={'div'}>
            <Link to='certificates'>CERTIFICATIONS</Link>
          </Link>
          <Link active={path === "/contacts"} as={'div'}>
            <Link to='/contacts'>CONTACTS</Link>
          </Link>
      </div>
        
    </div>
  )
}