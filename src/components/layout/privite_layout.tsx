import Header from "../header";
import MainLoading from "../main_loading";
import Sidebar from "../sidebar";

export default function PriviteLayout({ children, }: Readonly<{children: React.ReactNode;}>) {
  return(
    <div className="flex min-h-screen relative">
      <Sidebar/>
      <div className="flex flex-col w-full overflow-hidden sticky top-0 bg-[#F5F6FA]">
        <Header/>
        <div className={`flex-1 p-3`}>
          <MainLoading />
          {children}
        </div>
      </div>
    </div>
  )
}