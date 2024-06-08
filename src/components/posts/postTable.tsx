import { Table , TableBody,TableCell,TableHead,TableHeader,TableRow, TableCaption} from "../ui/table"
import Link from "next/link"
import posts from "../../../data/posts"
import { Post } from "../../../types/post"

interface PostsTableProps
{
    limit? : number
    title? : string

}

const PostsTable = ({limit,title} : PostsTableProps) =>
    {
        return <div className="mt-10">
        <h3 className="text-3xl font-semibold"> 
            {title ? title : "Posts"}
        </h3>
        <Table>
            <TableCaption>
                A list of recent Posts
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:table-cell">Author</TableHead>
                    <TableHead className="hidden md:table-cell text-right">Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {posts.map(( post ) => {
                    <TableRow key={post.id}>
                        <TableCell>{post.title}</TableCell>
                        <TableCell>{post.author}</TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
        </div>
    }

export default PostsTable