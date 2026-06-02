import { NavLink } from "react-router-dom";
const NavBar = () => {
  
  return (
   

    <div className="flex items-center  bg-gray-400 gap-16 py-3 px-8">
      <img className="w-10"
        src="https://static.vecteezy.com/system/resources/thumbnails/067/050/873/small/store-3d-illustration-png.png"
        alt=""
      />
      <div className="text-2xl flex gap-7">
        <Menu to={'/home'} title={'Home'}/>
        <Menu to={'/product'} title={'Products'}/>
      </div>
    </div>
  );
};

const Menu =({to,title})=>{
return <NavLink className ={({isActive})=>isActive ? 'text-amber-600' : ''} to={to}>{title}</NavLink>;


}
export default NavBar;
