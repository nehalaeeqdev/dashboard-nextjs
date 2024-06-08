import DashboardCard from "@/components/Dashboard/dashboardCards"
import { Folders, MessageCircle, Newspaper, User } from "lucide-react"
import PostsTable from "@/components/posts/postTable"


export default function Home()
{
  return  <>
    <div className="flex flex-col md:flex-row justify-between gap-5">
      <DashboardCard
      title="Posts"
      count={100}
      icon={<Newspaper className="text-slate-500" size={62} />}
       />
      <DashboardCard
      title="Categories"
      count={12}
      icon={<Folders className="text-slate-500" size={62} />}
       />
      <DashboardCard
      title="Users"
      count={750}
      icon={<User className="text-slate-500" size={62} />}
       />
      <DashboardCard
      title="Comments"
      count={1200}
      icon={<MessageCircle className="text-slate-500" size={62} />}
       />
    </div>
    <PostsTable title="Latest Posts" />

    
    </>
}