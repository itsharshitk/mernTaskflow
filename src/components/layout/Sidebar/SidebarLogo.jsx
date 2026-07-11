export default function SidebarLogo({collapsed}) {
    return(
        <div className="">
            {collapsed ? (<span>TF</span>) : (<h2 className="text-xl font-bold">TaskFlow</h2>)}
        </div>
    )
}