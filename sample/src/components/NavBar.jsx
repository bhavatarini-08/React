const NavBar = ({appname}) =>{
    console.log(appname)
    return(
        <>
    <div className="w-1/5 h-2/5 bg-purple-300  text-black ">

        {appname}
    </div>
    </>
    )
}
export default NavBar;